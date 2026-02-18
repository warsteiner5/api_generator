import { MarketJsonResultOfListOfOfferStates } from '../../models/market-json-result-of-list-of-offer-states.interface';
import { ApiMarketJsonResultOfListOfOfferStatesDto } from '../../../swagger/models/api-market-json-result-of-list-of-offer-states-dto';

export function adaptApiMarketJsonResultOfListOfOfferStatesDto(source?: MarketJsonResultOfListOfOfferStates | null): ApiMarketJsonResultOfListOfOfferStatesDto {
  return (source ?? {}) as ApiMarketJsonResultOfListOfOfferStatesDto;
}
