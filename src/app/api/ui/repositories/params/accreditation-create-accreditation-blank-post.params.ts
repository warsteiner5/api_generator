import { AccreditationCreateAccreditationBlankPost$Params } from '../../../swagger/fn/accreditation/accreditation-create-accreditation-blank-post';
import { CreateAccreditationPaymentPrintFormRequestAlt } from '../../models/create-accreditation-payment-print-form-request-alt.interface';
import { adaptApiCreateAccreditationPaymentPrintFormRequestAltDto } from '../../adapters/toDto/api-create-accreditation-payment-print-form-request.adapter';

export interface AccreditationCreateAccreditationBlankPostParams {
  body?: CreateAccreditationPaymentPrintFormRequestAlt;
}

export const accreditationCreateAccreditationBlankPostParamsAdapter = {
  adapt(params?: AccreditationCreateAccreditationBlankPostParams): AccreditationCreateAccreditationBlankPost$Params {
    if (!params) {
      return {} as AccreditationCreateAccreditationBlankPost$Params;
    }
    return {
      body: adaptApiCreateAccreditationPaymentPrintFormRequestAltDto(params.body),
    };
  }
};
