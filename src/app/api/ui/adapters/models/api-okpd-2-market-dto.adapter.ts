import { Okpd2Market } from '../../models/okpd-2-market.interface';
import { ApiOkpd2MarketDto } from '../../../swagger/models/api-okpd-2-market-dto';

export const apiOkpd2MarketDtoAdapter = (source?: Okpd2Market | null): ApiOkpd2MarketDto => {
  return {
    Actual: source?.actual,
    Code: source?.code,
    Comment: source?.comment,
    HasChildren: source?.hasChildren,
    Name: source?.name,
    ParentCode: source?.parentCode,
  };
}
