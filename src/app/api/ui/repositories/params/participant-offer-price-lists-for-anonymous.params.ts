import { ParticipantOfferPriceListsForAnonymous$Params } from '../../../swagger/fn/participant-offer/participant-offer-price-lists-for-anonymous';
import { PriceListForAnonymousFilter } from '../../models/price-list-for-anonymous-filter.interface';
import { adaptApiPriceListForAnonymousFilterDto } from '../../adapters/toDto/api-price-list-for-anonymous-filter-dto.adapter';

export interface ParticipantOfferPriceListsForAnonymousParams {
  body?: PriceListForAnonymousFilter;
}

export const participantOfferPriceListsForAnonymousParamsAdapter = {
  adapt(params?: ParticipantOfferPriceListsForAnonymousParams): ParticipantOfferPriceListsForAnonymous$Params {
    if (!params) {
      return {} as ParticipantOfferPriceListsForAnonymous$Params;
    }
    return {
      body: adaptApiPriceListForAnonymousFilterDto(params.body),
    };
  }
};
