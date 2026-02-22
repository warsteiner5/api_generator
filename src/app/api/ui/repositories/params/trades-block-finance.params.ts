import { BlockFinance } from '../../models/block-finance.interface';
import { TradesBlockFinance$Params } from '../../../swagger/fn/trades/trades-block-finance';
import { apiBlockFinanceDtoAdapter } from '../../adapters/models/api-block-finance-dto.adapter';

// @ts-ignore
export interface TradesBlockFinanceParams {
  body?: BlockFinance;
}

export function tradesBlockFinanceAdapter(params?: TradesBlockFinanceParams): TradesBlockFinance$Params {
  if (!params) {
    return {} as TradesBlockFinance$Params;
  }
  return {
      body: apiBlockFinanceDtoAdapter(params.body),
  };
}
