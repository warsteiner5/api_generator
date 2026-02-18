/* tslint:disable */
/* eslint-disable */
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
export interface ApiQuotationSessionDealDto {
  DealId?: number;
  DealState?: ApiDealStateEnum;
  ParticipantFullName?: string | null;
}
