import { MessageQueueServiceOfferImportProcess$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-offer-import-process';

export interface MessageQueueServiceOfferImportProcessParams {
  taskId: number;
}

export const messageQueueServiceOfferImportProcessParamsAdapter = {
  adapt(params?: MessageQueueServiceOfferImportProcessParams): MessageQueueServiceOfferImportProcess$Params {
    if (!params) {
      return {} as MessageQueueServiceOfferImportProcess$Params;
    }
    return {
      taskId: params.taskId,
    };
  }
};
