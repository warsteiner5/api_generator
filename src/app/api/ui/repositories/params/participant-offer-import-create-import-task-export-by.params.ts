import { CreateImportTaskRequestAlt } from '../../models/create-import-task-request-alt.interface';
import { ParticipantOfferImportCreateImportTaskExportBy$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-create-import-task-export-by';
import { apiCreateImportTaskRequestAltDtoAdapter } from '../../adapters/models/api-create-import-task-request.adapter';

// @ts-ignore
export interface ParticipantOfferImportCreateImportTaskExportByParams {
  body?: CreateImportTaskRequestAlt;
}

export function participantOfferImportCreateImportTaskExportByAdapter(params?: ParticipantOfferImportCreateImportTaskExportByParams): ParticipantOfferImportCreateImportTaskExportBy$Params {
  if (!params) {
    return {} as ParticipantOfferImportCreateImportTaskExportBy$Params;
  }
  return {
      body: apiCreateImportTaskRequestAltDtoAdapter(params.body),
  };
}
