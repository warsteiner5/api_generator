import { ApiMarketJsonResultOfFileInfoForSignDto } from '../../../swagger/models/api-market-json-result-of-file-info-for-sign-dto';
import { MarketJsonResultOfFileInfoForSign } from '../../models/market-json-result-of-file-info-for-sign.interface';

export function adaptMarketJsonResultOfFileInfoForSignToUI(source?: ApiMarketJsonResultOfFileInfoForSignDto | null): MarketJsonResultOfFileInfoForSign {
  return (source ?? {}) as MarketJsonResultOfFileInfoForSign;
}
