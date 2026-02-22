import { MyTermsAlt } from '../../models/my-terms-alt.interface';
import { ApiMyTermsAltDto } from '../../../swagger/models/api-my-terms';

export const apiMyTermsAltDtoAdapter = (source?: MyTermsAlt | null): ApiMyTermsAltDto => {
  return {
    MinQuantity: source?.minQuantity,
    Quantity: source?.quantity,
    UnitPrice: source?.unitPrice,
  };
}
