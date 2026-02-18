import { ApiDocumentDto2 } from '../../../swagger/models/api-document-dto-2';
import { DocumentDto2 } from '../../models/document-dto-2.interface';

export function adaptDocumentDto2ToUI(source?: ApiDocumentDto2 | null): DocumentDto2 {
  return {
    base64Hash: source?.Base64Hash ?? '',
    changeDate: source?.ChangeDate ?? '',
    documentContent: source?.DocumentContent ?? '',
    documentTypeId: source?.DocumentTypeId ?? 0,
    fileGuid: source?.FileGuid ?? '',
    fileName: source?.FileName ?? '',
    fromLastRevision: source?.FromLastRevision ?? false,
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
    signature: source?.Signature ?? '',
    size: source?.Size ?? 0,
    soapHash: source?.SoapHash ?? '',
    tag: source?.Tag ?? 0,
    type: source?.Type ?? '',
    uploadDate: source?.UploadDate ?? '',
    userFio: source?.UserFio ?? '',
  };
}
