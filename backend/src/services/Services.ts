import { ResponseError, ResponseFormResult } from "../interface/ResponsesInterface";
import { ServiceInterface } from "../interface/ServiceInterface";
import Model from "../models/Model";
import { FormType } from "../types/FormType";
import Validation from "../validations/Validation";

class Service implements ServiceInterface {

  private validation = new Validation();

  constructor(public model = new Model()){}

  create = async (obj: FormType): Promise<ResponseError | ResponseFormResult> => {
    if (!this.validation.form(obj)) {
      return { status: 400, response: { error:  'Bad Request' }};
    }
    const response = await this.model.create(obj);
    if (response === null) {
      return { status: 500, response: { error: 'Internal Server Error'}}
    }
    return { status: 200, response };
  }
}

export default Service;