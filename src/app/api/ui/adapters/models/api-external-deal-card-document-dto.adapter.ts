import { ExternalDealCardDocument } from '../../models/external-deal-card-document.interface';
import { ApiExternalDealCardDocumentDto } from '../../../swagger/models/api-external-deal-card-document-dto';

export const apiExternalDealCardDocumentDtoAdapter = (source?: ExternalDealCardDocument | null): ApiExternalDealCardDocumentDto => {
  return {
    FileName: source?.fileName,
    GuidId: source?.guidId,
    Id: source?.id,
    Name: source?.name,
    RowVersion: source?.rowVersion,
    Size: source?.size,
    UploadDate: source?.uploadDate,
  };
}
