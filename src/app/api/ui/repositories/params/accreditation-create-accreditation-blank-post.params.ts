import { AccreditationCreateAccreditationBlankPost$Params } from '../../../swagger/fn/accreditation/accreditation-create-accreditation-blank-post';
import { CreateAccreditationPaymentPrintFormRequestAlt } from '../../models/create-accreditation-payment-print-form-request-alt.interface';
import { apiCreateAccreditationPaymentPrintFormRequestAltDtoAdapter } from '../../adapters/models/api-create-accreditation-payment-print-form-request.adapter';

// @ts-ignore
export interface AccreditationCreateAccreditationBlankPostParams {
  body?: CreateAccreditationPaymentPrintFormRequestAlt;
}

export function accreditationCreateAccreditationBlankPostAdapter(params?: AccreditationCreateAccreditationBlankPostParams): AccreditationCreateAccreditationBlankPost$Params {
  if (!params) {
    return {} as AccreditationCreateAccreditationBlankPost$Params;
  }
  return {
      body: apiCreateAccreditationPaymentPrintFormRequestAltDtoAdapter(params.body),
  };
}
