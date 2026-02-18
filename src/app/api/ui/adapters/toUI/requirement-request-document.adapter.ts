import { ApiRequirementRequestDocumentDto } from '../../../swagger/models/api-requirement-request-document-dto';
import { RequirementRequestDocument } from '../../models/requirement-request-document.interface';

export function adaptRequirementRequestDocumentToUI(source?: ApiRequirementRequestDocumentDto | null): RequirementRequestDocument {
  return (source ?? {}) as RequirementRequestDocument;
}
