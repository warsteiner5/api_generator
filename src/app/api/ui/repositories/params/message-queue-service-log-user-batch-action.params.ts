import { LogUserBatchActionMessage } from '../../models/log-user-batch-action-message.interface';
import { MessageQueueServiceLogUserBatchAction$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-log-user-batch-action';
import { apiLogUserBatchActionMessageDtoAdapter } from '../../adapters/models/api-log-user-batch-action-message-dto.adapter';

// @ts-ignore
export interface MessageQueueServiceLogUserBatchActionParams {
  body?: LogUserBatchActionMessage;
}

export function messageQueueServiceLogUserBatchActionAdapter(params?: MessageQueueServiceLogUserBatchActionParams): MessageQueueServiceLogUserBatchAction$Params {
  if (!params) {
    return {} as MessageQueueServiceLogUserBatchAction$Params;
  }
  return {
      body: apiLogUserBatchActionMessageDtoAdapter(params.body),
  };
}
