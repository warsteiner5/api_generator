import { ApiChangeDealBySupplierRequestAltDto } from '../../../swagger/models/api-change-deal-by-supplier-request';
import { ChangeDealBySupplierRequestAlt } from '../../models/change-deal-by-supplier-request-alt.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptChangeDealBySupplierRequestAltToUI(source?: ApiChangeDealBySupplierRequestAltDto | null): ChangeDealBySupplierRequestAlt {
  return {
    chatId: source?.ChatId ?? 0,
    dealId: source?.DealId ?? 0,
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    documentGuids: source?.DocumentGuids ?? [],
    powerOfAttorneyId: source?.PowerOfAttorneyId ?? '',
    signatureForDealFilesObject: (source?.signatureForDealFilesObject ?? null) as any,
    signatureForDealObject: source?.signatureForDealObject ?? '',
    signdata: source?.signdata ?? '',
  };
}
