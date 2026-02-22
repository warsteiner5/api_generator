import { ApiSignatureForDealDto } from '../../../swagger/models/api-signature-for-deal-dto';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { dealObjectEnumAdapter } from '../enums/deal-object-enum.adapter';

export const signatureForDealAdapter = (source?: ApiSignatureForDealDto | null): SignatureForDeal => {
  return {
    dealObject: source?.DealObject === null ? undefined : dealObjectEnumAdapter(source?.DealObject),
    executionTo: source?.ExecutionTo,
    powerOfAttorneyId: source?.PowerOfAttorneyId,
    budgetid: source?.budgetid,
    dealId: source?.dealId,
    signatureForDealFilesObject: source?.signatureForDealFilesObject as any,
    signatureForDealObject: source?.signatureForDealObject,
    signdata: source?.signdata,
  };
}
