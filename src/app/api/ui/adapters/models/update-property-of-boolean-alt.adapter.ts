import { ApiUpdatePropertyOfBooleanAltDto } from '../../../swagger/models/api-update-property-of-boolean';
import { UpdatePropertyOfBooleanAlt } from '../../models/update-property-of-boolean-alt.interface';

export const updatePropertyOfBooleanAltAdapter = (source?: ApiUpdatePropertyOfBooleanAltDto | null): UpdatePropertyOfBooleanAlt => {
  return {
    needUpdate: source?.NeedUpdate,
    value: source?.Value,
  };
}
