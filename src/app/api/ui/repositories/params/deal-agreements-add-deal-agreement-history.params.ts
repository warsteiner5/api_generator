import { AddDealAgreementHistoryRequestAlt } from '../../models/add-deal-agreement-history-request-alt.interface';
import { DealAgreementsAddDealAgreementHistory$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-add-deal-agreement-history';
import { apiAddDealAgreementHistoryRequestAltDtoAdapter } from '../../adapters/models/api-add-deal-agreement-history-request.adapter';

// @ts-ignore
export interface DealAgreementsAddDealAgreementHistoryParams {
  dealId: number;
  body?: AddDealAgreementHistoryRequestAlt;
}

export function dealAgreementsAddDealAgreementHistoryAdapter(params?: DealAgreementsAddDealAgreementHistoryParams): DealAgreementsAddDealAgreementHistory$Params {
  if (!params) {
    return {} as DealAgreementsAddDealAgreementHistory$Params;
  }
  return {
      dealId: params.dealId,
      body: apiAddDealAgreementHistoryRequestAltDtoAdapter(params.body),
  };
}
