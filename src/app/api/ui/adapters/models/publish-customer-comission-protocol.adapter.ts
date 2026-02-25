import { ApiPublishCustomerComissionProtocolDto } from '../../../swagger/models/api-publish-customer-comission-protocol-dto';
import { PublishCustomerComissionProtocol } from '../../models/publish-customer-comission-protocol.interface';
import { createCustomerComissionProtocolAdapter } from './create-customer-comission-protocol.adapter';
import { tradeDocumentAdapter } from './trade-document.adapter';

export const publishCustomerComissionProtocolAdapter = (source?: ApiPublishCustomerComissionProtocolDto | null): PublishCustomerComissionProtocol => {
  return {
    ...createCustomerComissionProtocolAdapter(source as unknown as Parameters<typeof createCustomerComissionProtocolAdapter>[0]),
    fileIdList: source?.FileIdList?.map((item) => tradeDocumentAdapter(item)),
  };
}
