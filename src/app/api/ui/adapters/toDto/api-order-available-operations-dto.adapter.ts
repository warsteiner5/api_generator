import { OrderAvailableOperations } from '../../models/order-available-operations.interface';
import { ApiOrderAvailableOperationsDto } from '../../../swagger/models/api-order-available-operations-dto';

export function adaptApiOrderAvailableOperationsDto(source?: OrderAvailableOperations | null): ApiOrderAvailableOperationsDto {
  return {
    IsAgreementApproveAllowed: source?.isAgreementApproveAllowed,
    IsAgreementCreateAllowed: source?.isAgreementCreateAllowed,
    IsAgreementRejectAllowed: source?.isAgreementRejectAllowed,
    IsChangeToPriceRequestAllowed: source?.isChangeToPriceRequestAllowed,
    IsTradeProtocolDownloadAllowed: source?.isTradeProtocolDownloadAllowed,
  };
}
