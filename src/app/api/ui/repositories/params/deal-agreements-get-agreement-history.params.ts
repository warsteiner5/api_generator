import { DealAgreementsGetAgreementHistory$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-get-agreement-history';

// @ts-ignore
export interface DealAgreementsGetAgreementHistoryParams {
  dealId: number;
}

export function dealAgreementsGetAgreementHistoryAdapter(params?: DealAgreementsGetAgreementHistoryParams): DealAgreementsGetAgreementHistory$Params {
  if (!params) {
    return {} as DealAgreementsGetAgreementHistory$Params;
  }
  return {
      dealId: params.dealId,
  };
}
