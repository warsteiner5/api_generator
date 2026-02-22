import { MessageQueueServiceExcelImportStartExportby$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-excel-import-start-exportby';

// @ts-ignore
export interface MessageQueueServiceExcelImportStartExportbyParams {
  taskId: number;
}

export function messageQueueServiceExcelImportStartExportbyAdapter(params?: MessageQueueServiceExcelImportStartExportbyParams): MessageQueueServiceExcelImportStartExportby$Params {
  if (!params) {
    return {} as MessageQueueServiceExcelImportStartExportby$Params;
  }
  return {
      taskId: params.taskId,
  };
}
