import { ApiUpdatePropertyOfStringOfAltDto } from '../../../swagger/models/api-update-property-of-string-of';
import { UpdatePropertyOfStringOfAlt } from '../../models/update-property-of-string-of-alt.interface';

export function adaptUpdatePropertyOfStringOfAltToUI(source?: ApiUpdatePropertyOfStringOfAltDto | null): UpdatePropertyOfStringOfAlt {
  return {
    needUpdate: source?.NeedUpdate ?? false,
    value: source?.Value ?? [],
  };
}
