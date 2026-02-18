import { ApiRequirementRequestOfferPricesInfoDto } from '../../../swagger/models/api-requirement-request-offer-prices-info-dto';
import { RequirementRequestOfferPricesInfo } from '../../models/requirement-request-offer-prices-info.interface';

export function adaptRequirementRequestOfferPricesInfoToUI(source?: ApiRequirementRequestOfferPricesInfoDto | null): RequirementRequestOfferPricesInfo {
  return {
    priceAverage: source?.PriceAverage ?? 0,
    priceMax: source?.PriceMax ?? 0,
    priceMin: source?.PriceMin ?? 0,
  };
}
