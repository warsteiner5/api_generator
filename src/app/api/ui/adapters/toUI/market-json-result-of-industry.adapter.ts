import { ApiMarketJsonResultOfIndustryDto } from '../../../swagger/models/api-market-json-result-of-industry-dto';
import { MarketJsonResultOfIndustry } from '../../models/market-json-result-of-industry.interface';

export function adaptMarketJsonResultOfIndustryToUI(source?: ApiMarketJsonResultOfIndustryDto | null): MarketJsonResultOfIndustry {
  return (source ?? {}) as MarketJsonResultOfIndustry;
}
