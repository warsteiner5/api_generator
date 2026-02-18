/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiApiSearchResultOfApplicationInfoAltDto } from '../models/api-api-search-result-of-application-info';
import { ApiApplicationDto } from '../models/api-application-dto';
import { applicationGetApplicationInfo } from '../fn/application/application-get-application-info';
import { ApplicationGetApplicationInfo$Params } from '../fn/application/application-get-application-info';
import { applicationGetApplicationsByTradeId } from '../fn/application/application-get-applications-by-trade-id';
import { ApplicationGetApplicationsByTradeId$Params } from '../fn/application/application-get-applications-by-trade-id';
import { applicationGetCreateApplicationInfo } from '../fn/application/application-get-create-application-info';
import { ApplicationGetCreateApplicationInfo$Params } from '../fn/application/application-get-create-application-info';
import { applicationGetOrganizationAccounts } from '../fn/application/application-get-organization-accounts';
import { ApplicationGetOrganizationAccounts$Params } from '../fn/application/application-get-organization-accounts';
import { applicationParticipantApplications } from '../fn/application/application-participant-applications';
import { ApplicationParticipantApplications$Params } from '../fn/application/application-participant-applications';
import { applicationPublish } from '../fn/application/application-publish';
import { ApplicationPublish$Params } from '../fn/application/application-publish';
import { applicationRemoveDraft } from '../fn/application/application-remove-draft';
import { ApplicationRemoveDraft$Params } from '../fn/application/application-remove-draft';
import { applicationRevoke } from '../fn/application/application-revoke';
import { ApplicationRevoke$Params } from '../fn/application/application-revoke';
import { applicationSaveUpdateApplication } from '../fn/application/application-save-update-application';
import { ApplicationSaveUpdateApplication$Params } from '../fn/application/application-save-update-application';

@Injectable({ providedIn: 'root' })
export class ApplicationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `applicationPublish()` */
  static readonly ApplicationPublishPath = '/api/Trade/Application/Publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationPublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationPublish$Response(params?: ApplicationPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return applicationPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationPublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationPublish(params?: ApplicationPublish$Params, context?: HttpContext): Observable<number> {
    return this.applicationPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `applicationSaveUpdateApplication()` */
  static readonly ApplicationSaveUpdateApplicationPath = '/api/Trade/Application/SaveUpdateApplication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationSaveUpdateApplication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationSaveUpdateApplication$Response(params?: ApplicationSaveUpdateApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return applicationSaveUpdateApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationSaveUpdateApplication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationSaveUpdateApplication(params?: ApplicationSaveUpdateApplication$Params, context?: HttpContext): Observable<number> {
    return this.applicationSaveUpdateApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `applicationRevoke()` */
  static readonly ApplicationRevokePath = '/api/Applications/{applicationId}/Revoke';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationRevoke()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationRevoke$Response(params: ApplicationRevoke$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return applicationRevoke(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationRevoke$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationRevoke(params: ApplicationRevoke$Params, context?: HttpContext): Observable<boolean> {
    return this.applicationRevoke$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `applicationParticipantApplications()` */
  static readonly ApplicationParticipantApplicationsPath = '/api/ParticipantApplications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationParticipantApplications()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationParticipantApplications$Response(params?: ApplicationParticipantApplications$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfApplicationInfoAltDto>> {
    return applicationParticipantApplications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationParticipantApplications$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  applicationParticipantApplications(params?: ApplicationParticipantApplications$Params, context?: HttpContext): Observable<ApiApiSearchResultOfApplicationInfoAltDto> {
    return this.applicationParticipantApplications$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfApplicationInfoAltDto>): ApiApiSearchResultOfApplicationInfoAltDto => r.body)
    );
  }

  /** Path part for operation `applicationGetApplicationInfo()` */
  static readonly ApplicationGetApplicationInfoPath = '/api/GetApplicationInfo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationGetApplicationInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationGetApplicationInfo$Response(params: ApplicationGetApplicationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApplicationDto>> {
    return applicationGetApplicationInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationGetApplicationInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationGetApplicationInfo(params: ApplicationGetApplicationInfo$Params, context?: HttpContext): Observable<ApiApplicationDto> {
    return this.applicationGetApplicationInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApplicationDto>): ApiApplicationDto => r.body)
    );
  }

  /** Path part for operation `applicationGetCreateApplicationInfo()` */
  static readonly ApplicationGetCreateApplicationInfoPath = '/api/GetCreateApplicationInfo/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationGetCreateApplicationInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationGetCreateApplicationInfo$Response(params: ApplicationGetCreateApplicationInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApplicationDto>> {
    return applicationGetCreateApplicationInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationGetCreateApplicationInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationGetCreateApplicationInfo(params: ApplicationGetCreateApplicationInfo$Params, context?: HttpContext): Observable<ApiApplicationDto> {
    return this.applicationGetCreateApplicationInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApplicationDto>): ApiApplicationDto => r.body)
    );
  }

  /** Path part for operation `applicationRemoveDraft()` */
  static readonly ApplicationRemoveDraftPath = '/api/Trade/Application/{applicationid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationRemoveDraft()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationRemoveDraft$Response(params: ApplicationRemoveDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return applicationRemoveDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationRemoveDraft$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationRemoveDraft(params: ApplicationRemoveDraft$Params, context?: HttpContext): Observable<boolean> {
    return this.applicationRemoveDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `applicationGetApplicationsByTradeId()` */
  static readonly ApplicationGetApplicationsByTradeIdPath = '/api/GetApplicationsByTradeId/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationGetApplicationsByTradeId()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationGetApplicationsByTradeId$Response(params: ApplicationGetApplicationsByTradeId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiApplicationDto>>> {
    return applicationGetApplicationsByTradeId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationGetApplicationsByTradeId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationGetApplicationsByTradeId(params: ApplicationGetApplicationsByTradeId$Params, context?: HttpContext): Observable<Array<ApiApplicationDto>> {
    return this.applicationGetApplicationsByTradeId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiApplicationDto>>): Array<ApiApplicationDto> => r.body)
    );
  }

  /** Path part for operation `applicationGetOrganizationAccounts()` */
  static readonly ApplicationGetOrganizationAccountsPath = '/api/Application/GetOrganizationAccounts';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `applicationGetOrganizationAccounts()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationGetOrganizationAccounts$Response(params?: ApplicationGetOrganizationAccounts$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return applicationGetOrganizationAccounts(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `applicationGetOrganizationAccounts$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  applicationGetOrganizationAccounts(params?: ApplicationGetOrganizationAccounts$Params, context?: HttpContext): Observable<Blob> {
    return this.applicationGetOrganizationAccounts$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
