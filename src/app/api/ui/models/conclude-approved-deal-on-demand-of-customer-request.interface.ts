import { SignatureForDeal } from './signature-for-deal.interface';

// @ts-ignore
export interface ConcludeApprovedDealOnDemandOfCustomerRequest {
  organizationId: number;
  signatureForDealDto: SignatureForDeal;
  userId: number;
}
