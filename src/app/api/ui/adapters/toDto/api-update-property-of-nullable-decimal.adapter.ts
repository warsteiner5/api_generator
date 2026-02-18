import { UpdatePropertyOfNullableDecimalAlt } from '../../models/update-property-of-nullable-decimal-alt.interface';
import { ApiUpdatePropertyOfNullableDecimalAltDto } from '../../../swagger/models/api-update-property-of-nullable-decimal';

export function adaptApiUpdatePropertyOfNullableDecimalAltDto(source?: UpdatePropertyOfNullableDecimalAlt | null): ApiUpdatePropertyOfNullableDecimalAltDto {
  return {
    NeedUpdate: source?.needUpdate,
    Value: source?.value,
  };
}
