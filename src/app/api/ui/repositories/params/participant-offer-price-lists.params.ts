import { ParticipantOfferPriceLists$Params } from '../../../swagger/fn/participant-offer/participant-offer-price-lists';
import { PriceListFilter } from '../../models/price-list-filter.interface';
import { adaptApiPriceListFilterDto } from '../../adapters/toDto/api-price-list-filter-dto.adapter';

export interface ParticipantOfferPriceListsParams {
  body?: PriceListFilter;
}

export const participantOfferPriceListsParamsAdapter = {
  adapt(params?: ParticipantOfferPriceListsParams): ParticipantOfferPriceLists$Params {
    if (!params) {
      return {} as ParticipantOfferPriceLists$Params;
    }
    return {
      body: adaptApiPriceListFilterDto(params.body),
    };
  }
};
