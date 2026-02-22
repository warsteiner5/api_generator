import { MarketTradeDealAlt } from '../../models/market-trade-deal-alt.interface';
import { ApiMarketTradeDealAltDto } from '../../../swagger/models/api-market-trade-deal';
import { apiDealStateEnumAdapter } from '../enums/api-deal-state-enum.adapter';

export const apiMarketTradeDealAltDtoAdapter = (source?: MarketTradeDealAlt | null): ApiMarketTradeDealAltDto => {
  return {
    CanDownloadDealArchiveFile: source?.canDownloadDealArchiveFile,
    ChatId: source?.chatId,
    ContractExecutionDate: source?.contractExecutionDate,
    DealId: source?.dealId,
    DealState: source?.dealState === null ? undefined : apiDealStateEnumAdapter(source?.dealState),
    HasDealFile: source?.hasDealFile,
    ParticipantFullName: source?.participantFullName,
  };
}
