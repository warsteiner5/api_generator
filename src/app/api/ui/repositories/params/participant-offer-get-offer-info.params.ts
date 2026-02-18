import { ParticipantOfferGetOfferInfo$Params } from '../../../swagger/fn/participant-offer/participant-offer-get-offer-info';

export interface ParticipantOfferGetOfferInfoParams {
  offerId: number;
}

export const participantOfferGetOfferInfoParamsAdapter = {
  adapt(params?: ParticipantOfferGetOfferInfoParams): ParticipantOfferGetOfferInfo$Params {
    if (!params) {
      return {} as ParticipantOfferGetOfferInfo$Params;
    }
    return {
      offerId: params.offerId,
    };
  }
};
