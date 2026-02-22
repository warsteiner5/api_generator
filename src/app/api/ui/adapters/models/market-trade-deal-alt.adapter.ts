import { ApiMarketTradeDealAltDto } from '../../../swagger/models/api-market-trade-deal';
import { MarketTradeDealAlt } from '../../models/market-trade-deal-alt.interface';
import { dealStateEnumAdapter } from '../enums/deal-state-enum.adapter';

export const marketTradeDealAltAdapter = (source?: ApiMarketTradeDealAltDto | null): MarketTradeDealAlt => {
  return {
    canDownloadDealArchiveFile: source?.CanDownloadDealArchiveFile,
    chatId: source?.ChatId,
    contractExecutionDate: source?.ContractExecutionDate,
    dealId: source?.DealId,
    dealState: source?.DealState === null ? undefined : dealStateEnumAdapter(source?.DealState),
    hasDealFile: source?.HasDealFile,
    participantFullName: source?.ParticipantFullName,
  };
}
