import { ApiMarketJsonResultOfParsedCertificateDto } from '../../../swagger/models/api-market-json-result-of-parsed-certificate-dto';
import { MarketJsonResultOfParsedCertificate } from '../../models/market-json-result-of-parsed-certificate.interface';

export function adaptMarketJsonResultOfParsedCertificateToUI(source?: ApiMarketJsonResultOfParsedCertificateDto | null): MarketJsonResultOfParsedCertificate {
  return (source ?? {}) as MarketJsonResultOfParsedCertificate;
}
