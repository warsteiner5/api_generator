/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { dictionariesGetAllOkeiCodes } from '../fn/dictionaries/dictionaries-get-all-okei-codes';
import { DictionariesGetAllOkeiCodes$Params } from '../fn/dictionaries/dictionaries-get-all-okei-codes';
import { dictionariesGetCategory } from '../fn/dictionaries/dictionaries-get-category';
import { DictionariesGetCategory$Params } from '../fn/dictionaries/dictionaries-get-category';
import { dictionariesGetCategoryAsync1 } from '../fn/dictionaries/dictionaries-get-category-async-1';
import { DictionariesGetCategoryAsync1$Params } from '../fn/dictionaries/dictionaries-get-category-async-1';
import { dictionariesGetCategoryByParentCode } from '../fn/dictionaries/dictionaries-get-category-by-parent-code';
import { DictionariesGetCategoryByParentCode$Params } from '../fn/dictionaries/dictionaries-get-category-by-parent-code';
import { dictionariesGetIndustries } from '../fn/dictionaries/dictionaries-get-industries';
import { DictionariesGetIndustries$Params } from '../fn/dictionaries/dictionaries-get-industries';
import { dictionariesGetKladrRegionListGet } from '../fn/dictionaries/dictionaries-get-kladr-region-list-get';
import { DictionariesGetKladrRegionListGet$Params } from '../fn/dictionaries/dictionaries-get-kladr-region-list-get';
import { dictionariesGetKladrRegionListGet2 } from '../fn/dictionaries/dictionaries-get-kladr-region-list-get-2';
import { DictionariesGetKladrRegionListGet2$Params } from '../fn/dictionaries/dictionaries-get-kladr-region-list-get-2';
import { dictionariesGetKladrRegionListPost } from '../fn/dictionaries/dictionaries-get-kladr-region-list-post';
import { DictionariesGetKladrRegionListPost$Params } from '../fn/dictionaries/dictionaries-get-kladr-region-list-post';
import { dictionariesGetKsrAutocompleteListGet } from '../fn/dictionaries/dictionaries-get-ksr-autocomplete-list-get';
import { DictionariesGetKsrAutocompleteListGet$Params } from '../fn/dictionaries/dictionaries-get-ksr-autocomplete-list-get';
import { dictionariesGetKsrAutocompleteListPost } from '../fn/dictionaries/dictionaries-get-ksr-autocomplete-list-post';
import { DictionariesGetKsrAutocompleteListPost$Params } from '../fn/dictionaries/dictionaries-get-ksr-autocomplete-list-post';
import { dictionariesGetKsrByCode } from '../fn/dictionaries/dictionaries-get-ksr-by-code';
import { DictionariesGetKsrByCode$Params } from '../fn/dictionaries/dictionaries-get-ksr-by-code';
import { dictionariesGetKsrByParentCode } from '../fn/dictionaries/dictionaries-get-ksr-by-parent-code';
import { DictionariesGetKsrByParentCode$Params } from '../fn/dictionaries/dictionaries-get-ksr-by-parent-code';
import { dictionariesGetKsrMainCategories } from '../fn/dictionaries/dictionaries-get-ksr-main-categories';
import { DictionariesGetKsrMainCategories$Params } from '../fn/dictionaries/dictionaries-get-ksr-main-categories';
import { dictionariesGetKtruByCode } from '../fn/dictionaries/dictionaries-get-ktru-by-code';
import { DictionariesGetKtruByCode$Params } from '../fn/dictionaries/dictionaries-get-ktru-by-code';
import { dictionariesGetKtruByOkpd2 } from '../fn/dictionaries/dictionaries-get-ktru-by-okpd-2';
import { DictionariesGetKtruByOkpd2$Params } from '../fn/dictionaries/dictionaries-get-ktru-by-okpd-2';
import { dictionariesGetOkdp2AutocompleteListGet } from '../fn/dictionaries/dictionaries-get-okdp-2-autocomplete-list-get';
import { DictionariesGetOkdp2AutocompleteListGet$Params } from '../fn/dictionaries/dictionaries-get-okdp-2-autocomplete-list-get';
import { dictionariesGetOkdp2AutocompleteListPost } from '../fn/dictionaries/dictionaries-get-okdp-2-autocomplete-list-post';
import { DictionariesGetOkdp2AutocompleteListPost$Params } from '../fn/dictionaries/dictionaries-get-okdp-2-autocomplete-list-post';
import { dictionariesGetOkopfByCode } from '../fn/dictionaries/dictionaries-get-okopf-by-code';
import { DictionariesGetOkopfByCode$Params } from '../fn/dictionaries/dictionaries-get-okopf-by-code';
import { dictionariesGetOkpd2ByCode } from '../fn/dictionaries/dictionaries-get-okpd-2-by-code';
import { DictionariesGetOkpd2ByCode$Params } from '../fn/dictionaries/dictionaries-get-okpd-2-by-code';
import { dictionariesGetOkpd2ByParentCode } from '../fn/dictionaries/dictionaries-get-okpd-2-by-parent-code';
import { DictionariesGetOkpd2ByParentCode$Params } from '../fn/dictionaries/dictionaries-get-okpd-2-by-parent-code';
import { dictionariesGetOktmoByCode } from '../fn/dictionaries/dictionaries-get-oktmo-by-code';
import { DictionariesGetOktmoByCode$Params } from '../fn/dictionaries/dictionaries-get-oktmo-by-code';
import { dictionariesGetOkved2AutocompleteListGet } from '../fn/dictionaries/dictionaries-get-okved-2-autocomplete-list-get';
import { DictionariesGetOkved2AutocompleteListGet$Params } from '../fn/dictionaries/dictionaries-get-okved-2-autocomplete-list-get';
import { dictionariesGetOkved2AutocompleteListPost } from '../fn/dictionaries/dictionaries-get-okved-2-autocomplete-list-post';
import { DictionariesGetOkved2AutocompleteListPost$Params } from '../fn/dictionaries/dictionaries-get-okved-2-autocomplete-list-post';
import { dictionariesGetOkved2ByCode } from '../fn/dictionaries/dictionaries-get-okved-2-by-code';
import { DictionariesGetOkved2ByCode$Params } from '../fn/dictionaries/dictionaries-get-okved-2-by-code';
import { dictionariesGetOkved2ByParentCode } from '../fn/dictionaries/dictionaries-get-okved-2-by-parent-code';
import { DictionariesGetOkved2ByParentCode$Params } from '../fn/dictionaries/dictionaries-get-okved-2-by-parent-code';
import { dictionariesGetOrganizationCountries } from '../fn/dictionaries/dictionaries-get-organization-countries';
import { DictionariesGetOrganizationCountries$Params } from '../fn/dictionaries/dictionaries-get-organization-countries';
import { dictionariesGetRegions } from '../fn/dictionaries/dictionaries-get-regions';
import { DictionariesGetRegions$Params } from '../fn/dictionaries/dictionaries-get-regions';
import { dictionariesGetRegistries } from '../fn/dictionaries/dictionaries-get-registries';
import { DictionariesGetRegistries$Params } from '../fn/dictionaries/dictionaries-get-registries';
import { dictionariesGetRegistryItemsAutocomplete } from '../fn/dictionaries/dictionaries-get-registry-items-autocomplete';
import { DictionariesGetRegistryItemsAutocomplete$Params } from '../fn/dictionaries/dictionaries-get-registry-items-autocomplete';
import { dictionariesGetRootKsr } from '../fn/dictionaries/dictionaries-get-root-ksr';
import { DictionariesGetRootKsr$Params } from '../fn/dictionaries/dictionaries-get-root-ksr';
import { dictionariesSearchKtruByString } from '../fn/dictionaries/dictionaries-search-ktru-by-string';
import { DictionariesSearchKtruByString$Params } from '../fn/dictionaries/dictionaries-search-ktru-by-string';
import { ApiMarketJsonResultOfCategoryDtoOf } from '../models/api-market-json-result-of-category-dto-of';
import { ApiMarketJsonResultOfCategoryWithChildrenDto } from '../models/api-market-json-result-of-category-with-children-dto';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItemAltDto } from '../models/api-market-json-result-of-i-read-only-collection-of-dictionary-item';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategoryAltDto } from '../models/api-market-json-result-of-i-read-only-collection-of-ksr-category';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto } from '../models/api-market-json-result-of-i-read-only-collection-of-ksr-value';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto } from '../models/api-market-json-result-of-i-read-only-collection-of-registry-dto';
import { ApiMarketJsonResultOfKeyValuePair2OfAltDto } from '../models/api-market-json-result-of-key-value-pair-2-of';
import { ApiMarketJsonResultOfKsrValueAltDto } from '../models/api-market-json-result-of-ksr-value';
import { ApiMarketJsonResultOfKtruDto } from '../models/api-market-json-result-of-ktru-dto';
import { ApiMarketJsonResultOfListOfCategoryDto } from '../models/api-market-json-result-of-list-of-category-dto';
import { ApiMarketJsonResultOfListOfIndustryDto } from '../models/api-market-json-result-of-list-of-industry-dto';
import { ApiMarketJsonResultOfListOfOkeiShortDto } from '../models/api-market-json-result-of-list-of-okei-short-dto';
import { ApiMarketJsonResultOfListOfOkpd2ValueAltDto } from '../models/api-market-json-result-of-list-of-okpd-2-value';
import { ApiMarketJsonResultOfListOfOkved2ValueAltDto } from '../models/api-market-json-result-of-list-of-okved-2-value';
import { ApiMarketJsonResultOfListOfRegionDto } from '../models/api-market-json-result-of-list-of-region-dto';
import { ApiMarketJsonResultOfMunicipalityOktmoDto } from '../models/api-market-json-result-of-municipality-oktmo-dto';
import { ApiMarketJsonResultOfOkopfDto } from '../models/api-market-json-result-of-okopf-dto';
import { ApiMarketJsonResultOfOkpd2ValueAltDto } from '../models/api-market-json-result-of-okpd-2-value';
import { ApiMarketJsonResultOfOkved2ValueAltDto } from '../models/api-market-json-result-of-okved-2-value';
import { ApiMarketJsonResultOfOrganizationCountryDtoOf } from '../models/api-market-json-result-of-organization-country-dto-of';
import { ApiMarketJsonResultOfPagedCollectionOfKtruShortDto } from '../models/api-market-json-result-of-paged-collection-of-ktru-short-dto';

