import { OrganizationRating } from '../../models/organization-rating.interface';
import { ApiOrganizationRatingDto } from '../../../swagger/models/api-organization-rating-dto';

export const apiOrganizationRatingDtoAdapter = (source?: OrganizationRating | null): ApiOrganizationRatingDto => {
  return {
    SourceOrganizationId: source?.sourceOrganizationId,
    TargetOrganizationId: source?.targetOrganizationId,
  };
}
