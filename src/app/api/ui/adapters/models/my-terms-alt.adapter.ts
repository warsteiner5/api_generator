import { ApiMyTermsAltDto } from '../../../swagger/models/api-my-terms';
import { MyTermsAlt } from '../../models/my-terms-alt.interface';

export const myTermsAltAdapter = (source?: ApiMyTermsAltDto | null): MyTermsAlt => {
  return {
    minQuantity: source?.MinQuantity,
    quantity: source?.Quantity,
    unitPrice: source?.UnitPrice,
  };
}
