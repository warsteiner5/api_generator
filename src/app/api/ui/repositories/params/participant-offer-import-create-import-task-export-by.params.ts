import { CreateImportTaskRequestAlt } from '../../models/create-import-task-request-alt.interface';
import { ParticipantOfferImportCreateImportTaskExportBy$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-create-import-task-export-by';
import { adaptApiCreateImportTaskRequestAltDto } from '../../adapters/toDto/api-create-import-task-request.adapter';

export interface ParticipantOfferImportCreateImportTaskExportByParams {
  body?: CreateImportTaskRequestAlt;
}

export const participantOfferImportCreateImportTaskExportByParamsAdapter = {
  adapt(params?: ParticipantOfferImportCreateImportTaskExportByParams): ParticipantOfferImportCreateImportTaskExportBy$Params {
    if (!params) {
      return {} as ParticipantOfferImportCreateImportTaskExportBy$Params;
    }
    return {
      body: adaptApiCreateImportTaskRequestAltDto(params.body),
    };
  }
};
