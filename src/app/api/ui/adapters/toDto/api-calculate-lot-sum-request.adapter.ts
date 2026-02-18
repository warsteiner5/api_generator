import { CalculateLotSumRequestAlt } from '../../models/calculate-lot-sum-request-alt.interface';
import { ApiCalculateLotSumRequestAltDto } from '../../../swagger/models/api-calculate-lot-sum-request';
import { adaptApiAvailableVatTypeEnum } from './api-available-vat-type-enum.adapter';

export function adaptApiCalculateLotSumRequestAltDto(source?: CalculateLotSumRequestAlt | null): ApiCalculateLotSumRequestAltDto {
  return {
    Price: source?.price,
    VatRate: adaptApiAvailableVatTypeEnum(source?.vatRate),
  };
}
