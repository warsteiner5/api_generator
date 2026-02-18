import { SuggestFio$Params } from '../../../swagger/fn/suggest/suggest-fio';

export interface SuggestFioParams {
}

export const suggestFioParamsAdapter = {
  adapt(params?: SuggestFioParams): SuggestFio$Params {
    if (!params) {
      return {} as SuggestFio$Params;
    }
    return {
    };
  }
};
