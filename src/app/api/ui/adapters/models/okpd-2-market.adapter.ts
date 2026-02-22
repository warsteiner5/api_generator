import { ApiOkpd2MarketDto } from '../../../swagger/models/api-okpd-2-market-dto';
import { Okpd2Market } from '../../models/okpd-2-market.interface';

export const okpd2MarketAdapter = (source?: ApiOkpd2MarketDto | null): Okpd2Market => {
  return {
    actual: source?.Actual,
    code: source?.Code,
    comment: source?.Comment,
    hasChildren: source?.HasChildren,
    name: source?.Name,
    parentCode: source?.ParentCode,
  };
}
