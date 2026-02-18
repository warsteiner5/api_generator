import { DealAgreementsGetAgreementHistory$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-get-agreement-history';

export interface DealAgreementsGetAgreementHistoryParams {
  dealId: number;
}

export const dealAgreementsGetAgreementHistoryParamsAdapter = {
  adapt(params?: DealAgreementsGetAgreementHistoryParams): DealAgreementsGetAgreementHistory$Params {
    if (!params) {
      return {} as DealAgreementsGetAgreementHistory$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
