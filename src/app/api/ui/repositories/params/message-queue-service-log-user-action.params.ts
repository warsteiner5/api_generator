import { LogUserActionMessage } from '../../models/log-user-action-message.interface';
import { MessageQueueServiceLogUserAction$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-log-user-action';
import { apiLogUserActionMessageDtoAdapter } from '../../adapters/models/api-log-user-action-message-dto.adapter';

// @ts-ignore
export interface MessageQueueServiceLogUserActionParams {
  body?: LogUserActionMessage;
}

export function messageQueueServiceLogUserActionAdapter(params?: MessageQueueServiceLogUserActionParams): MessageQueueServiceLogUserAction$Params {
  if (!params) {
    return {} as MessageQueueServiceLogUserAction$Params;
  }
  return {
      body: apiLogUserActionMessageDtoAdapter(params.body),
  };
}
