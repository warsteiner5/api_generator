import { ApiAddDealAgreementRequestAltDto } from '../../../swagger/models/api-add-deal-agreement-request';
import { AddDealAgreementRequestAlt } from '../../models/add-deal-agreement-request-alt.interface';
import { adaptDealAgreementDetailToUI } from './deal-agreement-detail.adapter';

export function adaptAddDealAgreementRequestAltToUI(source?: ApiAddDealAgreementRequestAltDto | null): AddDealAgreementRequestAlt {
  return {
    dealAgreementDetails: (source?.DealAgreementDetails ?? []).map((item) => adaptDealAgreementDetailToUI(item)),
  };
}
