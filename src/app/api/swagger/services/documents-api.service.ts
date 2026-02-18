/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { documentsDeleteDocument } from '../fn/documents/documents-delete-document';
import { DocumentsDeleteDocument$Params } from '../fn/documents/documents-delete-document';
import { documentsGetMyDocuments } from '../fn/documents/documents-get-my-documents';
import { DocumentsGetMyDocuments$Params } from '../fn/documents/documents-get-my-documents';
import { documentsSaveDocument } from '../fn/documents/documents-save-document';
import { DocumentsSaveDocument$Params } from '../fn/documents/documents-save-document';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-organization-document-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class DocumentsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `documentsGetMyDocuments()` */
  static readonly DocumentsGetMyDocumentsPath = '/bla-bla-vla/documents/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentsGetMyDocuments()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentsGetMyDocuments$Response(params?: DocumentsGetMyDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto>> {
    return documentsGetMyDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `documentsGetMyDocuments$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentsGetMyDocuments(params?: DocumentsGetMyDocuments$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto> {
    return this.documentsGetMyDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto>): ApiMarketJsonResultOfMarketPaginationResultOfListOfOrganizationDocumentDto => r.body)
    );
  }

  /** Path part for operation `documentsSaveDocument()` */
  static readonly DocumentsSaveDocumentPath = '/bla-bla-vla/documents/save';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentsSaveDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentsSaveDocument$Response(params?: DocumentsSaveDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return documentsSaveDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `documentsSaveDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  documentsSaveDocument(params?: DocumentsSaveDocument$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.documentsSaveDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `documentsDeleteDocument()` */
  static readonly DocumentsDeleteDocumentPath = '/bla-bla-vla/documents/delete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `documentsDeleteDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  documentsDeleteDocument$Response(params: DocumentsDeleteDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return documentsDeleteDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `documentsDeleteDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  documentsDeleteDocument(params: DocumentsDeleteDocument$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.documentsDeleteDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
