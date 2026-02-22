import { ApiChangeStateOffersModelAltDto } from '../../../swagger/models/api-change-state-offers-model';
import { ChangeStateOffersModelAlt } from '../../models/change-state-offers-model-alt.interface';
import { participantOfferStateEnumAdapter } from '../enums/participant-offer-state-enum.adapter';

export const changeStateOffersModelAltAdapter = (source?: ApiChangeStateOffersModelAltDto | null): ChangeStateOffersModelAlt => {
  return {
    offerId: source?.OfferId,
    offerState: source?.OfferState === null ? undefined : participantOfferStateEnumAdapter(source?.OfferState),
  };
}
