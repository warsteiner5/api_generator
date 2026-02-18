import { MessengerGetMessengerStatus$Params } from '../../../swagger/fn/messenger/messenger-get-messenger-status';

export interface MessengerGetMessengerStatusParams {
}

export const messengerGetMessengerStatusParamsAdapter = {
  adapt(params?: MessengerGetMessengerStatusParams): MessengerGetMessengerStatus$Params {
    if (!params) {
      return {} as MessengerGetMessengerStatus$Params;
    }
    return {
    };
  }
};
