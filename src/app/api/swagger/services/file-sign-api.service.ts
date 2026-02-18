/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiFileInfoForSignDto } from '../models/api-file-info-for-sign-dto';
import { fileSignGetInfoForSign } from '../fn/file-sign/file-sign-get-info-for-sign';
import { FileSignGetInfoForSign$Params } from '../fn/file-sign/file-sign-get-info-for-sign';
import { fileSignGetInfosForSign } from '../fn/file-sign/file-sign-get-infos-for-sign';
import { FileSignGetInfosForSign$Params } from '../fn/file-sign/file-sign-get-infos-for-sign';
import { fileSignSignFile } from '../fn/file-sign/file-sign-sign-file';
import { FileSignSignFile$Params } from '../fn/file-sign/file-sign-sign-file';

@Injectable({ providedIn: 'root' })
export class FileSignApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `fileSignGetInfoForSign()` */
  static readonly FileSignGetInfoForSignPath = '/api/FileSign/GetInfoForSign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileSignGetInfoForSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileSignGetInfoForSign$Response(params?: FileSignGetInfoForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiFileInfoForSignDto>> {
    return fileSignGetInfoForSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileSignGetInfoForSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileSignGetInfoForSign(params?: FileSignGetInfoForSign$Params, context?: HttpContext): Observable<ApiFileInfoForSignDto> {
    return this.fileSignGetInfoForSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiFileInfoForSignDto>): ApiFileInfoForSignDto => r.body)
    );
  }

  /** Path part for operation `fileSignGetInfosForSign()` */
  static readonly FileSignGetInfosForSignPath = '/api/FileSign/GetInfosForSign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileSignGetInfosForSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileSignGetInfosForSign$Response(params?: FileSignGetInfosForSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiFileInfoForSignDto>> {
    return fileSignGetInfosForSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileSignGetInfosForSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileSignGetInfosForSign(params?: FileSignGetInfosForSign$Params, context?: HttpContext): Observable<ApiFileInfoForSignDto> {
    return this.fileSignGetInfosForSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiFileInfoForSignDto>): ApiFileInfoForSignDto => r.body)
    );
  }

  /** Path part for operation `fileSignSignFile()` */
  static readonly FileSignSignFilePath = '/api/FileSign/SignFile';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `fileSignSignFile()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileSignSignFile$Response(params?: FileSignSignFile$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return fileSignSignFile(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `fileSignSignFile$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  fileSignSignFile(params?: FileSignSignFile$Params, context?: HttpContext): Observable<void> {
    return this.fileSignSignFile$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

}
