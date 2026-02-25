import { ApiOrderDocumentDto } from '../../../swagger/models/api-order-document-dto';
import { OrderDocument } from '../../models/order-document.interface';
import { documentAdapter } from './document.adapter';

export const orderDocumentAdapter = (source?: ApiOrderDocumentDto | null): OrderDocument => {
  return {
    ...documentAdapter(source as unknown as Parameters<typeof documentAdapter>[0]),
  };
}
