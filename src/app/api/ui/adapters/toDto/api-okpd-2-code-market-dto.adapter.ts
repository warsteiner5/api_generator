import { Okpd2CodeMarket } from '../../models/okpd-2-code-market.interface';
import { ApiOkpd2CodeMarketDto } from '../../../swagger/models/api-okpd-2-code-market-dto';

export function adaptApiOkpd2CodeMarketDto(source?: Okpd2CodeMarket | null): ApiOkpd2CodeMarketDto {
  return {
    Code: source?.code,
    Id: source?.id,
    Name: source?.name,
  };
}
