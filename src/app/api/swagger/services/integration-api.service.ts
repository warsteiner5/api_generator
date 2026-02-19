/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { integrationCreateEmployee } from '../fn/integration/integration-create-employee';
import { IntegrationCreateEmployee$Params } from '../fn/integration/integration-create-employee';
import { integrationCreateOrganization } from '../fn/integration/integration-create-organization';
import { IntegrationCreateOrganization$Params } from '../fn/integration/integration-create-organization';
import { integrationImportMinpromTorg } from '../fn/integration/integration-import-minprom-torg';
import { IntegrationImportMinpromTorg$Params } from '../fn/integration/integration-import-minprom-torg';

@Injectable({ providedIn: 'root' })
export class IntegrationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `integrationImportMinpromTorg()` */
  static readonly IntegrationImportMinpromTorgPath = '/market/api/v1/integration/offers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `integrationImportMinpromTorg()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  integrationImportMinpromTorg$Response(params?: IntegrationImportMinpromTorg$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return integrationImportMinpromTorg(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `integrationImportMinpromTorg$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  integrationImportMinpromTorg(params?: IntegrationImportMinpromTorg$Params, context?: HttpContext): Observable<Blob> {
    return this.integrationImportMinpromTorg$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `integrationCreateOrganization()` */
  static readonly IntegrationCreateOrganizationPath = '/market/api/v1/integration/organization';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `integrationCreateOrganization()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  integrationCreateOrganization$Response(params?: IntegrationCreateOrganization$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return integrationCreateOrganization(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `integrationCreateOrganization$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  integrationCreateOrganization(params?: IntegrationCreateOrganization$Params, context?: HttpContext): Observable<Blob> {
    return this.integrationCreateOrganization$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `integrationCreateEmployee()` */
  static readonly IntegrationCreateEmployeePath = '/market/api/v1/integration/employee';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `integrationCreateEmployee()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  integrationCreateEmployee$Response(params?: IntegrationCreateEmployee$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return integrationCreateEmployee(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `integrationCreateEmployee$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  integrationCreateEmployee(params?: IntegrationCreateEmployee$Params, context?: HttpContext): Observable<Blob> {
    return this.integrationCreateEmployee$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
