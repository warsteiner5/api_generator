import { AvailableOperationsGetByQuotationSession$Params } from '../../../swagger/fn/available-operations/available-operations-get-by-quotation-session';

// @ts-ignore
export interface AvailableOperationsGetByQuotationSessionParams {
  tradeId: number;
}

export function availableOperationsGetByQuotationSessionAdapter(params?: AvailableOperationsGetByQuotationSessionParams): AvailableOperationsGetByQuotationSession$Params {
  if (!params) {
    return {} as AvailableOperationsGetByQuotationSession$Params;
  }
  return {
      tradeId: params.tradeId,
  };
}
