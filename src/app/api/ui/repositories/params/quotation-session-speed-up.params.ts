import { QuotationSessionSpeedUp$Params } from '../../../swagger/fn/quotation-session/quotation-session-speed-up';

export interface QuotationSessionSpeedUpParams {
  id: number;
}

export const quotationSessionSpeedUpParamsAdapter = {
  adapt(params?: QuotationSessionSpeedUpParams): QuotationSessionSpeedUp$Params {
    if (!params) {
      return {} as QuotationSessionSpeedUp$Params;
    }
    return {
      id: params.id,
    };
  }
};
