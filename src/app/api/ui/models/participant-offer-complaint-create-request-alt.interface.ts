import { ComplaintTypeEnum } from '../enums/complaint-type.enum';

// @ts-ignore
export interface ParticipantOfferComplaintCreateRequestAlt {
  complaintComment: string;
  participantOfferId: number;
  type: ComplaintTypeEnum;
}
