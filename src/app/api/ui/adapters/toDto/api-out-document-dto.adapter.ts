import { OutDocument } from '../../models/out-document.interface';
import { ApiOutDocumentDto } from '../../../swagger/models/api-out-document-dto';

export function adaptApiOutDocumentDto(source?: OutDocument | null): ApiOutDocumentDto {
  return {
    ActionDate: source?.actionDate,
    BeginDate: source?.beginDate,
    CreateDate: source?.createDate,
    CustomerOrganizationId: source?.customerOrganizationId,
    DocPackGuid: source?.docPackGuid,
    EndDate: source?.endDate,
    Id: source?.id,
    IsRead: source?.isRead,
    KindName: source?.kindName,
    ObjectId: source?.objectId,
    OrganizationId: source?.organizationId,
    PurchCode: source?.purchCode,
    ReadDate: source?.readDate,
    RequestDate: source?.requestDate,
  };
}
