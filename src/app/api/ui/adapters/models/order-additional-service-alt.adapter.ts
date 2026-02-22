import { ApiOrderAdditionalServiceAltDto } from '../../../swagger/models/api-order-additional-service';
import { OrderAdditionalServiceAlt } from '../../models/order-additional-service-alt.interface';

export const orderAdditionalServiceAltAdapter = (source?: ApiOrderAdditionalServiceAltDto | null): OrderAdditionalServiceAlt => {
  return {
    name: source?.Name,
    price: source?.Price,
  };
}
