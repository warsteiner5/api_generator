/* tslint:disable */
/* eslint-disable */
import { ApiDealRejectionReasonDto } from '../models/api-deal-rejection-reason-dto';
export interface ApiDealRejectionReasonListDto {
  DealRejectionReasons?: Array<ApiDealRejectionReasonDto> | null;
  EnableDealRejectReasonComment?: boolean;
  EnableDealRejectionReasonsList?: boolean;
}
