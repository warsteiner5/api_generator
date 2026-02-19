import { ApiOfferStatesDto } from '../../../swagger/models/api-offer-states-dto';
import { OfferStates } from '../../models/offer-states.interface';
import { adaptOfferStateEnumToUI } from './offer-state-enum.adapter';

export function adaptOfferStatesToUI(source?: ApiOfferStatesDto | null): OfferStates {
  return {
    count: source?.Count ?? 0,
    state: adaptOfferStateEnumToUI(source?.State),
  };
}