@Injectable({ providedIn: 'root' })
export class DictionariesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `dictionariesGetAllOkeiCodes()` */
  static readonly DictionariesGetAllOkeiCodesPath = '/market/api/v1/dictionaries/okei';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetAllOkeiCodes()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetAllOkeiCodes$Response(params?: DictionariesGetAllOkeiCodes$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkeiShortDto>> {
    return dictionariesGetAllOkeiCodes(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetAllOkeiCodes$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetAllOkeiCodes(params?: DictionariesGetAllOkeiCodes$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOkeiShortDto> {
    return this.dictionariesGetAllOkeiCodes$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOkeiShortDto>): ApiMarketJsonResultOfListOfOkeiShortDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetRegions()` */
  static readonly DictionariesGetRegionsPath = '/market/api/v1/dictionaries/regions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetRegions()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetRegions$Response(params?: DictionariesGetRegions$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfRegionDto>> {
    return dictionariesGetRegions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetRegions$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetRegions(params?: DictionariesGetRegions$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfRegionDto> {
    return this.dictionariesGetRegions$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfRegionDto>): ApiMarketJsonResultOfListOfRegionDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOrganizationCountries()` */
  static readonly DictionariesGetOrganizationCountriesPath = '/market/api/v1/dictionaries/countries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOrganizationCountries()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOrganizationCountries$Response(params?: DictionariesGetOrganizationCountries$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationCountryDtoOf>> {
    return dictionariesGetOrganizationCountries(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOrganizationCountries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOrganizationCountries(params?: DictionariesGetOrganizationCountries$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrganizationCountryDtoOf> {
    return this.dictionariesGetOrganizationCountries$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrganizationCountryDtoOf>): ApiMarketJsonResultOfOrganizationCountryDtoOf => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKladrRegionListGet()` */
  static readonly DictionariesGetKladrRegionListGetPath = '/market/api/v1/dictionaries/kladr';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKladrRegionListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKladrRegionListGet$Response(params?: DictionariesGetKladrRegionListGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>> {
    return dictionariesGetKladrRegionListGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKladrRegionListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKladrRegionListGet(params?: DictionariesGetKladrRegionListGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfKeyValuePair2OfAltDto> {
    return this.dictionariesGetKladrRegionListGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>): ApiMarketJsonResultOfKeyValuePair2OfAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKladrRegionListGet2()` */
  static readonly DictionariesGetKladrRegionListGet2Path = '/market/api/v1/dictionaries/kladr/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKladrRegionListGet2()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKladrRegionListGet2$Response(params: DictionariesGetKladrRegionListGet2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>> {
    return dictionariesGetKladrRegionListGet2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKladrRegionListGet2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKladrRegionListGet2(params: DictionariesGetKladrRegionListGet2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfKeyValuePair2OfAltDto> {
    return this.dictionariesGetKladrRegionListGet2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>): ApiMarketJsonResultOfKeyValuePair2OfAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKladrRegionListPost()` */
  static readonly DictionariesGetKladrRegionListPostPath = '/market/api/v1/dictionaries/kladr/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKladrRegionListPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dictionariesGetKladrRegionListPost$Response(params?: DictionariesGetKladrRegionListPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>> {
    return dictionariesGetKladrRegionListPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKladrRegionListPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dictionariesGetKladrRegionListPost(params?: DictionariesGetKladrRegionListPost$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfKeyValuePair2OfAltDto> {
    return this.dictionariesGetKladrRegionListPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfKeyValuePair2OfAltDto>): ApiMarketJsonResultOfKeyValuePair2OfAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOktmoByCode()` */
  static readonly DictionariesGetOktmoByCodePath = '/market/api/v1/dictionaries/oktmo/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOktmoByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOktmoByCode$Response(params: DictionariesGetOktmoByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMunicipalityOktmoDto>> {
    return dictionariesGetOktmoByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOktmoByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOktmoByCode(params: DictionariesGetOktmoByCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMunicipalityOktmoDto> {
    return this.dictionariesGetOktmoByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMunicipalityOktmoDto>): ApiMarketJsonResultOfMunicipalityOktmoDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkopfByCode()` */
  static readonly DictionariesGetOkopfByCodePath = '/market/api/v1/dictionaries/okopf/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkopfByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkopfByCode$Response(params: DictionariesGetOkopfByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkopfDto>> {
    return dictionariesGetOkopfByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkopfByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkopfByCode(params: DictionariesGetOkopfByCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOkopfDto> {
    return this.dictionariesGetOkopfByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOkopfDto>): ApiMarketJsonResultOfOkopfDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkpd2ByParentCode()` */
  static readonly DictionariesGetOkpd2ByParentCodePath = '/market/api/v1/dictionaries/okpd2';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkpd2ByParentCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkpd2ByParentCode$Response(params?: DictionariesGetOkpd2ByParentCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>> {
    return dictionariesGetOkpd2ByParentCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkpd2ByParentCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkpd2ByParentCode(params?: DictionariesGetOkpd2ByParentCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOkpd2ValueAltDto> {
    return this.dictionariesGetOkpd2ByParentCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>): ApiMarketJsonResultOfListOfOkpd2ValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkpd2ByCode()` */
  static readonly DictionariesGetOkpd2ByCodePath = '/market/api/v1/dictionaries/okpd2/getitem/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkpd2ByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkpd2ByCode$Response(params: DictionariesGetOkpd2ByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkpd2ValueAltDto>> {
    return dictionariesGetOkpd2ByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkpd2ByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkpd2ByCode(params: DictionariesGetOkpd2ByCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOkpd2ValueAltDto> {
    return this.dictionariesGetOkpd2ByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOkpd2ValueAltDto>): ApiMarketJsonResultOfOkpd2ValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkdp2AutocompleteListGet()` */
  static readonly DictionariesGetOkdp2AutocompleteListGetPath = '/market/api/v1/dictionaries/okpd2/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkdp2AutocompleteListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkdp2AutocompleteListGet$Response(params: DictionariesGetOkdp2AutocompleteListGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>> {
    return dictionariesGetOkdp2AutocompleteListGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkdp2AutocompleteListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkdp2AutocompleteListGet(params: DictionariesGetOkdp2AutocompleteListGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOkpd2ValueAltDto> {
    return this.dictionariesGetOkdp2AutocompleteListGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>): ApiMarketJsonResultOfListOfOkpd2ValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkdp2AutocompleteListPost()` */
  static readonly DictionariesGetOkdp2AutocompleteListPostPath = '/market/api/v1/dictionaries/okpd2/autocomplete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkdp2AutocompleteListPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dictionariesGetOkdp2AutocompleteListPost$Response(params?: DictionariesGetOkdp2AutocompleteListPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>> {
    return dictionariesGetOkdp2AutocompleteListPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkdp2AutocompleteListPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dictionariesGetOkdp2AutocompleteListPost(params?: DictionariesGetOkdp2AutocompleteListPost$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOkpd2ValueAltDto> {
    return this.dictionariesGetOkdp2AutocompleteListPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOkpd2ValueAltDto>): ApiMarketJsonResultOfListOfOkpd2ValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkved2ByParentCode()` */
  static readonly DictionariesGetOkved2ByParentCodePath = '/market/api/v1/dictionaries/okved2';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkved2ByParentCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkved2ByParentCode$Response(params?: DictionariesGetOkved2ByParentCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>> {
    return dictionariesGetOkved2ByParentCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkved2ByParentCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkved2ByParentCode(params?: DictionariesGetOkved2ByParentCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOkved2ValueAltDto> {
    return this.dictionariesGetOkved2ByParentCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>): ApiMarketJsonResultOfListOfOkved2ValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkved2ByCode()` */
  static readonly DictionariesGetOkved2ByCodePath = '/market/api/v1/dictionaries/okved2/getitem/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkved2ByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkved2ByCode$Response(params: DictionariesGetOkved2ByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOkved2ValueAltDto>> {
    return dictionariesGetOkved2ByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkved2ByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkved2ByCode(params: DictionariesGetOkved2ByCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOkved2ValueAltDto> {
    return this.dictionariesGetOkved2ByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOkved2ValueAltDto>): ApiMarketJsonResultOfOkved2ValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkved2AutocompleteListGet()` */
  static readonly DictionariesGetOkved2AutocompleteListGetPath = '/market/api/v1/dictionaries/okved2/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkved2AutocompleteListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkved2AutocompleteListGet$Response(params: DictionariesGetOkved2AutocompleteListGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>> {
    return dictionariesGetOkved2AutocompleteListGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkved2AutocompleteListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetOkved2AutocompleteListGet(params: DictionariesGetOkved2AutocompleteListGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOkved2ValueAltDto> {
    return this.dictionariesGetOkved2AutocompleteListGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>): ApiMarketJsonResultOfListOfOkved2ValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetOkved2AutocompleteListPost()` */
  static readonly DictionariesGetOkved2AutocompleteListPostPath = '/market/api/v1/dictionaries/okved2/autocomplete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetOkved2AutocompleteListPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dictionariesGetOkved2AutocompleteListPost$Response(params?: DictionariesGetOkved2AutocompleteListPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>> {
    return dictionariesGetOkved2AutocompleteListPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetOkved2AutocompleteListPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dictionariesGetOkved2AutocompleteListPost(params?: DictionariesGetOkved2AutocompleteListPost$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOkved2ValueAltDto> {
    return this.dictionariesGetOkved2AutocompleteListPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOkved2ValueAltDto>): ApiMarketJsonResultOfListOfOkved2ValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetIndustries()` */
  static readonly DictionariesGetIndustriesPath = '/market/api/v1/dictionaries/industries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetIndustries()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetIndustries$Response(params?: DictionariesGetIndustries$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfIndustryDto>> {
    return dictionariesGetIndustries(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetIndustries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetIndustries(params?: DictionariesGetIndustries$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfIndustryDto> {
    return this.dictionariesGetIndustries$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfIndustryDto>): ApiMarketJsonResultOfListOfIndustryDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetCategoryByParentCode()` */
  static readonly DictionariesGetCategoryByParentCodePath = '/market/api/v1/dictionaries/category/childs';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetCategoryByParentCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetCategoryByParentCode$Response(params: DictionariesGetCategoryByParentCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfCategoryDto>> {
    return dictionariesGetCategoryByParentCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetCategoryByParentCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetCategoryByParentCode(params: DictionariesGetCategoryByParentCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfCategoryDto> {
    return this.dictionariesGetCategoryByParentCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfCategoryDto>): ApiMarketJsonResultOfListOfCategoryDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetCategory()` */
  static readonly DictionariesGetCategoryPath = '/market/api/v1/dictionaries/category/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetCategory()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetCategory$Response(params: DictionariesGetCategory$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCategoryWithChildrenDto>> {
    return dictionariesGetCategory(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetCategory$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetCategory(params: DictionariesGetCategory$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCategoryWithChildrenDto> {
    return this.dictionariesGetCategory$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCategoryWithChildrenDto>): ApiMarketJsonResultOfCategoryWithChildrenDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetCategoryAsync1()` */
  static readonly DictionariesGetCategoryAsync1Path = '/market/api/v1/dictionaries/category/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetCategoryAsync1()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetCategoryAsync1$Response(params: DictionariesGetCategoryAsync1$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCategoryDtoOf>> {
    return dictionariesGetCategoryAsync1(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetCategoryAsync1$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetCategoryAsync1(params: DictionariesGetCategoryAsync1$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCategoryDtoOf> {
    return this.dictionariesGetCategoryAsync1$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCategoryDtoOf>): ApiMarketJsonResultOfCategoryDtoOf => r.body)
    );
  }

  /** Path part for operation `dictionariesSearchKtruByString()` */
  static readonly DictionariesSearchKtruByStringPath = '/market/api/v1/dictionaries/ktru/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesSearchKtruByString()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesSearchKtruByString$Response(params: DictionariesSearchKtruByString$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto>> {
    return dictionariesSearchKtruByString(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesSearchKtruByString$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesSearchKtruByString(params: DictionariesSearchKtruByString$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto> {
    return this.dictionariesSearchKtruByString$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto>): ApiMarketJsonResultOfPagedCollectionOfKtruShortDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKtruByOkpd2()` */
  static readonly DictionariesGetKtruByOkpd2Path = '/market/api/v1/dictionaries/ktru';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKtruByOkpd2()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKtruByOkpd2$Response(params: DictionariesGetKtruByOkpd2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto>> {
    return dictionariesGetKtruByOkpd2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKtruByOkpd2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKtruByOkpd2(params: DictionariesGetKtruByOkpd2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto> {
    return this.dictionariesGetKtruByOkpd2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPagedCollectionOfKtruShortDto>): ApiMarketJsonResultOfPagedCollectionOfKtruShortDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKtruByCode()` */
  static readonly DictionariesGetKtruByCodePath = '/market/api/v1/dictionaries/ktru/{code}/{version}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKtruByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKtruByCode$Response(params: DictionariesGetKtruByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKtruDto>> {
    return dictionariesGetKtruByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKtruByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKtruByCode(params: DictionariesGetKtruByCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfKtruDto> {
    return this.dictionariesGetKtruByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfKtruDto>): ApiMarketJsonResultOfKtruDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetRegistries()` */
  static readonly DictionariesGetRegistriesPath = '/market/api/v1/dictionaries/registries/country/{countryCode}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetRegistries()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetRegistries$Response(params: DictionariesGetRegistries$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItemAltDto>> {
    return dictionariesGetRegistries(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetRegistries$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetRegistries(params: DictionariesGetRegistries$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItemAltDto> {
    return this.dictionariesGetRegistries$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItemAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfDictionaryItemAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetRegistryItemsAutocomplete()` */
  static readonly DictionariesGetRegistryItemsAutocompletePath = '/market/api/v1/dictionaries/registries/{type}/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetRegistryItemsAutocomplete()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetRegistryItemsAutocomplete$Response(params: DictionariesGetRegistryItemsAutocomplete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto>> {
    return dictionariesGetRegistryItemsAutocomplete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetRegistryItemsAutocomplete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetRegistryItemsAutocomplete(params: DictionariesGetRegistryItemsAutocomplete$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto> {
    return this.dictionariesGetRegistryItemsAutocomplete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfRegistryDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKsrByParentCode()` */
  static readonly DictionariesGetKsrByParentCodePath = '/market/api/v1/dictionaries/ksr/{parentCode}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKsrByParentCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKsrByParentCode$Response(params: DictionariesGetKsrByParentCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>> {
    return dictionariesGetKsrByParentCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKsrByParentCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKsrByParentCode(params: DictionariesGetKsrByParentCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto> {
    return this.dictionariesGetKsrByParentCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetRootKsr()` */
  static readonly DictionariesGetRootKsrPath = '/market/api/v1/dictionaries/ksr';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetRootKsr()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetRootKsr$Response(params?: DictionariesGetRootKsr$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>> {
    return dictionariesGetRootKsr(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetRootKsr$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetRootKsr(params?: DictionariesGetRootKsr$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto> {
    return this.dictionariesGetRootKsr$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKsrByCode()` */
  static readonly DictionariesGetKsrByCodePath = '/market/api/v1/dictionaries/ksr/getitem/{code}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKsrByCode()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKsrByCode$Response(params: DictionariesGetKsrByCode$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfKsrValueAltDto>> {
    return dictionariesGetKsrByCode(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKsrByCode$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKsrByCode(params: DictionariesGetKsrByCode$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfKsrValueAltDto> {
    return this.dictionariesGetKsrByCode$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfKsrValueAltDto>): ApiMarketJsonResultOfKsrValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKsrAutocompleteListGet()` */
  static readonly DictionariesGetKsrAutocompleteListGetPath = '/market/api/v1/dictionaries/ksr/autocomplete/{searchValue}/maxReturnCount/{maxReturnCount}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKsrAutocompleteListGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKsrAutocompleteListGet$Response(params: DictionariesGetKsrAutocompleteListGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>> {
    return dictionariesGetKsrAutocompleteListGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKsrAutocompleteListGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKsrAutocompleteListGet(params: DictionariesGetKsrAutocompleteListGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto> {
    return this.dictionariesGetKsrAutocompleteListGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKsrAutocompleteListPost()` */
  static readonly DictionariesGetKsrAutocompleteListPostPath = '/market/api/v1/dictionaries/ksr/autocomplete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKsrAutocompleteListPost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dictionariesGetKsrAutocompleteListPost$Response(params?: DictionariesGetKsrAutocompleteListPost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>> {
    return dictionariesGetKsrAutocompleteListPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKsrAutocompleteListPost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  dictionariesGetKsrAutocompleteListPost(params?: DictionariesGetKsrAutocompleteListPost$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto> {
    return this.dictionariesGetKsrAutocompleteListPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfKsrValueAltDto => r.body)
    );
  }

  /** Path part for operation `dictionariesGetKsrMainCategories()` */
  static readonly DictionariesGetKsrMainCategoriesPath = '/market/api/v1/dictionaries/ksr/groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `dictionariesGetKsrMainCategories()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKsrMainCategories$Response(params?: DictionariesGetKsrMainCategories$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategoryAltDto>> {
    return dictionariesGetKsrMainCategories(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `dictionariesGetKsrMainCategories$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  dictionariesGetKsrMainCategories(params?: DictionariesGetKsrMainCategories$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategoryAltDto> {
    return this.dictionariesGetKsrMainCategories$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategoryAltDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfKsrCategoryAltDto => r.body)
    );
  }

}
