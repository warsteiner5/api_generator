import { CustomerComissionProtocolWithDocs } from '../../models/customer-comission-protocol-with-docs.interface';
import { ApiCustomerComissionProtocolWithDocsDto } from '../../../swagger/models/api-customer-comission-protocol-with-docs-dto';

export const apiCustomerComissionProtocolWithDocsDtoAdapter = (source?: CustomerComissionProtocolWithDocs | null): ApiCustomerComissionProtocolWithDocsDto => {
  return (source ?? {}) as ApiCustomerComissionProtocolWithDocsDto;
}
