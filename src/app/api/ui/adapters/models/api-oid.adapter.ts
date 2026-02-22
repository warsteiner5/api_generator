import { OidAlt } from '../../models/oid-alt.interface';
import { ApiOidAltDto } from '../../../swagger/models/api-oid';

export const apiOidAltDtoAdapter = (source?: OidAlt | null): ApiOidAltDto => {
  return {
    FriendlyName: source?.friendlyName,
    Value: source?.value,
  };
}
