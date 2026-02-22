import { DictionariesGetKtruByOkpd2$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-ktru-by-okpd-2';

// @ts-ignore
export interface DictionariesGetKtruByOkpd2Params {
  okpd2: string;
  take: number;
  skip: number;
}

export function dictionariesGetKtruByOkpd2Adapter(params?: DictionariesGetKtruByOkpd2Params): DictionariesGetKtruByOkpd2$Params {
  if (!params) {
    return {} as DictionariesGetKtruByOkpd2$Params;
  }
  return {
      okpd2: params.okpd2,
      take: params.take,
      skip: params.skip,
  };
}
