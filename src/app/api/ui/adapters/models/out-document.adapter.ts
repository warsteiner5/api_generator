import { ApiOutDocumentDto } from '../../../swagger/models/api-out-document-dto';
import { OutDocument } from '../../models/out-document.interface';

export const outDocumentAdapter = (source?: ApiOutDocumentDto | null): OutDocument => {
  return {
    actionDate: source?.ActionDate,
    beginDate: source?.BeginDate,
    createDate: source?.CreateDate,
    customerOrganizationId: source?.CustomerOrganizationId,
    docPackGuid: source?.DocPackGuid,
    endDate: source?.EndDate,
    id: source?.Id,
    isRead: source?.IsRead,
    kindName: source?.KindName,
    objectId: source?.ObjectId,
    organizationId: source?.OrganizationId,
    purchCode: source?.PurchCode,
    readDate: source?.ReadDate,
    requestDate: source?.RequestDate,
  };
}
