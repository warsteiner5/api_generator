import { ComplaintTypeEnum } from '../enums/complaint-type.enum';

export interface ComplaintType {
  description: string;
  needComment: boolean;
  type: ComplaintTypeEnum;
}
