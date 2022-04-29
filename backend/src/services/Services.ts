import { ResponseError, ResponseFormResult } from "../interface/ResponsesInterface";
import { ServiceInterface } from "../interface/ServiceInterface";
import { FormType } from "../types/FormType";

class Service implements ServiceInterface {
  constructor(public model = Model()){}

  create = async (obj: FormType): Promise<ResponseError | ResponseFormResult> => {
    const response = this.model.create(obj);
    return { status: 200, response };
  }
}