import { DocumentAlt } from '../../models/document-alt.interface';
import { ApiDocumentAltDto } from '../../../swagger/models/api-document';
import { adaptApiTradeDocumentTypeEnum } from './api-trade-document-type-enum.adapter';

export function adaptApiDocumentAltDto(source?: DocumentAlt | null): ApiDocumentAltDto {
  return {
    FileGuid: source?.fileGuid,
    IsSigned: source?.isSigned,
    Name: source?.name,
    SendDate: source?.sendDate,
    SignByCustomerDate: source?.signByCustomerDate,
    SignByProviderDate: source?.signByProviderDate,
    SignDate: source?.signDate,
    SignedByCustomer: source?.signedByCustomer,
    SignedByOrganizer: source?.signedByOrganizer,
    SignedByOrganizerDate: source?.signedByOrganizerDate,
    SignedByProvider: source?.signedByProvider,
    Size: source?.size,
    TradeDocumentType: adaptApiTradeDocumentTypeEnum(source?.tradeDocumentType),
    Type: source?.type,
  };
}
