import { ApiFinDocumentDto } from '../../../swagger/models/api-fin-document-dto';
import { FinDocument } from '../../models/fin-document.interface';

export function adaptFinDocumentToUI(source?: ApiFinDocumentDto | null): FinDocument {
  return {
    checkState: source?.CheckState ?? '',
    fileName: source?.FileName ?? '',
    guid: source?.Guid ?? '',
    name: source?.Name ?? '',
    signaturePath: source?.SignaturePath ?? '',
    signed: source?.Signed ?? false,
    uploadTime: source?.UploadTime ?? '',
    url: source?.Url ?? '',
    viewSignatureUrl: source?.ViewSignatureUrl ?? '',
  };
}
