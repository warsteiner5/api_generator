import { TagStatusEnum } from '../enums/tag-status.enum';

export interface TagParticipantSetting {
  id: number;
  orderNumber: number;
  tagStatus: TagStatusEnum;
}
