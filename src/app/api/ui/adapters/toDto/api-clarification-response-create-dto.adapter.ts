import { ClarificationResponseCreate } from '../../models/clarification-response-create.interface';
import { ApiClarificationResponseCreateDto } from '../../../swagger/models/api-clarification-response-create-dto';
import { adaptApiDocumentDto2 } from './api-document-dto-2.adapter';

export function adaptApiClarificationResponseCreateDto(source?: ClarificationResponseCreate | null): ApiClarificationResponseCreateDto {
  return {
    Documents: (source?.documents ?? []).map((item) => adaptApiDocumentDto2(item)),
    ResponseText: source?.responseText,
  };
}
