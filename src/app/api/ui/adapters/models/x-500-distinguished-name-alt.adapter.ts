import { ApiX500DistinguishedNameAltDto } from '../../../swagger/models/api-x-500-distinguished-name';
import { X500DistinguishedNameAlt } from '../../models/x-500-distinguished-name-alt.interface';

export const x500DistinguishedNameAltAdapter = (source?: ApiX500DistinguishedNameAltDto | null): X500DistinguishedNameAlt => {
  return (source ?? {}) as X500DistinguishedNameAlt;
}
