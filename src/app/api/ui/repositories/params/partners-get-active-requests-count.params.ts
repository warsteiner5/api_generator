import { PartnersGetActiveRequestsCount$Params } from '../../../swagger/fn/partners/partners-get-active-requests-count';

export interface PartnersGetActiveRequestsCountParams {
}

export const partnersGetActiveRequestsCountParamsAdapter = {
  adapt(params?: PartnersGetActiveRequestsCountParams): PartnersGetActiveRequestsCount$Params {
    if (!params) {
      return {} as PartnersGetActiveRequestsCount$Params;
    }
    return {
    };
  }
};
