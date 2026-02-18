/* tslint:disable */
/* eslint-disable */
import { ApiComplaintAuthorDto } from '../models/api-complaint-author-dto';
import { ApiComplaintCloseReasonEnum } from '../models/api-complaint-close-reason-enum';
import { ApiComplaintStateEnum } from '../models/api-complaint-state-enum';
import { ApiComplaintTypeEnum } from '../models/api-complaint-type-enum';
import { ApiManagerInfoDto } from '../models/api-manager-info-dto';
import { ApiParticipantOfferInfoDto } from '../models/api-participant-offer-info-dto';
export interface ApiComplaintInfoDto {
  CloseComment?: string | null;
  CloseReason?: ApiComplaintCloseReasonEnum | null;
  ComplaintAuthor?: ApiComplaintAuthorDto | null;
  ComplaintComment?: string | null;
  ComplaintId?: number;
  CreateDate?: string;
  Manager?: ApiManagerInfoDto | null;
  ParticipantOffer?: ApiParticipantOfferInfoDto | null;
  ReviewDate?: string | null;
  State?: ApiComplaintStateEnum;
  Type?: ApiComplaintTypeEnum;
}
