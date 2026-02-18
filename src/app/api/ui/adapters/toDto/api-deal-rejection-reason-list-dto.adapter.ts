import { DealRejectionReasonList } from '../../models/deal-rejection-reason-list.interface';
import { ApiDealRejectionReasonListDto } from '../../../swagger/models/api-deal-rejection-reason-list-dto';
import { adaptApiDealRejectionReasonDto } from './api-deal-rejection-reason-dto.adapter';

export function adaptApiDealRejectionReasonListDto(source?: DealRejectionReasonList | null): ApiDealRejectionReasonListDto {
  return {
    DealRejectionReasons: (source?.dealRejectionReasons ?? []).map((item) => adaptApiDealRejectionReasonDto(item)),
    EnableDealRejectReasonComment: source?.enableDealRejectReasonComment,
    EnableDealRejectionReasonsList: source?.enableDealRejectionReasonsList,
  };
}
