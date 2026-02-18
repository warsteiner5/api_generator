import { ApiDocumentAltDto } from '../../../swagger/models/api-document';
import { DocumentAlt } from '../../models/document-alt.interface';
import { adaptTradeDocumentTypeEnumToUI } from './trade-document-type-enum.adapter';

export function adaptDocumentAltToUI(source?: ApiDocumentAltDto | null): DocumentAlt {
  return {
    fileGuid: source?.FileGuid ?? '',
    isSigned: source?.IsSigned ?? false,
    name: source?.Name ?? '',
    sendDate: source?.SendDate ?? '',
    signByCustomerDate: source?.SignByCustomerDate ?? '',
    signByProviderDate: source?.SignByProviderDate ?? '',
    signDate: source?.SignDate ?? '',
    signedByCustomer: source?.SignedByCustomer ?? false,
    signedByOrganizer: source?.SignedByOrganizer ?? false,
    signedByOrganizerDate: source?.SignedByOrganizerDate ?? '',
    signedByProvider: source?.SignedByProvider ?? false,
    size: source?.Size ?? 0,
    tradeDocumentType: adaptTradeDocumentTypeEnumToUI(source?.TradeDocumentType),
    type: source?.Type ?? '',
  };
}
