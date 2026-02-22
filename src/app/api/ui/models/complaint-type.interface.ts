import { ComplaintTypeEnum } from '../enums/complaint-type.enum';

// @ts-ignore
export interface ComplaintType {
  description: string;
  needComment: boolean;
  type: ComplaintTypeEnum;
}
