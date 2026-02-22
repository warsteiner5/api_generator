import { DealAgreementsApproveAgreementByParticipant$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-approve-agreement-by-participant';

// @ts-ignore
export interface DealAgreementsApproveAgreementByParticipantParams {
  dealId: number;
  agreementId: number;
}

export function dealAgreementsApproveAgreementByParticipantAdapter(params?: DealAgreementsApproveAgreementByParticipantParams): DealAgreementsApproveAgreementByParticipant$Params {
  if (!params) {
    return {} as DealAgreementsApproveAgreementByParticipant$Params;
  }
  return {
      dealId: params.dealId,
      agreementId: params.agreementId,
  };
}
