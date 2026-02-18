import { DealAgreementsApproveAgreementByParticipant$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-approve-agreement-by-participant';

export interface DealAgreementsApproveAgreementByParticipantParams {
  dealId: number;
  agreementId: number;
}

export const dealAgreementsApproveAgreementByParticipantParamsAdapter = {
  adapt(params?: DealAgreementsApproveAgreementByParticipantParams): DealAgreementsApproveAgreementByParticipant$Params {
    if (!params) {
      return {} as DealAgreementsApproveAgreementByParticipant$Params;
    }
    return {
      dealId: params.dealId,
      agreementId: params.agreementId,
    };
  }
};
