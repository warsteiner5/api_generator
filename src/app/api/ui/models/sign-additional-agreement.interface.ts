import { SignatureForAdditionalAgreement } from './signature-for-additional-agreement.interface';

export interface SignAdditionalAgreement {
  customerId: number;
  id: number;
  signature: SignatureForAdditionalAgreement;
}
