import { DocumentDto2 } from '../../models/document-dto-2.interface';
import { ApiDocumentDto2 } from '../../../swagger/models/api-document-dto-2';

export function adaptApiDocumentDto2(source?: DocumentDto2 | null): ApiDocumentDto2 {
  return {
    Base64Hash: source?.base64Hash,
    ChangeDate: source?.changeDate,
    DocumentContent: source?.documentContent,
    DocumentTypeId: source?.documentTypeId,
    FileGuid: source?.fileGuid,
    FileName: source?.fileName,
    FromLastRevision: source?.fromLastRevision,
    Id: source?.id,
    Name: source?.name,
    Signature: source?.signature,
    Size: source?.size,
    SoapHash: source?.soapHash,
    Tag: source?.tag,
    Type: source?.type,
    UploadDate: source?.uploadDate,
    UserFio: source?.userFio,
  };
}
