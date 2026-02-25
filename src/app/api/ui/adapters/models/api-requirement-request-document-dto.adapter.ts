import { RequirementRequestDocument } from '../../models/requirement-request-document.interface';
import { ApiRequirementRequestDocumentDto } from '../../../swagger/models/api-requirement-request-document-dto';
import { apiDocumentDtoAdapter } from './api-document-dto.adapter';

export const apiRequirementRequestDocumentDtoAdapter = (source?: RequirementRequestDocument | null): ApiRequirementRequestDocumentDto => {
  return {
    ...apiDocumentDtoAdapter(source as unknown as Parameters<typeof apiDocumentDtoAdapter>[0]),
    FileSize: source?.fileSize,
  };
}
