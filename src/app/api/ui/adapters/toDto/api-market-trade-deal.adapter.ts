import { MarketTradeDealAlt } from '../../models/market-trade-deal-alt.interface';
import { ApiMarketTradeDealAltDto } from '../../../swagger/models/api-market-trade-deal';
import { adaptApiDealStateEnum } from './api-deal-state-enum.adapter';

export function adaptApiMarketTradeDealAltDto(source?: MarketTradeDealAlt | null): ApiMarketTradeDealAltDto {
  return {
    CanDownloadDealArchiveFile: source?.canDownloadDealArchiveFile,
    ChatId: source?.chatId,
    ContractExecutionDate: source?.contractExecutionDate,
    DealId: source?.dealId,
    DealState: adaptApiDealStateEnum(source?.dealState),
    HasDealFile: source?.hasDealFile,
    ParticipantFullName: source?.participantFullName,
  };
}
