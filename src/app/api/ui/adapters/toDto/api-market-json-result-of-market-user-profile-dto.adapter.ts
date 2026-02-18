import { MarketJsonResultOfMarketUserProfile } from '../../models/market-json-result-of-market-user-profile.interface';
import { ApiMarketJsonResultOfMarketUserProfileDto } from '../../../swagger/models/api-market-json-result-of-market-user-profile-dto';

export function adaptApiMarketJsonResultOfMarketUserProfileDto(source?: MarketJsonResultOfMarketUserProfile | null): ApiMarketJsonResultOfMarketUserProfileDto {
  return (source ?? {}) as ApiMarketJsonResultOfMarketUserProfileDto;
}
