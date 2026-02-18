import { ApplicationClarificationRequestResponse } from '../../models/application-clarification-request-response.interface';
import { ApiApplicationClarificationRequestResponseDto } from '../../../swagger/models/api-application-clarification-request-response-dto';
import { adaptApiDocumentDto2 } from './api-document-dto-2.adapter';

export function adaptApiApplicationClarificationRequestResponseDto(source?: ApplicationClarificationRequestResponse | null): ApiApplicationClarificationRequestResponseDto {
  return {
    Documents: (source?.documents ?? []).map((item) => adaptApiDocumentDto2(item)),
    ResponseText: source?.responseText,
  };
}
