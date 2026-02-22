import { DealDocumentPack } from '../../models/deal-document-pack.interface';
import { ApiDealDocumentPackDto } from '../../../swagger/models/api-deal-document-pack-dto';
import { apiDocumentPackDtoAdapter } from './api-document-pack-dto.adapter';

export const apiDealDocumentPackDtoAdapter = (source?: DealDocumentPack | null): ApiDealDocumentPackDto => {
  return {
    DealId: source?.dealId,
    DocumentPacks: source?.documentPacks?.map((item) => apiDocumentPackDtoAdapter(item)),
  };
}
