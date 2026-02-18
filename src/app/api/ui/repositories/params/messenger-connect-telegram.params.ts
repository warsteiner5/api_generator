import { MessengerConnectTelegram$Params } from '../../../swagger/fn/messenger/messenger-connect-telegram';

export interface MessengerConnectTelegramParams {
}

export const messengerConnectTelegramParamsAdapter = {
  adapt(params?: MessengerConnectTelegramParams): MessengerConnectTelegram$Params {
    if (!params) {
      return {} as MessengerConnectTelegram$Params;
    }
    return {
    };
  }
};
