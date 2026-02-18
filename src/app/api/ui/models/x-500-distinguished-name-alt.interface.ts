import { AsnEncodedDataAlt } from './asn-encoded-data-alt.interface';

export type X500DistinguishedNameAlt = AsnEncodedDataAlt & { 'Name'?: string | null; };
