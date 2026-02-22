import { ApiAddDealAgreementRequestAltDto } from '../../../swagger/models/api-add-deal-agreement-request';
import { AddDealAgreementRequestAlt } from '../../models/add-deal-agreement-request-alt.interface';
import { dealAgreementDetailAdapter } from './deal-agreement-detail.adapter';

export const addDealAgreementRequestAltAdapter = (source?: ApiAddDealAgreementRequestAltDto | null): AddDealAgreementRequestAlt => {
  return {
    dealAgreementDetails: source?.DealAgreementDetails?.map((item) => dealAgreementDetailAdapter(item)),
  };
}
