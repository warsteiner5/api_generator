import { ApiDealDocumentPackDto } from '../../../swagger/models/api-deal-document-pack-dto';
import { DealDocumentPack } from '../../models/deal-document-pack.interface';
import { documentPackAdapter } from './document-pack.adapter';

export const dealDocumentPackAdapter = (source?: ApiDealDocumentPackDto | null): DealDocumentPack => {
  return {
    dealId: source?.DealId,
    documentPacks: source?.DocumentPacks?.map((item) => documentPackAdapter(item)),
  };
}
