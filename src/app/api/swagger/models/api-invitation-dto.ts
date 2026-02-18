/* tslint:disable */
/* eslint-disable */
import { ApiEntityDtoOfIntegerAltDto } from '../models/api-entity-dto-of-integer';
import { ApiInvitationMethodEnum } from '../models/api-invitation-method-enum';
export type ApiInvitationDto = ApiEntityDtoOfIntegerAltDto & {
'CreateDateTime'?: string;
'SentDateTime'?: string | null;
'TradeId'?: number;
'TradeStateId'?: number | null;
'TradeLotId'?: number | null;
'LotStateId'?: number | null;
'TradePurchaseName'?: string | null;
'CustomerId'?: number;
'CustomerInn'?: string | null;
'CustomerKpp'?: string | null;
'CustomerName'?: string | null;
'SupplierId'?: number | null;
'SupplierEmail'?: string | null;
'SupplierInn'?: string | null;
'SupplierName'?: string | null;
'InvitationMethod'?: ApiInvitationMethodEnum | null;
'IsSupplierMsp'?: boolean | null;
'ErrorInfo'?: string | null;
};
