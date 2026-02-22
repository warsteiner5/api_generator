import { RequirementRequestOfferPricesInfo } from '../../models/requirement-request-offer-prices-info.interface';
import { ApiRequirementRequestOfferPricesInfoDto } from '../../../swagger/models/api-requirement-request-offer-prices-info-dto';

export const apiRequirementRequestOfferPricesInfoDtoAdapter = (source?: RequirementRequestOfferPricesInfo | null): ApiRequirementRequestOfferPricesInfoDto => {
  return {
    PriceAverage: source?.priceAverage,
    PriceMax: source?.priceMax,
    PriceMin: source?.priceMin,
  };
}
