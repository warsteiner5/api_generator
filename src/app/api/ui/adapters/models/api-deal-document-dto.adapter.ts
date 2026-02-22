import { DealDocument } from '../../models/deal-document.interface';
import { ApiDealDocumentDto } from '../../../swagger/models/api-deal-document-dto';
import { apiDocumentChangeEnumAdapter } from '../enums/api-document-change-enum.adapter';
import { apiDocumentTypeEnumAdapter } from '../enums/api-document-type-enum.adapter';

export const apiDealDocumentDtoAdapter = (source?: DealDocument | null): ApiDealDocumentDto => {
  return {
    DocumentChange: source?.documentChange === null ? undefined : apiDocumentChangeEnumAdapter(source?.documentChange),
    DocumentType: source?.documentType === null ? undefined : apiDocumentTypeEnumAdapter(source?.documentType),
    FileName: source?.fileName,
    HasCustomerDigitalSignature: source?.hasCustomerDigitalSignature,
    HasParticipantDigitalSignature: source?.hasParticipantDigitalSignature,
    Id: source?.id,
    SignByCustomer: source?.signByCustomer,
    SignBySupplier: source?.signBySupplier,
    Size: source?.size,
    UploadDate: source?.uploadDate,
    Url: source?.url,
  };
}
