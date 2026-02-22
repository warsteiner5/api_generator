import { MessengerStatusAlt } from '../../models/messenger-status-alt.interface';
import { ApiMessengerStatusAltDto } from '../../../swagger/models/api-messenger-status';

export const apiMessengerStatusAltDtoAdapter = (source?: MessengerStatusAlt | null): ApiMessengerStatusAltDto => {
  return {
    TelegramConnected: source?.telegramConnected,
  };
}
