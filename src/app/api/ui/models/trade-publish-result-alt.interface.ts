import { LotSaveResultAlt } from './lot-save-result-alt.interface';

// @ts-ignore
export interface TradePublishResultAlt {
  applicationEndDateShiftedForImmediateTrade: boolean;
  lots: LotSaveResultAlt[];
  newApplicationEndDate: string;
  tradeId: number;
}
