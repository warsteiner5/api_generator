import { SuggestStatus2$Params } from '../../../swagger/fn/suggest/suggest-status-2';

export interface SuggestStatus2Params {
}

export const suggestStatus2ParamsAdapter = {
  adapt(params?: SuggestStatus2Params): SuggestStatus2$Params {
    if (!params) {
      return {} as SuggestStatus2$Params;
    }
    return {
    };
  }
};
