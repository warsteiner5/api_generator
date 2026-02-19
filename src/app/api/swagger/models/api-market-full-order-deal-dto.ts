/* tslint:disable */
/* eslint-disable */
import { ApiMarketDealPositionDto } from '../models/api-market-deal-position-dto';
import { ApiMarketFullDealDto } from '../models/api-market-full-deal-dto';
import { ApiOrderStateEnum } from '../models/api-order-state-enum';
export type ApiMarketFullOrderDealDto = ApiMarketFullDealDto & {
'OrderState'?: ApiOrderStateEnum;
'MainPictureId'?: string | null;
'OfferId'?: number;
'ContractIsAcceptedByCustomer'?: boolean;
'DealPositions'?: Array<ApiMarketDealPositionDto> | null;
'TradePrice'?: number | null;
'DealPrice'?: number;
'IsDifferencesProtocolAllowed'?: boolean;
'IsDealPaperFormAllowed'?: boolean;
};
