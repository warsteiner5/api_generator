import { ParticipantOfferImportRestartImportTaskExportBy$Params } from '../../../swagger/fn/participant-offer-import/participant-offer-import-restart-import-task-export-by';

// @ts-ignore
export interface ParticipantOfferImportRestartImportTaskExportByParams {
  taskId: number;
}

export function participantOfferImportRestartImportTaskExportByAdapter(params?: ParticipantOfferImportRestartImportTaskExportByParams): ParticipantOfferImportRestartImportTaskExportBy$Params {
  if (!params) {
    return {} as ParticipantOfferImportRestartImportTaskExportBy$Params;
  }
  return {
      taskId: params.taskId,
  };
}
