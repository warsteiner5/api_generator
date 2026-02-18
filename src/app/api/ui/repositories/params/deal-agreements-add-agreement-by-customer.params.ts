import { AddDealAgreementRequestAlt } from '../../models/add-deal-agreement-request-alt.interface';
import { DealAgreementsAddAgreementByCustomer$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-add-agreement-by-customer';
import { adaptApiAddDealAgreementRequestAltDto } from '../../adapters/toDto/api-add-deal-agreement-request.adapter';

export interface DealAgreementsAddAgreementByCustomerParams {
  dealId: number;
  body?: AddDealAgreementRequestAlt;
}

export const dealAgreementsAddAgreementByCustomerParamsAdapter = {
  adapt(params?: DealAgreementsAddAgreementByCustomerParams): DealAgreementsAddAgreementByCustomer$Params {
    if (!params) {
      return {} as DealAgreementsAddAgreementByCustomer$Params;
    }
    return {
      dealId: params.dealId,
      body: adaptApiAddDealAgreementRequestAltDto(params.body),
    };
  }
};
