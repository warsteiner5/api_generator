/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { belgorodBudgetsGetBelgorodBudgets } from '../fn/belgorod-budgets/belgorod-budgets-get-belgorod-budgets';
import { BelgorodBudgetsGetBelgorodBudgets$Params } from '../fn/belgorod-budgets/belgorod-budgets-get-belgorod-budgets';

@Injectable({ providedIn: 'root' })
export class BelgorodBudgetsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `belgorodBudgetsGetBelgorodBudgets()` */
  static readonly BelgorodBudgetsGetBelgorodBudgetsPath = '/api/belgorodbudgets';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `belgorodBudgetsGetBelgorodBudgets()` instead.
   *
   * This method doesn't expect any request body.
   */
  belgorodBudgetsGetBelgorodBudgets$Response(params: BelgorodBudgetsGetBelgorodBudgets$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return belgorodBudgetsGetBelgorodBudgets(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `belgorodBudgetsGetBelgorodBudgets$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  belgorodBudgetsGetBelgorodBudgets(params: BelgorodBudgetsGetBelgorodBudgets$Params, context?: HttpContext): Observable<Blob> {
    return this.belgorodBudgetsGetBelgorodBudgets$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
