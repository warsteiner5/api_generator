import { NsiFindOrganization$Params } from '../../../swagger/fn/nsi/nsi-find-organization';

// @ts-ignore
export interface NsiFindOrganizationParams {
  inn: string;
  kpp: string;
}

export function nsiFindOrganizationAdapter(params?: NsiFindOrganizationParams): NsiFindOrganization$Params {
  if (!params) {
    return {} as NsiFindOrganization$Params;
  }
  return {
      inn: params.inn,
      kpp: params.kpp,
  };
}
