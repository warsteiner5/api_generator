import { QuotationSessionAgreementGetDataForSign$Params } from '../../../swagger/fn/quotation-session-agreement/quotation-session-agreement-get-data-for-sign';

// @ts-ignore
export interface QuotationSessionAgreementGetDataForSignParams {
  signatureAlgorithmOid: string;
}

export function quotationSessionAgreementGetDataForSignAdapter(params?: QuotationSessionAgreementGetDataForSignParams): QuotationSessionAgreementGetDataForSign$Params {
  if (!params) {
    return {} as QuotationSessionAgreementGetDataForSign$Params;
  }
  return {
      signatureAlgorithmOid: params.signatureAlgorithmOid,
  };
}
