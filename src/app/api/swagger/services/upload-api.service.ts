/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { uploadByUrl } from '../fn/upload/upload-by-url';
import { UploadByUrl$Params } from '../fn/upload/upload-by-url';
import { uploadGet } from '../fn/upload/upload-get';
import { UploadGet$Params } from '../fn/upload/upload-get';
import { uploadPost } from '../fn/upload/upload-post';
import { UploadPost$Params } from '../fn/upload/upload-post';
import { uploadPut } from '../fn/upload/upload-put';
import { UploadPut$Params } from '../fn/upload/upload-put';

@Injectable({ providedIn: 'root' })
export class UploadApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `uploadGet()` */
  static readonly UploadGetPath = '/api/Upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadGet$Response(params?: UploadGet$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return uploadGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadGet(params?: UploadGet$Params, context?: HttpContext): Observable<Blob> {
    return this.uploadGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `uploadPut()` */
  static readonly UploadPutPath = '/api/Upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadPut()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadPut$Response(params?: UploadPut$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return uploadPut(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadPut$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadPut(params?: UploadPut$Params, context?: HttpContext): Observable<Blob> {
    return this.uploadPut$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `uploadPost()` */
  static readonly UploadPostPath = '/api/Upload';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadPost$Response(params?: UploadPost$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return uploadPost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uploadPost(params?: UploadPost$Params, context?: HttpContext): Observable<Blob> {
    return this.uploadPost$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `uploadByUrl()` */
  static readonly UploadByUrlPath = '/api/Upload/byUrl';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uploadByUrl()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadByUrl$Response(params?: UploadByUrl$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return uploadByUrl(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `uploadByUrl$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  uploadByUrl(params?: UploadByUrl$Params, context?: HttpContext): Observable<Blob> {
    return this.uploadByUrl$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
