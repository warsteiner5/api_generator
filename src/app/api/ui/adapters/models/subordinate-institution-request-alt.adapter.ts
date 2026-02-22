import { ApiSubordinateInstitutionRequestAltDto } from '../../../swagger/models/api-subordinate-institution-request';
import { SubordinateInstitutionRequestAlt } from '../../models/subordinate-institution-request-alt.interface';

export const subordinateInstitutionRequestAltAdapter = (source?: ApiSubordinateInstitutionRequestAltDto | null): SubordinateInstitutionRequestAlt => {
  return {
    subordinateOrganizationId: source?.SubordinateOrganizationId,
  };
}
