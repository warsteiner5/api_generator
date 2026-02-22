import { ParticipantOfferImportGetImportTask$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-get-import-task';

// @ts-ignore
export interface ParticipantOfferImportGetImportTaskParams {
  id: number;
}

export function participantOfferImportGetImportTaskAdapter(params?: ParticipantOfferImportGetImportTaskParams): ParticipantOfferImportGetImportTask$Params {
  if (!params) {
    return {} as ParticipantOfferImportGetImportTask$Params;
  }
  return {
      id: params.id,
  };
}
