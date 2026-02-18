import { DealAgreementsApproveAgreementByCustomer$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-approve-agreement-by-customer';

export interface DealAgreementsApproveAgreementByCustomerParams {
  dealId: number;
  agreementId: number;
}

export const dealAgreementsApproveAgreementByCustomerParamsAdapter = {
  adapt(params?: DealAgreementsApproveAgreementByCustomerParams): DealAgreementsApproveAgreementByCustomer$Params {
    if (!params) {
      return {} as DealAgreementsApproveAgreementByCustomer$Params;
    }
    return {
      dealId: params.dealId,
      agreementId: params.agreementId,
    };
  }
};
