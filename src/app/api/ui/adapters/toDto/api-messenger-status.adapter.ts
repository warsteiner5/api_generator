import { MessengerStatusAlt } from '../../models/messenger-status-alt.interface';
import { ApiMessengerStatusAltDto } from '../../../swagger/models/api-messenger-status';

export function adaptApiMessengerStatusAltDto(source?: MessengerStatusAlt | null): ApiMessengerStatusAltDto {
  return {
    TelegramConnected: source?.telegramConnected,
  };
}
