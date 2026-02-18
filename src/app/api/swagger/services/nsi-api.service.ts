/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfAddressDto } from '../models/api-market-json-result-of-address-dto';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto } from '../models/api-market-json-result-of-i-read-only-collection-of-country-dto';
import { ApiMarketJsonResultOfOrganizationDtoOf } from '../models/api-market-json-result-of-organization-dto-of';
import { ApiMarketJsonResultOfSuggestResponseOfAddressDto } from '../models/api-market-json-result-of-suggest-response-of-address-dto';
import { ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto } from '../models/api-market-json-result-of-suggest-response-of-bank-suggest-dto';
import { ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto } from '../models/api-market-json-result-of-suggest-response-of-organization-suggest-dto';
import { nsiCleanAddress } from '../fn/nsi/nsi-clean-address';
import { NsiCleanAddress$Params } from '../fn/nsi/nsi-clean-address';
import { nsiFindOrganization } from '../fn/nsi/nsi-find-organization';
import { NsiFindOrganization$Params } from '../fn/nsi/nsi-find-organization';
import { nsiGetCountry } from '../fn/nsi/nsi-get-country';
import { NsiGetCountry$Params } from '../fn/nsi/nsi-get-country';
import { nsiSearchCountry } from '../fn/nsi/nsi-search-country';
import { NsiSearchCountry$Params } from '../fn/nsi/nsi-search-country';
import { nsiSuggestAddress } from '../fn/nsi/nsi-suggest-address';
import { NsiSuggestAddress$Params } from '../fn/nsi/nsi-suggest-address';
import { nsiSuggestBank } from '../fn/nsi/nsi-suggest-bank';
import { NsiSuggestBank$Params } from '../fn/nsi/nsi-suggest-bank';
import { nsiSuggestOrganization } from '../fn/nsi/nsi-suggest-organization';
import { NsiSuggestOrganization$Params } from '../fn/nsi/nsi-suggest-organization';

@Injectable({ providedIn: 'root' })
export class NsiApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `nsiGetCountry()` */
  static readonly NsiGetCountryPath = '/bla-bla-vla/nsi/getCountry';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nsiGetCountry()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiGetCountry$Response(params?: NsiGetCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto>> {
    return nsiGetCountry(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nsiGetCountry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiGetCountry(params?: NsiGetCountry$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto> {
    return this.nsiGetCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto => r.body)
    );
  }

  /** Path part for operation `nsiSearchCountry()` */
  static readonly NsiSearchCountryPath = '/bla-bla-vla/nsi/searchCountry';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nsiSearchCountry()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiSearchCountry$Response(params: NsiSearchCountry$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto>> {
    return nsiSearchCountry(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nsiSearchCountry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiSearchCountry(params: NsiSearchCountry$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto> {
    return this.nsiSearchCountry$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfCountryDto => r.body)
    );
  }

  /** Path part for operation `nsiSuggestAddress()` */
  static readonly NsiSuggestAddressPath = '/bla-bla-vla/nsi/address/suggest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nsiSuggestAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiSuggestAddress$Response(params: NsiSuggestAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfAddressDto>> {
    return nsiSuggestAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nsiSuggestAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiSuggestAddress(params: NsiSuggestAddress$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSuggestResponseOfAddressDto> {
    return this.nsiSuggestAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfAddressDto>): ApiMarketJsonResultOfSuggestResponseOfAddressDto => r.body)
    );
  }

  /** Path part for operation `nsiCleanAddress()` */
  static readonly NsiCleanAddressPath = '/bla-bla-vla/nsi/address/clean';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nsiCleanAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiCleanAddress$Response(params: NsiCleanAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfAddressDto>> {
    return nsiCleanAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nsiCleanAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiCleanAddress(params: NsiCleanAddress$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfAddressDto> {
    return this.nsiCleanAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfAddressDto>): ApiMarketJsonResultOfAddressDto => r.body)
    );
  }

  /** Path part for operation `nsiSuggestBank()` */
  static readonly NsiSuggestBankPath = '/bla-bla-vla/nsi/bank/suggest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nsiSuggestBank()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiSuggestBank$Response(params: NsiSuggestBank$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto>> {
    return nsiSuggestBank(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nsiSuggestBank$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiSuggestBank(params: NsiSuggestBank$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto> {
    return this.nsiSuggestBank$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto>): ApiMarketJsonResultOfSuggestResponseOfBankSuggestDto => r.body)
    );
  }

  /** Path part for operation `nsiSuggestOrganization()` */
  static readonly NsiSuggestOrganizationPath = '/bla-bla-vla/nsi/organization/suggest';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nsiSuggestOrganization()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiSuggestOrganization$Response(params: NsiSuggestOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto>> {
    return nsiSuggestOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nsiSuggestOrganization$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiSuggestOrganization(params: NsiSuggestOrganization$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto> {
    return this.nsiSuggestOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto>): ApiMarketJsonResultOfSuggestResponseOfOrganizationSuggestDto => r.body)
    );
  }

  /** Path part for operation `nsiFindOrganization()` */
  static readonly NsiFindOrganizationPath = '/bla-bla-vla/nsi/organization/find';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `nsiFindOrganization()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiFindOrganization$Response(params: NsiFindOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationDtoOf>> {
    return nsiFindOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `nsiFindOrganization$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  nsiFindOrganization(params: NsiFindOrganization$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrganizationDtoOf> {
    return this.nsiFindOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrganizationDtoOf>): ApiMarketJsonResultOfOrganizationDtoOf => r.body)
    );
  }

}
