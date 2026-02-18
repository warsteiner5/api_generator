import { ComplaintTypeEnum } from '../enums/complaint-type.enum';

export interface ParticipantOfferComplaintCreateRequestAlt {
  complaintComment: string;
  participantOfferId: number;
  type: ComplaintTypeEnum;
}
