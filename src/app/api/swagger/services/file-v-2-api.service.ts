/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { fileV2DownloadPicturesForOffers } from '../fn/file-v-2/file-v-2-download-pictures-for-offers';
import { FileV2DownloadPicturesForOffers$Params } from '../fn/file-v-2/file-v-2-download-pictures-for-offers';
import { ApiV2ApiResponseAltDto } from '../models/api-v-2-api-response';

@Injectable({ providedIn: 'root' })
export class FileV2ApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `fileV2DownloadPicturesForOffers()` */
  static readonly FileV2DownloadPicturesForOffersPath = '/api/v2/FileController/DownloadPicturesForOffers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileV2DownloadPicturesForOffers()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileV2DownloadPicturesForOffers$Response(params?: FileV2DownloadPicturesForOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiV2ApiResponseAltDto>> {
    return fileV2DownloadPicturesForOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileV2DownloadPicturesForOffers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  fileV2DownloadPicturesForOffers(params?: FileV2DownloadPicturesForOffers$Params, context?: HttpContext): Observable<ApiV2ApiResponseAltDto> {
    return this.fileV2DownloadPicturesForOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiV2ApiResponseAltDto>): ApiV2ApiResponseAltDto => r.body)
    );
  }

}
