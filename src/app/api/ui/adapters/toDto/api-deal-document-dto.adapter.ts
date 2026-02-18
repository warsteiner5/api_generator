import { DealDocument } from '../../models/deal-document.interface';
import { ApiDealDocumentDto } from '../../../swagger/models/api-deal-document-dto';
import { adaptApiDocumentChangeEnum } from './api-document-change-enum.adapter';
import { adaptApiDocumentTypeEnum } from './api-document-type-enum.adapter';

export function adaptApiDealDocumentDto(source?: DealDocument | null): ApiDealDocumentDto {
  return {
    DocumentChange: adaptApiDocumentChangeEnum(source?.documentChange),
    DocumentType: adaptApiDocumentTypeEnum(source?.documentType),
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
