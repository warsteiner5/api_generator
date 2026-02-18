import { PartnersDelete$Params } from '../../../swagger/fn/partners/partners-delete';

export interface PartnersDeleteParams {
  guid: string;
}

export const partnersDeleteParamsAdapter = {
  adapt(params?: PartnersDeleteParams): PartnersDelete$Params {
    if (!params) {
      return {} as PartnersDelete$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
