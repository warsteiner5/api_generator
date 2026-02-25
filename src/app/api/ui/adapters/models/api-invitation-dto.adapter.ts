import { Invitation } from '../../models/invitation.interface';
import { ApiInvitationDto } from '../../../swagger/models/api-invitation-dto';
import { apiEntityDtoOfIntegerAdapter } from './api-entity-dto-of-integer.adapter';
import { apiInvitationMethodEnumAdapter } from '../enums/api-invitation-method-enum.adapter';

export const apiInvitationDtoAdapter = (source?: Invitation | null): ApiInvitationDto => {
  return {
    ...apiEntityDtoOfIntegerAdapter(source as unknown as Parameters<typeof apiEntityDtoOfIntegerAdapter>[0]),
    CreateDateTime: source?.createDateTime,
    SentDateTime: source?.sentDateTime,
    TradeId: source?.tradeId,
    TradeStateId: source?.tradeStateId,
    TradeLotId: source?.tradeLotId,
    LotStateId: source?.lotStateId,
    TradePurchaseName: source?.tradePurchaseName,
    CustomerId: source?.customerId,
    CustomerInn: source?.customerInn,
    CustomerKpp: source?.customerKpp,
    CustomerName: source?.customerName,
    SupplierId: source?.supplierId,
    SupplierEmail: source?.supplierEmail,
    SupplierInn: source?.supplierInn,
    SupplierName: source?.supplierName,
    InvitationMethod: source?.invitationMethod === null ? undefined : apiInvitationMethodEnumAdapter(source?.invitationMethod),
    IsSupplierMsp: source?.isSupplierMsp,
    ErrorInfo: source?.errorInfo,
  };
}
