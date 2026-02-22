import { DealStateEnum } from '../enums/deal-state.enum';

// @ts-ignore
export interface MarketTradeDealAlt {
  canDownloadDealArchiveFile: boolean;
  chatId: number;
  contractExecutionDate: string;
  dealId: number;
  dealState: DealStateEnum;
  hasDealFile: boolean;
  participantFullName: string;
}
