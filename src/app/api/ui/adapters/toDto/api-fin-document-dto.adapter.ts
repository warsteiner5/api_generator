import { FinDocument } from '../../models/fin-document.interface';
import { ApiFinDocumentDto } from '../../../swagger/models/api-fin-document-dto';

export function adaptApiFinDocumentDto(source?: FinDocument | null): ApiFinDocumentDto {
  return {
    CheckState: source?.checkState,
    FileName: source?.fileName,
    Guid: source?.guid,
    Name: source?.name,
    SignaturePath: source?.signaturePath,
    Signed: source?.signed,
    UploadTime: source?.uploadTime,
    Url: source?.url,
    ViewSignatureUrl: source?.viewSignatureUrl,
  };
}
