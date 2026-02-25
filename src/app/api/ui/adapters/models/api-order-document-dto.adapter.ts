import { OrderDocument } from '../../models/order-document.interface';
import { ApiOrderDocumentDto } from '../../../swagger/models/api-order-document-dto';
import { apiDocumentDtoAdapter } from './api-document-dto.adapter';

export const apiOrderDocumentDtoAdapter = (source?: OrderDocument | null): ApiOrderDocumentDto => {
  return {
    ...apiDocumentDtoAdapter(source as unknown as Parameters<typeof apiDocumentDtoAdapter>[0]),
  };
}
