import { ApiDealExtendedInfoAltDto } from '../../../swagger/models/api-deal-extended-info';
import { DealExtendedInfoAlt } from '../../models/deal-extended-info-alt.interface';
import { dealDocumentAdapter } from './deal-document.adapter';

export const dealExtendedInfoAltAdapter = (source?: ApiDealExtendedInfoAltDto | null): DealExtendedInfoAlt => {
  return {
    concludeDate: source?.ConcludeDate,
    dealId: source?.DealId,
    dealNumber: source?.DealNumber,
    dealTerms: source?.DealTerms,
    documents: source?.Documents?.map((item) => dealDocumentAdapter(item)),
  };
}
