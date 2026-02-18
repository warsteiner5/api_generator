import { OkeiGet$Params } from '../../../swagger/fn/okei/okei-get';

export interface OkeiGetParams {
}

export const okeiGetParamsAdapter = {
  adapt(params?: OkeiGetParams): OkeiGet$Params {
    if (!params) {
      return {} as OkeiGet$Params;
    }
    return {
    };
  }
};
