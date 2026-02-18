import { DealStateEnum } from '../enums/deal-state.enum';

export interface MarketTradeDealAlt {
  canDownloadDealArchiveFile: boolean;
  chatId: number;
  contractExecutionDate: string;
  dealId: number;
  dealState: DealStateEnum;
  hasDealFile: boolean;
  participantFullName: string;
}
