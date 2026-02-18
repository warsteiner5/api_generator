/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBoolean } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfCertificateOrganizationDtoOf } from '../models/api-market-json-result-of-certificate-organization-dto-of';
import { ApiMarketJsonResultOfCertificateViewModelDto } from '../models/api-market-json-result-of-certificate-view-model-dto';
import { ApiMarketJsonResultOfFileInfoForSignDto } from '../models/api-market-json-result-of-file-info-for-sign-dto';
import { ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto } from '../models/api-market-json-result-of-i-read-only-collection-of-foreign-organization-dto';
import { ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto } from '../models/api-market-json-result-of-list-of-market-organization-full-info-dto';
import { ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto } from '../models/api-market-json-result-of-list-of-market-partner-organization-dto';
import { ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto } from '../models/api-market-json-result-of-market-composite-organization-short-info-dto';
import { ApiMarketJsonResultOfMarketEmployeeShortInfo } from '../models/api-market-json-result-of-market-employee-short-info';
import { ApiMarketJsonResultOfMarketOrganizationCommonInfoDto } from '../models/api-market-json-result-of-market-organization-common-info-dto';
import { ApiMarketJsonResultOfMarketOrganizationFullInfoDto } from '../models/api-market-json-result-of-market-organization-full-info-dto';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-organization-with-address-short-info-dto';
import { ApiMarketJsonResultOfOrganizanizationFullCardDto } from '../models/api-market-json-result-of-organizanization-full-card-dto';
import { ApiMarketJsonResultOfOrganizationInfoDto } from '../models/api-market-json-result-of-organization-info-dto';
import { ApiMarketJsonResultOfOrganizationProfileDocumentDto } from '../models/api-market-json-result-of-organization-profile-document-dto';
import { ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto } from '../models/api-market-json-result-of-pagination-result-of-foreign-organization-dto';
import { ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto } from '../models/api-market-json-result-of-pagination-result-of-organization-for-autocomplete-dto';
import { ApiMarketJsonResultOfTaskOfAgreement2323Dto } from '../models/api-market-json-result-of-task-of-agreement-2323-dto';
import { ApiMarketJsonResultOfTaskOfGuid } from '../models/api-market-json-result-of-task-of-guid';
import { ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign } from '../models/api-market-json-result-of-update-organization-base-info-data-to-sign';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { organizationsApplyHomeRegionMessage } from '../fn/organizations/organizations-apply-home-region-message';
import { OrganizationsApplyHomeRegionMessage$Params } from '../fn/organizations/organizations-apply-home-region-message';
import { organizationsAutocompleteForeignOrganizations } from '../fn/organizations/organizations-autocomplete-foreign-organizations';
import { OrganizationsAutocompleteForeignOrganizations$Params } from '../fn/organizations/organizations-autocomplete-foreign-organizations';
import { organizationsCheckAndGetOrganization } from '../fn/organizations/organizations-check-and-get-organization';
import { OrganizationsCheckAndGetOrganization$Params } from '../fn/organizations/organizations-check-and-get-organization';
import { organizationsCreateAgreement2323 } from '../fn/organizations/organizations-create-agreement-2323';
import { OrganizationsCreateAgreement2323$Params } from '../fn/organizations/organizations-create-agreement-2323';
import { organizationsCreateOrganization } from '../fn/organizations/organizations-create-organization';
import { OrganizationsCreateOrganization$Params } from '../fn/organizations/organizations-create-organization';
import { organizationsFindOrganizationInfo } from '../fn/organizations/organizations-find-organization-info';
import { OrganizationsFindOrganizationInfo$Params } from '../fn/organizations/organizations-find-organization-info';
import { organizationsFindOrganizationInfoByGuid } from '../fn/organizations/organizations-find-organization-info-by-guid';
import { OrganizationsFindOrganizationInfoByGuid$Params } from '../fn/organizations/organizations-find-organization-info-by-guid';
import { organizationsGetAgreementInfoForSign } from '../fn/organizations/organizations-get-agreement-info-for-sign';
import { OrganizationsGetAgreementInfoForSign$Params } from '../fn/organizations/organizations-get-agreement-info-for-sign';
import { organizationsGetAgrement2323Info } from '../fn/organizations/organizations-get-agrement-2323-info';
import { OrganizationsGetAgrement2323Info$Params } from '../fn/organizations/organizations-get-agrement-2323-info';
import { organizationsGetCertificateInfoFromFile } from '../fn/organizations/organizations-get-certificate-info-from-file';
import { OrganizationsGetCertificateInfoFromFile$Params } from '../fn/organizations/organizations-get-certificate-info-from-file';
import { organizationsGetCertificateOrganizations } from '../fn/organizations/organizations-get-certificate-organizations';
import { OrganizationsGetCertificateOrganizations$Params } from '../fn/organizations/organizations-get-certificate-organizations';
import { organizationsGetCurrentOrganizationInfo } from '../fn/organizations/organizations-get-current-organization-info';
import { OrganizationsGetCurrentOrganizationInfo$Params } from '../fn/organizations/organizations-get-current-organization-info';
import { organizationsGetEmployees } from '../fn/organizations/organizations-get-employees';
import { OrganizationsGetEmployees$Params } from '../fn/organizations/organizations-get-employees';
import { organizationsGetForeignOrganizations } from '../fn/organizations/organizations-get-foreign-organizations';
import { OrganizationsGetForeignOrganizations$Params } from '../fn/organizations/organizations-get-foreign-organizations';
import { organizationsGetMyCustomerPartners } from '../fn/organizations/organizations-get-my-customer-partners';
import { OrganizationsGetMyCustomerPartners$Params } from '../fn/organizations/organizations-get-my-customer-partners';
import { organizationsGetOrganizationDocuments } from '../fn/organizations/organizations-get-organization-documents';
import { OrganizationsGetOrganizationDocuments$Params } from '../fn/organizations/organizations-get-organization-documents';
import { organizationsGetOrganizationDocuments2 } from '../fn/organizations/organizations-get-organization-documents-2';
import { OrganizationsGetOrganizationDocuments2$Params } from '../fn/organizations/organizations-get-organization-documents-2';
import { organizationsGetOrganizationFz223Info } from '../fn/organizations/organizations-get-organization-fz-223-info';
import { OrganizationsGetOrganizationFz223Info$Params } from '../fn/organizations/organizations-get-organization-fz-223-info';
import { organizationsGetOrganizationInfoByGuid } from '../fn/organizations/organizations-get-organization-info-by-guid';
import { OrganizationsGetOrganizationInfoByGuid$Params } from '../fn/organizations/organizations-get-organization-info-by-guid';
import { organizationsGetOrganizationsByFilter } from '../fn/organizations/organizations-get-organizations-by-filter';
import { OrganizationsGetOrganizationsByFilter$Params } from '../fn/organizations/organizations-get-organizations-by-filter';
import { organizationsGetOrganizationsForAutocomplete } from '../fn/organizations/organizations-get-organizations-for-autocomplete';
import { OrganizationsGetOrganizationsForAutocomplete$Params } from '../fn/organizations/organizations-get-organizations-for-autocomplete';
import { organizationsGetOrganizationsForCurrentUser } from '../fn/organizations/organizations-get-organizations-for-current-user';
import { OrganizationsGetOrganizationsForCurrentUser$Params } from '../fn/organizations/organizations-get-organizations-for-current-user';
import { organizationsGetOrganizationShortInfo } from '../fn/organizations/organizations-get-organization-short-info';
import { OrganizationsGetOrganizationShortInfo$Params } from '../fn/organizations/organizations-get-organization-short-info';
import { organizationsGetOrganizationWorkGroups } from '../fn/organizations/organizations-get-organization-work-groups';
import { OrganizationsGetOrganizationWorkGroups$Params } from '../fn/organizations/organizations-get-organization-work-groups';
import { organizationsGetUpdateBaseInfoDataToSign } from '../fn/organizations/organizations-get-update-base-info-data-to-sign';
import { OrganizationsGetUpdateBaseInfoDataToSign$Params } from '../fn/organizations/organizations-get-update-base-info-data-to-sign';
import { organizationsGetVCard } from '../fn/organizations/organizations-get-v-card';
import { OrganizationsGetVCard$Params } from '../fn/organizations/organizations-get-v-card';
import { organizationsIsCurrentOrganizationSmsp } from '../fn/organizations/organizations-is-current-organization-smsp';
import { OrganizationsIsCurrentOrganizationSmsp$Params } from '../fn/organizations/organizations-is-current-organization-smsp';
import { organizationsIsCurrentUserHaveValidCert } from '../fn/organizations/organizations-is-current-user-have-valid-cert';
import { OrganizationsIsCurrentUserHaveValidCert$Params } from '../fn/organizations/organizations-is-current-user-have-valid-cert';
import { organizationsPatchOrganizationShortInfo } from '../fn/organizations/organizations-patch-organization-short-info';
import { OrganizationsPatchOrganizationShortInfo$Params } from '../fn/organizations/organizations-patch-organization-short-info';
import { organizationsSaveAgreement2323 } from '../fn/organizations/organizations-save-agreement-2323';
import { OrganizationsSaveAgreement2323$Params } from '../fn/organizations/organizations-save-agreement-2323';
import { organizationsSendCustomerCommercialOffer } from '../fn/organizations/organizations-send-customer-commercial-offer';
import { OrganizationsSendCustomerCommercialOffer$Params } from '../fn/organizations/organizations-send-customer-commercial-offer';
import { organizationsSignAgreement } from '../fn/organizations/organizations-sign-agreement';
import { OrganizationsSignAgreement$Params } from '../fn/organizations/organizations-sign-agreement';
import { organizationsUpdateAddresses } from '../fn/organizations/organizations-update-addresses';
import { OrganizationsUpdateAddresses$Params } from '../fn/organizations/organizations-update-addresses';
import { organizationsUpdateBaseInfo } from '../fn/organizations/organizations-update-base-info';
import { OrganizationsUpdateBaseInfo$Params } from '../fn/organizations/organizations-update-base-info';
import { organizationsUpdateDocuments } from '../fn/organizations/organizations-update-documents';
import { OrganizationsUpdateDocuments$Params } from '../fn/organizations/organizations-update-documents';

