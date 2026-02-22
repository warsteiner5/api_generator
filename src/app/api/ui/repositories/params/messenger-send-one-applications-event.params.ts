import { MessengerSendOneApplicationsEvent$Params } from '../../../swagger/fn/messenger/messenger-send-one-applications-event';

// @ts-ignore
export interface MessengerSendOneApplicationsEventParams {
}

export function messengerSendOneApplicationsEventAdapter(params?: MessengerSendOneApplicationsEventParams): MessengerSendOneApplicationsEvent$Params {
  if (!params) {
    return {} as MessengerSendOneApplicationsEvent$Params;
  }
  return {
  };
}
