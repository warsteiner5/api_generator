import { ApiCalculateSumRequestAltDto } from '../../../swagger/models/api-calculate-sum-request';
import { CalculateSumRequestAlt } from '../../models/calculate-sum-request-alt.interface';

export const calculateSumRequestAltAdapter = (source?: ApiCalculateSumRequestAltDto | null): CalculateSumRequestAlt => {
  return {
    quantity: source?.Quantity,
    unitPrice: source?.UnitPrice,
  };
}
