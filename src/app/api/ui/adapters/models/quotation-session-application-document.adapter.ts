import { ApiQuotationSessionApplicationDocumentDto } from '../../../swagger/models/api-quotation-session-application-document-dto';
import { QuotationSessionApplicationDocument } from '../../models/quotation-session-application-document.interface';

export const quotationSessionApplicationDocumentAdapter = (source?: ApiQuotationSessionApplicationDocumentDto | null): QuotationSessionApplicationDocument => {
  return {
    fileName: source?.FileName,
    id: source?.Id,
  };
}
