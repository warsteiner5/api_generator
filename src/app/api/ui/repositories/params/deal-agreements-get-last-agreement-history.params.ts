import { DealAgreementsGetLastAgreementHistory$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-get-last-agreement-history';

export interface DealAgreementsGetLastAgreementHistoryParams {
  dealId: number;
}

export const dealAgreementsGetLastAgreementHistoryParamsAdapter = {
  adapt(params?: DealAgreementsGetLastAgreementHistoryParams): DealAgreementsGetLastAgreementHistory$Params {
    if (!params) {
      return {} as DealAgreementsGetLastAgreementHistory$Params;
    }
    return {
      dealId: params.dealId,
    };
  }
};
