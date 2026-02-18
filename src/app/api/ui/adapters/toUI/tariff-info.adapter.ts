import { ApiTariffInfoDto } from '../../../swagger/models/api-tariff-info-dto';
import { TariffInfo } from '../../models/tariff-info.interface';

export function adaptTariffInfoToUI(source?: ApiTariffInfoDto | null): TariffInfo {
  return {
    freePurchaseCount: source?.FreePurchaseCount ?? 0,
    isTrial: source?.IsTrial ?? false,
  };
}
