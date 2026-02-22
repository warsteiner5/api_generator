import { ApiExternalOrderRequestAltDto } from '../../../swagger/models/api-external-order-request';
import { ExternalOrderRequestAlt } from '../../models/external-order-request-alt.interface';
import { orderAltAdapter } from './order-alt.adapter';

export const externalOrderRequestAltAdapter = (source?: ApiExternalOrderRequestAltDto | null): ExternalOrderRequestAlt => {
  return {
    customerId: source?.CustomerId,
    externalSystemId: source?.ExternalSystemId,
    order: source?.Order === null ? undefined : orderAltAdapter(source?.Order),
    securityToken: source?.SecurityToken,
  };
}
