import { MarketJsonResultOfListOfFederalLaw } from '../../models/market-json-result-of-list-of-federal-law.interface';
import { ApiMarketJsonResultOfListOfFederalLawDto } from '../../../swagger/models/api-market-json-result-of-list-of-federal-law-dto';

export function adaptApiMarketJsonResultOfListOfFederalLawDto(source?: MarketJsonResultOfListOfFederalLaw | null): ApiMarketJsonResultOfListOfFederalLawDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfFederalLawDto;
}
