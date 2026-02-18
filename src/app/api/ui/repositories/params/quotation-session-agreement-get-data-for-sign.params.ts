import { QuotationSessionAgreementGetDataForSign$Params } from '../../../swagger/fn/quotation-session-agreement/quotation-session-agreement-get-data-for-sign';

export interface QuotationSessionAgreementGetDataForSignParams {
  signatureAlgorithmOid: string;
}

export const quotationSessionAgreementGetDataForSignParamsAdapter = {
  adapt(params?: QuotationSessionAgreementGetDataForSignParams): QuotationSessionAgreementGetDataForSign$Params {
    if (!params) {
      return {} as QuotationSessionAgreementGetDataForSign$Params;
    }
    return {
      signatureAlgorithmOid: params.signatureAlgorithmOid,
    };
  }
};
