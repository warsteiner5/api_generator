import { MarketJsonResultOfFavoriteCountInfo } from '../../models/market-json-result-of-favorite-count-info.interface';
import { ApiMarketJsonResultOfFavoriteCountInfoDto } from '../../../swagger/models/api-market-json-result-of-favorite-count-info-dto';

export function adaptApiMarketJsonResultOfFavoriteCountInfoDto(source?: MarketJsonResultOfFavoriteCountInfo | null): ApiMarketJsonResultOfFavoriteCountInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfFavoriteCountInfoDto;
}
