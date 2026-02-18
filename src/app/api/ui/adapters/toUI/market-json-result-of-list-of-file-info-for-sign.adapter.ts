import { ApiMarketJsonResultOfListOfFileInfoForSignDto } from '../../../swagger/models/api-market-json-result-of-list-of-file-info-for-sign-dto';
import { MarketJsonResultOfListOfFileInfoForSign } from '../../models/market-json-result-of-list-of-file-info-for-sign.interface';

export function adaptMarketJsonResultOfListOfFileInfoForSignToUI(source?: ApiMarketJsonResultOfListOfFileInfoForSignDto | null): MarketJsonResultOfListOfFileInfoForSign {
  return (source ?? {}) as MarketJsonResultOfListOfFileInfoForSign;
}
