import { ParticipantOfferImportRestartImportTask$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-restart-import-task';

export interface ParticipantOfferImportRestartImportTaskParams {
  taskId: number;
}

export const participantOfferImportRestartImportTaskParamsAdapter = {
  adapt(params?: ParticipantOfferImportRestartImportTaskParams): ParticipantOfferImportRestartImportTask$Params {
    if (!params) {
      return {} as ParticipantOfferImportRestartImportTask$Params;
    }
    return {
      taskId: params.taskId,
    };
  }
};
