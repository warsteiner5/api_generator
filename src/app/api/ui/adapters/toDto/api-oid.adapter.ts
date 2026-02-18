import { OidAlt } from '../../models/oid-alt.interface';
import { ApiOidAltDto } from '../../../swagger/models/api-oid';

export function adaptApiOidAltDto(source?: OidAlt | null): ApiOidAltDto {
  return {
    FriendlyName: source?.friendlyName,
    Value: source?.value,
  };
}
