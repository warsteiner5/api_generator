import { ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-get-characteristics-by-participant-offer';

// @ts-ignore
export interface ParticipantOfferImportGetCharacteristicsByParticipantOfferParams {
  id: number;
}

export function participantOfferImportGetCharacteristicsByParticipantOfferAdapter(params?: ParticipantOfferImportGetCharacteristicsByParticipantOfferParams): ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params {
  if (!params) {
    return {} as ParticipantOfferImportGetCharacteristicsByParticipantOffer$Params;
  }
  return {
      id: params.id,
  };
}
