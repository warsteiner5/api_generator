/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBooleanAltDto } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto } from '../models/api-market-json-result-of-market-organization-company-profile-dto';
import { organizationProfilesFindOrganizationProfileByGuid } from '../fn/organization-profiles/organization-profiles-find-organization-profile-by-guid';
import { OrganizationProfilesFindOrganizationProfileByGuid$Params } from '../fn/organization-profiles/organization-profiles-find-organization-profile-by-guid';
import { organizationProfilesUpdateProfileAppearance } from '../fn/organization-profiles/organization-profiles-update-profile-appearance';
import { OrganizationProfilesUpdateProfileAppearance$Params } from '../fn/organization-profiles/organization-profiles-update-profile-appearance';
import { organizationProfilesUpdateProfileContracts } from '../fn/organization-profiles/organization-profiles-update-profile-contracts';
import { OrganizationProfilesUpdateProfileContracts$Params } from '../fn/organization-profiles/organization-profiles-update-profile-contracts';
import { organizationProfilesUpdateProfileDeliveryRegions } from '../fn/organization-profiles/organization-profiles-update-profile-delivery-regions';
import { OrganizationProfilesUpdateProfileDeliveryRegions$Params } from '../fn/organization-profiles/organization-profiles-update-profile-delivery-regions';
import { organizationProfilesUpdateProfileDocuments } from '../fn/organization-profiles/organization-profiles-update-profile-documents';
import { OrganizationProfilesUpdateProfileDocuments$Params } from '../fn/organization-profiles/organization-profiles-update-profile-documents';
import { organizationProfilesUpdateProfileGallery } from '../fn/organization-profiles/organization-profiles-update-profile-gallery';
import { OrganizationProfilesUpdateProfileGallery$Params } from '../fn/organization-profiles/organization-profiles-update-profile-gallery';
import { organizationProfilesUpdateProfileIndustries } from '../fn/organization-profiles/organization-profiles-update-profile-industries';
import { OrganizationProfilesUpdateProfileIndustries$Params } from '../fn/organization-profiles/organization-profiles-update-profile-industries';
import { organizationProfilesUpdateProfileProducts } from '../fn/organization-profiles/organization-profiles-update-profile-products';
import { OrganizationProfilesUpdateProfileProducts$Params } from '../fn/organization-profiles/organization-profiles-update-profile-products';
import { organizationProfilesUpdateProfileTags } from '../fn/organization-profiles/organization-profiles-update-profile-tags';
import { OrganizationProfilesUpdateProfileTags$Params } from '../fn/organization-profiles/organization-profiles-update-profile-tags';
import { organizationProfilesUpdateProfileVideo } from '../fn/organization-profiles/organization-profiles-update-profile-video';
import { OrganizationProfilesUpdateProfileVideo$Params } from '../fn/organization-profiles/organization-profiles-update-profile-video';

@Injectable({ providedIn: 'root' })
export class OrganizationProfilesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `organizationProfilesFindOrganizationProfileByGuid()` */
  static readonly OrganizationProfilesFindOrganizationProfileByGuidPath = '/market/api/v1/organization-profiles/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesFindOrganizationProfileByGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationProfilesFindOrganizationProfileByGuid$Response(params?: OrganizationProfilesFindOrganizationProfileByGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto>> {
    return organizationProfilesFindOrganizationProfileByGuid(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesFindOrganizationProfileByGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationProfilesFindOrganizationProfileByGuid(params?: OrganizationProfilesFindOrganizationProfileByGuid$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto> {
    return this.organizationProfilesFindOrganizationProfileByGuid$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto>): ApiMarketJsonResultOfMarketOrganizationCompanyProfileDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileAppearance()` */
  static readonly OrganizationProfilesUpdateProfileAppearancePath = '/market/api/v1/organization-profiles/my/appearance';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileAppearance()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileAppearance$Response(params?: OrganizationProfilesUpdateProfileAppearance$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileAppearance(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileAppearance$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileAppearance(params?: OrganizationProfilesUpdateProfileAppearance$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileAppearance$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileIndustries()` */
  static readonly OrganizationProfilesUpdateProfileIndustriesPath = '/market/api/v1/organization-profiles/my/industries';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileIndustries()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileIndustries$Response(params?: OrganizationProfilesUpdateProfileIndustries$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileIndustries(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileIndustries$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileIndustries(params?: OrganizationProfilesUpdateProfileIndustries$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileIndustries$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileTags()` */
  static readonly OrganizationProfilesUpdateProfileTagsPath = '/market/api/v1/organization-profiles/my/tags';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileTags()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileTags$Response(params?: OrganizationProfilesUpdateProfileTags$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileTags(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileTags$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileTags(params?: OrganizationProfilesUpdateProfileTags$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileTags$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileProducts()` */
  static readonly OrganizationProfilesUpdateProfileProductsPath = '/market/api/v1/organization-profiles/my/products';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileProducts()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileProducts$Response(params?: OrganizationProfilesUpdateProfileProducts$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileProducts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileProducts$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileProducts(params?: OrganizationProfilesUpdateProfileProducts$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileProducts$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileContracts()` */
  static readonly OrganizationProfilesUpdateProfileContractsPath = '/market/api/v1/organization-profiles/my/contacts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileContracts()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileContracts$Response(params?: OrganizationProfilesUpdateProfileContracts$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileContracts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileContracts$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileContracts(params?: OrganizationProfilesUpdateProfileContracts$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileContracts$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileGallery()` */
  static readonly OrganizationProfilesUpdateProfileGalleryPath = '/market/api/v1/organization-profiles/my/gallery';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileGallery()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileGallery$Response(params?: OrganizationProfilesUpdateProfileGallery$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileGallery(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileGallery$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileGallery(params?: OrganizationProfilesUpdateProfileGallery$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileGallery$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileVideo()` */
  static readonly OrganizationProfilesUpdateProfileVideoPath = '/market/api/v1/organization-profiles/my/video';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileVideo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileVideo$Response(params?: OrganizationProfilesUpdateProfileVideo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileVideo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileVideo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileVideo(params?: OrganizationProfilesUpdateProfileVideo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileVideo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileDocuments()` */
  static readonly OrganizationProfilesUpdateProfileDocumentsPath = '/market/api/v1/organization-profiles/my/documents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileDocuments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileDocuments$Response(params?: OrganizationProfilesUpdateProfileDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileDocuments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileDocuments(params?: OrganizationProfilesUpdateProfileDocuments$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

  /** Path part for operation `organizationProfilesUpdateProfileDeliveryRegions()` */
  static readonly OrganizationProfilesUpdateProfileDeliveryRegionsPath = '/market/api/v1/organization-profiles/my/regions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationProfilesUpdateProfileDeliveryRegions()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileDeliveryRegions$Response(params?: OrganizationProfilesUpdateProfileDeliveryRegions$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>> {
    return organizationProfilesUpdateProfileDeliveryRegions(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationProfilesUpdateProfileDeliveryRegions$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationProfilesUpdateProfileDeliveryRegions(params?: OrganizationProfilesUpdateProfileDeliveryRegions$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBooleanAltDto> {
    return this.organizationProfilesUpdateProfileDeliveryRegions$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBooleanAltDto>): ApiMarketJsonResultOfBooleanAltDto => r.body)
    );
  }

}
