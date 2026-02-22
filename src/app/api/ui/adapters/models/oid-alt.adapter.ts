import { ApiOidAltDto } from '../../../swagger/models/api-oid';
import { OidAlt } from '../../models/oid-alt.interface';

export const oidAltAdapter = (source?: ApiOidAltDto | null): OidAlt => {
  return {
    friendlyName: source?.FriendlyName,
    value: source?.Value,
  };
}
