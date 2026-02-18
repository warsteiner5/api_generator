import { DetachedSignatureAlt } from './detached-signature-alt.interface';
import { KeyValuePairOfGuidAndByteOf } from './key-value-pair-of-guid-and-byte-of.interface';

export type DigitalSignature = DetachedSignatureAlt & { 'FileDetachedSigns'?: Array<KeyValuePairOfGuidAndByteOf> | null; 'IsNeedCompareDtos'?: boolean; 'PowerOfAttorneyId'?: string | null; 'PowerOfAttorneyRequired'?: boolean | null; };
