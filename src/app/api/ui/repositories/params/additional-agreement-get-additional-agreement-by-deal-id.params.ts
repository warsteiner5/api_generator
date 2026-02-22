import { AdditionalAgreementGetAdditionalAgreementByDealId$Params } from '../../../swagger/fn/additional-agreement/additional-agreement-get-additional-agreement-by-deal-id';

// @ts-ignore
export interface AdditionalAgreementGetAdditionalAgreementByDealIdParams {
  dealId: number;
}

export function additionalAgreementGetAdditionalAgreementByDealIdAdapter(params?: AdditionalAgreementGetAdditionalAgreementByDealIdParams): AdditionalAgreementGetAdditionalAgreementByDealId$Params {
  if (!params) {
    return {} as AdditionalAgreementGetAdditionalAgreementByDealId$Params;
  }
  return {
      dealId: params.dealId,
  };
}
