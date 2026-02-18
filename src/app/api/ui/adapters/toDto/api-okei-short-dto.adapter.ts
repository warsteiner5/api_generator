import { OkeiShort } from '../../models/okei-short.interface';
import { ApiOkeiShortDto } from '../../../swagger/models/api-okei-short-dto';

export function adaptApiOkeiShortDto(source?: OkeiShort | null): ApiOkeiShortDto {
  return {
    Code: source?.code,
    FullName: source?.fullName,
    Symbol: source?.symbol,
  };
}
