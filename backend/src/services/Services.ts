import { ResponseError, ResponseFormResult } from "../interface/ResponsesInterface";
import { ServiceInterface } from "../interface/ServiceInterface";
import Model from "../models/Model";
import { FormType } from "../types/FormType";

class Service implements ServiceInterface {
  constructor(public model = new Model()){}

  create = async (obj: FormType): Promise<ResponseError | ResponseFormResult> => {
    const response = await this.model.create(obj);
    return { status: 200, response };
  }
}

export default Service;