import { ParticipantOfferPriceListsForAnonymous$Params } from '../../../swagger/fn/participant-offer/participant-offer-price-lists-for-anonymous';
import { PriceListForAnonymousFilter } from '../../models/price-list-for-anonymous-filter.interface';
import { apiPriceListForAnonymousFilterDtoAdapter } from '../../adapters/models/api-price-list-for-anonymous-filter-dto.adapter';

// @ts-ignore
export interface ParticipantOfferPriceListsForAnonymousParams {
  body?: PriceListForAnonymousFilter;
}

export function participantOfferPriceListsForAnonymousAdapter(params?: ParticipantOfferPriceListsForAnonymousParams): ParticipantOfferPriceListsForAnonymous$Params {
  if (!params) {
    return {} as ParticipantOfferPriceListsForAnonymous$Params;
  }
  return {
      body: apiPriceListForAnonymousFilterDtoAdapter(params.body),
  };
}
