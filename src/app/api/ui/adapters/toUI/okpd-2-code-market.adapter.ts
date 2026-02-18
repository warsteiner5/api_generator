import { ApiOkpd2CodeMarketDto } from '../../../swagger/models/api-okpd-2-code-market-dto';
import { Okpd2CodeMarket } from '../../models/okpd-2-code-market.interface';

export function adaptOkpd2CodeMarketToUI(source?: ApiOkpd2CodeMarketDto | null): Okpd2CodeMarket {
  return {
    code: source?.Code ?? '',
    id: source?.Id ?? 0,
    name: source?.Name ?? '',
  };
}
