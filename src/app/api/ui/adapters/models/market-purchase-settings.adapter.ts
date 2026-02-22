import { ApiMarketPurchaseSettingsDto } from '../../../swagger/models/api-market-purchase-settings-dto';
import { MarketPurchaseSettings } from '../../models/market-purchase-settings.interface';
import { m4DDealSignRequiredEnumAdapter } from '../enums/m-4-d-deal-sign-required-enum.adapter';

export const marketPurchaseSettingsAdapter = (source?: ApiMarketPurchaseSettingsDto | null): MarketPurchaseSettings => {
  return {
    canSendTradeToEIS: source?.CanSendTradeToEIS,
    hideProtocolForTradeWithSentToEis: source?.HideProtocolForTradeWithSentToEis,
    m4DDealSignRequired: source?.M4DDealSignRequired === null ? undefined : m4DDealSignRequiredEnumAdapter(source?.M4DDealSignRequired),
  };
}
