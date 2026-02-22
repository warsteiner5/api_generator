import { ApiOrderDocumentDto } from '../../../swagger/models/api-order-document-dto';
import { OrderDocument } from '../../models/order-document.interface';

export const orderDocumentAdapter = (source?: ApiOrderDocumentDto | null): OrderDocument => {
  return (source ?? {}) as OrderDocument;
}
