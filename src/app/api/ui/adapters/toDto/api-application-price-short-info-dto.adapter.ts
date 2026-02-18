import { ApplicationPriceShortInfo } from '../../models/application-price-short-info.interface';
import { ApiApplicationPriceShortInfoDto } from '../../../swagger/models/api-application-price-short-info-dto';

export function adaptApiApplicationPriceShortInfoDto(source?: ApplicationPriceShortInfo | null): ApiApplicationPriceShortInfoDto {
  return {
    IsQuotationWithVat: source?.isQuotationWithVat,
    Price: source?.price,
    SumVat: source?.sumVat,
    TaxPercent: source?.taxPercent,
  };
}