@Injectable({ providedIn: 'root' })
export class OrganizationsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `organizationsIsCurrentUserHaveValidCert()` */
  static readonly OrganizationsIsCurrentUserHaveValidCertPath = '/bla-bla-vla/organizations/checkCertExists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsIsCurrentUserHaveValidCert()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsIsCurrentUserHaveValidCert$Response(params?: OrganizationsIsCurrentUserHaveValidCert$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return organizationsIsCurrentUserHaveValidCert(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsIsCurrentUserHaveValidCert$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsIsCurrentUserHaveValidCert(params?: OrganizationsIsCurrentUserHaveValidCert$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.organizationsIsCurrentUserHaveValidCert$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `organizationsGetCurrentOrganizationInfo()` */
  static readonly OrganizationsGetCurrentOrganizationInfoPath = '/bla-bla-vla/organizations/self';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetCurrentOrganizationInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetCurrentOrganizationInfo$Response(params?: OrganizationsGetCurrentOrganizationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationFullInfoDto>> {
    return organizationsGetCurrentOrganizationInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetCurrentOrganizationInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetCurrentOrganizationInfo(params?: OrganizationsGetCurrentOrganizationInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketOrganizationFullInfoDto> {
    return this.organizationsGetCurrentOrganizationInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationFullInfoDto>): ApiMarketJsonResultOfMarketOrganizationFullInfoDto => r.body)
    );
  }

  /** Path part for operation `organizationsApplyHomeRegionMessage()` */
  static readonly OrganizationsApplyHomeRegionMessagePath = '/bla-bla-vla/organizations/applyHomeRegionMessage';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsApplyHomeRegionMessage()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsApplyHomeRegionMessage$Response(params?: OrganizationsApplyHomeRegionMessage$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationsApplyHomeRegionMessage(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsApplyHomeRegionMessage$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsApplyHomeRegionMessage(params?: OrganizationsApplyHomeRegionMessage$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationsApplyHomeRegionMessage$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationsFindOrganizationInfoByGuid()` */
  static readonly OrganizationsFindOrganizationInfoByGuidPath = '/bla-bla-vla/organizations/{guid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsFindOrganizationInfoByGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsFindOrganizationInfoByGuid$Response(params: OrganizationsFindOrganizationInfoByGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationFullInfoDto>> {
    return organizationsFindOrganizationInfoByGuid(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsFindOrganizationInfoByGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsFindOrganizationInfoByGuid(params: OrganizationsFindOrganizationInfoByGuid$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketOrganizationFullInfoDto> {
    return this.organizationsFindOrganizationInfoByGuid$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationFullInfoDto>): ApiMarketJsonResultOfMarketOrganizationFullInfoDto => r.body)
    );
  }

  /** Path part for operation `organizationsFindOrganizationInfo()` */
  static readonly OrganizationsFindOrganizationInfoPath = '/bla-bla-vla/organizations/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsFindOrganizationInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsFindOrganizationInfo$Response(params?: OrganizationsFindOrganizationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationCommonInfoDto>> {
    return organizationsFindOrganizationInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsFindOrganizationInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsFindOrganizationInfo(params?: OrganizationsFindOrganizationInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketOrganizationCommonInfoDto> {
    return this.organizationsFindOrganizationInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketOrganizationCommonInfoDto>): ApiMarketJsonResultOfMarketOrganizationCommonInfoDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationInfoByGuid()` */
  static readonly OrganizationsGetOrganizationInfoByGuidPath = '/bla-bla-vla/organizations/{guid}/card';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationInfoByGuid()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationInfoByGuid$Response(params: OrganizationsGetOrganizationInfoByGuid$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizanizationFullCardDto>> {
    return organizationsGetOrganizationInfoByGuid(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationInfoByGuid$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationInfoByGuid(params: OrganizationsGetOrganizationInfoByGuid$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrganizanizationFullCardDto> {
    return this.organizationsGetOrganizationInfoByGuid$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrganizanizationFullCardDto>): ApiMarketJsonResultOfOrganizanizationFullCardDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetEmployees()` */
  static readonly OrganizationsGetEmployeesPath = '/bla-bla-vla/organizations/employees';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetEmployees()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetEmployees$Response(params?: OrganizationsGetEmployees$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketEmployeeShortInfo>> {
    return organizationsGetEmployees(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetEmployees$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetEmployees(params?: OrganizationsGetEmployees$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketEmployeeShortInfo> {
    return this.organizationsGetEmployees$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketEmployeeShortInfo>): ApiMarketJsonResultOfMarketEmployeeShortInfo => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationDocuments()` */
  static readonly OrganizationsGetOrganizationDocumentsPath = '/bla-bla-vla/organizations/self/documents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationDocuments()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationDocuments$Response(params?: OrganizationsGetOrganizationDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationProfileDocumentDto>> {
    return organizationsGetOrganizationDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationDocuments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationDocuments(params?: OrganizationsGetOrganizationDocuments$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrganizationProfileDocumentDto> {
    return this.organizationsGetOrganizationDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrganizationProfileDocumentDto>): ApiMarketJsonResultOfOrganizationProfileDocumentDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationDocuments2()` */
  static readonly OrganizationsGetOrganizationDocuments2Path = '/bla-bla-vla/organizations/documents/{guid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationDocuments2()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationDocuments2$Response(params: OrganizationsGetOrganizationDocuments2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationProfileDocumentDto>> {
    return organizationsGetOrganizationDocuments2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationDocuments2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationDocuments2(params: OrganizationsGetOrganizationDocuments2$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrganizationProfileDocumentDto> {
    return this.organizationsGetOrganizationDocuments2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrganizationProfileDocumentDto>): ApiMarketJsonResultOfOrganizationProfileDocumentDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationsByFilter()` */
  static readonly OrganizationsGetOrganizationsByFilterPath = '/bla-bla-vla/organizations/filtered';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationsByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetOrganizationsByFilter$Response(params?: OrganizationsGetOrganizationsByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto>> {
    return organizationsGetOrganizationsByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationsByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetOrganizationsByFilter(params?: OrganizationsGetOrganizationsByFilter$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto> {
    return this.organizationsGetOrganizationsByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationWithAddressShortInfoDto => r.body)
    );
  }

  /** Path part for operation `organizationsIsCurrentOrganizationSmsp()` */
  static readonly OrganizationsIsCurrentOrganizationSmspPath = '/bla-bla-vla/organizations/IsSmsp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsIsCurrentOrganizationSmsp()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsIsCurrentOrganizationSmsp$Response(params?: OrganizationsIsCurrentOrganizationSmsp$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<boolean>>> {
    return organizationsIsCurrentOrganizationSmsp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsIsCurrentOrganizationSmsp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsIsCurrentOrganizationSmsp(params?: OrganizationsIsCurrentOrganizationSmsp$Params, context?: HttpContext): Observable<Array<boolean>> {
    return this.organizationsIsCurrentOrganizationSmsp$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<boolean>>): Array<boolean> => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationsForAutocomplete()` */
  static readonly OrganizationsGetOrganizationsForAutocompletePath = '/bla-bla-vla/organizations/autocomplete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationsForAutocomplete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetOrganizationsForAutocomplete$Response(params?: OrganizationsGetOrganizationsForAutocomplete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto>> {
    return organizationsGetOrganizationsForAutocomplete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationsForAutocomplete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetOrganizationsForAutocomplete(params?: OrganizationsGetOrganizationsForAutocomplete$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto> {
    return this.organizationsGetOrganizationsForAutocomplete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto>): ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto => r.body)
    );
  }

  /** Path part for operation `organizationsAutocompleteForeignOrganizations()` */
  static readonly OrganizationsAutocompleteForeignOrganizationsPath = '/bla-bla-vla/organizations/autocomplete/foreign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsAutocompleteForeignOrganizations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsAutocompleteForeignOrganizations$Response(params?: OrganizationsAutocompleteForeignOrganizations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto>> {
    return organizationsAutocompleteForeignOrganizations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsAutocompleteForeignOrganizations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsAutocompleteForeignOrganizations(params?: OrganizationsAutocompleteForeignOrganizations$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto> {
    return this.organizationsAutocompleteForeignOrganizations$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto>): ApiMarketJsonResultOfPaginationResultOfForeignOrganizationDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetForeignOrganizations()` */
  static readonly OrganizationsGetForeignOrganizationsPath = '/bla-bla-vla/organizations/foreign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetForeignOrganizations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetForeignOrganizations$Response(params?: OrganizationsGetForeignOrganizations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto>> {
    return organizationsGetForeignOrganizations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetForeignOrganizations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetForeignOrganizations(params?: OrganizationsGetForeignOrganizations$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto> {
    return this.organizationsGetForeignOrganizations$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto>): ApiMarketJsonResultOfIReadOnlyCollectionOfForeignOrganizationDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationsForCurrentUser()` */
  static readonly OrganizationsGetOrganizationsForCurrentUserPath = '/bla-bla-vla/organizations/getOrganizationsForCurrentUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationsForCurrentUser()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationsForCurrentUser$Response(params?: OrganizationsGetOrganizationsForCurrentUser$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto>> {
    return organizationsGetOrganizationsForCurrentUser(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationsForCurrentUser$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationsForCurrentUser(params?: OrganizationsGetOrganizationsForCurrentUser$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto> {
    return this.organizationsGetOrganizationsForCurrentUser$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto>): ApiMarketJsonResultOfListOfMarketOrganizationFullInfoDto => r.body)
    );
  }

  /** Path part for operation `organizationsCreateOrganization()` */
  static readonly OrganizationsCreateOrganizationPath = '/bla-bla-vla/organizations/CreateOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsCreateOrganization()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsCreateOrganization$Response(params?: OrganizationsCreateOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationsCreateOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsCreateOrganization$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsCreateOrganization(params?: OrganizationsCreateOrganization$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationsCreateOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationsCheckAndGetOrganization()` */
  static readonly OrganizationsCheckAndGetOrganizationPath = '/bla-bla-vla/organizations/CheckAndGetOrganization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsCheckAndGetOrganization()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsCheckAndGetOrganization$Response(params: OrganizationsCheckAndGetOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationsCheckAndGetOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsCheckAndGetOrganization$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsCheckAndGetOrganization(params: OrganizationsCheckAndGetOrganization$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationsCheckAndGetOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationFz223Info()` */
  static readonly OrganizationsGetOrganizationFz223InfoPath = '/bla-bla-vla/organizations/fz223/info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationFz223Info()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationFz223Info$Response(params?: OrganizationsGetOrganizationFz223Info$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfOrganizationInfoDto>> {
    return organizationsGetOrganizationFz223Info(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationFz223Info$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationFz223Info(params?: OrganizationsGetOrganizationFz223Info$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfOrganizationInfoDto> {
    return this.organizationsGetOrganizationFz223Info$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfOrganizationInfoDto>): ApiMarketJsonResultOfOrganizationInfoDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetAgrement2323Info()` */
  static readonly OrganizationsGetAgrement2323InfoPath = '/bla-bla-vla/organizations/self/2323Info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetAgrement2323Info()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetAgrement2323Info$Response(params?: OrganizationsGetAgrement2323Info$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTaskOfAgreement2323Dto>> {
    return organizationsGetAgrement2323Info(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetAgrement2323Info$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetAgrement2323Info(params?: OrganizationsGetAgrement2323Info$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTaskOfAgreement2323Dto> {
    return this.organizationsGetAgrement2323Info$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTaskOfAgreement2323Dto>): ApiMarketJsonResultOfTaskOfAgreement2323Dto => r.body)
    );
  }

  /** Path part for operation `organizationsSaveAgreement2323()` */
  static readonly OrganizationsSaveAgreement2323Path = '/bla-bla-vla/organizations/save-agreement-2323';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsSaveAgreement2323()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsSaveAgreement2323$Response(params?: OrganizationsSaveAgreement2323$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return organizationsSaveAgreement2323(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsSaveAgreement2323$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsSaveAgreement2323(params?: OrganizationsSaveAgreement2323$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.organizationsSaveAgreement2323$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `organizationsCreateAgreement2323()` */
  static readonly OrganizationsCreateAgreement2323Path = '/bla-bla-vla/organizations/create-agreement-2323';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsCreateAgreement2323()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsCreateAgreement2323$Response(params?: OrganizationsCreateAgreement2323$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfTaskOfGuid>> {
    return organizationsCreateAgreement2323(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsCreateAgreement2323$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsCreateAgreement2323(params?: OrganizationsCreateAgreement2323$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfTaskOfGuid> {
    return this.organizationsCreateAgreement2323$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfTaskOfGuid>): ApiMarketJsonResultOfTaskOfGuid => r.body)
    );
  }

  /** Path part for operation `organizationsGetAgreementInfoForSign()` */
  static readonly OrganizationsGetAgreementInfoForSignPath = '/bla-bla-vla/organizations/agreement-info-sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetAgreementInfoForSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetAgreementInfoForSign$Response(params?: OrganizationsGetAgreementInfoForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>> {
    return organizationsGetAgreementInfoForSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetAgreementInfoForSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetAgreementInfoForSign(params?: OrganizationsGetAgreementInfoForSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFileInfoForSignDto> {
    return this.organizationsGetAgreementInfoForSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>): ApiMarketJsonResultOfFileInfoForSignDto => r.body)
    );
  }

  /** Path part for operation `organizationsSignAgreement()` */
  static readonly OrganizationsSignAgreementPath = '/bla-bla-vla/organizations/sign-agreement';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsSignAgreement()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsSignAgreement$Response(params?: OrganizationsSignAgreement$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return organizationsSignAgreement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsSignAgreement$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsSignAgreement(params?: OrganizationsSignAgreement$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.organizationsSignAgreement$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationWorkGroups()` */
  static readonly OrganizationsGetOrganizationWorkGroupsPath = '/bla-bla-vla/organizations/work-groups';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationWorkGroups()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationWorkGroups$Response(params?: OrganizationsGetOrganizationWorkGroups$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationsGetOrganizationWorkGroups(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationWorkGroups$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationWorkGroups(params?: OrganizationsGetOrganizationWorkGroups$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationsGetOrganizationWorkGroups$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationsGetMyCustomerPartners()` */
  static readonly OrganizationsGetMyCustomerPartnersPath = '/bla-bla-vla/organizations/partners';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetMyCustomerPartners()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetMyCustomerPartners$Response(params?: OrganizationsGetMyCustomerPartners$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto>> {
    return organizationsGetMyCustomerPartners(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetMyCustomerPartners$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetMyCustomerPartners(params?: OrganizationsGetMyCustomerPartners$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto> {
    return this.organizationsGetMyCustomerPartners$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto>): ApiMarketJsonResultOfListOfMarketPartnerOrganizationDto => r.body)
    );
  }

  /** Path part for operation `organizationsSendCustomerCommercialOffer()` */
  static readonly OrganizationsSendCustomerCommercialOfferPath = '/bla-bla-vla/organizations/{guid}/commercial-offer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsSendCustomerCommercialOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsSendCustomerCommercialOffer$Response(params: OrganizationsSendCustomerCommercialOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return organizationsSendCustomerCommercialOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsSendCustomerCommercialOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsSendCustomerCommercialOffer(params: OrganizationsSendCustomerCommercialOffer$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.organizationsSendCustomerCommercialOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetVCard()` */
  static readonly OrganizationsGetVCardPath = '/bla-bla-vla/organizations/{guid}/vcard';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetVCard()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetVCard$Response(params: OrganizationsGetVCard$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return organizationsGetVCard(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetVCard$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetVCard(params: OrganizationsGetVCard$Params, context?: HttpContext): Observable<Blob> {
    return this.organizationsGetVCard$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `organizationsGetUpdateBaseInfoDataToSign()` */
  static readonly OrganizationsGetUpdateBaseInfoDataToSignPath = '/bla-bla-vla/organizations/my/base-info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetUpdateBaseInfoDataToSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetUpdateBaseInfoDataToSign$Response(params?: OrganizationsGetUpdateBaseInfoDataToSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign>> {
    return organizationsGetUpdateBaseInfoDataToSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetUpdateBaseInfoDataToSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetUpdateBaseInfoDataToSign(params?: OrganizationsGetUpdateBaseInfoDataToSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign> {
    return this.organizationsGetUpdateBaseInfoDataToSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign>): ApiMarketJsonResultOfUpdateOrganizationBaseInfoDataToSign => r.body)
    );
  }

  /** Path part for operation `organizationsUpdateBaseInfo()` */
  static readonly OrganizationsUpdateBaseInfoPath = '/bla-bla-vla/organizations/my/base-info/signed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsUpdateBaseInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsUpdateBaseInfo$Response(params?: OrganizationsUpdateBaseInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return organizationsUpdateBaseInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsUpdateBaseInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsUpdateBaseInfo(params?: OrganizationsUpdateBaseInfo$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.organizationsUpdateBaseInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `organizationsUpdateAddresses()` */
  static readonly OrganizationsUpdateAddressesPath = '/bla-bla-vla/organizations/my/addresses';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsUpdateAddresses()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsUpdateAddresses$Response(params?: OrganizationsUpdateAddresses$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return organizationsUpdateAddresses(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsUpdateAddresses$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsUpdateAddresses(params?: OrganizationsUpdateAddresses$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.organizationsUpdateAddresses$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `organizationsUpdateDocuments()` */
  static readonly OrganizationsUpdateDocumentsPath = '/bla-bla-vla/organizations/my/documents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsUpdateDocuments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsUpdateDocuments$Response(params?: OrganizationsUpdateDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return organizationsUpdateDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsUpdateDocuments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsUpdateDocuments(params?: OrganizationsUpdateDocuments$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.organizationsUpdateDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetCertificateInfoFromFile()` */
  static readonly OrganizationsGetCertificateInfoFromFilePath = '/bla-bla-vla/organizations/my/documents/{fileGuid}/signature';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetCertificateInfoFromFile()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetCertificateInfoFromFile$Response(params: OrganizationsGetCertificateInfoFromFile$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>> {
    return organizationsGetCertificateInfoFromFile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetCertificateInfoFromFile$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetCertificateInfoFromFile(params: OrganizationsGetCertificateInfoFromFile$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCertificateViewModelDto> {
    return this.organizationsGetCertificateInfoFromFile$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>): ApiMarketJsonResultOfCertificateViewModelDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetOrganizationShortInfo()` */
  static readonly OrganizationsGetOrganizationShortInfoPath = '/bla-bla-vla/organizations/my/short-info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetOrganizationShortInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationShortInfo$Response(params?: OrganizationsGetOrganizationShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto>> {
    return organizationsGetOrganizationShortInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetOrganizationShortInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationsGetOrganizationShortInfo(params?: OrganizationsGetOrganizationShortInfo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto> {
    return this.organizationsGetOrganizationShortInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto>): ApiMarketJsonResultOfMarketCompositeOrganizationShortInfoDto => r.body)
    );
  }

  /** Path part for operation `organizationsPatchOrganizationShortInfo()` */
  static readonly OrganizationsPatchOrganizationShortInfoPath = '/bla-bla-vla/organizations/my/short-info';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsPatchOrganizationShortInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsPatchOrganizationShortInfo$Response(params?: OrganizationsPatchOrganizationShortInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return organizationsPatchOrganizationShortInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsPatchOrganizationShortInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsPatchOrganizationShortInfo(params?: OrganizationsPatchOrganizationShortInfo$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.organizationsPatchOrganizationShortInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `organizationsGetCertificateOrganizations()` */
  static readonly OrganizationsGetCertificateOrganizationsPath = '/bla-bla-vla/organizations/certificates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationsGetCertificateOrganizations()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetCertificateOrganizations$Response(params?: OrganizationsGetCertificateOrganizations$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateOrganizationDtoOf>> {
    return organizationsGetCertificateOrganizations(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationsGetCertificateOrganizations$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationsGetCertificateOrganizations(params?: OrganizationsGetCertificateOrganizations$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCertificateOrganizationDtoOf> {
    return this.organizationsGetCertificateOrganizations$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCertificateOrganizationDtoOf>): ApiMarketJsonResultOfCertificateOrganizationDtoOf => r.body)
    );
  }

}
