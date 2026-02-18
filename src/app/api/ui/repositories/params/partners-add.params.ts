import { PartnersAdd$Params } from '../../../swagger/fn/partners/partners-add';

export interface PartnersAddParams {
  organizationGuid: string;
}

export const partnersAddParamsAdapter = {
  adapt(params?: PartnersAddParams): PartnersAdd$Params {
    if (!params) {
      return {} as PartnersAdd$Params;
    }
    return {
      organizationGuid: params.organizationGuid,
    };
  }
};
