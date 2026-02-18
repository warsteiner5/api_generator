import { ApiAdditionalAgreementDocumentDto } from '../../../swagger/models/api-additional-agreement-document-dto';
import { AdditionalAgreementDocument } from '../../models/additional-agreement-document.interface';

export function adaptAdditionalAgreementDocumentToUI(source?: ApiAdditionalAgreementDocumentDto | null): AdditionalAgreementDocument {
  return {
    changeDate: source?.ChangeDate ?? '',
    extension: source?.Extension ?? '',
    guid: source?.Guid ?? '',
    name: source?.Name ?? '',
    size: source?.Size ?? 0,
  };
}
