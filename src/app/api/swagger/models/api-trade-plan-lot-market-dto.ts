/* tslint:disable */
/* eslint-disable */
import { ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndInteger } from '../models/api-base-contract-dto-with-id-and-row-version-of-integer-and-integer';
import { ApiPurchasePlanKindAltEnum } from '../models/api-purchase-plan-kind';
import { ApiTradePlanLotItemMarketDto } from '../models/api-trade-plan-lot-item-market-dto';
export type ApiTradePlanLotMarketDto = ApiBaseContractDtoWithIdAndRowVersionOfIntegerAndInteger & {
'OrderNumber'?: string | null;
'Subject'?: string | null;
'StartingPrice'?: number | null;
'StartingPriceWithoutVat'?: number | null;
'PlanDepositPeriod'?: string | null;
'ExecutionAgreementDate'?: string | null;
'MethodPurchase'?: string | null;
'MethodPurchaseCode'?: number;
'PlanNumber'?: string | null;
'PlanId'?: number | null;
'PurchasePlanKind'?: ApiPurchasePlanKindAltEnum | null;
'Okato'?: string | null;
'RegionName'?: string | null;
'Items'?: Array<ApiTradePlanLotItemMarketDto> | null;
'Guid'?: string | null;
'CustomerName'?: string | null;
'TradeId'?: number | null;
'TradeIds'?: Array<number> | null;
'OrganizerId'?: number;
'OrganizerGuid'?: string;
'WorkGroups'?: Array<number> | null;
'BusinessUnitCode'?: string | null;
'CanCreateTrade'?: boolean;
};
