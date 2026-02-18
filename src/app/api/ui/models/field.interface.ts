import { FieldTypeAltEnum } from '../enums/field-type-alt.enum';

export interface Field {
  descriptionValue: any;
  name: string;
  shortName: string;
  title: string;
  type: FieldTypeAltEnum;
  value: any;
}
