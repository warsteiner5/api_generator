import { DictionaryApiService } from '../../swagger/services/dictionary-api.service';
import { DictionaryGetAllByCodeParams, dictionaryGetAllByCodeAdapter } from './params/dictionary-get-all-by-code.params';
import { DictionaryGetAllByListOfParentCodesParams, dictionaryGetAllByListOfParentCodesAdapter } from './params/dictionary-get-all-by-list-of-parent-codes.params';
import { DictionaryGetAllByNameParams, dictionaryGetAllByNameAdapter } from './params/dictionary-get-all-by-name.params';
import { DictionaryGetAllByParentCodeRecursiveParams, dictionaryGetAllByParentCodeRecursiveAdapter } from './params/dictionary-get-all-by-parent-code-recursive.params';
import { DictionaryGetByCodeParams, dictionaryGetByCodeAdapter } from './params/dictionary-get-by-code.params';
import { DictionaryGetCountriesByCodesParams, dictionaryGetCountriesByCodesAdapter } from './params/dictionary-get-countries-by-codes.params';
import { DictionaryGetCountriesParams, dictionaryGetCountriesAdapter } from './params/dictionary-get-countries.params';
import { DictionaryGetElementWithoutChildsByCodeParams, dictionaryGetElementWithoutChildsByCodeAdapter } from './params/dictionary-get-element-without-childs-by-code.params';
import { DictionaryGetOkpd2ValuesByCodesParams, dictionaryGetOkpd2ValuesByCodesAdapter } from './params/dictionary-get-okpd-2-values-by-codes.params';
import { DictionaryGetParams, dictionaryGetAdapter } from './params/dictionary-get.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DictionaryRepository {
  private readonly _api = inject(DictionaryApiService);

  dictionaryGet(params?: DictionaryGetParams): Observable<Blob> {
    return this._api.dictionaryGet(dictionaryGetAdapter(params));
  }

  dictionaryGetAllByCode(params?: DictionaryGetAllByCodeParams): Observable<Blob> {
    return this._api.dictionaryGetAllByCode(dictionaryGetAllByCodeAdapter(params));
  }

  dictionaryGetAllByListOfParentCodes(params?: DictionaryGetAllByListOfParentCodesParams): Observable<Blob> {
    return this._api.dictionaryGetAllByListOfParentCodes(dictionaryGetAllByListOfParentCodesAdapter(params));
  }

  dictionaryGetAllByName(params?: DictionaryGetAllByNameParams): Observable<Blob> {
    return this._api.dictionaryGetAllByName(dictionaryGetAllByNameAdapter(params));
  }

  dictionaryGetAllByParentCodeRecursive(params?: DictionaryGetAllByParentCodeRecursiveParams): Observable<Blob> {
    return this._api.dictionaryGetAllByParentCodeRecursive(dictionaryGetAllByParentCodeRecursiveAdapter(params));
  }

  dictionaryGetByCode(params?: DictionaryGetByCodeParams): Observable<Blob> {
    return this._api.dictionaryGetByCode(dictionaryGetByCodeAdapter(params));
  }

  dictionaryGetCountries(params?: DictionaryGetCountriesParams): Observable<Blob> {
    return this._api.dictionaryGetCountries(dictionaryGetCountriesAdapter(params));
  }

  dictionaryGetCountriesByCodes(params?: DictionaryGetCountriesByCodesParams): Observable<Blob> {
    return this._api.dictionaryGetCountriesByCodes(dictionaryGetCountriesByCodesAdapter(params));
  }

  dictionaryGetElementWithoutChildsByCode(params?: DictionaryGetElementWithoutChildsByCodeParams): Observable<Blob> {
    return this._api.dictionaryGetElementWithoutChildsByCode(dictionaryGetElementWithoutChildsByCodeAdapter(params));
  }

  dictionaryGetOkpd2ValuesByCodes(params?: DictionaryGetOkpd2ValuesByCodesParams): Observable<Blob> {
    return this._api.dictionaryGetOkpd2ValuesByCodes(dictionaryGetOkpd2ValuesByCodesAdapter(params));
  }

}
