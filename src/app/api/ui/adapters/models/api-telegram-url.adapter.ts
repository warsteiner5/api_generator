import { TelegramUrlAlt } from '../../models/telegram-url-alt.interface';
import { ApiTelegramUrlAltDto } from '../../../swagger/models/api-telegram-url';

export const apiTelegramUrlAltDtoAdapter = (source?: TelegramUrlAlt | null): ApiTelegramUrlAltDto => {
  return {
    QRCode: source?.qrCode,
    Url: source?.url,
  };
}
