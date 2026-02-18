import { UpdateResultAlt } from '../../models/update-result-alt.interface';
import { ApiUpdateResultAltDto } from '../../../swagger/models/api-update-result';

export function adaptApiUpdateResultAltDto(source?: UpdateResultAlt | null): ApiUpdateResultAltDto {
  return {
    Ignored: source?.ignored,
    Updated: source?.updated,
  };
}
