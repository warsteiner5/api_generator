import { ParticipantOfferFromFile } from '../../models/participant-offer-from-file.interface';
import { ParticipantOfferLoadDataFromDocument$Params } from '../../../swagger/fn/participant-offer/participant-offer-load-data-from-document';
import { apiParticipantOfferFromFileDtoAdapter } from '../../adapters/models/api-participant-offer-from-file-dto.adapter';

// @ts-ignore
export interface ParticipantOfferLoadDataFromDocumentParams {
  body?: ParticipantOfferFromFile;
}

export function participantOfferLoadDataFromDocumentAdapter(params?: ParticipantOfferLoadDataFromDocumentParams): ParticipantOfferLoadDataFromDocument$Params {
  if (!params) {
    return {} as ParticipantOfferLoadDataFromDocument$Params;
  }
  return {
      body: apiParticipantOfferFromFileDtoAdapter(params.body),
  };
}
