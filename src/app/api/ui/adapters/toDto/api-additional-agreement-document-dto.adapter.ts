import { AdditionalAgreementDocument } from '../../models/additional-agreement-document.interface';
import { ApiAdditionalAgreementDocumentDto } from '../../../swagger/models/api-additional-agreement-document-dto';

export function adaptApiAdditionalAgreementDocumentDto(source?: AdditionalAgreementDocument | null): ApiAdditionalAgreementDocumentDto {
  return {
    ChangeDate: source?.changeDate,
    Extension: source?.extension,
    Guid: source?.guid,
    Name: source?.name,
    Size: source?.size,
  };
}
