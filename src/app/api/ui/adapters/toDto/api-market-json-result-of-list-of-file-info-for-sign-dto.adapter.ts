import { MarketJsonResultOfListOfFileInfoForSign } from '../../models/market-json-result-of-list-of-file-info-for-sign.interface';
import { ApiMarketJsonResultOfListOfFileInfoForSignDto } from '../../../swagger/models/api-market-json-result-of-list-of-file-info-for-sign-dto';

export function adaptApiMarketJsonResultOfListOfFileInfoForSignDto(source?: MarketJsonResultOfListOfFileInfoForSign | null): ApiMarketJsonResultOfListOfFileInfoForSignDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfFileInfoForSignDto;
}
