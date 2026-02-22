import { ExternalOrderRequestAlt } from '../../models/external-order-request-alt.interface';
import { ApiExternalOrderRequestAltDto } from '../../../swagger/models/api-external-order-request';
import { apiOrderAltDtoAdapter } from './api-order.adapter';

export const apiExternalOrderRequestAltDtoAdapter = (source?: ExternalOrderRequestAlt | null): ApiExternalOrderRequestAltDto => {
  return {
    CustomerId: source?.customerId,
    ExternalSystemId: source?.externalSystemId,
    Order: source?.order === null ? undefined : apiOrderAltDtoAdapter(source?.order),
    SecurityToken: source?.securityToken,
  };
}
