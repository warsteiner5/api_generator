import { DocumentPack } from '../../models/document-pack.interface';
import { ApiDocumentPackDto } from '../../../swagger/models/api-document-pack-dto';
import { apiDealDocumentDtoAdapter } from './api-deal-document-dto.adapter';

export const apiDocumentPackDtoAdapter = (source?: DocumentPack | null): ApiDocumentPackDto => {
  return {
    CreateAt: source?.createAt,
    Documents: source?.documents?.map((item) => apiDealDocumentDtoAdapter(item)),
    Id: source?.id,
    IsActual: source?.isActual,
  };
}
