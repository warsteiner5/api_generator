import { MarketJsonResultOfCertificateViewModel } from '../../models/market-json-result-of-certificate-view-model.interface';
import { ApiMarketJsonResultOfCertificateViewModelDto } from '../../../swagger/models/api-market-json-result-of-certificate-view-model-dto';

export function adaptApiMarketJsonResultOfCertificateViewModelDto(source?: MarketJsonResultOfCertificateViewModel | null): ApiMarketJsonResultOfCertificateViewModelDto {
  return (source ?? {}) as ApiMarketJsonResultOfCertificateViewModelDto;
}
