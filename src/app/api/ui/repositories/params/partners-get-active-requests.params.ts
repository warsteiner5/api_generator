import { PartnersGetActiveRequests$Params } from '../../../swagger/fn/partners/partners-get-active-requests';

export interface PartnersGetActiveRequestsParams {
}

export const partnersGetActiveRequestsParamsAdapter = {
  adapt(params?: PartnersGetActiveRequestsParams): PartnersGetActiveRequests$Params {
    if (!params) {
      return {} as PartnersGetActiveRequests$Params;
    }
    return {
    };
  }
};
