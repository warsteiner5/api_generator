import { ApiUpdatePropertyOfStringOfAltDto } from '../../../swagger/models/api-update-property-of-string-of';
import { UpdatePropertyOfStringOfAlt } from '../../models/update-property-of-string-of-alt.interface';

export const updatePropertyOfStringOfAltAdapter = (source?: ApiUpdatePropertyOfStringOfAltDto | null): UpdatePropertyOfStringOfAlt => {
  return {
    needUpdate: source?.NeedUpdate,
    value: source?.Value,
  };
}
