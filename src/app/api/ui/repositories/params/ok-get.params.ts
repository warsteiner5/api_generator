import { OkGet$Params } from '../../../swagger/fn/ok/ok-get';

export interface OkGetParams {
  guid: string;
}

export const okGetParamsAdapter = {
  adapt(params?: OkGetParams): OkGet$Params {
    if (!params) {
      return {} as OkGet$Params;
    }
    return {
      guid: params.guid,
    };
  }
};
