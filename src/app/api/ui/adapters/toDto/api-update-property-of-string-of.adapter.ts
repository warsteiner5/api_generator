import { UpdatePropertyOfStringOf } from '../../models/update-property-of-string-of.interface';
import { ApiUpdatePropertyOfStringOf } from '../../../swagger/models/api-update-property-of-string-of';

export function adaptApiUpdatePropertyOfStringOf(source?: UpdatePropertyOfStringOf | null): ApiUpdatePropertyOfStringOf {
  return {
    NeedUpdate: source?.needUpdate,
    Value: source?.value ?? [],
  };
}
