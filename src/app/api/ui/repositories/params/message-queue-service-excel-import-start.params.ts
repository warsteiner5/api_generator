import { MessageQueueServiceExcelImportStart$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-excel-import-start';

// @ts-ignore
export interface MessageQueueServiceExcelImportStartParams {
  taskId: number;
}

export function messageQueueServiceExcelImportStartAdapter(params?: MessageQueueServiceExcelImportStartParams): MessageQueueServiceExcelImportStart$Params {
  if (!params) {
    return {} as MessageQueueServiceExcelImportStart$Params;
  }
  return {
      taskId: params.taskId,
  };
}
