import { ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto } from '../../../swagger/models/api-market-json-result-of-requirement-request-offer-prices-info-dto';
import { MarketJsonResultOfRequirementRequestOfferPricesInfo } from '../../models/market-json-result-of-requirement-request-offer-prices-info.interface';

export function adaptMarketJsonResultOfRequirementRequestOfferPricesInfoToUI(source?: ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto | null): MarketJsonResultOfRequirementRequestOfferPricesInfo {
  return (source ?? {}) as MarketJsonResultOfRequirementRequestOfferPricesInfo;
}
