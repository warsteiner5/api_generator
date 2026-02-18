import { PartnersRefuse$Params } from '../../../swagger/fn/partners/partners-refuse';

export interface PartnersRefuseParams {
  id: number;
}

export const partnersRefuseParamsAdapter = {
  adapt(params?: PartnersRefuseParams): PartnersRefuse$Params {
    if (!params) {
      return {} as PartnersRefuse$Params;
    }
    return {
      id: params.id,
    };
  }
};
