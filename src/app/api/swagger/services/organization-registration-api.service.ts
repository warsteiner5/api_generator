/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto } from '../models/api-market-json-result-of-list-of-organization-registration-agreement-file-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { organizationRegistrationGenerateDocumentsLink } from '../fn/organization-registration/organization-registration-generate-documents-link';
import { OrganizationRegistrationGenerateDocumentsLink$Params } from '../fn/organization-registration/organization-registration-generate-documents-link';
import { organizationRegistrationRegister } from '../fn/organization-registration/organization-registration-register';
import { OrganizationRegistrationRegister$Params } from '../fn/organization-registration/organization-registration-register';

@Injectable({ providedIn: 'root' })
export class OrganizationRegistrationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `organizationRegistrationRegister()` */
  static readonly OrganizationRegistrationRegisterPath = '/market/api/v1/organization/registration';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationRegistrationRegister()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationRegistrationRegister$Response(params?: OrganizationRegistrationRegister$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return organizationRegistrationRegister(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationRegistrationRegister$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationRegistrationRegister(params?: OrganizationRegistrationRegister$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.organizationRegistrationRegister$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `organizationRegistrationGenerateDocumentsLink()` */
  static readonly OrganizationRegistrationGenerateDocumentsLinkPath = '/market/api/v1/organization/registration/agreement/documents';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `organizationRegistrationGenerateDocumentsLink()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationRegistrationGenerateDocumentsLink$Response(params?: OrganizationRegistrationGenerateDocumentsLink$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto>> {
    return organizationRegistrationGenerateDocumentsLink(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `organizationRegistrationGenerateDocumentsLink$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  organizationRegistrationGenerateDocumentsLink(params?: OrganizationRegistrationGenerateDocumentsLink$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto> {
    return this.organizationRegistrationGenerateDocumentsLink$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto>): ApiMarketJsonResultOfListOfOrganizationRegistrationAgreementFileDto => r.body)
    );
  }

}
