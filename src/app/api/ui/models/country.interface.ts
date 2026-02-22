import { ManufactureTypeEnum } from '../enums/manufacture-type.enum';

// @ts-ignore
export interface Country {
  code: string;
  fullName: string;
  manufacturerType: ManufactureTypeEnum;
  name: string;
}
