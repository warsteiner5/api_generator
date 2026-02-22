import { MessengerGetMessengerStatus$Params } from '../../../swagger/fn/messenger/messenger-get-messenger-status';

// @ts-ignore
export interface MessengerGetMessengerStatusParams {
}

export function messengerGetMessengerStatusAdapter(params?: MessengerGetMessengerStatusParams): MessengerGetMessengerStatus$Params {
  if (!params) {
    return {} as MessengerGetMessengerStatus$Params;
  }
  return {
  };
}
