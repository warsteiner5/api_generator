/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { tariffGetLicenseReward } from '../fn/tariff/tariff-get-license-reward';
import { TariffGetLicenseReward$Params } from '../fn/tariff/tariff-get-license-reward';

@Injectable({ providedIn: 'root' })
export class TariffApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tariffGetLicenseReward()` */
  static readonly TariffGetLicenseRewardPath = '/api/Tariff/GetLicenseReward/{tradeLotId}/{price}/{publicationDate}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tariffGetLicenseReward()` instead.
   *
   * This method doesn't expect any request body.
   */
  tariffGetLicenseReward$Response(params: TariffGetLicenseReward$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tariffGetLicenseReward(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tariffGetLicenseReward$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tariffGetLicenseReward(params: TariffGetLicenseReward$Params, context?: HttpContext): Observable<Blob> {
    return this.tariffGetLicenseReward$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
