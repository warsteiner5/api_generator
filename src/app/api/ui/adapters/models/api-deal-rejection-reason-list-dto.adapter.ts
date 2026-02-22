import { DealRejectionReasonList } from '../../models/deal-rejection-reason-list.interface';
import { ApiDealRejectionReasonListDto } from '../../../swagger/models/api-deal-rejection-reason-list-dto';
import { apiDealRejectionReasonDtoAdapter } from './api-deal-rejection-reason-dto.adapter';

export const apiDealRejectionReasonListDtoAdapter = (source?: DealRejectionReasonList | null): ApiDealRejectionReasonListDto => {
  return {
    DealRejectionReasons: source?.dealRejectionReasons?.map((item) => apiDealRejectionReasonDtoAdapter(item)),
    EnableDealRejectReasonComment: source?.enableDealRejectReasonComment,
    EnableDealRejectionReasonsList: source?.enableDealRejectionReasonsList,
  };
}
