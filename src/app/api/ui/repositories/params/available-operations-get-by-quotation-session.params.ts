import { AvailableOperationsGetByQuotationSession$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-quotation-session';

export interface AvailableOperationsGetByQuotationSessionParams {
  tradeId: number;
}

export const availableOperationsGetByQuotationSessionParamsAdapter = {
  adapt(params?: AvailableOperationsGetByQuotationSessionParams): AvailableOperationsGetByQuotationSession$Params {
    if (!params) {
      return {} as AvailableOperationsGetByQuotationSession$Params;
    }
    return {
      tradeId: params.tradeId,
    };
  }
};
