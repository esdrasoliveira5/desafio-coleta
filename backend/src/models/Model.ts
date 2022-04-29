import { ModelInterface } from "../interface/ModelInterface";
import fs from 'fs';
import * as path from 'path';

import { FormResultType, FormType } from "../types/FormType";


class Model implements ModelInterface {
  create = async (obj: FormType): Promise<FormResultType | null> => {
    try {
      const newJSON = JSON.stringify(obj);
      fs.writeFileSync(path.resolve('./src/db/formsData.json'), newJSON);
      
      const rawdata = fs.readFileSync(path.resolve('./src/db/formsData.json'), 'utf8');
      const data = JSON.parse(rawdata);
      return data as FormResultType;
    } catch (error) {
      console.log(error);
      return null
    }
  }
};

export default Model;