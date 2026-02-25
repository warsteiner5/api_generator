import { ApiOutDocumentFilterDto } from '../../../swagger/models/api-out-document-filter-dto';
import { OutDocumentFilter } from '../../models/out-document-filter.interface';
import { baseFilterObjectAltAdapter } from './base-filter-object-alt.adapter';

export const outDocumentFilterAdapter = (source?: ApiOutDocumentFilterDto | null): OutDocumentFilter => {
  return {
    ...baseFilterObjectAltAdapter(source as unknown as Parameters<typeof baseFilterObjectAltAdapter>[0]),
    beginDateFrom: source?.BeginDateFrom,
    beginDateTo: source?.BeginDateTo,
    notificationNumber: source?.NotificationNumber,
    onlyNew: source?.OnlyNew,
    kindNames: source?.KindNames,
    organizationId: source?.OrganizationId,
    externalSystemId: source?.ExternalSystemId,
  };
}
