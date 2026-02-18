import { MarketJsonResultOfDealHashToSign } from '../../models/market-json-result-of-deal-hash-to-sign.interface';
import { ApiMarketJsonResultOfDealHashToSignDto } from '../../../swagger/models/api-market-json-result-of-deal-hash-to-sign-dto';

export function adaptApiMarketJsonResultOfDealHashToSignDto(source?: MarketJsonResultOfDealHashToSign | null): ApiMarketJsonResultOfDealHashToSignDto {
  return (source ?? {}) as ApiMarketJsonResultOfDealHashToSignDto;
}
