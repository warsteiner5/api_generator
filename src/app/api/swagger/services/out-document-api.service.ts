/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiApiSearchResultOfOutDocumentDto } from '../models/api-api-search-result-of-out-document-dto';
import { ApiOutDocumentDto } from '../models/api-out-document-dto';
import { outDocumentGetOutDocument } from '../fn/out-document/out-document-get-out-document';
import { OutDocumentGetOutDocument$Params } from '../fn/out-document/out-document-get-out-document';
import { outDocumentGetOutDocuments } from '../fn/out-document/out-document-get-out-documents';
import { OutDocumentGetOutDocuments$Params } from '../fn/out-document/out-document-get-out-documents';
import { outDocumentSetOutDocumentRead } from '../fn/out-document/out-document-set-out-document-read';
import { OutDocumentSetOutDocumentRead$Params } from '../fn/out-document/out-document-set-out-document-read';

@Injectable({ providedIn: 'root' })
export class OutDocumentApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `outDocumentGetOutDocuments()` */
  static readonly OutDocumentGetOutDocumentsPath = '/api/OutDocument/GetOutDocuments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `outDocumentGetOutDocuments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  outDocumentGetOutDocuments$Response(params?: OutDocumentGetOutDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfOutDocumentDto>> {
    return outDocumentGetOutDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `outDocumentGetOutDocuments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  outDocumentGetOutDocuments(params?: OutDocumentGetOutDocuments$Params, context?: HttpContext): Observable<ApiApiSearchResultOfOutDocumentDto> {
    return this.outDocumentGetOutDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfOutDocumentDto>): ApiApiSearchResultOfOutDocumentDto => r.body)
    );
  }

  /** Path part for operation `outDocumentGetOutDocument()` */
  static readonly OutDocumentGetOutDocumentPath = '/api/OutDocument/GetOutDocument/{id}/{externalSystemId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `outDocumentGetOutDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  outDocumentGetOutDocument$Response(params: OutDocumentGetOutDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiOutDocumentDto>> {
    return outDocumentGetOutDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `outDocumentGetOutDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  outDocumentGetOutDocument(params: OutDocumentGetOutDocument$Params, context?: HttpContext): Observable<ApiOutDocumentDto> {
    return this.outDocumentGetOutDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiOutDocumentDto>): ApiOutDocumentDto => r.body)
    );
  }

  /** Path part for operation `outDocumentSetOutDocumentRead()` */
  static readonly OutDocumentSetOutDocumentReadPath = '/api/OutDocument/SetOutDocumentRead';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `outDocumentSetOutDocumentRead()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  outDocumentSetOutDocumentRead$Response(params?: OutDocumentSetOutDocumentRead$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return outDocumentSetOutDocumentRead(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `outDocumentSetOutDocumentRead$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  outDocumentSetOutDocumentRead(params?: OutDocumentSetOutDocumentRead$Params, context?: HttpContext): Observable<Blob> {
    return this.outDocumentSetOutDocumentRead$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
