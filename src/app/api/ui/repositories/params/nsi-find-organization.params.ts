import { NsiFindOrganization$Params } from '../../../swagger/fn/nsi/nsi-find-organization';

export interface NsiFindOrganizationParams {
  inn: string;
  kpp: string;
}

export const nsiFindOrganizationParamsAdapter = {
  adapt(params?: NsiFindOrganizationParams): NsiFindOrganization$Params {
    if (!params) {
      return {} as NsiFindOrganization$Params;
    }
    return {
      inn: params.inn,
      kpp: params.kpp,
    };
  }
};
