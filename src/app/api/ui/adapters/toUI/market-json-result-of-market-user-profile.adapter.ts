import { ApiMarketJsonResultOfMarketUserProfileDto } from '../../../swagger/models/api-market-json-result-of-market-user-profile-dto';
import { MarketJsonResultOfMarketUserProfile } from '../../models/market-json-result-of-market-user-profile.interface';

export function adaptMarketJsonResultOfMarketUserProfileToUI(source?: ApiMarketJsonResultOfMarketUserProfileDto | null): MarketJsonResultOfMarketUserProfile {
  return (source ?? {}) as MarketJsonResultOfMarketUserProfile;
}
