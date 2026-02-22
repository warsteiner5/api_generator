import { DocumentAlt } from '../../models/document-alt.interface';
import { ApiDocumentAltDto } from '../../../swagger/models/api-document';
import { apiTradeDocumentTypeEnumAdapter } from '../enums/api-trade-document-type-enum.adapter';

export const apiDocumentAltDtoAdapter = (source?: DocumentAlt | null): ApiDocumentAltDto => {
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
    TradeDocumentType: source?.tradeDocumentType === null ? undefined : apiTradeDocumentTypeEnumAdapter(source?.tradeDocumentType),
    Type: source?.type,
  };
}
