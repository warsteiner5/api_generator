import { ApiRequirementRequestOfferPricesInfoDto } from '../../../swagger/models/api-requirement-request-offer-prices-info-dto';
import { RequirementRequestOfferPricesInfo } from '../../models/requirement-request-offer-prices-info.interface';

export const requirementRequestOfferPricesInfoAdapter = (source?: ApiRequirementRequestOfferPricesInfoDto | null): RequirementRequestOfferPricesInfo => {
  return {
    priceAverage: source?.PriceAverage,
    priceMax: source?.PriceMax,
    priceMin: source?.PriceMin,
  };
}
