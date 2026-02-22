import { ComplaintCloseReasonEnum } from '../enums/complaint-close-reason.enum';
import { ComplaintStateEnum } from '../enums/complaint-state.enum';
import { ParticipantOfferComplaintCreateRequestAlt } from './participant-offer-complaint-create-request-alt.interface';

// @ts-ignore
export interface Complaint extends ParticipantOfferComplaintCreateRequestAlt {
  id: number;
  userId: number;
  state: ComplaintStateEnum;
  managerId: number;
  reviewDate: string;
  closeReason: ComplaintCloseReasonEnum;
  closeComment: string;
}
