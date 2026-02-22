import { SignatureForAdditionalAgreement } from './signature-for-additional-agreement.interface';

// @ts-ignore
export interface SignAdditionalAgreement {
  customerId: number;
  id: number;
  signature: SignatureForAdditionalAgreement;
}
