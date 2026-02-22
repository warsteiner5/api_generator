import { ApiClarificationResponseCreateDto } from '../../../swagger/models/api-clarification-response-create-dto';
import { ClarificationResponseCreate } from '../../models/clarification-response-create.interface';
import { documentDto2Adapter } from './document-dto-2.adapter';

export const clarificationResponseCreateAdapter = (source?: ApiClarificationResponseCreateDto | null): ClarificationResponseCreate => {
  return {
    documents: source?.Documents?.map((item) => documentDto2Adapter(item)),
    responseText: source?.ResponseText,
  };
}
