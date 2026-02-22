import { PartnersAdd$Params } from '../../../swagger/fn/partners/partners-add';

// @ts-ignore
export interface PartnersAddParams {
  organizationGuid: string;
}

export function partnersAddAdapter(params?: PartnersAddParams): PartnersAdd$Params {
  if (!params) {
    return {} as PartnersAdd$Params;
  }
  return {
      organizationGuid: params.organizationGuid,
  };
}
