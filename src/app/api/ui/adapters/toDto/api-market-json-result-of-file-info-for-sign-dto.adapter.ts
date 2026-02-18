import { MarketJsonResultOfFileInfoForSign } from '../../models/market-json-result-of-file-info-for-sign.interface';
import { ApiMarketJsonResultOfFileInfoForSignDto } from '../../../swagger/models/api-market-json-result-of-file-info-for-sign-dto';

export function adaptApiMarketJsonResultOfFileInfoForSignDto(source?: MarketJsonResultOfFileInfoForSign | null): ApiMarketJsonResultOfFileInfoForSignDto {
  return (source ?? {}) as ApiMarketJsonResultOfFileInfoForSignDto;
}
