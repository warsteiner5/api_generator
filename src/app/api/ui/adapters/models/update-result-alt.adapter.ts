import { ApiUpdateResultAltDto } from '../../../swagger/models/api-update-result';
import { UpdateResultAlt } from '../../models/update-result-alt.interface';

export const updateResultAltAdapter = (source?: ApiUpdateResultAltDto | null): UpdateResultAlt => {
  return {
    ignored: source?.Ignored,
    updated: source?.Updated,
  };
}
