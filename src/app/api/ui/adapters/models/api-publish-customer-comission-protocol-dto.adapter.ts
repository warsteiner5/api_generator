import { PublishCustomerComissionProtocol } from '../../models/publish-customer-comission-protocol.interface';
import { ApiPublishCustomerComissionProtocolDto } from '../../../swagger/models/api-publish-customer-comission-protocol-dto';
import { apiCreateCustomerComissionProtocolDtoAdapter } from './api-create-customer-comission-protocol-dto.adapter';
import { apiTradeDocumentDtoAdapter } from './api-trade-document-dto.adapter';

export const apiPublishCustomerComissionProtocolDtoAdapter = (source?: PublishCustomerComissionProtocol | null): ApiPublishCustomerComissionProtocolDto => {
  return {
    ...apiCreateCustomerComissionProtocolDtoAdapter(source as unknown as Parameters<typeof apiCreateCustomerComissionProtocolDtoAdapter>[0]),
    FileIdList: source?.fileIdList?.map((item) => apiTradeDocumentDtoAdapter(item)),
  };
}
