import { ConsiderationProtocolDocument } from '../../models/consideration-protocol-document.interface';
import { ApiConsiderationProtocolDocumentDto } from '../../../swagger/models/api-consideration-protocol-document-dto';

export function adaptApiConsiderationProtocolDocumentDto(source?: ConsiderationProtocolDocument | null): ApiConsiderationProtocolDocumentDto {
  return (source ?? {}) as ApiConsiderationProtocolDocumentDto;
}
