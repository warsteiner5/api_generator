import { ApiOrderAvailableOperationsDto } from '../../../swagger/models/api-order-available-operations-dto';
import { OrderAvailableOperations } from '../../models/order-available-operations.interface';

export function adaptOrderAvailableOperationsToUI(source?: ApiOrderAvailableOperationsDto | null): OrderAvailableOperations {
  return {
    isAgreementApproveAllowed: source?.IsAgreementApproveAllowed ?? false,
    isAgreementCreateAllowed: source?.IsAgreementCreateAllowed ?? false,
    isAgreementRejectAllowed: source?.IsAgreementRejectAllowed ?? false,
    isChangeToPriceRequestAllowed: source?.IsChangeToPriceRequestAllowed ?? false,
    isTradeProtocolDownloadAllowed: source?.IsTradeProtocolDownloadAllowed ?? false,
  };
}
