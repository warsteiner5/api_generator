import { ApiExternalOrderRequestAltDto } from '../../../swagger/models/api-external-order-request';
import { ExternalOrderRequestAlt } from '../../models/external-order-request-alt.interface';
import { adaptOrderAltToUI } from './order-alt.adapter';

export function adaptExternalOrderRequestAltToUI(source?: ApiExternalOrderRequestAltDto | null): ExternalOrderRequestAlt {
  return {
    customerId: source?.CustomerId ?? 0,
    externalSystemId: source?.ExternalSystemId ?? 0,
    order: adaptOrderAltToUI(source?.Order),
    securityToken: source?.SecurityToken ?? '',
  };
}
