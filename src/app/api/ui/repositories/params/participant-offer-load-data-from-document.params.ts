import { ParticipantOfferFromFile } from '../../models/participant-offer-from-file.interface';
import { ParticipantOfferLoadDataFromDocument$Params } from '../../../swagger/fn/participant-offer/participant-offer-load-data-from-document';
import { adaptApiParticipantOfferFromFileDto } from '../../adapters/toDto/api-participant-offer-from-file-dto.adapter';

export interface ParticipantOfferLoadDataFromDocumentParams {
  body?: ParticipantOfferFromFile;
}

export const participantOfferLoadDataFromDocumentParamsAdapter = {
  adapt(params?: ParticipantOfferLoadDataFromDocumentParams): ParticipantOfferLoadDataFromDocument$Params {
    if (!params) {
      return {} as ParticipantOfferLoadDataFromDocument$Params;
    }
    return {
      body: adaptApiParticipantOfferFromFileDto(params.body),
    };
  }
};
