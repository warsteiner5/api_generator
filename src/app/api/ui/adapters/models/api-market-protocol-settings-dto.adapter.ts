import { MarketProtocolSettings } from '../../models/market-protocol-settings.interface';
import { ApiMarketProtocolSettingsDto } from '../../../swagger/models/api-market-protocol-settings-dto';

export const apiMarketProtocolSettingsDtoAdapter = (source?: MarketProtocolSettings | null): ApiMarketProtocolSettingsDto => {
  return {
    ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithApplicationEndDateWithoutSentToEis,
    ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis,
  };
}
