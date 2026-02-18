import { ApiDocumentPackDto } from '../../../swagger/models/api-document-pack-dto';
import { DocumentPack } from '../../models/document-pack.interface';
import { adaptDealDocumentToUI } from './deal-document.adapter';

export function adaptDocumentPackToUI(source?: ApiDocumentPackDto | null): DocumentPack {
  return {
    createAt: source?.CreateAt ?? '',
    documents: (source?.Documents ?? []).map((item) => adaptDealDocumentToUI(item)),
    id: source?.Id ?? 0,
    isActual: source?.IsActual ?? false,
  };
}
