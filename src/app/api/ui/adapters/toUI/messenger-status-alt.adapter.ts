import { ApiMessengerStatusAltDto } from '../../../swagger/models/api-messenger-status';
import { MessengerStatusAlt } from '../../models/messenger-status-alt.interface';

export function adaptMessengerStatusAltToUI(source?: ApiMessengerStatusAltDto | null): MessengerStatusAlt {
  return {
    telegramConnected: source?.TelegramConnected ?? false,
  };
}
