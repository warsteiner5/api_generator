import { ParticipantOfferImportRestartImportTask$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-restart-import-task';

// @ts-ignore
export interface ParticipantOfferImportRestartImportTaskParams {
  taskId: number;
}

export function participantOfferImportRestartImportTaskAdapter(params?: ParticipantOfferImportRestartImportTaskParams): ParticipantOfferImportRestartImportTask$Params {
  if (!params) {
    return {} as ParticipantOfferImportRestartImportTask$Params;
  }
  return {
      taskId: params.taskId,
  };
}
