import { ApiMarketJsonResultOfFavoriteCountInfoDto } from '../../../swagger/models/api-market-json-result-of-favorite-count-info-dto';
import { MarketJsonResultOfFavoriteCountInfo } from '../../models/market-json-result-of-favorite-count-info.interface';

export function adaptMarketJsonResultOfFavoriteCountInfoToUI(source?: ApiMarketJsonResultOfFavoriteCountInfoDto | null): MarketJsonResultOfFavoriteCountInfo {
  return (source ?? {}) as MarketJsonResultOfFavoriteCountInfo;
}
