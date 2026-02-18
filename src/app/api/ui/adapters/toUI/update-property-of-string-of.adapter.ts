import { ApiUpdatePropertyOfStringOf } from '../../../swagger/models/api-update-property-of-string-of';
import { UpdatePropertyOfStringOf } from '../../models/update-property-of-string-of.interface';

export function adaptUpdatePropertyOfStringOfToUI(source?: ApiUpdatePropertyOfStringOf | null): UpdatePropertyOfStringOf {
  return {
    needUpdate: source?.NeedUpdate ?? false,
    value: source?.Value ?? [],
  };
}
