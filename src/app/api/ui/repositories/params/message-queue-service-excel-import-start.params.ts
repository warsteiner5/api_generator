import { MessageQueueServiceExcelImportStart$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-excel-import-start';

export interface MessageQueueServiceExcelImportStartParams {
  taskId: number;
}

export const messageQueueServiceExcelImportStartParamsAdapter = {
  adapt(params?: MessageQueueServiceExcelImportStartParams): MessageQueueServiceExcelImportStart$Params {
    if (!params) {
      return {} as MessageQueueServiceExcelImportStart$Params;
    }
    return {
      taskId: params.taskId,
    };
  }
};
