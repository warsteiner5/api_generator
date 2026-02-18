import { ParticipantOfferStateEnum } from '../enums/participant-offer-state.enum';

export interface ChangeStateOffersModelAlt {
  offerId: number;
  offerState: ParticipantOfferStateEnum;
}
