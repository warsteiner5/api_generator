import { BaseQuotationSessionApplication } from '../../models/base-quotation-session-application.interface';
import { ApiBaseQuotationSessionApplicationDto } from '../../../swagger/models/api-base-quotation-session-application-dto';

export const apiBaseQuotationSessionApplicationDtoAdapter = (source?: BaseQuotationSessionApplication | null): ApiBaseQuotationSessionApplicationDto => {
  return {
    Id: source?.id,
  };
}
