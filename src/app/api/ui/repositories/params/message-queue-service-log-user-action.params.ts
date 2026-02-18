import { LogUserActionMessage } from '../../models/log-user-action-message.interface';
import { MessageQueueServiceLogUserAction$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-log-user-action';
import { adaptApiLogUserActionMessageDto } from '../../adapters/toDto/api-log-user-action-message-dto.adapter';

export interface MessageQueueServiceLogUserActionParams {
  body?: LogUserActionMessage;
}

export const messageQueueServiceLogUserActionParamsAdapter = {
  adapt(params?: MessageQueueServiceLogUserActionParams): MessageQueueServiceLogUserAction$Params {
    if (!params) {
      return {} as MessageQueueServiceLogUserAction$Params;
    }
    return {
      body: adaptApiLogUserActionMessageDto(params.body),
    };
  }
};
