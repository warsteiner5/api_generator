import { ChangeStateOffersModelAlt } from '../../models/change-state-offers-model-alt.interface';
import { ApiChangeStateOffersModelAltDto } from '../../../swagger/models/api-change-state-offers-model';
import { adaptApiParticipantOfferStateEnum } from './api-participant-offer-state-enum.adapter';

export function adaptApiChangeStateOffersModelAltDto(source?: ChangeStateOffersModelAlt | null): ApiChangeStateOffersModelAltDto {
  return {
    OfferId: source?.offerId,
    OfferState: adaptApiParticipantOfferStateEnum(source?.offerState),
  };
}
