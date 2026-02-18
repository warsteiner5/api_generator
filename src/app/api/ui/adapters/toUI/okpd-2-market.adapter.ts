import { ApiOkpd2MarketDto } from '../../../swagger/models/api-okpd-2-market-dto';
import { Okpd2Market } from '../../models/okpd-2-market.interface';

export function adaptOkpd2MarketToUI(source?: ApiOkpd2MarketDto | null): Okpd2Market {
  return {
    actual: source?.Actual ?? false,
    code: source?.Code ?? '',
    comment: source?.Comment ?? '',
    hasChildren: source?.HasChildren ?? false,
    name: source?.Name ?? '',
    parentCode: source?.ParentCode ?? '',
  };
}
