import { ApiMarketJsonResultOfListOfFederalLawDto } from '../../../swagger/models/api-market-json-result-of-list-of-federal-law-dto';
import { MarketJsonResultOfListOfFederalLaw } from '../../models/market-json-result-of-list-of-federal-law.interface';

export function adaptMarketJsonResultOfListOfFederalLawToUI(source?: ApiMarketJsonResultOfListOfFederalLawDto | null): MarketJsonResultOfListOfFederalLaw {
  return (source ?? {}) as MarketJsonResultOfListOfFederalLaw;
}
