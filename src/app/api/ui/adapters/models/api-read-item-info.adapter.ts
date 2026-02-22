import { ReadItemInfoAlt } from '../../models/read-item-info-alt.interface';
import { ApiReadItemInfoAltDto } from '../../../swagger/models/api-read-item-info';

export const apiReadItemInfoAltDtoAdapter = (source?: ReadItemInfoAlt | null): ApiReadItemInfoAltDto => {
  return {
    FirstName: source?.firstName,
    LastName: source?.lastName,
    MiddleName: source?.middleName,
    OrganizationId: source?.organizationId,
    OrganizationName: source?.organizationName,
  };
}
