import { RequirementRequestDocument } from '../../models/requirement-request-document.interface';
import { ApiRequirementRequestDocumentDto } from '../../../swagger/models/api-requirement-request-document-dto';

export const apiRequirementRequestDocumentDtoAdapter = (source?: RequirementRequestDocument | null): ApiRequirementRequestDocumentDto => {
  return (source ?? {}) as ApiRequirementRequestDocumentDto;
}
