import { ApiUpdatePropertyOfStringAltDto } from '../../../swagger/models/api-update-property-of-string';
import { UpdatePropertyOfStringAlt } from '../../models/update-property-of-string-alt.interface';

export const updatePropertyOfStringAltAdapter = (source?: ApiUpdatePropertyOfStringAltDto | null): UpdatePropertyOfStringAlt => {
  return {
    needUpdate: source?.NeedUpdate,
    value: source?.Value,
  };
}
