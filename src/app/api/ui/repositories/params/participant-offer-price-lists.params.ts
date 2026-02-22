import { ParticipantOfferPriceLists$Params } from '../../../swagger/fn/participant-offer/participant-offer-price-lists';
import { PriceListFilter } from '../../models/price-list-filter.interface';
import { apiPriceListFilterDtoAdapter } from '../../adapters/models/api-price-list-filter-dto.adapter';

// @ts-ignore
export interface ParticipantOfferPriceListsParams {
  body?: PriceListFilter;
}

export function participantOfferPriceListsAdapter(params?: ParticipantOfferPriceListsParams): ParticipantOfferPriceLists$Params {
  if (!params) {
    return {} as ParticipantOfferPriceLists$Params;
  }
  return {
      body: apiPriceListFilterDtoAdapter(params.body),
  };
}
