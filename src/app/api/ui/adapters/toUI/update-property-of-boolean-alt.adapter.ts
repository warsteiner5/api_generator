import { ApiUpdatePropertyOfBooleanAltDto } from '../../../swagger/models/api-update-property-of-boolean';
import { UpdatePropertyOfBooleanAlt } from '../../models/update-property-of-boolean-alt.interface';

export function adaptUpdatePropertyOfBooleanAltToUI(source?: ApiUpdatePropertyOfBooleanAltDto | null): UpdatePropertyOfBooleanAlt {
  return {
    needUpdate: source?.NeedUpdate ?? false,
    value: source?.Value ?? false,
  };
}
