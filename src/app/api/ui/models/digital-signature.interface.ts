import { DetachedSignatureAlt } from './detached-signature-alt.interface';
import { KeyValuePairOfGuidAndByteOfAlt } from './key-value-pair-of-guid-and-byte-of-alt.interface';

// @ts-ignore
export interface DigitalSignature extends DetachedSignatureAlt {
  fileDetachedSigns: KeyValuePairOfGuidAndByteOfAlt[];
  isNeedCompareDtos: boolean;
  powerOfAttorneyId: string;
  powerOfAttorneyRequired: boolean;
}
