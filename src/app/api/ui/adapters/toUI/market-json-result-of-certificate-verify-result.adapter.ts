import { ApiMarketJsonResultOfCertificateVerifyResult } from '../../../swagger/models/api-market-json-result-of-certificate-verify-result';
import { MarketJsonResultOfCertificateVerifyResult } from '../../models/market-json-result-of-certificate-verify-result.interface';

export function adaptMarketJsonResultOfCertificateVerifyResultToUI(source?: ApiMarketJsonResultOfCertificateVerifyResult | null): MarketJsonResultOfCertificateVerifyResult {
  return (source ?? {}) as MarketJsonResultOfCertificateVerifyResult;
}
