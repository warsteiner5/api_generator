import { ApiDocumentDto2 } from '../../../swagger/models/api-document-dto-2';
import { DocumentDto2 } from '../../models/document-dto-2.interface';

export const documentDto2Adapter = (source?: ApiDocumentDto2 | null): DocumentDto2 => {
  return {
    base64Hash: source?.Base64Hash,
    changeDate: source?.ChangeDate,
    documentContent: source?.DocumentContent,
    documentTypeId: source?.DocumentTypeId,
    fileGuid: source?.FileGuid,
    fileName: source?.FileName,
    fromLastRevision: source?.FromLastRevision,
    id: source?.Id,
    name: source?.Name,
    signature: source?.Signature,
    size: source?.Size,
    soapHash: source?.SoapHash,
    tag: source?.Tag,
    type: source?.Type,
    uploadDate: source?.UploadDate,
    userFio: source?.UserFio,
  };
}
