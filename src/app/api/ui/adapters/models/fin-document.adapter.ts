import { ApiFinDocumentDto } from '../../../swagger/models/api-fin-document-dto';
import { FinDocument } from '../../models/fin-document.interface';

export const finDocumentAdapter = (source?: ApiFinDocumentDto | null): FinDocument => {
  return {
    checkState: source?.CheckState,
    fileName: source?.FileName,
    guid: source?.Guid,
    name: source?.Name,
    signaturePath: source?.SignaturePath,
    signed: source?.Signed,
    uploadTime: source?.UploadTime,
    url: source?.Url,
    viewSignatureUrl: source?.ViewSignatureUrl,
  };
}
