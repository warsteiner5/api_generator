import { ApiChangeFormToPaperByCustomerRequestAltDto } from '../../../swagger/models/api-change-form-to-paper-by-customer-request';
import { ChangeFormToPaperByCustomerRequestAlt } from '../../models/change-form-to-paper-by-customer-request-alt.interface';

export const changeFormToPaperByCustomerRequestAltAdapter = (source?: ApiChangeFormToPaperByCustomerRequestAltDto | null): ChangeFormToPaperByCustomerRequestAlt => {
  return {
    fileGuids: source?.FileGuids,
    reason: source?.Reason,
  };
}
