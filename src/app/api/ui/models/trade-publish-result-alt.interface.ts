import { LotSaveResultAlt } from './lot-save-result-alt.interface';

export interface TradePublishResultAlt {
  applicationEndDateShiftedForImmediateTrade: boolean;
  lots: LotSaveResultAlt[];
  newApplicationEndDate: string;
  tradeId: number;
}
