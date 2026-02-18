import { AddDealAgreementRequestAlt } from '../../models/add-deal-agreement-request-alt.interface';
import { ApiAddDealAgreementRequestAltDto } from '../../../swagger/models/api-add-deal-agreement-request';
import { adaptApiDealAgreementDetailDto } from './api-deal-agreement-detail-dto.adapter';

export function adaptApiAddDealAgreementRequestAltDto(source?: AddDealAgreementRequestAlt | null): ApiAddDealAgreementRequestAltDto {
  return {
    DealAgreementDetails: (source?.dealAgreementDetails ?? []).map((item) => adaptApiDealAgreementDetailDto(item)),
  };
}
