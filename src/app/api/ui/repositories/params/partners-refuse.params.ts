import { PartnersRefuse$Params } from '../../../swagger/fn/partners/partners-refuse';

// @ts-ignore
export interface PartnersRefuseParams {
  id: number;
}

export function partnersRefuseAdapter(params?: PartnersRefuseParams): PartnersRefuse$Params {
  if (!params) {
    return {} as PartnersRefuse$Params;
  }
  return {
      id: params.id,
  };
}
