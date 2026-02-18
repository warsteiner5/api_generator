/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { managerAgentAttachOrganisation } from '../fn/manager-agent/manager-agent-attach-organisation';
import { ManagerAgentAttachOrganisation$Params } from '../fn/manager-agent/manager-agent-attach-organisation';
import { managerAgentCreateManagerEmployeeIfNotExists } from '../fn/manager-agent/manager-agent-create-manager-employee-if-not-exists';
import { ManagerAgentCreateManagerEmployeeIfNotExists$Params } from '../fn/manager-agent/manager-agent-create-manager-employee-if-not-exists';
import { managerAgentDetachOrganisation } from '../fn/manager-agent/manager-agent-detach-organisation';
import { ManagerAgentDetachOrganisation$Params } from '../fn/manager-agent/manager-agent-detach-organisation';
import { managerAgentGetManagerPublicId } from '../fn/manager-agent/manager-agent-get-manager-public-id';
import { ManagerAgentGetManagerPublicId$Params } from '../fn/manager-agent/manager-agent-get-manager-public-id';
import { managerAgentGetOrganizationsForAutocomplete } from '../fn/manager-agent/manager-agent-get-organizations-for-autocomplete';
import { ManagerAgentGetOrganizationsForAutocomplete$Params } from '../fn/manager-agent/manager-agent-get-organizations-for-autocomplete';
import { managerAgentIsOrganizationAttached } from '../fn/manager-agent/manager-agent-is-organization-attached';
import { ManagerAgentIsOrganizationAttached$Params } from '../fn/manager-agent/manager-agent-is-organization-attached';
import { ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto } from '../models/api-market-json-result-of-pagination-result-of-organization-for-autocomplete-dto';

@Injectable({ providedIn: 'root' })
export class ManagerAgentApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `managerAgentCreateManagerEmployeeIfNotExists()` */
  static readonly ManagerAgentCreateManagerEmployeeIfNotExistsPath = '/bla-bla-vla/managerAgent/create-employee/{organizationGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `managerAgentCreateManagerEmployeeIfNotExists()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentCreateManagerEmployeeIfNotExists$Response(params: ManagerAgentCreateManagerEmployeeIfNotExists$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return managerAgentCreateManagerEmployeeIfNotExists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `managerAgentCreateManagerEmployeeIfNotExists$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentCreateManagerEmployeeIfNotExists(params: ManagerAgentCreateManagerEmployeeIfNotExists$Params, context?: HttpContext): Observable<Blob> {
    return this.managerAgentCreateManagerEmployeeIfNotExists$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `managerAgentDetachOrganisation()` */
  static readonly ManagerAgentDetachOrganisationPath = '/bla-bla-vla/managerAgent/detach-organisation/{organizationGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `managerAgentDetachOrganisation()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentDetachOrganisation$Response(params: ManagerAgentDetachOrganisation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return managerAgentDetachOrganisation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `managerAgentDetachOrganisation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentDetachOrganisation(params: ManagerAgentDetachOrganisation$Params, context?: HttpContext): Observable<Blob> {
    return this.managerAgentDetachOrganisation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `managerAgentAttachOrganisation()` */
  static readonly ManagerAgentAttachOrganisationPath = '/bla-bla-vla/managerAgent/attach-organisation/{organizationGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `managerAgentAttachOrganisation()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentAttachOrganisation$Response(params: ManagerAgentAttachOrganisation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return managerAgentAttachOrganisation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `managerAgentAttachOrganisation$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentAttachOrganisation(params: ManagerAgentAttachOrganisation$Params, context?: HttpContext): Observable<Blob> {
    return this.managerAgentAttachOrganisation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `managerAgentIsOrganizationAttached()` */
  static readonly ManagerAgentIsOrganizationAttachedPath = '/bla-bla-vla/managerAgent/is-organisation-attached/{organizationGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `managerAgentIsOrganizationAttached()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentIsOrganizationAttached$Response(params: ManagerAgentIsOrganizationAttached$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return managerAgentIsOrganizationAttached(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `managerAgentIsOrganizationAttached$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentIsOrganizationAttached(params: ManagerAgentIsOrganizationAttached$Params, context?: HttpContext): Observable<Blob> {
    return this.managerAgentIsOrganizationAttached$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `managerAgentGetManagerPublicId()` */
  static readonly ManagerAgentGetManagerPublicIdPath = '/bla-bla-vla/managerAgent/manager-public-id';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `managerAgentGetManagerPublicId()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentGetManagerPublicId$Response(params?: ManagerAgentGetManagerPublicId$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return managerAgentGetManagerPublicId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `managerAgentGetManagerPublicId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  managerAgentGetManagerPublicId(params?: ManagerAgentGetManagerPublicId$Params, context?: HttpContext): Observable<Blob> {
    return this.managerAgentGetManagerPublicId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `managerAgentGetOrganizationsForAutocomplete()` */
  static readonly ManagerAgentGetOrganizationsForAutocompletePath = '/bla-bla-vla/managerAgent/possible-organizations/autocomplete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `managerAgentGetOrganizationsForAutocomplete()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  managerAgentGetOrganizationsForAutocomplete$Response(params?: ManagerAgentGetOrganizationsForAutocomplete$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto>> {
    return managerAgentGetOrganizationsForAutocomplete(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `managerAgentGetOrganizationsForAutocomplete$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  managerAgentGetOrganizationsForAutocomplete(params?: ManagerAgentGetOrganizationsForAutocomplete$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto> {
    return this.managerAgentGetOrganizationsForAutocomplete$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto>): ApiMarketJsonResultOfPaginationResultOfOrganizationForAutocompleteDto => r.body)
    );
  }

}
