import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { ApiSignatureForDealDto } from '../../../swagger/models/api-signature-for-deal-dto';
import { apiDealObjectEnumAdapter } from '../enums/api-deal-object-enum.adapter';

export const apiSignatureForDealDtoAdapter = (source?: SignatureForDeal | null): ApiSignatureForDealDto => {
  return {
    DealObject: source?.dealObject === null ? undefined : apiDealObjectEnumAdapter(source?.dealObject),
    ExecutionTo: source?.executionTo,
    PowerOfAttorneyId: source?.powerOfAttorneyId,
    budgetid: source?.budgetid,
    dealId: source?.dealId,
    signatureForDealFilesObject: source?.signatureForDealFilesObject as any,
    signatureForDealObject: source?.signatureForDealObject,
    signdata: source?.signdata,
  };
}
