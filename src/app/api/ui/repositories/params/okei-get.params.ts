import { OkeiGet$Params } from '../../../swagger/fn/okei/okei-get';

// @ts-ignore
export interface OkeiGetParams {
}

export function okeiGetAdapter(params?: OkeiGetParams): OkeiGet$Params {
  if (!params) {
    return {} as OkeiGet$Params;
  }
  return {
  };
}
