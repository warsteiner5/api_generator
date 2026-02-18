import { MarketJsonResultOfParsedCertificate } from '../../models/market-json-result-of-parsed-certificate.interface';
import { ApiMarketJsonResultOfParsedCertificateDto } from '../../../swagger/models/api-market-json-result-of-parsed-certificate-dto';

export function adaptApiMarketJsonResultOfParsedCertificateDto(source?: MarketJsonResultOfParsedCertificate | null): ApiMarketJsonResultOfParsedCertificateDto {
  return (source ?? {}) as ApiMarketJsonResultOfParsedCertificateDto;
}
