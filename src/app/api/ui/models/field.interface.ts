import { FieldTypeAltEnum } from '../enums/field-type-alt.enum';

// @ts-ignore
export interface Field {
  descriptionValue: any;
  name: string;
  shortName: string;
  title: string;
  type: FieldTypeAltEnum;
  value: any;
}
