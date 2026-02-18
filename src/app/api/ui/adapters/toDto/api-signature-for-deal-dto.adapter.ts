import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { ApiSignatureForDealDto } from '../../../swagger/models/api-signature-for-deal-dto';
import { adaptApiDealObjectEnum } from './api-deal-object-enum.adapter';

export function adaptApiSignatureForDealDto(source?: SignatureForDeal | null): ApiSignatureForDealDto {
  return {
    DealObject: adaptApiDealObjectEnum(source?.dealObject),
    ExecutionTo: source?.executionTo,
    PowerOfAttorneyId: source?.powerOfAttorneyId,
    budgetid: source?.budgetid,
    dealId: source?.dealId,
    signatureForDealFilesObject: source?.signatureForDealFilesObject as any,
    signatureForDealObject: source?.signatureForDealObject,
    signdata: source?.signdata,
  };
}
