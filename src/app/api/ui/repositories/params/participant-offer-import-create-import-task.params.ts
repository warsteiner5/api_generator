import { CreateImportTaskRequestAlt } from '../../models/create-import-task-request-alt.interface';
import { ParticipantOfferImportCreateImportTask$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-create-import-task';
import { adaptApiCreateImportTaskRequestAltDto } from '../../adapters/toDto/api-create-import-task-request.adapter';

export interface ParticipantOfferImportCreateImportTaskParams {
  body?: CreateImportTaskRequestAlt;
}

export const participantOfferImportCreateImportTaskParamsAdapter = {
  adapt(params?: ParticipantOfferImportCreateImportTaskParams): ParticipantOfferImportCreateImportTask$Params {
    if (!params) {
      return {} as ParticipantOfferImportCreateImportTask$Params;
    }
    return {
      body: adaptApiCreateImportTaskRequestAltDto(params.body),
    };
  }
};
