/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { federalLawsGetAll } from '../fn/federal-laws/federal-laws-get-all';
import { FederalLawsGetAll$Params } from '../fn/federal-laws/federal-laws-get-all';
import { ApiMarketJsonResultOfListOfFederalLawDto } from '../models/api-market-json-result-of-list-of-federal-law-dto';

@Injectable({ providedIn: 'root' })
export class FederalLawsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `federalLawsGetAll()` */
  static readonly FederalLawsGetAllPath = '/market/api/v1/federalLaws/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `federalLawsGetAll()` instead.
   *
   * This method doesn't expect any request body.
   */
  federalLawsGetAll$Response(params?: FederalLawsGetAll$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfFederalLawDto>> {
    return federalLawsGetAll(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `federalLawsGetAll$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  federalLawsGetAll(params?: FederalLawsGetAll$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfFederalLawDto> {
    return this.federalLawsGetAll$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfFederalLawDto>): ApiMarketJsonResultOfListOfFederalLawDto => r.body)
    );
  }

}
