import { ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-get-characteristics-by-participant-offer';

export interface ParticipantOfferImportGetCharacteristicsByParticipantOfferParams {
  id: number;
}

export const participantOfferImportGetCharacteristicsByParticipantOfferParamsAdapter = {
  adapt(params?: ParticipantOfferImportGetCharacteristicsByParticipantOfferParams): ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params {
    if (!params) {
      return {} as ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params;
    }
    return {
      id: params.id,
    };
  }
};
