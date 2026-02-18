import { MarketJsonResultOfRequirementRequestOfferPricesInfo } from '../../models/market-json-result-of-requirement-request-offer-prices-info.interface';
import { ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto } from '../../../swagger/models/api-market-json-result-of-requirement-request-offer-prices-info-dto';

export function adaptApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto(source?: MarketJsonResultOfRequirementRequestOfferPricesInfo | null): ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto {
  return (source ?? {}) as ApiMarketJsonResultOfRequirementRequestOfferPricesInfoDto;
}
