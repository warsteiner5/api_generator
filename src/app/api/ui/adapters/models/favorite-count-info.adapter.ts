import { ApiFavoriteCountInfoDto } from '../../../swagger/models/api-favorite-count-info-dto';
import { FavoriteCountInfo } from '../../models/favorite-count-info.interface';

export const favoriteCountInfoAdapter = (source?: ApiFavoriteCountInfoDto | null): FavoriteCountInfo => {
  return {
    offerCount: source?.OfferCount,
    orderCount: source?.OrderCount,
    organizationCount: source?.OrganizationCount,
  };
}
