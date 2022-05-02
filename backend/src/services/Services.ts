import FormResult from '../helpers/FormResult';
import {
  ResponseError,
  ResponseFormResult,
} from '../interface/ResponsesInterface';
import { ServiceInterface } from '../interface/ServiceInterface';
import Model from '../models/Model';
import { FormType } from '../types/FormType';
import Validation from '../validations/Validation';

class Service implements ServiceInterface {
  private validation = new Validation();

  private formResult = new FormResult();

  constructor(public model = new Model()) { }

  create = async (obj: FormType):
  Promise<ResponseError | ResponseFormResult> => {
    const valid = this.validation.form(obj);
    if (valid !== true) {
      return { status: 400, response: valid };
    }
    
    const result = this.formResult.result(obj);

    const response = await this.model.create({ ...obj, ...result });
    if (response === null) {
      return { status: 500, response: { error: 'Internal Server Error' } };
    }
    return { status: 200, response };
  };
}

export default Service;