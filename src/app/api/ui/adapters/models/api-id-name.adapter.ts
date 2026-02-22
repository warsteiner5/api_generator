import { IdNameAlt } from '../../models/id-name-alt.interface';
import { ApiIdNameAltDto } from '../../../swagger/models/api-id-name';

export const apiIdNameAltDtoAdapter = (source?: IdNameAlt | null): ApiIdNameAltDto => {
  return {
    Id: source?.id,
    OrganizationName: source?.organizationName,
  };
}
