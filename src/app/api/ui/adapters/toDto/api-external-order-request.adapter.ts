import { ExternalOrderRequestAlt } from '../../models/external-order-request-alt.interface';
import { ApiExternalOrderRequestAltDto } from '../../../swagger/models/api-external-order-request';
import { adaptApiOrderAltDto } from './api-order.adapter';

export function adaptApiExternalOrderRequestAltDto(source?: ExternalOrderRequestAlt | null): ApiExternalOrderRequestAltDto {
  return {
    CustomerId: source?.customerId,
    ExternalSystemId: source?.externalSystemId,
    Order: adaptApiOrderAltDto(source?.order),
    SecurityToken: source?.securityToken,
  };
}
