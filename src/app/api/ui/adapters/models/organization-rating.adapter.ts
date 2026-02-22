import { ApiOrganizationRatingDto } from '../../../swagger/models/api-organization-rating-dto';
import { OrganizationRating } from '../../models/organization-rating.interface';

export const organizationRatingAdapter = (source?: ApiOrganizationRatingDto | null): OrganizationRating => {
  return {
    sourceOrganizationId: source?.SourceOrganizationId,
    targetOrganizationId: source?.TargetOrganizationId,
  };
}
