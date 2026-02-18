import { DealsGetDealDocumentPacks$Params } from '../../../swagger/fn/deals/deals-get-deal-document-packs';
import { DocumentTypeEnum } from '../../enums/document-type.enum';
import { adaptApiDocumentTypeEnum } from '../../adapters/toDto/api-document-type-enum.adapter';

export interface DealsGetDealDocumentPacksParams {
  id: number;
  documentTypes?: DocumentTypeEnum[];
}

export const dealsGetDealDocumentPacksParamsAdapter = {
  adapt(params?: DealsGetDealDocumentPacksParams): DealsGetDealDocumentPacks$Params {
    if (!params) {
      return {} as DealsGetDealDocumentPacks$Params;
    }
    return {
      id: params.id,
      DocumentTypes: (params.documentTypes ?? []).map((item) => adaptApiDocumentTypeEnum(item)),
    };
  }
};
