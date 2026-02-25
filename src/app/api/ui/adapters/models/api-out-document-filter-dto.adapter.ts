import { OutDocumentFilter } from '../../models/out-document-filter.interface';
import { ApiOutDocumentFilterDto } from '../../../swagger/models/api-out-document-filter-dto';
import { apiBaseFilterObjectAltDtoAdapter } from './api-base-filter-object.adapter';

export const apiOutDocumentFilterDtoAdapter = (source?: OutDocumentFilter | null): ApiOutDocumentFilterDto => {
  return {
    ...apiBaseFilterObjectAltDtoAdapter(source as unknown as Parameters<typeof apiBaseFilterObjectAltDtoAdapter>[0]),
    BeginDateFrom: source?.beginDateFrom,
    BeginDateTo: source?.beginDateTo,
    NotificationNumber: source?.notificationNumber,
    OnlyNew: source?.onlyNew,
    KindNames: source?.kindNames,
    OrganizationId: source?.organizationId,
    ExternalSystemId: source?.externalSystemId,
  };
}
