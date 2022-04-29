import { FormType } from "../types/FormType";
import { ResponseError, ResponseFormResult } from "./ResponsesInterface";

export interface ServiceInterface {
  create(obj: FormType): Promise<ResponseFormResult | ResponseError>
}