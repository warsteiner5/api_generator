import { ApiCalculateLotSumRequestAltDto } from '../../../swagger/models/api-calculate-lot-sum-request';
import { CalculateLotSumRequestAlt } from '../../models/calculate-lot-sum-request-alt.interface';
import { availableVatTypeEnumAdapter } from '../enums/available-vat-type-enum.adapter';

export const calculateLotSumRequestAltAdapter = (source?: ApiCalculateLotSumRequestAltDto | null): CalculateLotSumRequestAlt => {
  return {
    price: source?.Price,
    vatRate: source?.VatRate === null ? undefined : availableVatTypeEnumAdapter(source?.VatRate),
  };
}
