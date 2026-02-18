import { ApiMyTermsAltDto } from '../../../swagger/models/api-my-terms';
import { MyTermsAlt } from '../../models/my-terms-alt.interface';

export function adaptMyTermsAltToUI(source?: ApiMyTermsAltDto | null): MyTermsAlt {
  return {
    minQuantity: source?.MinQuantity ?? 0,
    quantity: source?.Quantity ?? 0,
    unitPrice: source?.UnitPrice ?? 0,
  };
}
