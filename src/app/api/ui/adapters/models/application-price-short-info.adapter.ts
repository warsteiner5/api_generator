import { ApiApplicationPriceShortInfoDto } from '../../../swagger/models/api-application-price-short-info-dto';
import { ApplicationPriceShortInfo } from '../../models/application-price-short-info.interface';

export const applicationPriceShortInfoAdapter = (source?: ApiApplicationPriceShortInfoDto | null): ApplicationPriceShortInfo => {
  return {
    isQuotationWithVat: source?.IsQuotationWithVat,
    price: source?.Price,
    sumVat: source?.SumVat,
    taxPercent: source?.TaxPercent,
  };
}
