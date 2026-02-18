import { ParticipantOfferImportGetImportTasks$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-get-import-tasks';
import { ParticipantOfferImportTaskFilterAlt } from '../../models/participant-offer-import-task-filter-alt.interface';
import { adaptApiParticipantOfferImportTaskFilterAltDto } from '../../adapters/toDto/api-participant-offer-import-task-filter.adapter';

export interface ParticipantOfferImportGetImportTasksParams {
  body?: ParticipantOfferImportTaskFilterAlt;
}

export const participantOfferImportGetImportTasksParamsAdapter = {
  adapt(params?: ParticipantOfferImportGetImportTasksParams): ParticipantOfferImportGetImportTasks$Params {
    if (!params) {
      return {} as ParticipantOfferImportGetImportTasks$Params;
    }
    return {
      body: adaptApiParticipantOfferImportTaskFilterAltDto(params.body),
    };
  }
};
