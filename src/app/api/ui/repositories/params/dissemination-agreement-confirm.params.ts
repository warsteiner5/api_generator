import { DisseminationAgreementConfirm$Params } from '../../../swagger/fn/dissemination-agreement/dissemination-agreement-confirm';

export interface DisseminationAgreementConfirmParams {
}

export const disseminationAgreementConfirmParamsAdapter = {
  adapt(params?: DisseminationAgreementConfirmParams): DisseminationAgreementConfirm$Params {
    if (!params) {
      return {} as DisseminationAgreementConfirm$Params;
    }
    return {
    };
  }
};
