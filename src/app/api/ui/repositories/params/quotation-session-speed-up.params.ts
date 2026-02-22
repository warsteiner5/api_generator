import { QuotationSessionSpeedUp$Params } from '../../../swagger/fn/quotation-session/quotation-session-speed-up';

// @ts-ignore
export interface QuotationSessionSpeedUpParams {
  id: number;
}

export function quotationSessionSpeedUpAdapter(params?: QuotationSessionSpeedUpParams): QuotationSessionSpeedUp$Params {
  if (!params) {
    return {} as QuotationSessionSpeedUp$Params;
  }
  return {
      id: params.id,
  };
}
