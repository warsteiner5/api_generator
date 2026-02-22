import { ApiTariffInfoDto } from '../../../swagger/models/api-tariff-info-dto';
import { TariffInfo } from '../../models/tariff-info.interface';

export const tariffInfoAdapter = (source?: ApiTariffInfoDto | null): TariffInfo => {
  return {
    freePurchaseCount: source?.FreePurchaseCount,
    isTrial: source?.IsTrial,
  };
}
