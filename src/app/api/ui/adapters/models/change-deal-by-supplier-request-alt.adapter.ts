import { ApiChangeDealBySupplierRequestAltDto } from '../../../swagger/models/api-change-deal-by-supplier-request';
import { ChangeDealBySupplierRequestAlt } from '../../models/change-deal-by-supplier-request-alt.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const changeDealBySupplierRequestAltAdapter = (source?: ApiChangeDealBySupplierRequestAltDto | null): ChangeDealBySupplierRequestAlt => {
  return {
    chatId: source?.ChatId,
    dealId: source?.DealId,
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    documentGuids: source?.DocumentGuids,
    powerOfAttorneyId: source?.PowerOfAttorneyId,
    signatureForDealFilesObject: source?.signatureForDealFilesObject as any,
    signatureForDealObject: source?.signatureForDealObject,
    signdata: source?.signdata,
  };
}
