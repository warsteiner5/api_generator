import { DetachedSignatureAlt } from './detached-signature-alt.interface';
import { KeyValuePairOfGuidAndByteOfAlt } from './key-value-pair-of-guid-and-byte-of-alt.interface';

export type DigitalSignature = DetachedSignatureAlt & { 'FileDetachedSigns'?: Array<KeyValuePairOfGuidAndByteOfAlt> | null; 'IsNeedCompareDtos'?: boolean; 'PowerOfAttorneyId'?: string | null; 'PowerOfAttorneyRequired'?: boolean | null; };
