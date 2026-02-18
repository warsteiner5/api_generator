import { ApiExternalDealInfoDocumentForPublishAltDto } from '../../../swagger/models/api-external-deal-info-document-for-publish';
import { ExternalDealInfoDocumentForPublishAlt } from '../../models/external-deal-info-document-for-publish-alt.interface';

export function adaptExternalDealInfoDocumentForPublishAltToUI(source?: ApiExternalDealInfoDocumentForPublishAltDto | null): ExternalDealInfoDocumentForPublishAlt {
  return {
    fileName: source?.FileName ?? '',
    guidId: source?.GuidId ?? '',
    name: source?.Name ?? '',
    size: source?.Size ?? 0,
    uploadDate: source?.UploadDate ?? '',
  };
}
