import { SignatureForAdditionalAgreement } from './signature-for-additional-agreement.interface';

export interface SendAdditionalAgreement {
  dealId: number;
  id: number;
  signature: SignatureForAdditionalAgreement;
  tradeId: number;
}
