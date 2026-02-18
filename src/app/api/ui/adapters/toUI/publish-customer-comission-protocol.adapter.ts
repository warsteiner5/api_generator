import { ApiPublishCustomerComissionProtocolDto } from '../../../swagger/models/api-publish-customer-comission-protocol-dto';
import { PublishCustomerComissionProtocol } from '../../models/publish-customer-comission-protocol.interface';

export function adaptPublishCustomerComissionProtocolToUI(source?: ApiPublishCustomerComissionProtocolDto | null): PublishCustomerComissionProtocol {
  return (source ?? {}) as PublishCustomerComissionProtocol;
}
