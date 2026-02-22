import { PartnersDelete$Params } from '../../../swagger/fn/partners/partners-delete';

// @ts-ignore
export interface PartnersDeleteParams {
  guid: string;
}

export function partnersDeleteAdapter(params?: PartnersDeleteParams): PartnersDelete$Params {
  if (!params) {
    return {} as PartnersDelete$Params;
  }
  return {
      guid: params.guid,
  };
}
