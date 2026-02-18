import { AddDealAgreementRequestAlt } from '../../models/add-deal-agreement-request-alt.interface';
import { DealAgreementsAddAgreementByParticipant$Params } from '../../../swagger/fn/deal-agreements/deal-agreements-add-agreement-by-participant';
import { adaptApiAddDealAgreementRequestAltDto } from '../../adapters/toDto/api-add-deal-agreement-request.adapter';

export interface DealAgreementsAddAgreementByParticipantParams {
  dealId: number;
  body?: AddDealAgreementRequestAlt;
}

export const dealAgreementsAddAgreementByParticipantParamsAdapter = {
  adapt(params?: DealAgreementsAddAgreementByParticipantParams): DealAgreementsAddAgreementByParticipant$Params {
    if (!params) {
      return {} as DealAgreementsAddAgreementByParticipant$Params;
    }
    return {
      dealId: params.dealId,
      body: adaptApiAddDealAgreementRequestAltDto(params.body),
    };
  }
};
