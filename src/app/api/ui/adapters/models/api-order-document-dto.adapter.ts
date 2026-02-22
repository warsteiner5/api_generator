import { OrderDocument } from '../../models/order-document.interface';
import { ApiOrderDocumentDto } from '../../../swagger/models/api-order-document-dto';

export const apiOrderDocumentDtoAdapter = (source?: OrderDocument | null): ApiOrderDocumentDto => {
  return (source ?? {}) as ApiOrderDocumentDto;
}
