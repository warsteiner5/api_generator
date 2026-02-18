import { MarketProtocolSettings } from '../../models/market-protocol-settings.interface';
import { ApiMarketProtocolSettingsDto } from '../../../swagger/models/api-market-protocol-settings-dto';

export function adaptApiMarketProtocolSettingsDto(source?: MarketProtocolSettings | null): ApiMarketProtocolSettingsDto {
  return {
    ShowProtocolForTradeWithApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithApplicationEndDateWithoutSentToEis,
    ShowProtocolForTradeWithoutApplicationEndDateWithoutSentToEis: source?.showProtocolForTradeWithoutApplicationEndDateWithoutSentToEis,
  };
}
