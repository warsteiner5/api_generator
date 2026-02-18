import { ApiMarketJsonResultOfCertificateViewModelDto } from '../../../swagger/models/api-market-json-result-of-certificate-view-model-dto';
import { MarketJsonResultOfCertificateViewModel } from '../../models/market-json-result-of-certificate-view-model.interface';

export function adaptMarketJsonResultOfCertificateViewModelToUI(source?: ApiMarketJsonResultOfCertificateViewModelDto | null): MarketJsonResultOfCertificateViewModel {
  return (source ?? {}) as MarketJsonResultOfCertificateViewModel;
}
