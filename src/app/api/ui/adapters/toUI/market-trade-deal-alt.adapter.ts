import { ApiMarketTradeDealAltDto } from '../../../swagger/models/api-market-trade-deal';
import { MarketTradeDealAlt } from '../../models/market-trade-deal-alt.interface';
import { adaptDealStateEnumToUI } from './deal-state-enum.adapter';

export function adaptMarketTradeDealAltToUI(source?: ApiMarketTradeDealAltDto | null): MarketTradeDealAlt {
  return {
    canDownloadDealArchiveFile: source?.CanDownloadDealArchiveFile ?? false,
    chatId: source?.ChatId ?? 0,
    contractExecutionDate: source?.ContractExecutionDate ?? '',
    dealId: source?.DealId ?? 0,
    dealState: adaptDealStateEnumToUI(source?.DealState),
    hasDealFile: source?.HasDealFile ?? false,
    participantFullName: source?.ParticipantFullName ?? '',
  };
}
