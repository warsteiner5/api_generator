import { ApiCalculateLotSumRequestAltDto } from '../../../swagger/models/api-calculate-lot-sum-request';
import { CalculateLotSumRequestAlt } from '../../models/calculate-lot-sum-request-alt.interface';
import { adaptAvailableVatTypeEnumToUI } from './available-vat-type-enum.adapter';

export function adaptCalculateLotSumRequestAltToUI(source?: ApiCalculateLotSumRequestAltDto | null): CalculateLotSumRequestAlt {
  return {
    price: source?.Price ?? 0,
    vatRate: adaptAvailableVatTypeEnumToUI(source?.VatRate),
  };
}
