import { QuotationSessionJoinNewAlt } from '../../models/quotation-session-join-new-alt.interface';
import { QuotationSessionNewJoin$Params } from '../../../swagger/fn/quotation-session-new/quotation-session-new-join';
import { adaptApiQuotationSessionJoinNewAltDto } from '../../adapters/toDto/api-quotation-session-join-new.adapter';

export interface QuotationSessionNewJoinParams {
  body?: QuotationSessionJoinNewAlt;
}

export const quotationSessionNewJoinParamsAdapter = {
  adapt(params?: QuotationSessionNewJoinParams): QuotationSessionNewJoin$Params {
    if (!params) {
      return {} as QuotationSessionNewJoin$Params;
    }
    return {
      body: adaptApiQuotationSessionJoinNewAltDto(params.body),
    };
  }
};
