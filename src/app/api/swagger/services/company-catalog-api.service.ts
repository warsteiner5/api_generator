/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { companyCatalogGetIndustry } from '../fn/company-catalog/company-catalog-get-industry';
import { CompanyCatalogGetIndustry$Params } from '../fn/company-catalog/company-catalog-get-industry';
import { companyCatalogGetIndustryGroups } from '../fn/company-catalog/company-catalog-get-industry-groups';
import { CompanyCatalogGetIndustryGroups$Params } from '../fn/company-catalog/company-catalog-get-industry-groups';
import { companyCatalogGetOrganizationsForAutocomplete } from '../fn/company-catalog/company-catalog-get-organizations-for-autocomplete';
import { CompanyCatalogGetOrganizationsForAutocomplete$Params } from '../fn/company-catalog/company-catalog-get-organizations-for-autocomplete';
import { companyCatalogSearchCompanies } from '../fn/company-catalog/company-catalog-search-companies';
import { CompanyCatalogSearchCompanies$Params } from '../fn/company-catalog/company-catalog-search-companies';
import { companyCatalogSearchFavoriteCompanies } from '../fn/company-catalog/company-catalog-search-favorite-companies';
import { CompanyCatalogSearchFavoriteCompanies$Params } from '../fn/company-catalog/company-catalog-search-favorite-companies';
import { ApiMarketJsonResultOfIndustryDto } from '../models/api-market-json-result-of-industry-dto';
import { ApiMarketJsonResultOfIndustryDtoOf } from '../models/api-market-json-result-of-industry-dto-of';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-company-catalog-organization-dto';
import { ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto } from '../models/api-market-json-result-of-pagination-result-of-organization-for-autocomplete-dto';

@Injectable({ providedIn: 'root' })
export class CompanyCatalogApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `companyCatalogGetIndustryGroups()` */
  static readonly CompanyCatalogGetIndustryGroupsPath = '/bla-bla-vla/companies/industry-groups/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyCatalogGetIndustryGroups()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCatalogGetIndustryGroups$Response(params?: CompanyCatalogGetIndustryGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIndustryDtoOf>> {
    return companyCatalogGetIndustryGroups(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyCatalogGetIndustryGroups$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCatalogGetIndustryGroups(params?: CompanyCatalogGetIndustryGroups$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIndustryDtoOf> {
    return this.companyCatalogGetIndustryGroups$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIndustryDtoOf>): ApiMarketJsonResultOfIndustryDtoOf => r.body)
    );
  }

  /** Path part for operation `companyCatalogGetIndustry()` */
  static readonly CompanyCatalogGetIndustryPath = '/bla-bla-vla/companies/industries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyCatalogGetIndustry()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyCatalogGetIndustry$Response(params: CompanyCatalogGetIndustry$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIndustryDto>> {
    return companyCatalogGetIndustry(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyCatalogGetIndustry$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  companyCatalogGetIndustry(params: CompanyCatalogGetIndustry$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIndustryDto> {
    return this.companyCatalogGetIndustry$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIndustryDto>): ApiMarketJsonResultOfIndustryDto => r.body)
    );
  }

  /** Path part for operation `companyCatalogSearchCompanies()` */
  static readonly CompanyCatalogSearchCompaniesPath = '/bla-bla-vla/companies/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyCatalogSearchCompanies()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCatalogSearchCompanies$Response(params?: CompanyCatalogSearchCompanies$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto>> {
    return companyCatalogSearchCompanies(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyCatalogSearchCompanies$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCatalogSearchCompanies(params?: CompanyCatalogSearchCompanies$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto> {
    return this.companyCatalogSearchCompanies$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto => r.body)
    );
  }

  /** Path part for operation `companyCatalogSearchFavoriteCompanies()` */
  static readonly CompanyCatalogSearchFavoriteCompaniesPath = '/bla-bla-vla/companies/favorite/search';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyCatalogSearchFavoriteCompanies()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCatalogSearchFavoriteCompanies$Response(params?: CompanyCatalogSearchFavoriteCompanies$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto>> {
    return companyCatalogSearchFavoriteCompanies(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyCatalogSearchFavoriteCompanies$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCatalogSearchFavoriteCompanies(params?: CompanyCatalogSearchFavoriteCompanies$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto> {
    return this.companyCatalogSearchFavoriteCompanies$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfCompanyCatalogOrganizationDto => r.body)
    );
  }

  /** Path part for operation `companyCatalogGetOrganizationsForAutocomplete()` */
  static readonly CompanyCatalogGetOrganizationsForAutocompletePath = '/bla-bla-vla/companies/autocomplete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `companyCatalogGetOrganizationsForAutocomplete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCatalogGetOrganizationsForAutocomplete$Response(params?: CompanyCatalogGetOrganizationsForAutocomplete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto>> {
    return companyCatalogGetOrganizationsForAutocomplete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `companyCatalogGetOrganizationsForAutocomplete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  companyCatalogGetOrganizationsForAutocomplete(params?: CompanyCatalogGetOrganizationsForAutocomplete$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto> {
    return this.companyCatalogGetOrganizationsForAutocomplete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto>): ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto => r.body)
    );
  }

}
