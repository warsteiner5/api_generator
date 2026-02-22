import { ComplaintAuthor } from './complaint-author.interface';
import { ComplaintCloseReasonEnum } from '../enums/complaint-close-reason.enum';
import { ComplaintStateEnum } from '../enums/complaint-state.enum';
import { ComplaintTypeEnum } from '../enums/complaint-type.enum';
import { ManagerInfo } from './manager-info.interface';
import { ParticipantOfferInfo } from './participant-offer-info.interface';

// @ts-ignore
export interface ComplaintInfo {
  closeComment: string;
  closeReason: ComplaintCloseReasonEnum;
  complaintAuthor: ComplaintAuthor;
  complaintComment: string;
  complaintId: number;
  createDate: string;
  manager: ManagerInfo;
  participantOffer: ParticipantOfferInfo;
  reviewDate: string;
  state: ComplaintStateEnum;
  type: ComplaintTypeEnum;
}
