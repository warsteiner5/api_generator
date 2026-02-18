/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { organizationAgreementSetCatalogAgreement } from '../fn/organization-agreement/organization-agreement-set-catalog-agreement';
import { OrganizationAgreementSetCatalogAgreement$Params } from '../fn/organization-agreement/organization-agreement-set-catalog-agreement';

@Injectable({ providedIn: 'root' })
export class OrganizationAgreementApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `organizationAgreementSetCatalogAgreement()` */
  static readonly OrganizationAgreementSetCatalogAgreementPath = '/bla-bla-vla/organization-agreements/catalog-agreement/approve';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationAgreementSetCatalogAgreement()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationAgreementSetCatalogAgreement$Response(params?: OrganizationAgreementSetCatalogAgreement$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return organizationAgreementSetCatalogAgreement(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationAgreementSetCatalogAgreement$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  organizationAgreementSetCatalogAgreement(params?: OrganizationAgreementSetCatalogAgreement$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.organizationAgreementSetCatalogAgreement$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
