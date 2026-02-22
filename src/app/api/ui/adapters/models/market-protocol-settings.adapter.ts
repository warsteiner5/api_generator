import { ApiMarketProtocolSettingsDto } from '../../../swagger/models/api-market-protocol-settings-dto';
import { MarketProtocolSettings } from '../../models/market-protocol-settings.interface';

export const marketProtocolSettingsAdapter = (source?: ApiMarketProtocolSettingsDto | null): MarketProtocolSettings => {
  return {
    showProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis,
    showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis,
  };
}
