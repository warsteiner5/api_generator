import { ApiSignatureForDealDto } from '../../../swagger/models/api-signature-for-deal-dto';
import { SignatureForDeal } from '../../models/signature-for-deal.interface';
import { adaptDealObjectEnumToUI } from './deal-object-enum.adapter';

export function adaptSignatureForDealToUI(source?: ApiSignatureForDealDto | null): SignatureForDeal {
  return {
    dealObject: adaptDealObjectEnumToUI(source?.DealObject),
    executionTo: source?.ExecutionTo ?? '',
    powerOfAttorneyId: source?.PowerOfAttorneyId ?? '',
    budgetid: source?.budgetid ?? 0,
    dealId: source?.dealId ?? 0,
    signatureForDealFilesObject: (source?.signatureForDealFilesObject ?? null) as any,
    signatureForDealObject: source?.signatureForDealObject ?? '',
    signdata: source?.signdata ?? '',
  };
}
