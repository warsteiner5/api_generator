import { ExternalDealInfoDocumentForPublishAlt } from '../../models/external-deal-info-document-for-publish-alt.interface';
import { ApiExternalDealInfoDocumentForPublishAltDto } from '../../../swagger/models/api-external-deal-info-document-for-publish';

export function adaptApiExternalDealInfoDocumentForPublishAltDto(source?: ExternalDealInfoDocumentForPublishAlt | null): ApiExternalDealInfoDocumentForPublishAltDto {
  return {
    FileName: source?.fileName,
    GuidId: source?.guidId,
    Name: source?.name,
    Size: source?.size,
    UploadDate: source?.uploadDate,
  };
}
