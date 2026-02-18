/* tslint:disable */
/* eslint-disable */
import { ApiDealObjectEnum } from '../models/api-deal-object-enum';
export interface ApiCancellationDto {
  CancellationReason?: string | null;
  DealObject?: ApiDealObjectEnum;
  Id?: number;
}
