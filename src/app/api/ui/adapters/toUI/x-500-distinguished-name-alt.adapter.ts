import { ApiX500DistinguishedNameAltDto } from '../../../swagger/models/api-x-500-distinguished-name';
import { X500DistinguishedNameAlt } from '../../models/x-500-distinguished-name-alt.interface';

export function adaptX500DistinguishedNameAltToUI(source?: ApiX500DistinguishedNameAltDto | null): X500DistinguishedNameAlt {
  return (source ?? {}) as X500DistinguishedNameAlt;
}
