import { BlockFinance } from '../../models/block-finance.interface';
import { TradesBlockFinance$Params } from '../../../swagger/fn/trades/trades-block-finance';
import { adaptApiBlockFinanceDto } from '../../adapters/toDto/api-block-finance-dto.adapter';

export interface TradesBlockFinanceParams {
  body?: BlockFinance;
}

export const tradesBlockFinanceParamsAdapter = {
  adapt(params?: TradesBlockFinanceParams): TradesBlockFinance$Params {
    if (!params) {
      return {} as TradesBlockFinance$Params;
    }
    return {
      body: adaptApiBlockFinanceDto(params.body),
    };
  }
};
