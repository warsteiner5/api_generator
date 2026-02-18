import { ComplaintCloseReasonEnum } from '../enums/complaint-close-reason.enum';

export interface ComplaintCloseAlt {
  closeReason: ComplaintCloseReasonEnum;
  comment: string;
  id: number;
}
