import { MessageQueueServiceLogSearchAction$Params } from '../../../swagger/fn/message-queue-service/message-queue-service-log-search-action';
import { SearchActionMessage } from '../../models/search-action-message.interface';
import { apiSearchActionMessageDtoAdapter } from '../../adapters/models/api-search-action-message-dto.adapter';

// @ts-ignore
export interface MessageQueueServiceLogSearchActionParams {
  body?: SearchActionMessage;
}

export function messageQueueServiceLogSearchActionAdapter(params?: MessageQueueServiceLogSearchActionParams): MessageQueueServiceLogSearchAction$Params {
  if (!params) {
    return {} as MessageQueueServiceLogSearchAction$Params;
  }
  return {
      body: apiSearchActionMessageDtoAdapter(params.body),
  };
}
