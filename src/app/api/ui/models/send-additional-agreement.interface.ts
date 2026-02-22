import { SignatureForAdditionalAgreement } from './signature-for-additional-agreement.interface';

// @ts-ignore
export interface SendAdditionalAgreement {
  dealId: number;
  id: number;
  signature: SignatureForAdditionalAgreement;
  tradeId: number;
}
