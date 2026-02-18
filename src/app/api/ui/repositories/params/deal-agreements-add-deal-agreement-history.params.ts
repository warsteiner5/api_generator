import { AddDealAgreementHistoryRequestAlt } from '../../models/add-deal-agreement-history-request-alt.interface';
import { DealAgreementsAddDealAgreementHistory$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-add-deal-agreement-history';
import { adaptApiAddDealAgreementHistoryRequestAltDto } from '../../adapters/toDto/api-add-deal-agreement-history-request.adapter';

export interface DealAgreementsAddDealAgreementHistoryParams {
  dealId: number;
  body?: AddDealAgreementHistoryRequestAlt;
}

export const dealAgreementsAddDealAgreementHistoryParamsAdapter = {
  adapt(params?: DealAgreementsAddDealAgreementHistoryParams): DealAgreementsAddDealAgreementHistory$Params {
    if (!params) {
      return {} as DealAgreementsAddDealAgreementHistory$Params;
    }
    return {
      dealId: params.dealId,
      body: adaptApiAddDealAgreementHistoryRequestAltDto(params.body),
    };
  }
};
