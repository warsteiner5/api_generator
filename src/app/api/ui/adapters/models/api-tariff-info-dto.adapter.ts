import { TariffInfo } from '../../models/tariff-info.interface';
import { ApiTariffInfoDto } from '../../../swagger/models/api-tariff-info-dto';

export const apiTariffInfoDtoAdapter = (source?: TariffInfo | null): ApiTariffInfoDto => {
  return {
    FreePurchaseCount: source?.freePurchaseCount,
    IsTrial: source?.isTrial,
  };
}
