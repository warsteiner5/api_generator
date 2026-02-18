import { FieldTypeAltEnum } from '../../enums/field-type-alt.enum';
import { ApiFieldTypeAltEnum } from '../../../swagger/models/api-field-type';

export function adaptApiFieldTypeAltEnum(source?: FieldTypeAltEnum | null): ApiFieldTypeAltEnum {
  switch (source) {
    case FieldTypeAltEnum.String:
      return ApiFieldTypeAltEnum.String;
    case FieldTypeAltEnum.Integer:
      return ApiFieldTypeAltEnum.Integer;
    case FieldTypeAltEnum.Decimal:
      return ApiFieldTypeAltEnum.Decimal;
    case FieldTypeAltEnum.Boolean:
      return ApiFieldTypeAltEnum.Boolean;
    case FieldTypeAltEnum.DateTime:
      return ApiFieldTypeAltEnum.DateTime;
    case FieldTypeAltEnum.Long:
      return ApiFieldTypeAltEnum.Long;
    default:
      throw new Error(`Enum value is not defined: FieldTypeAltEnum=${String(source)}`);
  }
}
