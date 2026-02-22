import { DealAgreementsGetLastAgreementHistory$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-get-last-agreement-history';

// @ts-ignore
export interface DealAgreementsGetLastAgreementHistoryParams {
  dealId: number;
}

export function dealAgreementsGetLastAgreementHistoryAdapter(params?: DealAgreementsGetLastAgreementHistoryParams): DealAgreementsGetLastAgreementHistory$Params {
  if (!params) {
    return {} as DealAgreementsGetLastAgreementHistory$Params;
  }
  return {
      dealId: params.dealId,
  };
}
