import { ApiUpdateResultAltDto } from '../../../swagger/models/api-update-result';
import { UpdateResultAlt } from '../../models/update-result-alt.interface';

export function adaptUpdateResultAltToUI(source?: ApiUpdateResultAltDto | null): UpdateResultAlt {
  return {
    ignored: source?.Ignored ?? 0,
    updated: source?.Updated ?? 0,
  };
}
