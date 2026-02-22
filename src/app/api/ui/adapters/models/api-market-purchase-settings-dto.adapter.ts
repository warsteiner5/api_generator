import { MarketPurchaseSettings } from '../../models/market-purchase-settings.interface';
import { ApiMarketPurchaseSettingsDto } from '../../../swagger/models/api-market-purchase-settings-dto';
import { apiM4DDealSignRequiredEnumAdapter } from '../enums/api-m-4-d-deal-sign-required-enum.adapter';

export const apiMarketPurchaseSettingsDtoAdapter = (source?: MarketPurchaseSettings | null): ApiMarketPurchaseSettingsDto => {
  return {
    CanSendTradeToEIS: source?.canSendTradeToEIS,
    HideProtocolForTradeWithSentToEis: source?.hideProtocolForTradeWithSentToEis,
    M4DDealSignRequired: source?.m4DDealSignRequired === null ? undefined : apiM4DDealSignRequiredEnumAdapter(source?.m4DDealSignRequired),
  };
}
