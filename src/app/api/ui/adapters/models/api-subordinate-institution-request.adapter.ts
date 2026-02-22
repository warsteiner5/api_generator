import { SubordinateInstitutionRequestAlt } from '../../models/subordinate-institution-request-alt.interface';
import { ApiSubordinateInstitutionRequestAltDto } from '../../../swagger/models/api-subordinate-institution-request';

export const apiSubordinateInstitutionRequestAltDtoAdapter = (source?: SubordinateInstitutionRequestAlt | null): ApiSubordinateInstitutionRequestAltDto => {
  return {
    SubordinateOrganizationId: source?.subordinateOrganizationId,
  };
}
