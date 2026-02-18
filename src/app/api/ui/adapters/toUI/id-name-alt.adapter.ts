import { ApiIdNameAltDto } from '../../../swagger/models/api-id-name';
import { IdNameAlt } from '../../models/id-name-alt.interface';

export function adaptIdNameAltToUI(source?: ApiIdNameAltDto | null): IdNameAlt {
  return {
    id: source?.Id ?? 0,
    organizationName: source?.OrganizationName ?? '',
  };
}
