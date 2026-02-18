import { SaveRegulationDocumentType } from '../../models/save-regulation-document-type.interface';
import { ApiSaveRegulationDocumentTypeDto } from '../../../swagger/models/api-save-regulation-document-type-dto';

export function adaptApiSaveRegulationDocumentTypeDto(source?: SaveRegulationDocumentType | null): ApiSaveRegulationDocumentTypeDto {
  return {
    Code: source?.code,
    Id: source?.id,
    IsHidden: source?.isHidden,
    Name: source?.name,
  };
}
