import { DealGetActualDocumentInfoRequest$Params } from '../../../swagger/fn/deal/deal-get-actual-document-info-request';
import { GetActualDocumentInfoRequestAlt } from '../../models/get-actual-document-info-request-alt.interface';
import { apiGetActualDocumentInfoRequestAltDtoAdapter } from '../../adapters/models/api-get-actual-document-info-request.adapter';

// @ts-ignore
export interface DealGetActualDocumentInfoRequestParams {
  body?: GetActualDocumentInfoRequestAlt;
}

export function dealGetActualDocumentInfoRequestAdapter(params?: DealGetActualDocumentInfoRequestParams): DealGetActualDocumentInfoRequest$Params {
  if (!params) {
    return {} as DealGetActualDocumentInfoRequest$Params;
  }
  return {
      body: apiGetActualDocumentInfoRequestAltDtoAdapter(params.body),
  };
}
