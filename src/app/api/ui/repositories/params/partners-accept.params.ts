import { PartnersAccept$Params } from '../../../swagger/fn/partners/partners-accept';

// @ts-ignore
export interface PartnersAcceptParams {
  id: number;
}

export function partnersAcceptAdapter(params?: PartnersAcceptParams): PartnersAccept$Params {
  if (!params) {
    return {} as PartnersAccept$Params;
  }
  return {
      id: params.id,
  };
}
