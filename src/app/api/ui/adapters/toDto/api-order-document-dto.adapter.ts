import { OrderDocument } from '../../models/order-document.interface';
import { ApiOrderDocumentDto } from '../../../swagger/models/api-order-document-dto';

export function adaptApiOrderDocumentDto(source?: OrderDocument | null): ApiOrderDocumentDto {
  return (source ?? {}) as ApiOrderDocumentDto;
}
