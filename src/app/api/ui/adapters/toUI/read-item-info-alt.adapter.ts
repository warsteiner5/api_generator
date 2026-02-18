import { ApiReadItemInfoAltDto } from '../../../swagger/models/api-read-item-info';
import { ReadItemInfoAlt } from '../../models/read-item-info-alt.interface';

export function adaptReadItemInfoAltToUI(source?: ApiReadItemInfoAltDto | null): ReadItemInfoAlt {
  return {
    firstName: source?.FirstName ?? '',
    lastName: source?.LastName ?? '',
    middleName: source?.MiddleName ?? '',
    organizationId: source?.OrganizationId ?? 0,
    organizationName: source?.OrganizationName ?? '',
  };
}
