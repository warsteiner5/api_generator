import { TagStatusEnum } from '../enums/tag-status.enum';

export interface TagParticipantView {
  code: string;
  id: number;
  imageGuid: string;
  name: string;
  orderNumber: number;
  status: TagStatusEnum;
}
