import { ModelInterface } from "../interface/ModelInterface";
import fs from 'fs';
import * as path from 'path';

import { FormResultType, FormType } from "../types/FormType";


class Model implements ModelInterface {

  create = async (obj: FormType): Promise<FormResultType> => {
    const rawdata = fs.readFileSync(path.resolve('formsData.json'), 'utf8');
    const data = JSON.parse(rawdata);
    
    return data as FormResultType;
  }
};

export default Model;