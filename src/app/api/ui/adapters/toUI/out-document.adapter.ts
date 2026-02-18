import { ApiOutDocumentDto } from '../../../swagger/models/api-out-document-dto';
import { OutDocument } from '../../models/out-document.interface';

export function adaptOutDocumentToUI(source?: ApiOutDocumentDto | null): OutDocument {
  return {
    actionDate: source?.ActionDate ?? '',
    beginDate: source?.BeginDate ?? '',
    createDate: source?.CreateDate ?? '',
    customerOrganizationId: source?.CustomerOrganizationId ?? 0,
    docPackGuid: source?.DocPackGuid ?? '',
    endDate: source?.EndDate ?? '',
    id: source?.Id ?? 0,
    isRead: source?.IsRead ?? false,
    kindName: source?.KindName ?? '',
    objectId: source?.ObjectId ?? 0,
    organizationId: source?.OrganizationId ?? 0,
    purchCode: source?.PurchCode ?? '',
    readDate: source?.ReadDate ?? '',
    requestDate: source?.RequestDate ?? '',
  };
}
