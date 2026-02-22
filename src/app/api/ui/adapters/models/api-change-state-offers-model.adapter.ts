import { ChangeStateOffersModelAlt } from '../../models/change-state-offers-model-alt.interface';
import { ApiChangeStateOffersModelAltDto } from '../../../swagger/models/api-change-state-offers-model';
import { apiParticipantOfferStateEnumAdapter } from '../enums/api-participant-offer-state-enum.adapter';

export const apiChangeStateOffersModelAltDtoAdapter = (source?: ChangeStateOffersModelAlt | null): ApiChangeStateOffersModelAltDto => {
  return {
    OfferId: source?.offerId,
    OfferState: source?.offerState === null ? undefined : apiParticipantOfferStateEnumAdapter(source?.offerState),
  };
}
