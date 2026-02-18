import { ManufactureTypeEnum } from '../enums/manufacture-type.enum';

export interface Country {
  code: string;
  fullName: string;
  manufacturerType: ManufactureTypeEnum;
  name: string;
}
