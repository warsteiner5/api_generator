import { ApiApplicationClarificationRequestResponseDto } from '../../../swagger/models/api-application-clarification-request-response-dto';
import { ApplicationClarificationRequestResponse } from '../../models/application-clarification-request-response.interface';
import { adaptDocumentDto2ToUI } from './document-dto-2.adapter';

export function adaptApplicationClarificationRequestResponseToUI(source?: ApiApplicationClarificationRequestResponseDto | null): ApplicationClarificationRequestResponse {
  return {
    documents: (source?.Documents ?? []).map((item) => adaptDocumentDto2ToUI(item)),
    responseText: source?.ResponseText ?? '',
  };
}
