/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { imagesCompressImages } from '../fn/images/images-compress-images';
import { ImagesCompressImages$Params } from '../fn/images/images-compress-images';
import { imagesGetFavicon } from '../fn/images/images-get-favicon';
import { ImagesGetFavicon$Params } from '../fn/images/images-get-favicon';
import { imagesUpload } from '../fn/images/images-upload';
import { ImagesUpload$Params } from '../fn/images/images-upload';

@Injectable({ providedIn: 'root' })
export class ImagesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `imagesCompressImages()` */
  static readonly ImagesCompressImagesPath = '/bla-bla-vla/images/compress';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesCompressImages()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imagesCompressImages$Response(params?: ImagesCompressImages$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return imagesCompressImages(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesCompressImages$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  imagesCompressImages(params?: ImagesCompressImages$Params, context?: HttpContext): Observable<Blob> {
    return this.imagesCompressImages$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `imagesUpload()` */
  static readonly ImagesUploadPath = '/bla-bla-vla/images';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesUpload()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesUpload$Response(params?: ImagesUpload$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return imagesUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesUpload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesUpload(params?: ImagesUpload$Params, context?: HttpContext): Observable<any> {
    return this.imagesUpload$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `imagesGetFavicon()` */
  static readonly ImagesGetFaviconPath = '/bla-bla-vla/images/favicon';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `imagesGetFavicon()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesGetFavicon$Response(params?: ImagesGetFavicon$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return imagesGetFavicon(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `imagesGetFavicon$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  imagesGetFavicon(params?: ImagesGetFavicon$Params, context?: HttpContext): Observable<Blob> {
    return this.imagesGetFavicon$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
