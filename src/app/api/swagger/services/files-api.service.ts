/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { filesByUrl } from '../fn/files/files-by-url';
import { FilesByUrl$Params } from '../fn/files/files-by-url';
import { filesDownload } from '../fn/files/files-download';
import { FilesDownload$Params } from '../fn/files/files-download';
import { filesDownloadExternal } from '../fn/files/files-download-external';
import { FilesDownloadExternal$Params } from '../fn/files/files-download-external';
import { filesGetInfoForSign } from '../fn/files/files-get-info-for-sign';
import { FilesGetInfoForSign$Params } from '../fn/files/files-get-info-for-sign';
import { filesGetInfosForSign } from '../fn/files/files-get-infos-for-sign';
import { FilesGetInfosForSign$Params } from '../fn/files/files-get-infos-for-sign';
import { filesUpload } from '../fn/files/files-upload';
import { FilesUpload$Params } from '../fn/files/files-upload';
import { ApiMarketJsonResultOfFileInfoForSignDto } from '../models/api-market-json-result-of-file-info-for-sign-dto';
import { ApiMarketJsonResultOfListOfFileInfoForSignDto } from '../models/api-market-json-result-of-list-of-file-info-for-sign-dto';

@Injectable({ providedIn: 'root' })
export class FilesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `filesDownload()` */
  static readonly FilesDownloadPath = '/market/api/v1/files/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesDownload()` instead.
   *
   * This method doesn't expect any request body.
   */
  filesDownload$Response(params: FilesDownload$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return filesDownload(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filesDownload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filesDownload(params: FilesDownload$Params, context?: HttpContext): Observable<Blob> {
    return this.filesDownload$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `filesDownloadExternal()` */
  static readonly FilesDownloadExternalPath = '/market/api/v1/files/downloadExternal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesDownloadExternal()` instead.
   *
   * This method doesn't expect any request body.
   */
  filesDownloadExternal$Response(params: FilesDownloadExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return filesDownloadExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filesDownloadExternal$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filesDownloadExternal(params: FilesDownloadExternal$Params, context?: HttpContext): Observable<Blob> {
    return this.filesDownloadExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `filesUpload()` */
  static readonly FilesUploadPath = '/market/api/v1/files';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesUpload()` instead.
   *
   * This method doesn't expect any request body.
   */
  filesUpload$Response(params?: FilesUpload$Params, context?: HttpContext): Observable<StrictHttpResponse<any>> {
    return filesUpload(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filesUpload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  filesUpload(params?: FilesUpload$Params, context?: HttpContext): Observable<any> {
    return this.filesUpload$Response(params, context).pipe(
      map((r: StrictHttpResponse<any>): any => r.body)
    );
  }

  /** Path part for operation `filesByUrl()` */
  static readonly FilesByUrlPath = '/market/api/v1/files/uploadByUrl';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesByUrl()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filesByUrl$Response(params?: FilesByUrl$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return filesByUrl(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filesByUrl$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filesByUrl(params?: FilesByUrl$Params, context?: HttpContext): Observable<Blob> {
    return this.filesByUrl$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `filesGetInfoForSign()` */
  static readonly FilesGetInfoForSignPath = '/market/api/v1/files/info-for-sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesGetInfoForSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filesGetInfoForSign$Response(params?: FilesGetInfoForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>> {
    return filesGetInfoForSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filesGetInfoForSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filesGetInfoForSign(params?: FilesGetInfoForSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfFileInfoForSignDto> {
    return this.filesGetInfoForSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfFileInfoForSignDto>): ApiMarketJsonResultOfFileInfoForSignDto => r.body)
    );
  }

  /** Path part for operation `filesGetInfosForSign()` */
  static readonly FilesGetInfosForSignPath = '/market/api/v1/files/infos-for-sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `filesGetInfosForSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filesGetInfosForSign$Response(params?: FilesGetInfosForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfListOfFileInfoForSignDto>> {
    return filesGetInfosForSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `filesGetInfosForSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  filesGetInfosForSign(params?: FilesGetInfosForSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfListOfFileInfoForSignDto> {
    return this.filesGetInfosForSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfListOfFileInfoForSignDto>): ApiMarketJsonResultOfListOfFileInfoForSignDto => r.body)
    );
  }

}
