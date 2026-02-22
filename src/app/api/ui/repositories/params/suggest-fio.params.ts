import { SuggestFio$Params } from '../../../swagger/fn/suggest/suggest-fio';

// @ts-ignore
export interface SuggestFioParams {
}

export function suggestFioAdapter(params?: SuggestFioParams): SuggestFio$Params {
  if (!params) {
    return {} as SuggestFio$Params;
  }
  return {
  };
}
