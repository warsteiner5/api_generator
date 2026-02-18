import { MarketJsonResultOfCertificateVerifyResult } from '../../models/market-json-result-of-certificate-verify-result.interface';
import { ApiMarketJsonResultOfCertificateVerifyResult } from '../../../swagger/models/api-market-json-result-of-certificate-verify-result';

export function adaptApiMarketJsonResultOfCertificateVerifyResult(source?: MarketJsonResultOfCertificateVerifyResult | null): ApiMarketJsonResultOfCertificateVerifyResult {
  return (source ?? {}) as ApiMarketJsonResultOfCertificateVerifyResult;
}
