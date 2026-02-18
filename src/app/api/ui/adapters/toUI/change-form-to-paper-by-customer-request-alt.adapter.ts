import { ApiChangeFormToPaperByCustomerRequestAltDto } from '../../../swagger/models/api-change-form-to-paper-by-customer-request';
import { ChangeFormToPaperByCustomerRequestAlt } from '../../models/change-form-to-paper-by-customer-request-alt.interface';

export function adaptChangeFormToPaperByCustomerRequestAltToUI(source?: ApiChangeFormToPaperByCustomerRequestAltDto | null): ChangeFormToPaperByCustomerRequestAlt {
  return {
    fileGuids: source?.FileGuids ?? [],
    reason: source?.Reason ?? '',
  };
}
