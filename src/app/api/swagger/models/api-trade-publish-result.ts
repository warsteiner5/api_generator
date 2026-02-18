/* tslint:disable */
/* eslint-disable */
import { ApiLotSaveResultAltDto } from '../models/api-lot-save-result';
export interface ApiTradePublishResultAltDto {
  ApplicationEndDateShiftedForImmediateTrade?: boolean;
  Lots?: Array<ApiLotSaveResultAltDto> | null;
  NewApplicationEndDate?: string | null;
  TradeId?: number;
}
