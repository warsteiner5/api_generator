import { ConsiderationProtocolDocument } from '../../models/consideration-protocol-document.interface';
import { ApiConsiderationProtocolDocumentDto } from '../../../swagger/models/api-consideration-protocol-document-dto';
import { apiConsiderationProtocolDocumentTypeEnumAdapter } from '../enums/api-consideration-protocol-document-type-enum.adapter';
import { apiDocumentDto3Adapter } from './api-document-dto-3.adapter';

export const apiConsiderationProtocolDocumentDtoAdapter = (source?: ConsiderationProtocolDocument | null): ApiConsiderationProtocolDocumentDto => {
  return {
    ...apiDocumentDto3Adapter(source as unknown as Parameters<typeof apiDocumentDto3Adapter>[0]),
    DocumentType: source?.documentType === null ? undefined : apiConsiderationProtocolDocumentTypeEnumAdapter(source?.documentType),
  };
}
