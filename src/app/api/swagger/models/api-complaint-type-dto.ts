/* tslint:disable */
/* eslint-disable */
import { ApiComplaintTypeEnum } from '../models/api-complaint-type-enum';
export interface ApiComplaintTypeDto {
  Description?: string | null;
  NeedComment?: boolean;
  Type?: ApiComplaintTypeEnum;
}
