import { OrderAdditionalServiceAlt } from '../../models/order-additional-service-alt.interface';
import { ApiOrderAdditionalServiceAltDto } from '../../../swagger/models/api-order-additional-service';

export const apiOrderAdditionalServiceAltDtoAdapter = (source?: OrderAdditionalServiceAlt | null): ApiOrderAdditionalServiceAltDto => {
  return {
    Name: source?.name,
    Price: source?.price,
  };
}
