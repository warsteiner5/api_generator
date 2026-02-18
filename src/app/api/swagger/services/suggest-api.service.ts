/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { suggestAddress } from '../fn/suggest/suggest-address';
import { SuggestAddress$Params } from '../fn/suggest/suggest-address';
import { suggestBank } from '../fn/suggest/suggest-bank';
import { SuggestBank$Params } from '../fn/suggest/suggest-bank';
import { suggestEmail } from '../fn/suggest/suggest-email';
import { SuggestEmail$Params } from '../fn/suggest/suggest-email';
import { suggestFio } from '../fn/suggest/suggest-fio';
import { SuggestFio$Params } from '../fn/suggest/suggest-fio';
import { suggestParty } from '../fn/suggest/suggest-party';
import { SuggestParty$Params } from '../fn/suggest/suggest-party';
import { suggestStatus } from '../fn/suggest/suggest-status';
import { SuggestStatus$Params } from '../fn/suggest/suggest-status';
import { suggestStatus2 } from '../fn/suggest/suggest-status-2';
import { SuggestStatus2$Params } from '../fn/suggest/suggest-status-2';

@Injectable({ providedIn: 'root' })
export class SuggestApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `suggestParty()` */
  static readonly SuggestPartyPath = '/api/Suggest/Suggest/Party';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suggestParty()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestParty$Response(params?: SuggestParty$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return suggestParty(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suggestParty$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestParty(params?: SuggestParty$Params, context?: HttpContext): Observable<Blob> {
    return this.suggestParty$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `suggestFio()` */
  static readonly SuggestFioPath = '/api/Suggest/Suggest/fio';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suggestFio()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestFio$Response(params?: SuggestFio$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return suggestFio(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suggestFio$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestFio(params?: SuggestFio$Params, context?: HttpContext): Observable<Blob> {
    return this.suggestFio$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `suggestEmail()` */
  static readonly SuggestEmailPath = '/api/Suggest/Suggest/email';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suggestEmail()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestEmail$Response(params?: SuggestEmail$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return suggestEmail(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suggestEmail$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestEmail(params?: SuggestEmail$Params, context?: HttpContext): Observable<Blob> {
    return this.suggestEmail$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `suggestAddress()` */
  static readonly SuggestAddressPath = '/api/Suggest/Suggest/Address';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suggestAddress()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestAddress$Response(params?: SuggestAddress$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return suggestAddress(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suggestAddress$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestAddress(params?: SuggestAddress$Params, context?: HttpContext): Observable<Blob> {
    return this.suggestAddress$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `suggestBank()` */
  static readonly SuggestBankPath = '/api/Suggest/Suggest/Bank';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suggestBank()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestBank$Response(params?: SuggestBank$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return suggestBank(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suggestBank$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestBank(params?: SuggestBank$Params, context?: HttpContext): Observable<Blob> {
    return this.suggestBank$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `suggestStatus()` */
  static readonly SuggestStatusPath = '/api/Suggest/Status';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suggestStatus()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestStatus$Response(params?: SuggestStatus$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return suggestStatus(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suggestStatus$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestStatus(params?: SuggestStatus$Params, context?: HttpContext): Observable<Blob> {
    return this.suggestStatus$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `suggestStatus2()` */
  static readonly SuggestStatus2Path = '/api/Suggest/detectAddressByIp';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `suggestStatus2()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestStatus2$Response(params?: SuggestStatus2$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return suggestStatus2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `suggestStatus2$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  suggestStatus2(params?: SuggestStatus2$Params, context?: HttpContext): Observable<Blob> {
    return this.suggestStatus2$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
