import { MessengerSendTradeWithApplicationsEndsEvent$Params } from '../../../swagger/fn/messenger/messenger-send-trade-with-applications-ends-event';

export interface MessengerSendTradeWithApplicationsEndsEventParams {
}

export const messengerSendTradeWithApplicationsEndsEventParamsAdapter = {
  adapt(params?: MessengerSendTradeWithApplicationsEndsEventParams): MessengerSendTradeWithApplicationsEndsEvent$Params {
    if (!params) {
      return {} as MessengerSendTradeWithApplicationsEndsEvent$Params;
    }
    return {
    };
  }
};
