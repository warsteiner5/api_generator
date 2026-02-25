import { ApiConsiderationProtocolDocumentDto } from '../../../swagger/models/api-consideration-protocol-document-dto';
import { ConsiderationProtocolDocument } from '../../models/consideration-protocol-document.interface';
import { considerationProtocolDocumentTypeEnumAdapter } from '../enums/consideration-protocol-document-type-enum.adapter';
import { documentDto3Adapter } from './document-dto-3.adapter';

export const considerationProtocolDocumentAdapter = (source?: ApiConsiderationProtocolDocumentDto | null): ConsiderationProtocolDocument => {
  return {
    ...documentDto3Adapter(source as unknown as Parameters<typeof documentDto3Adapter>[0]),
    documentType: source?.DocumentType === null ? undefined : considerationProtocolDocumentTypeEnumAdapter(source?.DocumentType),
  };
}
