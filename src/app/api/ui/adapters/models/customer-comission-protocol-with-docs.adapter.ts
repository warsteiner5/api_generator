import { ApiCustomerComissionProtocolWithDocsDto } from '../../../swagger/models/api-customer-comission-protocol-with-docs-dto';
import { CustomerComissionProtocolWithDocs } from '../../models/customer-comission-protocol-with-docs.interface';
import { considerationProtocolDocumentAdapter } from './consideration-protocol-document.adapter';
import { customerComissionProtocolAdapter } from './customer-comission-protocol.adapter';
import { protocolTypeEnumAdapter } from '../enums/protocol-type-enum.adapter';

export const customerComissionProtocolWithDocsAdapter = (source?: ApiCustomerComissionProtocolWithDocsDto | null): CustomerComissionProtocolWithDocs => {
  return {
    ...customerComissionProtocolAdapter(source as unknown as Parameters<typeof customerComissionProtocolAdapter>[0]),
    documents: source?.Documents?.map((item) => considerationProtocolDocumentAdapter(item)),
    isExported: source?.IsExported,
    publishDate: source?.PublishDate,
    protocolTypeEnum: source?.ProtocolTypeEnum === null ? undefined : protocolTypeEnumAdapter(source?.ProtocolTypeEnum),
  };
}
