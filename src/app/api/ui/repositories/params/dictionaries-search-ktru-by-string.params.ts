import { DictionariesSearchKtruByString$Params } from '../../../swagger/fn/dictionaries/dictionaries-search-ktru-by-string';

// @ts-ignore
export interface DictionariesSearchKtruByStringParams {
  searchString: string;
  take: number;
  skip: number;
}

export function dictionariesSearchKtruByStringAdapter(params?: DictionariesSearchKtruByStringParams): DictionariesSearchKtruByString$Params {
  if (!params) {
    return {} as DictionariesSearchKtruByString$Params;
  }
  return {
      searchString: params.searchString,
      take: params.take,
      skip: params.skip,
  };
}
