import { ApiCalculateSumRequestAltDto } from '../../../swagger/models/api-calculate-sum-request';
import { CalculateSumRequestAlt } from '../../models/calculate-sum-request-alt.interface';

export function adaptCalculateSumRequestAltToUI(source?: ApiCalculateSumRequestAltDto | null): CalculateSumRequestAlt {
  return {
    quantity: source?.Quantity ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
  };
}
