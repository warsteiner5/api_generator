import { ApiFavoriteCountInfoDto } from '../../../swagger/models/api-favorite-count-info-dto';
import { FavoriteCountInfo } from '../../models/favorite-count-info.interface';

export function adaptFavoriteCountInfoToUI(source?: ApiFavoriteCountInfoDto | null): FavoriteCountInfo {
  return {
    offerCount: source?.OfferCount ?? 0,
    orderCount: source?.OrderCount ?? 0,
    organizationCount: source?.OrganizationCount ?? 0,
  };
}
