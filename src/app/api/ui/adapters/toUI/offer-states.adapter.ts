import { ApiOfferStatesDto } from '../../../swagger/models/api-offer-states-dto';
import { OfferStates } from '../../models/offer-states.interface';
import { adaptOfferStateEnumDtoAltEnumToUI } from './offer-state-enum-dto-alt-enum.adapter';

export function adaptOfferStatesToUI(source?: ApiOfferStatesDto | null): OfferStates {
  return {
    count: source?.Count ?? 0,
    state: adaptOfferStateEnumDtoAltEnumToUI(source?.State),
  };
}
