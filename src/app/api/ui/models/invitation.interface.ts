import { EntityDtoOfInteger } from './entity-dto-of-integer.interface';
import { InvitationMethodEnum } from '../enums/invitation-method.enum';

// @ts-ignore
export interface Invitation extends EntityDtoOfInteger {
  createDateTime: string;
  sentDateTime: string;
  tradeId: number;
  tradeStateId: number;
  tradeLotId: number;
  lotStateId: number;
  tradePurchaseName: string;
  customerId: number;
  customerInn: string;
  customerKpp: string;
  customerName: string;
  supplierId: number;
  supplierEmail: string;
  supplierInn: string;
  supplierName: string;
  invitationMethod: InvitationMethodEnum;
  isSupplierMsp: boolean;
  errorInfo: string;
}
