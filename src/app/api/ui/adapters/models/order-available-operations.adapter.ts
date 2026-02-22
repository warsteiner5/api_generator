import { ApiOrderAvailableOperationsDto } from '../../../swagger/models/api-order-available-operations-dto';
import { OrderAvailableOperations } from '../../models/order-available-operations.interface';

export const orderAvailableOperationsAdapter = (source?: ApiOrderAvailableOperationsDto | null): OrderAvailableOperations => {
  return {
    isAgreementApproveAllowed: source?.IsAgreementApproveAllowed,
    isAgreementCreateAllowed: source?.IsAgreementCreateAllowed,
    isAgreementRejectAllowed: source?.IsAgreementRejectAllowed,
    isChangeToPriceRequestAllowed: source?.IsChangeToPriceRequestAllowed,
    isTradeProtocolDownloadAllowed: source?.IsTradeProtocolDownloadAllowed,
  };
}
