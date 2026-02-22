import { AdditionalAgreementsGetFullAdditionalAgreementData$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-get-full-additional-agreement-data';

// @ts-ignore
export interface AdditionalAgreementsGetFullAdditionalAgreementDataParams {
  dealId: number;
}

export function additionalAgreementsGetFullAdditionalAgreementDataAdapter(params?: AdditionalAgreementsGetFullAdditionalAgreementDataParams): AdditionalAgreementsGetFullAdditionalAgreementData$Params {
  if (!params) {
    return {} as AdditionalAgreementsGetFullAdditionalAgreementData$Params;
  }
  return {
      dealId: params.dealId,
  };
}
