/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { dictionaryGet } from '../fn/dictionary/dictionary-get';
import { DictionaryGet$Params } from '../fn/dictionary/dictionary-get';
import { dictionaryGetAllByCode } from '../fn/dictionary/dictionary-get-all-by-code';
import { DictionaryGetAllByCode$Params } from '../fn/dictionary/dictionary-get-all-by-code';
import { dictionaryGetAllByListOfParentCodes } from '../fn/dictionary/dictionary-get-all-by-list-of-parent-codes';
import { DictionaryGetAllByListOfParentCodes$Params } from '../fn/dictionary/dictionary-get-all-by-list-of-parent-codes';
import { dictionaryGetAllByName } from '../fn/dictionary/dictionary-get-all-by-name';
import { DictionaryGetAllByName$Params } from '../fn/dictionary/dictionary-get-all-by-name';
import { dictionaryGetAllByParentCodeRecursive } from '../fn/dictionary/dictionary-get-all-by-parent-code-recursive';
import { DictionaryGetAllByParentCodeRecursive$Params } from '../fn/dictionary/dictionary-get-all-by-parent-code-recursive';
import { dictionaryGetByCode } from '../fn/dictionary/dictionary-get-by-code';
import { DictionaryGetByCode$Params } from '../fn/dictionary/dictionary-get-by-code';
import { dictionaryGetCountries } from '../fn/dictionary/dictionary-get-countries';
import { DictionaryGetCountries$Params } from '../fn/dictionary/dictionary-get-countries';
import { dictionaryGetCountriesByCodes } from '../fn/dictionary/dictionary-get-countries-by-codes';
import { DictionaryGetCountriesByCodes$Params } from '../fn/dictionary/dictionary-get-countries-by-codes';
import { dictionaryGetElementWithoutChildsByCode } from '../fn/dictionary/dictionary-get-element-without-childs-by-code';
import { DictionaryGetElementWithoutChildsByCode$Params } from '../fn/dictionary/dictionary-get-element-without-childs-by-code';
import { dictionaryGetOkpd2ValuesByCodes } from '../fn/dictionary/dictionary-get-okpd-2-values-by-codes';
import { DictionaryGetOkpd2ValuesByCodes$Params } from '../fn/dictionary/dictionary-get-okpd-2-values-by-codes';

@Injectable({ providedIn: 'root' })
export class DictionaryApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `dictionaryGet()` */
  static readonly DictionaryGetPath = '/api/Dictionary';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGet$Response(params?: DictionaryGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGet(params?: DictionaryGet$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetAllByListOfParentCodes()` */
  static readonly DictionaryGetAllByListOfParentCodesPath = '/api/Dictionary/GetAllByListOfParentCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetAllByListOfParentCodes()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetAllByListOfParentCodes$Response(params?: DictionaryGetAllByListOfParentCodes$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetAllByListOfParentCodes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetAllByListOfParentCodes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetAllByListOfParentCodes(params?: DictionaryGetAllByListOfParentCodes$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetAllByListOfParentCodes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetAllByCode()` */
  static readonly DictionaryGetAllByCodePath = '/api/Dictionary/GetAllByCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetAllByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetAllByCode$Response(params?: DictionaryGetAllByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetAllByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetAllByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetAllByCode(params?: DictionaryGetAllByCode$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetAllByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetAllByName()` */
  static readonly DictionaryGetAllByNamePath = '/api/Dictionary/GetAllByName';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetAllByName()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetAllByName$Response(params?: DictionaryGetAllByName$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetAllByName(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetAllByName$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetAllByName(params?: DictionaryGetAllByName$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetAllByName$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetElementWithoutChildsByCode()` */
  static readonly DictionaryGetElementWithoutChildsByCodePath = '/api/Dictionary/GetElementWithoutChildsByCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetElementWithoutChildsByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetElementWithoutChildsByCode$Response(params?: DictionaryGetElementWithoutChildsByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetElementWithoutChildsByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetElementWithoutChildsByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetElementWithoutChildsByCode(params?: DictionaryGetElementWithoutChildsByCode$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetElementWithoutChildsByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetByCode()` */
  static readonly DictionaryGetByCodePath = '/api/Dictionary/GetByCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetByCode$Response(params?: DictionaryGetByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetByCode(params?: DictionaryGetByCode$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetAllByParentCodeRecursive()` */
  static readonly DictionaryGetAllByParentCodeRecursivePath = '/api/Dictionary/GetAllByParentCodeRecursive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetAllByParentCodeRecursive()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetAllByParentCodeRecursive$Response(params?: DictionaryGetAllByParentCodeRecursive$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetAllByParentCodeRecursive(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetAllByParentCodeRecursive$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetAllByParentCodeRecursive(params?: DictionaryGetAllByParentCodeRecursive$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetAllByParentCodeRecursive$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetOkpd2ValuesByCodes()` */
  static readonly DictionaryGetOkpd2ValuesByCodesPath = '/api/Dictionary/GetByCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetOkpd2ValuesByCodes()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetOkpd2ValuesByCodes$Response(params?: DictionaryGetOkpd2ValuesByCodes$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetOkpd2ValuesByCodes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetOkpd2ValuesByCodes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetOkpd2ValuesByCodes(params?: DictionaryGetOkpd2ValuesByCodes$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetOkpd2ValuesByCodes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetCountries()` */
  static readonly DictionaryGetCountriesPath = '/api/Dictionary/GetCountries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetCountries()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetCountries$Response(params?: DictionaryGetCountries$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetCountries(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetCountries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetCountries(params?: DictionaryGetCountries$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetCountries$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `dictionaryGetCountriesByCodes()` */
  static readonly DictionaryGetCountriesByCodesPath = '/api/Dictionary/GetCountriesByCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionaryGetCountriesByCodes()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetCountriesByCodes$Response(params?: DictionaryGetCountriesByCodes$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return dictionaryGetCountriesByCodes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionaryGetCountriesByCodes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionaryGetCountriesByCodes(params?: DictionaryGetCountriesByCodes$Params, context?: HttpContext): Observable<Blob> {
    return this.dictionaryGetCountriesByCodes$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
