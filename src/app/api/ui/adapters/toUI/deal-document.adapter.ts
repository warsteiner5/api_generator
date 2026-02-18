import { ApiDealDocumentDto } from '../../../swagger/models/api-deal-document-dto';
import { DealDocument } from '../../models/deal-document.interface';
import { adaptDocumentChangeEnumToUI } from './document-change-enum.adapter';
import { adaptDocumentTypeEnumToUI } from './document-type-enum.adapter';

export function adaptDealDocumentToUI(source?: ApiDealDocumentDto | null): DealDocument {
  return {
    documentChange: adaptDocumentChangeEnumToUI(source?.DocumentChange),
    documentType: adaptDocumentTypeEnumToUI(source?.DocumentType),
    fileName: source?.FileName ?? '',
    hasCustomerDigitalSignature: source?.HasCustomerDigitalSignature ?? false,
    hasParticipantDigitalSignature: source?.HasParticipantDigitalSignature ?? false,
    id: source?.Id ?? '',
    signByCustomer: source?.SignByCustomer ?? '',
    signBySupplier: source?.SignBySupplier ?? '',
    size: source?.Size ?? 0,
    uploadDate: source?.UploadDate ?? '',
    url: source?.Url ?? '',
  };
}
