import { MarketJsonResultOfIndustry } from '../../models/market-json-result-of-industry.interface';
import { ApiMarketJsonResultOfIndustryDto } from '../../../swagger/models/api-market-json-result-of-industry-dto';

export function adaptApiMarketJsonResultOfIndustryDto(source?: MarketJsonResultOfIndustry | null): ApiMarketJsonResultOfIndustryDto {
  return (source ?? {}) as ApiMarketJsonResultOfIndustryDto;
}
