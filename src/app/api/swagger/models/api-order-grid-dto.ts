/* tslint:disable */
/* eslint-disable */
import { ApiTradeBusinessFlowEnum } from '../models/api-trade-business-flow-enum';
export interface ApiOrderGridDto {
  FlowType?: ApiTradeBusinessFlowEnum;
  Id?: number;
  OrderName?: string | null;
  OrderState?: string | null;
  Price?: number;
}
