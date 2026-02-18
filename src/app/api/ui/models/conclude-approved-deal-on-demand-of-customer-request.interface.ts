import { SignatureForDeal } from './signature-for-deal.interface';

export interface ConcludeApprovedDealOnDemandOfCustomerRequest {
  organizationId: number;
  signatureForDealDto: SignatureForDeal;
  userId: number;
}
