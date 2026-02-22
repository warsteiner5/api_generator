import { ChangeDealBySupplierRequestAlt } from '../../models/change-deal-by-supplier-request-alt.interface';
import { ApiChangeDealBySupplierRequestAltDto } from '../../../swagger/models/api-change-deal-by-supplier-request';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiChangeDealBySupplierRequestAltDtoAdapter = (source?: ChangeDealBySupplierRequestAlt | null): ApiChangeDealBySupplierRequestAltDto => {
  return {
    ChatId: source?.chatId,
    DealId: source?.dealId,
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    DocumentGuids: source?.documentGuids,
    PowerOfAttorneyId: source?.powerOfAttorneyId,
    signatureForDealFilesObject: source?.signatureForDealFilesObject as any,
    signatureForDealObject: source?.signatureForDealObject,
    signdata: source?.signdata,
  };
}
