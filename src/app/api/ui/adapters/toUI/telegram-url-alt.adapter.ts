import { ApiTelegramUrlAltDto } from '../../../swagger/models/api-telegram-url';
import { TelegramUrlAlt } from '../../models/telegram-url-alt.interface';

export function adaptTelegramUrlAltToUI(source?: ApiTelegramUrlAltDto | null): TelegramUrlAlt {
  return {
    qrCode: source?.QRCode ?? '',
    url: source?.Url ?? '',
  };
}
