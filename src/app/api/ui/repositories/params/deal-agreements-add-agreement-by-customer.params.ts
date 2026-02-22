import { AddDealAgreementRequestAlt } from '../../models/add-deal-agreement-request-alt.interface';
import { DealAgreementsAddAgreementByCustomer$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-add-agreement-by-customer';
import { apiAddDealAgreementRequestAltDtoAdapter } from '../../adapters/models/api-add-deal-agreement-request.adapter';

// @ts-ignore
export interface DealAgreementsAddAgreementByCustomerParams {
  dealId: number;
  body?: AddDealAgreementRequestAlt;
}

export function dealAgreementsAddAgreementByCustomerAdapter(params?: DealAgreementsAddAgreementByCustomerParams): DealAgreementsAddAgreementByCustomer$Params {
  if (!params) {
    return {} as DealAgreementsAddAgreementByCustomer$Params;
  }
  return {
      dealId: params.dealId,
      body: apiAddDealAgreementRequestAltDtoAdapter(params.body),
  };
}
