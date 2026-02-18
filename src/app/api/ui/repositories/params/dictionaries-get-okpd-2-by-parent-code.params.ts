import { DictionariesGetOkpd2ByParentCode$Params } from '../../../swagger/fn/dictionaries/dictionaries-get-okpd-2-by-parent-code';

export interface DictionariesGetOkpd2ByParentCodeParams {
  parentCode?: string;
}

export const dictionariesGetOkpd2ByParentCodeParamsAdapter = {
  adapt(params?: DictionariesGetOkpd2ByParentCodeParams): DictionariesGetOkpd2ByParentCode$Params {
    if (!params) {
      return {} as DictionariesGetOkpd2ByParentCode$Params;
    }
    return {
      parentCode: params.parentCode,
    };
  }
};
