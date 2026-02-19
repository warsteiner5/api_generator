import { EntityDtoOfInteger } from './entity-dto-of-integer.interface';
import { InvitationMethodEnum } from '../enums/invitation-method.enum';

export type Invitation = EntityDtoOfInteger & { 'CreateDateTime'?: string; 'SentDateTime'?: string | null; 'TradeId'?: number; 'TradeStateId'?: number | null; 'TradeLotId'?: number | null; 'LotStateId'?: number | null; 'TradePurchaseName'?: string | null; 'CustomerId'?: number; 'CustomerInn'?: string | null; 'CustomerKpp'?: string | null; 'CustomerName'?: string | null; 'SupplierId'?: number | null; 'SupplierEmail'?: string | null; 'SupplierInn'?: string | null; 'SupplierName'?: string | null; 'InvitationMethod'?: InvitationMethodEnum | null; 'IsSupplierMsp'?: boolean | null; 'ErrorInfo'?: string | null; };
