import { FavoriteCountInfo } from '../../models/favorite-count-info.interface';
import { ApiFavoriteCountInfoDto } from '../../../swagger/models/api-favorite-count-info-dto';

export function adaptApiFavoriteCountInfoDto(source?: FavoriteCountInfo | null): ApiFavoriteCountInfoDto {
  return {
    OfferCount: source?.offerCount,
    OrderCount: source?.orderCount,
    OrganizationCount: source?.organizationCount,
  };
}
