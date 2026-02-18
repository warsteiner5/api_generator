import { ApiMarketJsonResultOfListOfOfferStatesDto } from '../../../swagger/models/api-market-json-result-of-list-of-offer-states-dto';
import { MarketJsonResultOfListOfOfferStates } from '../../models/market-json-result-of-list-of-offer-states.interface';

export function adaptMarketJsonResultOfListOfOfferStatesToUI(source?: ApiMarketJsonResultOfListOfOfferStatesDto | null): MarketJsonResultOfListOfOfferStates {
  return (source ?? {}) as MarketJsonResultOfListOfOfferStates;
}
