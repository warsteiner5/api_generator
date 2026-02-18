import { ParticipantOfferImportGetImportTask$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-get-import-task';

export interface ParticipantOfferImportGetImportTaskParams {
  id: number;
}

export const participantOfferImportGetImportTaskParamsAdapter = {
  adapt(params?: ParticipantOfferImportGetImportTaskParams): ParticipantOfferImportGetImportTask$Params {
    if (!params) {
      return {} as ParticipantOfferImportGetImportTask$Params;
    }
    return {
      id: params.id,
    };
  }
};
