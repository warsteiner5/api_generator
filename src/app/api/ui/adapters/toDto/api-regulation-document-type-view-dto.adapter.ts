import { RegulationDocumentTypeView } from '../../models/regulation-document-type-view.interface';
import { ApiRegulationDocumentTypeViewDto } from '../../../swagger/models/api-regulation-document-type-view-dto';

export function adaptApiRegulationDocumentTypeViewDto(source?: RegulationDocumentTypeView | null): ApiRegulationDocumentTypeViewDto {
  return {
    Code: source?.code,
    Id: source?.id,
    IsHidden: source?.isHidden,
    Name: source?.name,
  };
}
