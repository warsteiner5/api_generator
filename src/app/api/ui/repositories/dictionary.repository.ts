import { DictionaryApiService } from '../../swagger/services/dictionary-api.service';
import { DictionaryGetAllByCodeParams, dictionaryGetAllByCodeParamsAdapter } from './params/dictionary-get-all-by-code.params';
import { DictionaryGetAllByListOfParentCodesParams, dictionaryGetAllByListOfParentCodesParamsAdapter } from './params/dictionary-get-all-by-list-of-parent-codes.params';
import { DictionaryGetAllByNameParams, dictionaryGetAllByNameParamsAdapter } from './params/dictionary-get-all-by-name.params';
import { DictionaryGetAllByParentCodeRecursiveParams, dictionaryGetAllByParentCodeRecursiveParamsAdapter } from './params/dictionary-get-all-by-parent-code-recursive.params';
import { DictionaryGetByCodeParams, dictionaryGetByCodeParamsAdapter } from './params/dictionary-get-by-code.params';
import { DictionaryGetCountriesByCodesParams, dictionaryGetCountriesByCodesParamsAdapter } from './params/dictionary-get-countries-by-codes.params';
import { DictionaryGetCountriesParams, dictionaryGetCountriesParamsAdapter } from './params/dictionary-get-countries.params';
import { DictionaryGetElementWithoutChildsByCodeParams, dictionaryGetElementWithoutChildsByCodeParamsAdapter } from './params/dictionary-get-element-without-childs-by-code.params';
import { DictionaryGetOkpd2ValuesByCodesParams, dictionaryGetOkpd2ValuesByCodesParamsAdapter } from './params/dictionary-get-okpd-2-values-by-codes.params';
import { DictionaryGetParams, dictionaryGetParamsAdapter } from './params/dictionary-get.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DictionaryRepository {
  private readonly _api = inject(DictionaryApiService);

  dictionaryGet(params?: DictionaryGetParams): Observable<Blob> {
    return this._api.dictionaryGet(dictionaryGetParamsAdapter.adapt(params));
  }

  dictionaryGetAllByCode(params?: DictionaryGetAllByCodeParams): Observable<Blob> {
    return this._api.dictionaryGetAllByCode(dictionaryGetAllByCodeParamsAdapter.adapt(params));
  }

  dictionaryGetAllByListOfParentCodes(params?: DictionaryGetAllByListOfParentCodesParams): Observable<Blob> {
    return this._api.dictionaryGetAllByListOfParentCodes(dictionaryGetAllByListOfParentCodesParamsAdapter.adapt(params));
  }

  dictionaryGetAllByName(params?: DictionaryGetAllByNameParams): Observable<Blob> {
    return this._api.dictionaryGetAllByName(dictionaryGetAllByNameParamsAdapter.adapt(params));
  }

  dictionaryGetAllByParentCodeRecursive(params?: DictionaryGetAllByParentCodeRecursiveParams): Observable<Blob> {
    return this._api.dictionaryGetAllByParentCodeRecursive(dictionaryGetAllByParentCodeRecursiveParamsAdapter.adapt(params));
  }

  dictionaryGetByCode(params?: DictionaryGetByCodeParams): Observable<Blob> {
    return this._api.dictionaryGetByCode(dictionaryGetByCodeParamsAdapter.adapt(params));
  }

  dictionaryGetCountries(params?: DictionaryGetCountriesParams): Observable<Blob> {
    return this._api.dictionaryGetCountries(dictionaryGetCountriesParamsAdapter.adapt(params));
  }

  dictionaryGetCountriesByCodes(params?: DictionaryGetCountriesByCodesParams): Observable<Blob> {
    return this._api.dictionaryGetCountriesByCodes(dictionaryGetCountriesByCodesParamsAdapter.adapt(params));
  }

  dictionaryGetElementWithoutChildsByCode(params?: DictionaryGetElementWithoutChildsByCodeParams): Observable<Blob> {
    return this._api.dictionaryGetElementWithoutChildsByCode(dictionaryGetElementWithoutChildsByCodeParamsAdapter.adapt(params));
  }

  dictionaryGetOkpd2ValuesByCodes(params?: DictionaryGetOkpd2ValuesByCodesParams): Observable<Blob> {
    return this._api.dictionaryGetOkpd2ValuesByCodes(dictionaryGetOkpd2ValuesByCodesParamsAdapter.adapt(params));
  }

}
