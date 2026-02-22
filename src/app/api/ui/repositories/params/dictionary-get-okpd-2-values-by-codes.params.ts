import { DictionaryGetOkpd2ValuesByCodes$Params } from '../../../swagger/fn/dictionary/dictionary-get-okpd-2-values-by-codes';
import { UsedClassificatorTypeEnum } from '../../enums/used-classificator-type.enum';
import { apiUsedClassificatorTypeEnumAdapter } from '../../adapters/enums/api-used-classificator-type-enum.adapter';

// @ts-ignore
export interface DictionaryGetOkpd2ValuesByCodesParams {
  usedClassificatorType?: UsedClassificatorTypeEnum;
  values?: string[];
}

export function dictionaryGetOkpd2ValuesByCodesAdapter(params?: DictionaryGetOkpd2ValuesByCodesParams): DictionaryGetOkpd2ValuesByCodes$Params {
  if (!params) {
    return {} as DictionaryGetOkpd2ValuesByCodes$Params;
  }
  return {
      UsedClassificatorType: apiUsedClassificatorTypeEnumAdapter(params.usedClassificatorType),
      Values: params.values,
  };
}
