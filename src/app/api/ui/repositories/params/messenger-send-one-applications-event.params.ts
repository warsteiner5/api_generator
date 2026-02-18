import { MessengerSendOneApplicationsEvent$Params } from '../../../swagger/fn/messenger/messenger-send-one-applications-event';

export interface MessengerSendOneApplicationsEventParams {
}

export const messengerSendOneApplicationsEventParamsAdapter = {
  adapt(params?: MessengerSendOneApplicationsEventParams): MessengerSendOneApplicationsEvent$Params {
    if (!params) {
      return {} as MessengerSendOneApplicationsEvent$Params;
    }
    return {
    };
  }
};
