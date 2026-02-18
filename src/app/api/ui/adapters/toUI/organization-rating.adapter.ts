import { ApiOrganizationRatingDto } from '../../../swagger/models/api-organization-rating-dto';
import { OrganizationRating } from '../../models/organization-rating.interface';

export function adaptOrganizationRatingToUI(source?: ApiOrganizationRatingDto | null): OrganizationRating {
  return {
    sourceOrganizationId: source?.SourceOrganizationId ?? 0,
    targetOrganizationId: source?.TargetOrganizationId ?? 0,
  };
}
