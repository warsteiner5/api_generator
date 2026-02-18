import { ApiClarificationResponseCreateDto } from '../../../swagger/models/api-clarification-response-create-dto';
import { ClarificationResponseCreate } from '../../models/clarification-response-create.interface';
import { adaptDocumentDto2ToUI } from './document-dto-2.adapter';

export function adaptClarificationResponseCreateToUI(source?: ApiClarificationResponseCreateDto | null): ClarificationResponseCreate {
  return {
    documents: (source?.Documents ?? []).map((item) => adaptDocumentDto2ToUI(item)),
    responseText: source?.ResponseText ?? '',
  };
}
