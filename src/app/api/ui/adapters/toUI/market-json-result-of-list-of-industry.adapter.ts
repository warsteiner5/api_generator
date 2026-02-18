import { ApiMarketJsonResultOfListOfIndustryDto } from '../../../swagger/models/api-market-json-result-of-list-of-industry-dto';
import { MarketJsonResultOfListOfIndustry } from '../../models/market-json-result-of-list-of-industry.interface';

export function adaptMarketJsonResultOfListOfIndustryToUI(source?: ApiMarketJsonResultOfListOfIndustryDto | null): MarketJsonResultOfListOfIndustry {
  return (source ?? {}) as MarketJsonResultOfListOfIndustry;
}
