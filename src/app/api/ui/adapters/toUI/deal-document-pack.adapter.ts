import { ApiDealDocumentPackDto } from '../../../swagger/models/api-deal-document-pack-dto';
import { DealDocumentPack } from '../../models/deal-document-pack.interface';
import { adaptDocumentPackToUI } from './document-pack.adapter';

export function adaptDealDocumentPackToUI(source?: ApiDealDocumentPackDto | null): DealDocumentPack {
  return {
    dealId: source?.DealId ?? 0,
    documentPacks: (source?.DocumentPacks ?? []).map((item) => adaptDocumentPackToUI(item)),
  };
}
