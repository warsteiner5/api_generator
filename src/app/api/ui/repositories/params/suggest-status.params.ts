import { SuggestStatus$Params } from '../../../swagger/fn/suggest/suggest-status';

export interface SuggestStatusParams {
}

export const suggestStatusParamsAdapter = {
  adapt(params?: SuggestStatusParams): SuggestStatus$Params {
    if (!params) {
      return {} as SuggestStatus$Params;
    }
    return {
    };
  }
};
