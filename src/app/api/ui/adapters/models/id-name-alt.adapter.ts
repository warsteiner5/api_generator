import { ApiIdNameAltDto } from '../../../swagger/models/api-id-name';
import { IdNameAlt } from '../../models/id-name-alt.interface';

export const idNameAltAdapter = (source?: ApiIdNameAltDto | null): IdNameAlt => {
  return {
    id: source?.Id,
    organizationName: source?.OrganizationName,
  };
}
