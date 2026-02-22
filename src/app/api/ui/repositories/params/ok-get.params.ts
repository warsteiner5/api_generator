import { OkGet$Params } from '../../../swagger/fn/ok/ok-get';

// @ts-ignore
export interface OkGetParams {
  guid: string;
}

export function okGetAdapter(params?: OkGetParams): OkGet$Params {
  if (!params) {
    return {} as OkGet$Params;
  }
  return {
      guid: params.guid,
  };
}
