import { DocumentPack } from '../../models/document-pack.interface';
import { ApiDocumentPackDto } from '../../../swagger/models/api-document-pack-dto';
import { adaptApiDealDocumentDto } from './api-deal-document-dto.adapter';

export function adaptApiDocumentPackDto(source?: DocumentPack | null): ApiDocumentPackDto {
  return {
    CreateAt: source?.createAt,
    Documents: (source?.documents ?? []).map((item) => adaptApiDealDocumentDto(item)),
    Id: source?.id,
    IsActual: source?.isActual,
  };
}
