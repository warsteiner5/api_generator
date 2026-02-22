import { TagStatusEnum } from '../enums/tag-status.enum';

// @ts-ignore
export interface TagParticipantSetting {
  id: number;
  orderNumber: number;
  tagStatus: TagStatusEnum;
}
