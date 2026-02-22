import { MessengerConnectTelegram$Params } from '../../../swagger/fn/messenger/messenger-connect-telegram';

// @ts-ignore
export interface MessengerConnectTelegramParams {
}

export function messengerConnectTelegramAdapter(params?: MessengerConnectTelegramParams): MessengerConnectTelegram$Params {
  if (!params) {
    return {} as MessengerConnectTelegram$Params;
  }
  return {
  };
}
