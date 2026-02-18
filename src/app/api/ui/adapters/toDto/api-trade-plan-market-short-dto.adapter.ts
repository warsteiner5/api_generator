import { TradePlanMarketShort } from '../../models/trade-plan-market-short.interface';
import { ApiTradePlanMarketShortDto } from '../../../swagger/models/api-trade-plan-market-short-dto';

export function adaptApiTradePlanMarketShortDto(source?: TradePlanMarketShort | null): ApiTradePlanMarketShortDto {
  return {
    CreateDateTime: source?.createDateTime,
    FileGuid: source?.fileGuid,
    Id: source?.id,
    ItemsCount: source?.itemsCount,
    Name: source?.name,
  };
}
