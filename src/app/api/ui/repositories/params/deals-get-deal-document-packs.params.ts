import { DealsGetDealDocumentPacks$Params } from '../../../swagger/fn/deals/deals-get-deal-document-packs';
import { DocumentTypeEnum } from '../../enums/document-type.enum';
import { apiDocumentTypeEnumAdapter } from '../../adapters/enums/api-document-type-enum.adapter';

// @ts-ignore
export interface DealsGetDealDocumentPacksParams {
  id: number;
  documentTypes?: DocumentTypeEnum[];
}

export function dealsGetDealDocumentPacksAdapter(params?: DealsGetDealDocumentPacksParams): DealsGetDealDocumentPacks$Params {
  if (!params) {
    return {} as DealsGetDealDocumentPacks$Params;
  }
  return {
      id: params.id,
      DocumentTypes: (params.documentTypes ?? []).map((item) => apiDocumentTypeEnumAdapter(item)),
  };
}
