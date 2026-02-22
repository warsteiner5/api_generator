import { ApiOkeiShortDto } from '../../../swagger/models/api-okei-short-dto';
import { OkeiShort } from '../../models/okei-short.interface';

export const okeiShortAdapter = (source?: ApiOkeiShortDto | null): OkeiShort => {
  return {
    code: source?.Code,
    fullName: source?.FullName,
    symbol: source?.Symbol,
  };
}
