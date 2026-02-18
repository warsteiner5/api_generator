/* tslint:disable */
/* eslint-disable */
import { ApiApplicationInfoForTradeDto } from '../models/api-application-info-for-trade-dto';
import { ApiApplicationRejectionReasonDto } from '../models/api-application-rejection-reason-dto';
import { ApiDealRejectionReasonListDto } from '../models/api-deal-rejection-reason-list-dto';
import { ApiDealStateEnum } from '../models/api-deal-state-enum';
export interface ApiViewApplicationsForTradeDto {
  Applications?: Array<ApiApplicationInfoForTradeDto> | null;
  DealId?: number | null;
  DealRejectionReasonList?: ApiDealRejectionReasonListDto | null;
  DealState?: ApiDealStateEnum | null;
  IsApplicationAlreadyCreated?: boolean;
  IsWaitingPeriodEnabled?: boolean;
  RejectionReasons?: Array<ApiApplicationRejectionReasonDto> | null;
}
