/* tslint:disable */
/* eslint-disable */
import { ApiLongTermVolumeAltDto } from '../models/api-long-term-volume';
import { ApiMarketDealPositionDto } from '../models/api-market-deal-position-dto';
export interface ApiEisIntegrationSendDealDto {
  CustomContractNumber?: string | null;
  DealId?: number;
  DealPositions?: Array<ApiMarketDealPositionDto> | null;
  ExecutionFrom?: string | null;
  ExecutionTo?: string | null;
  PaymentData?: Array<ApiLongTermVolumeAltDto> | null;
  Price?: number | null;
}
