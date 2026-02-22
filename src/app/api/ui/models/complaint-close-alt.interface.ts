import { ComplaintCloseReasonEnum } from '../enums/complaint-close-reason.enum';

// @ts-ignore
export interface ComplaintCloseAlt {
  closeReason: ComplaintCloseReasonEnum;
  comment: string;
  id: number;
}
