import { PublishCustomerComissionProtocol } from '../../models/publish-customer-comission-protocol.interface';
import { ApiPublishCustomerComissionProtocolDto } from '../../../swagger/models/api-publish-customer-comission-protocol-dto';

export function adaptApiPublishCustomerComissionProtocolDto(source?: PublishCustomerComissionProtocol | null): ApiPublishCustomerComissionProtocolDto {
  return (source ?? {}) as ApiPublishCustomerComissionProtocolDto;
}
