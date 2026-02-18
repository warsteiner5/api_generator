import { ApiMarketJsonResultOfIndustryDtoOf } from '../../../swagger/models/api-market-json-result-of-industry-dto-of';
import { MarketJsonResultOfIndustryDtoOf } from '../../models/market-json-result-of-industry-dto-of.interface';

export function adaptMarketJsonResultOfIndustryDtoOfToUI(source?: ApiMarketJsonResultOfIndustryDtoOf | null): MarketJsonResultOfIndustryDtoOf {
  return (source ?? {}) as MarketJsonResultOfIndustryDtoOf;
}
