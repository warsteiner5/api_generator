import { ApiConsiderationProtocolDocumentDto } from '../../../swagger/models/api-consideration-protocol-document-dto';
import { ConsiderationProtocolDocument } from '../../models/consideration-protocol-document.interface';

export function adaptConsiderationProtocolDocumentToUI(source?: ApiConsiderationProtocolDocumentDto | null): ConsiderationProtocolDocument {
  return (source ?? {}) as ConsiderationProtocolDocument;
}
