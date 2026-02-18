import { AdditionalAgreementsGetFullAdditionalAgreementData$Params } from '../../../swagger/fn/additional-agreements/additional-agreements-get-full-additional-agreement-data';

export interface AdditionalAgreementsGetFullAdditionalAgreementDataParams {
  dealId: number;
}

export const additionalAgreementsGetFullAdditionalAgreementDataParamsAdapter = {
  adapt(params?: AdditionalAgreementsGetFullAdditionalAgreementDataParams): AdditionalAgreementsGetFullAdditionalAgreementData$Params {
    if (!params) {
      return {} as AdditionalAgreementsGetFullAdditionalAgreementData$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
