import { ApiBaseQuotationSessionApplicationDto } from '../../../swagger/models/api-base-quotation-session-application-dto';
import { BaseQuotationSessionApplication } from '../../models/base-quotation-session-application.interface';

export const baseQuotationSessionApplicationAdapter = (source?: ApiBaseQuotationSessionApplicationDto | null): BaseQuotationSessionApplication => {
  return {
    id: source?.Id,
  };
}
