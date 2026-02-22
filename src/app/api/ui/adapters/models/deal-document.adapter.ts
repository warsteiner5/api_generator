import { ApiDealDocumentDto } from '../../../swagger/models/api-deal-document-dto';
import { DealDocument } from '../../models/deal-document.interface';
import { documentChangeEnumAdapter } from '../enums/document-change-enum.adapter';
import { documentTypeEnumAdapter } from '../enums/document-type-enum.adapter';

export const dealDocumentAdapter = (source?: ApiDealDocumentDto | null): DealDocument => {
  return {
    documentChange: source?.DocumentChange === null ? undefined : documentChangeEnumAdapter(source?.DocumentChange),
    documentType: source?.DocumentType === null ? undefined : documentTypeEnumAdapter(source?.DocumentType),
    fileName: source?.FileName,
    hasCustomerDigitalSignature: source?.HasCustomerDigitalSignature,
    hasParticipantDigitalSignature: source?.HasParticipantDigitalSignature,
    id: source?.Id,
    signByCustomer: source?.SignByCustomer,
    signBySupplier: source?.SignBySupplier,
    size: source?.Size,
    uploadDate: source?.UploadDate,
    url: source?.Url,
  };
}
