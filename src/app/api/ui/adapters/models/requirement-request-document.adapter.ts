import { ApiRequirementRequestDocumentDto } from '../../../swagger/models/api-requirement-request-document-dto';
import { RequirementRequestDocument } from '../../models/requirement-request-document.interface';

export const requirementRequestDocumentAdapter = (source?: ApiRequirementRequestDocumentDto | null): RequirementRequestDocument => {
  return (source ?? {}) as RequirementRequestDocument;
}
