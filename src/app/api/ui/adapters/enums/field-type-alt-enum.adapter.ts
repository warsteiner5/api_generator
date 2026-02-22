import { ApiFieldTypeAltEnum } from '../../../swagger/models/api-field-type';
import { FieldTypeAltEnum } from '../../enums/field-type-alt.enum';

export const fieldTypeAltEnumAdapter = (source?: ApiFieldTypeAltEnum | null): FieldTypeAltEnum => {
  switch (source) {
    case ApiFieldTypeAltEnum.String:
      return FieldTypeAltEnum.String;
    case ApiFieldTypeAltEnum.Integer:
      return FieldTypeAltEnum.Integer;
    case ApiFieldTypeAltEnum.Decimal:
      return FieldTypeAltEnum.Decimal;
    case ApiFieldTypeAltEnum.Boolean:
      return FieldTypeAltEnum.Boolean;
    case ApiFieldTypeAltEnum.DateTime:
      return FieldTypeAltEnum.DateTime;
    case ApiFieldTypeAltEnum.Long:
      return FieldTypeAltEnum.Long;
    default:
      throw new Error(`Enum value is not defined: ApiFieldTypeAltEnum=${String(source)}`);
  }
}
