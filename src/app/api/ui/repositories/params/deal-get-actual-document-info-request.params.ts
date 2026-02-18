import { DealGetActualDocumentInfoRequest$Params } from '../../../swagger/fn/deal/deal-get-actual-document-info-request';
import { GetActualDocumentInfoRequestAlt } from '../../models/get-actual-document-info-request-alt.interface';
import { adaptApiGetActualDocumentInfoRequestAltDto } from '../../adapters/toDto/api-get-actual-document-info-request.adapter';

export interface DealGetActualDocumentInfoRequestParams {
  body?: GetActualDocumentInfoRequestAlt;
}

export const dealGetActualDocumentInfoRequestParamsAdapter = {
  adapt(params?: DealGetActualDocumentInfoRequestParams): DealGetActualDocumentInfoRequest$Params {
    if (!params) {
      return {} as DealGetActualDocumentInfoRequest$Params;
    }
    return {
      body: adaptApiGetActualDocumentInfoRequestAltDto(params.body),
    };
  }
};
