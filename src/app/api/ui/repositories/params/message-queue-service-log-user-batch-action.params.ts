import { LogUserBatchActionMessage } from '../../models/log-user-batch-action-message.interface';
import { MessageQueueServiceLogUserBatchAction$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-log-user-batch-action';
import { adaptApiLogUserBatchActionMessageDto } from '../../adapters/toDto/api-log-user-batch-action-message-dto.adapter';

export interface MessageQueueServiceLogUserBatchActionParams {
  body?: LogUserBatchActionMessage;
}

export const messageQueueServiceLogUserBatchActionParamsAdapter = {
  adapt(params?: MessageQueueServiceLogUserBatchActionParams): MessageQueueServiceLogUserBatchAction$Params {
    if (!params) {
      return {} as MessageQueueServiceLogUserBatchAction$Params;
    }
    return {
      body: adaptApiLogUserBatchActionMessageDto(params.body),
    };
  }
};
