export interface Account {
  applicationId: number;
  availableSum: number;
  blocked: boolean;
  blockedSum: number;
  createDateTime: string;
  currency: string;
  description: string;
  etpName: string;
  id: number;
  isRefundMoneyAvailable: boolean;
  isShowRefundInstruction: boolean;
  lastChangeDateTime: string;
  number: string;
  organizationId: number;
  paymentSum: number;
  platformId: number;
  redirectUrlForSfs: string;
  refundMoneyUrl: string;
  withdrawalSum: number;
}
