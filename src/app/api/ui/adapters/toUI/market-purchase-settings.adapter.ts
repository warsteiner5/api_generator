import { ApiMarketPurchaseSettingsDto } from '../../../swagger/models/api-market-purchase-settings-dto';
import { MarketPurchaseSettings } from '../../models/market-purchase-settings.interface';
import { adaptM4DDealSignRequiredEnumToUI } from './m-4-d-deal-sign-required-enum.adapter';

export function adaptMarketPurchaseSettingsToUI(source?: ApiMarketPurchaseSettingsDto | null): MarketPurchaseSettings {
  return {
    canSendTradeToEIS: source?.CanSendTradeToEIS ?? false,
    hideProtocolForTradeWithSentToEis: source?.HideProtocolForTradeWithSentToEis ?? false,
    m4DDealSignRequired: adaptM4DDealSignRequiredEnumToUI(source?.M4DDealSignRequired),
  };
}
