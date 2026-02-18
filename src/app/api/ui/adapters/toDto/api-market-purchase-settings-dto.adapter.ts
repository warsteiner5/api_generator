import { MarketPurchaseSettings } from '../../models/market-purchase-settings.interface';
import { ApiMarketPurchaseSettingsDto } from '../../../swagger/models/api-market-purchase-settings-dto';
import { adaptApiM4DDealSignRequiredEnum } from './api-m-4-d-deal-sign-required-enum.adapter';

export function adaptApiMarketPurchaseSettingsDto(source?: MarketPurchaseSettings | null): ApiMarketPurchaseSettingsDto {
  return {
    CanSendTradeToEIS: source?.canSendTradeToEIS,
    HideProtocolForTradeWithSentToEis: source?.hideProtocolForTradeWithSentToEis,
    M4DDealSignRequired: adaptApiM4DDealSignRequiredEnum(source?.m4DDealSignRequired),
  };
}
