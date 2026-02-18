import { CalculateSumRequestAlt } from '../../models/calculate-sum-request-alt.interface';
import { ApiCalculateSumRequestAltDto } from '../../../swagger/models/api-calculate-sum-request';

export function adaptApiCalculateSumRequestAltDto(source?: CalculateSumRequestAlt | null): ApiCalculateSumRequestAltDto {
  return {
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
  };
}
