import { CalculateLotSumRequestAlt } from '../../models/calculate-lot-sum-request-alt.interface';
import { ApiCalculateLotSumRequestAltDto } from '../../../swagger/models/api-calculate-lot-sum-request';
import { apiAvailableVatTypeEnumAdapter } from '../enums/api-available-vat-type-enum.adapter';

export const apiCalculateLotSumRequestAltDtoAdapter = (source?: CalculateLotSumRequestAlt | null): ApiCalculateLotSumRequestAltDto => {
  return {
    Price: source?.price,
    VatRate: source?.vatRate === null ? undefined : apiAvailableVatTypeEnumAdapter(source?.vatRate),
  };
}
