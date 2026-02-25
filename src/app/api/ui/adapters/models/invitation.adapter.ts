import { ApiInvitationDto } from '../../../swagger/models/api-invitation-dto';
import { Invitation } from '../../models/invitation.interface';
import { entityDtoOfIntegerAdapter } from './entity-dto-of-integer.adapter';
import { invitationMethodEnumAdapter } from '../enums/invitation-method-enum.adapter';

export const invitationAdapter = (source?: ApiInvitationDto | null): Invitation => {
  return {
    ...entityDtoOfIntegerAdapter(source as unknown as Parameters<typeof entityDtoOfIntegerAdapter>[0]),
    createDateTime: source?.CreateDateTime,
    sentDateTime: source?.SentDateTime,
    tradeId: source?.TradeId,
    tradeStateId: source?.TradeStateId,
    tradeLotId: source?.TradeLotId,
    lotStateId: source?.LotStateId,
    tradePurchaseName: source?.TradePurchaseName,
    customerId: source?.CustomerId,
    customerInn: source?.CustomerInn,
    customerKpp: source?.CustomerKpp,
    customerName: source?.CustomerName,
    supplierId: source?.SupplierId,
    supplierEmail: source?.SupplierEmail,
    supplierInn: source?.SupplierInn,
    supplierName: source?.SupplierName,
    invitationMethod: source?.InvitationMethod === null ? undefined : invitationMethodEnumAdapter(source?.InvitationMethod),
    isSupplierMsp: source?.IsSupplierMsp,
    errorInfo: source?.ErrorInfo,
  };
}
