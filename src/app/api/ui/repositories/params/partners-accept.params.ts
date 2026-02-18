import { PartnersAccept$Params } from '../../../swagger/fn/partners/partners-accept';

export interface PartnersAcceptParams {
  id: number;
}

export const partnersAcceptParamsAdapter = {
  adapt(params?: PartnersAcceptParams): PartnersAccept$Params {
    if (!params) {
      return {} as PartnersAccept$Params;
    }
    return {
      id: params.id,
    };
  }
};
