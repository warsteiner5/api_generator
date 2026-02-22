import { MessageQueueServiceOfferImportProcess$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-offer-import-process';

// @ts-ignore
export interface MessageQueueServiceOfferImportProcessParams {
  taskId: number;
}

export function messageQueueServiceOfferImportProcessAdapter(params?: MessageQueueServiceOfferImportProcessParams): MessageQueueServiceOfferImportProcess$Params {
  if (!params) {
    return {} as MessageQueueServiceOfferImportProcess$Params;
  }
  return {
      taskId: params.taskId,
  };
}
