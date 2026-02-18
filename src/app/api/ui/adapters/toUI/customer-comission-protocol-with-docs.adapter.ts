import { ApiCustomerComissionProtocolWithDocsDto } from '../../../swagger/models/api-customer-comission-protocol-with-docs-dto';
import { CustomerComissionProtocolWithDocs } from '../../models/customer-comission-protocol-with-docs.interface';

export function adaptCustomerComissionProtocolWithDocsToUI(source?: ApiCustomerComissionProtocolWithDocsDto | null): CustomerComissionProtocolWithDocs {
  return (source ?? {}) as CustomerComissionProtocolWithDocs;
}
