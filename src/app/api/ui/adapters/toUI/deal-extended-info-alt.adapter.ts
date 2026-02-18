import { ApiDealExtendedInfoAltDto } from '../../../swagger/models/api-deal-extended-info';
import { DealExtendedInfoAlt } from '../../models/deal-extended-info-alt.interface';
import { adaptDealDocumentToUI } from './deal-document.adapter';

export function adaptDealExtendedInfoAltToUI(source?: ApiDealExtendedInfoAltDto | null): DealExtendedInfoAlt {
  return {
    concludeDate: source?.ConcludeDate ?? '',
    dealId: source?.DealId ?? 0,
    dealNumber: source?.DealNumber ?? '',
    dealTerms: source?.DealTerms ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptDealDocumentToUI(item)),
  };
}
