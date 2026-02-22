import { CreateImportTaskRequestAlt } from '../../models/create-import-task-request-alt.interface';
import { ParticipantOfferImportCreateImportTask$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-create-import-task';
import { apiCreateImportTaskRequestAltDtoAdapter } from '../../adapters/models/api-create-import-task-request.adapter';

// @ts-ignore
export interface ParticipantOfferImportCreateImportTaskParams {
  body?: CreateImportTaskRequestAlt;
}

export function participantOfferImportCreateImportTaskAdapter(params?: ParticipantOfferImportCreateImportTaskParams): ParticipantOfferImportCreateImportTask$Params {
  if (!params) {
    return {} as ParticipantOfferImportCreateImportTask$Params;
  }
  return {
      body: apiCreateImportTaskRequestAltDtoAdapter(params.body),
  };
}
