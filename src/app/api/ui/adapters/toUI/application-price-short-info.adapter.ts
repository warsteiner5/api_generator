import { ApiApplicationPriceShortInfoDto } from '../../../swagger/models/api-application-price-short-info-dto';
import { ApplicationPriceShortInfo } from '../../models/application-price-short-info.interface';

export function adaptApplicationPriceShortInfoToUI(source?: ApiApplicationPriceShortInfoDto | null): ApplicationPriceShortInfo {
  return {
    isQuotationWithVat: source?.IsQuotationWithVat ?? false,
    price: source?.Price ?? 0,
    sumVat: source?.SumVat ?? 0,
    taxPercent: source?.TaxPercent ?? 0,
  };
}
