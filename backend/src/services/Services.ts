import { ResponseError, ResponseFormResult } from "../interface/ResponsesInterface";
import { ServiceInterface } from "../interface/ServiceInterface";
import Model from "../models/Model";
import { FormType } from "../types/FormType";

class Service implements ServiceInterface {
  constructor(public model = new Model()){}

  create = async (obj: FormType): Promise<ResponseError | ResponseFormResult> => {
    const response = await this.model.create(obj);
    if (response === null) {
      return { status: 500, response: { error: 'Internal Server Error'}}
    }
    return { status: 200, response };
  }
}

export default Service;