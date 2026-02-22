import { ClarificationResponseCreate } from '../../models/clarification-response-create.interface';
import { ApiClarificationResponseCreateDto } from '../../../swagger/models/api-clarification-response-create-dto';
import { apiDocumentDto2Adapter } from './api-document-dto-2.adapter';

export const apiClarificationResponseCreateDtoAdapter = (source?: ClarificationResponseCreate | null): ApiClarificationResponseCreateDto => {
  return {
    Documents: source?.documents?.map((item) => apiDocumentDto2Adapter(item)),
    ResponseText: source?.responseText,
  };
}
