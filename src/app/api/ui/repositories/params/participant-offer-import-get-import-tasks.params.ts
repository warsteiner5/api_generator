import { ParticipantOfferImportGetImportTasks$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-get-import-tasks';
import { ParticipantOfferImportTaskFilterAlt } from '../../models/participant-offer-import-task-filter-alt.interface';
import { apiParticipantOfferImportTaskFilterAltDtoAdapter } from '../../adapters/models/api-participant-offer-import-task-filter.adapter';

// @ts-ignore
export interface ParticipantOfferImportGetImportTasksParams {
  body?: ParticipantOfferImportTaskFilterAlt;
}

export function participantOfferImportGetImportTasksAdapter(params?: ParticipantOfferImportGetImportTasksParams): ParticipantOfferImportGetImportTasks$Params {
  if (!params) {
    return {} as ParticipantOfferImportGetImportTasks$Params;
  }
  return {
      body: apiParticipantOfferImportTaskFilterAltDtoAdapter(params.body),
  };
}
