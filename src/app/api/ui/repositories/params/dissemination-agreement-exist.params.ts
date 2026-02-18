import { DisseminationAgreementExist$Params } from '../../../swagger/fn/dissemination-agreement/dissemination-agreement-exist';

export interface DisseminationAgreementExistParams {
}

export const disseminationAgreementExistParamsAdapter = {
  adapt(params?: DisseminationAgreementExistParams): DisseminationAgreementExist$Params {
    if (!params) {
      return {} as DisseminationAgreementExist$Params;
    }
    return {
    };
  }
};
