import { QuotationSessionApplicationDocument } from '../../models/quotation-session-application-document.interface';
import { ApiQuotationSessionApplicationDocumentDto } from '../../../swagger/models/api-quotation-session-application-document-dto';

export const apiQuotationSessionApplicationDocumentDtoAdapter = (source?: QuotationSessionApplicationDocument | null): ApiQuotationSessionApplicationDocumentDto => {
  return {
    FileName: source?.fileName,
    Id: source?.id,
  };
}
