import { FormResultType, FormType } from "../types/FormType";

export interface ModelInterface {
  create(obj: FormType): Promise<FormResultType | null>
}