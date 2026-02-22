import { AddDealAgreementRequestAlt } from '../../models/add-deal-agreement-request-alt.interface';
import { DealAgreementsAddAgreementByParticipant$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-add-agreement-by-participant';
import { apiAddDealAgreementRequestAltDtoAdapter } from '../../adapters/models/api-add-deal-agreement-request.adapter';

// @ts-ignore
export interface DealAgreementsAddAgreementByParticipantParams {
  dealId: number;
  body?: AddDealAgreementRequestAlt;
}

export function dealAgreementsAddAgreementByParticipantAdapter(params?: DealAgreementsAddAgreementByParticipantParams): DealAgreementsAddAgreementByParticipant$Params {
  if (!params) {
    return {} as DealAgreementsAddAgreementByParticipant$Params;
  }
  return {
      dealId: params.dealId,
      body: apiAddDealAgreementRequestAltDtoAdapter(params.body),
  };
}
