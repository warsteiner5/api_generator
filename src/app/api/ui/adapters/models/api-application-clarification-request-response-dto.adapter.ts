import { ApplicationClarificationRequestResponse } from '../../models/application-clarification-request-response.interface';
import { ApiApplicationClarificationRequestResponseDto } from '../../../swagger/models/api-application-clarification-request-response-dto';
import { apiDocumentDto2Adapter } from './api-document-dto-2.adapter';

export const apiApplicationClarificationRequestResponseDtoAdapter = (source?: ApplicationClarificationRequestResponse | null): ApiApplicationClarificationRequestResponseDto => {
  return {
    Documents: source?.documents?.map((item) => apiDocumentDto2Adapter(item)),
    ResponseText: source?.responseText,
  };
}
