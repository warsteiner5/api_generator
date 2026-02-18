import { MessengerSendTradeWithoutApplicationsEndsEvent$Params } from '../../../swagger/fn/messenger/messenger-send-trade-without-applications-ends-event';

export interface MessengerSendTradeWithoutApplicationsEndsEventParams {
}

export const messengerSendTradeWithoutApplicationsEndsEventParamsAdapter = {
  adapt(params?: MessengerSendTradeWithoutApplicationsEndsEventParams): MessengerSendTradeWithoutApplicationsEndsEvent$Params {
    if (!params) {
      return {} as MessengerSendTradeWithoutApplicationsEndsEvent$Params;
    }
    return {
    };
  }
};
