import { MarketJsonResultOfListOfIndustry } from '../../models/market-json-result-of-list-of-industry.interface';
import { ApiMarketJsonResultOfListOfIndustryDto } from '../../../swagger/models/api-market-json-result-of-list-of-industry-dto';

export function adaptApiMarketJsonResultOfListOfIndustryDto(source?: MarketJsonResultOfListOfIndustry | null): ApiMarketJsonResultOfListOfIndustryDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfIndustryDto;
}
