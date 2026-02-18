import { ChangeFormToPaperByCustomerRequestAlt } from '../../models/change-form-to-paper-by-customer-request-alt.interface';
import { ApiChangeFormToPaperByCustomerRequestAltDto } from '../../../swagger/models/api-change-form-to-paper-by-customer-request';

export function adaptApiChangeFormToPaperByCustomerRequestAltDto(source?: ChangeFormToPaperByCustomerRequestAlt | null): ApiChangeFormToPaperByCustomerRequestAltDto {
  return {
    FileGuids: source?.fileGuids ?? [],
    Reason: source?.reason,
  };
}
