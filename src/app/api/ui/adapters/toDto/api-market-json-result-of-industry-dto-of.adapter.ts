import { MarketJsonResultOfIndustryDtoOf } from '../../models/market-json-result-of-industry-dto-of.interface';
import { ApiMarketJsonResultOfIndustryDtoOf } from '../../../swagger/models/api-market-json-result-of-industry-dto-of';

export function adaptApiMarketJsonResultOfIndustryDtoOf(source?: MarketJsonResultOfIndustryDtoOf | null): ApiMarketJsonResultOfIndustryDtoOf {
  return (source ?? {}) as ApiMarketJsonResultOfIndustryDtoOf;
}
