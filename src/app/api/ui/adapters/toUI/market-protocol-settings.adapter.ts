import { ApiMarketProtocolSettingsDto } from '../../../swagger/models/api-market-protocol-settings-dto';
import { MarketProtocolSettings } from '../../models/market-protocol-settings.interface';

export function adaptMarketProtocolSettingsToUI(source?: ApiMarketProtocolSettingsDto | null): MarketProtocolSettings {
  return {
    showProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis ?? false,
    showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis ?? false,
  };
}
