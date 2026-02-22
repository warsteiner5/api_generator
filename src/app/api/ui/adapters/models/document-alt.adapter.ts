import { ApiDocumentAltDto } from '../../../swagger/models/api-document';
import { DocumentAlt } from '../../models/document-alt.interface';
import { tradeDocumentTypeEnumAdapter } from '../enums/trade-document-type-enum.adapter';

export const documentAltAdapter = (source?: ApiDocumentAltDto | null): DocumentAlt => {
  return {
    fileGuid: source?.FileGuid,
    isSigned: source?.IsSigned,
    name: source?.Name,
    sendDate: source?.SendDate,
    signByCustomerDate: source?.SignByCustomerDate,
    signByProviderDate: source?.SignByProviderDate,
    signDate: source?.SignDate,
    signedByCustomer: source?.SignedByCustomer,
    signedByOrganizer: source?.SignedByOrganizer,
    signedByOrganizerDate: source?.SignedByOrganizerDate,
    signedByProvider: source?.SignedByProvider,
    size: source?.Size,
    tradeDocumentType: source?.TradeDocumentType === null ? undefined : tradeDocumentTypeEnumAdapter(source?.TradeDocumentType),
    type: source?.Type,
  };
}
