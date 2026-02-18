import { ComplaintCloseReasonEnum } from '../enums/complaint-close-reason.enum';
import { ComplaintStateEnum } from '../enums/complaint-state.enum';
import { ParticipantOfferComplaintCreateRequestAlt } from './participant-offer-complaint-create-request-alt.interface';

export type Complaint = ParticipantOfferComplaintCreateRequestAlt & { 'Id'?: number; 'UserId'?: number; 'State'?: ComplaintStateEnum; 'ManagerId'?: number | null; 'ReviewDate'?: string | null; 'CloseReason'?: ComplaintCloseReasonEnum | null; 'CloseComment'?: string | null; };
