import { ApiOrderDocumentDto } from '../../../swagger/models/api-order-document-dto';
import { OrderDocument } from '../../models/order-document.interface';

export function adaptOrderDocumentToUI(source?: ApiOrderDocumentDto | null): OrderDocument {
  return (source ?? {}) as OrderDocument;
}
