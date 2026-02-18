import { ApiUpdatePropertyOfNullableDecimalAltDto } from '../../../swagger/models/api-update-property-of-nullable-decimal';
import { UpdatePropertyOfNullableDecimalAlt } from '../../models/update-property-of-nullable-decimal-alt.interface';

export function adaptUpdatePropertyOfNullableDecimalAltToUI(source?: ApiUpdatePropertyOfNullableDecimalAltDto | null): UpdatePropertyOfNullableDecimalAlt {
  return {
    needUpdate: source?.NeedUpdate ?? false,
    value: source?.Value ?? 0,
  };
}
