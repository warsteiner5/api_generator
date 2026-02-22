import { ApiApplicationClarificationRequestResponseDto } from '../../../swagger/models/api-application-clarification-request-response-dto';
import { ApplicationClarificationRequestResponse } from '../../models/application-clarification-request-response.interface';
import { documentDto2Adapter } from './document-dto-2.adapter';

export const applicationClarificationRequestResponseAdapter = (source?: ApiApplicationClarificationRequestResponseDto | null): ApplicationClarificationRequestResponse => {
  return {
    documents: source?.Documents?.map((item) => documentDto2Adapter(item)),
    responseText: source?.ResponseText,
  };
}
