import { CustomerComissionProtocolWithDocs } from '../../models/customer-comission-protocol-with-docs.interface';
import { ApiCustomerComissionProtocolWithDocsDto } from '../../../swagger/models/api-customer-comission-protocol-with-docs-dto';
import { apiConsiderationProtocolDocumentDtoAdapter } from './api-consideration-protocol-document-dto.adapter';
import { apiCustomerComissionProtocolDtoAdapter } from './api-customer-comission-protocol-dto.adapter';
import { apiProtocolTypeEnumAdapter } from '../enums/api-protocol-type-enum.adapter';

export const apiCustomerComissionProtocolWithDocsDtoAdapter = (source?: CustomerComissionProtocolWithDocs | null): ApiCustomerComissionProtocolWithDocsDto => {
  return {
    ...apiCustomerComissionProtocolDtoAdapter(source as unknown as Parameters<typeof apiCustomerComissionProtocolDtoAdapter>[0]),
    Documents: source?.documents?.map((item) => apiConsiderationProtocolDocumentDtoAdapter(item)),
    IsExported: source?.isExported,
    PublishDate: source?.publishDate,
    ProtocolTypeEnum: source?.protocolTypeEnum === null ? undefined : apiProtocolTypeEnumAdapter(source?.protocolTypeEnum),
  };
}
