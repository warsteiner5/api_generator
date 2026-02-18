import { ApiChangeStateOffersModelAltDto } from '../../../swagger/models/api-change-state-offers-model';
import { ChangeStateOffersModelAlt } from '../../models/change-state-offers-model-alt.interface';
import { adaptParticipantOfferStateEnumToUI } from './participant-offer-state-enum.adapter';

export function adaptChangeStateOffersModelAltToUI(source?: ApiChangeStateOffersModelAltDto | null): ChangeStateOffersModelAlt {
  return {
    offerId: source?.OfferId ?? 0,
    offerState: adaptParticipantOfferStateEnumToUI(source?.OfferState),
  };
}
