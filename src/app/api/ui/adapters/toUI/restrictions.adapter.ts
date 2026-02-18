import { ApiRestrictionsDto } from '../../../swagger/models/api-restrictions-dto';
import { Restrictions } from '../../models/restrictions.interface';

export function adaptRestrictionsToUI(source?: ApiRestrictionsDto | null): Restrictions {
  return {
    hiddenProperties: source?.HiddenProperties ?? [],
    readOnlyProperties: source?.ReadOnlyProperties ?? [],
  };
}
