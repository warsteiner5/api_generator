import { ApiRequirementRequestDocumentDto } from '../../../swagger/models/api-requirement-request-document-dto';
import { RequirementRequestDocument } from '../../models/requirement-request-document.interface';
import { documentAdapter } from './document.adapter';

export const requirementRequestDocumentAdapter = (source?: ApiRequirementRequestDocumentDto | null): RequirementRequestDocument => {
  return {
    ...documentAdapter(source as unknown as Parameters<typeof documentAdapter>[0]),
    fileSize: source?.FileSize,
  };
}
