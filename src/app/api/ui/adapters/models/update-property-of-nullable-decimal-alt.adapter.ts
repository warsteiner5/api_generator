import { ApiUpdatePropertyOfNullableDecimalAltDto } from '../../../swagger/models/api-update-property-of-nullable-decimal';
import { UpdatePropertyOfNullableDecimalAlt } from '../../models/update-property-of-nullable-decimal-alt.interface';

export const updatePropertyOfNullableDecimalAltAdapter = (source?: ApiUpdatePropertyOfNullableDecimalAltDto | null): UpdatePropertyOfNullableDecimalAlt => {
  return {
    needUpdate: source?.NeedUpdate,
    value: source?.Value,
  };
}
