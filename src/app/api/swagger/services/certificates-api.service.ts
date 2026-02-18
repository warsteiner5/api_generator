/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { certificatesDownload } from '../fn/certificates/certificates-download';
import { CertificatesDownload$Params } from '../fn/certificates/certificates-download';
import { certificatesDownloadCertificate } from '../fn/certificates/certificates-download-certificate';
import { CertificatesDownloadCertificate$Params } from '../fn/certificates/certificates-download-certificate';
import { certificatesParseGet } from '../fn/certificates/certificates-parse-get';
import { CertificatesParseGet$Params } from '../fn/certificates/certificates-parse-get';
import { certificatesParsePost } from '../fn/certificates/certificates-parse-post';
import { CertificatesParsePost$Params } from '../fn/certificates/certificates-parse-post';
import { ApiMarketJsonResultOfParsedCertificateDto } from '../models/api-market-json-result-of-parsed-certificate-dto';

@Injectable({ providedIn: 'root' })
export class CertificatesApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `certificatesParsePost()` */
  static readonly CertificatesParsePostPath = '/bla-bla-vla/certificates/parse';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `certificatesParsePost()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  certificatesParsePost$Response(params: CertificatesParsePost$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfParsedCertificateDto>> {
    return certificatesParsePost(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `certificatesParsePost$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  certificatesParsePost(params: CertificatesParsePost$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfParsedCertificateDto> {
    return this.certificatesParsePost$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfParsedCertificateDto>): ApiMarketJsonResultOfParsedCertificateDto => r.body)
    );
  }

  /** Path part for operation `certificatesParseGet()` */
  static readonly CertificatesParseGetPath = '/bla-bla-vla/certificates/parse/{fileGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `certificatesParseGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  certificatesParseGet$Response(params: CertificatesParseGet$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfParsedCertificateDto>> {
    return certificatesParseGet(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `certificatesParseGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  certificatesParseGet(params: CertificatesParseGet$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfParsedCertificateDto> {
    return this.certificatesParseGet$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfParsedCertificateDto>): ApiMarketJsonResultOfParsedCertificateDto => r.body)
    );
  }

  /** Path part for operation `certificatesDownload()` */
  static readonly CertificatesDownloadPath = '/bla-bla-vla/certificates/thumbprint/{thumbprint}/download';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `certificatesDownload()` instead.
   *
   * This method doesn't expect any request body.
   */
  certificatesDownload$Response(params: CertificatesDownload$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return certificatesDownload(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `certificatesDownload$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  certificatesDownload(params: CertificatesDownload$Params, context?: HttpContext): Observable<Blob> {
    return this.certificatesDownload$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `certificatesDownloadCertificate()` */
  static readonly CertificatesDownloadCertificatePath = '/bla-bla-vla/certificates/deals/{dealId}/sides/{contractSide}/files/{fileGuid}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `certificatesDownloadCertificate()` instead.
   *
   * This method doesn't expect any request body.
   */
  certificatesDownloadCertificate$Response(params: CertificatesDownloadCertificate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return certificatesDownloadCertificate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `certificatesDownloadCertificate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  certificatesDownloadCertificate(params: CertificatesDownloadCertificate$Params, context?: HttpContext): Observable<Blob> {
    return this.certificatesDownloadCertificate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
