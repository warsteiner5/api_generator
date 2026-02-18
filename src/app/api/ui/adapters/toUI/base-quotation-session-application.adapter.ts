import { ApiBaseQuotationSessionApplicationDto } from '../../../swagger/models/api-base-quotation-session-application-dto';
import { BaseQuotationSessionApplication } from '../../models/base-quotation-session-application.interface';

export function adaptBaseQuotationSessionApplicationToUI(source?: ApiBaseQuotationSessionApplicationDto | null): BaseQuotationSessionApplication {
  return {
    id: source?.Id ?? 0,
  };
}
