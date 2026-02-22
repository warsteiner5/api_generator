import { ApiDocumentPackDto } from '../../../swagger/models/api-document-pack-dto';
import { DocumentPack } from '../../models/document-pack.interface';
import { dealDocumentAdapter } from './deal-document.adapter';

export const documentPackAdapter = (source?: ApiDocumentPackDto | null): DocumentPack => {
  return {
    createAt: source?.CreateAt,
    documents: source?.Documents?.map((item) => dealDocumentAdapter(item)),
    id: source?.Id,
    isActual: source?.IsActual,
  };
}
