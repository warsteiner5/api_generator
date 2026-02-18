import { MessageQueueServiceLogSearchAction$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-log-search-action';
import { SearchActionMessage } from '../../models/search-action-message.interface';
import { adaptApiSearchActionMessageDto } from '../../adapters/toDto/api-search-action-message-dto.adapter';

export interface MessageQueueServiceLogSearchActionParams {
  body?: SearchActionMessage;
}

export const messageQueueServiceLogSearchActionParamsAdapter = {
  adapt(params?: MessageQueueServiceLogSearchActionParams): MessageQueueServiceLogSearchAction$Params {
    if (!params) {
      return {} as MessageQueueServiceLogSearchAction$Params;
    }
    return {
      body: adaptApiSearchActionMessageDto(params.body),
    };
  }
};
