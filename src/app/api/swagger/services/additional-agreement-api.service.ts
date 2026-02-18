/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { additionalAgreementCreate } from '../fn/additional-agreement/additional-agreement-create';
import { AdditionalAgreementCreate$Params } from '../fn/additional-agreement/additional-agreement-create';
import { ApiAdditionalAgreementDto } from '../models/api-additional-agreement-dto';
import { additionalAgreementGetAdditionalAgreementByDealId } from '../fn/additional-agreement/additional-agreement-get-additional-agreement-by-deal-id';
import { AdditionalAgreementGetAdditionalAgreementByDealId$Params } from '../fn/additional-agreement/additional-agreement-get-additional-agreement-by-deal-id';
import { additionalAgreementGetAdditionalAgreementSignature } from '../fn/additional-agreement/additional-agreement-get-additional-agreement-signature';
import { AdditionalAgreementGetAdditionalAgreementSignature$Params } from '../fn/additional-agreement/additional-agreement-get-additional-agreement-signature';
import { additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer } from '../fn/additional-agreement/additional-agreement-get-data-for-additional-agreement-document-signed-by-customer';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params } from '../fn/additional-agreement/additional-agreement-get-data-for-additional-agreement-document-signed-by-customer';
import { additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant } from '../fn/additional-agreement/additional-agreement-get-data-for-additional-agreement-document-signed-by-participant';
import { AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Params } from '../fn/additional-agreement/additional-agreement-get-data-for-additional-agreement-document-signed-by-participant';
import { additionalAgreementGetDataToSign } from '../fn/additional-agreement/additional-agreement-get-data-to-sign';
import { AdditionalAgreementGetDataToSign$Params } from '../fn/additional-agreement/additional-agreement-get-data-to-sign';
import { ApiAdditionalAgreementHashToSignDto } from '../models/api-additional-agreement-hash-to-sign-dto';
import { additionalAgreementReject } from '../fn/additional-agreement/additional-agreement-reject';
import { AdditionalAgreementReject$Params } from '../fn/additional-agreement/additional-agreement-reject';
import { additionalAgreementSendForApprove } from '../fn/additional-agreement/additional-agreement-send-for-approve';
import { AdditionalAgreementSendForApprove$Params } from '../fn/additional-agreement/additional-agreement-send-for-approve';
import { additionalAgreementSendToParticipant } from '../fn/additional-agreement/additional-agreement-send-to-participant';
import { AdditionalAgreementSendToParticipant$Params } from '../fn/additional-agreement/additional-agreement-send-to-participant';
import { additionalAgreementSign } from '../fn/additional-agreement/additional-agreement-sign';
import { AdditionalAgreementSign$Params } from '../fn/additional-agreement/additional-agreement-sign';
import { ApiAdditionalAgreementSignatureDto } from '../models/api-additional-agreement-signature-dto';
import { ApiCertificateViewModelDto } from '../models/api-certificate-view-model-dto';

@Injectable({ providedIn: 'root' })
export class AdditionalAgreementApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `additionalAgreementCreate()` */
  static readonly AdditionalAgreementCreatePath = '/api/AdditionalAgreement/Create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementCreate$Response(params?: AdditionalAgreementCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return additionalAgreementCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementCreate(params?: AdditionalAgreementCreate$Params, context?: HttpContext): Observable<number> {
    return this.additionalAgreementCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `additionalAgreementSendForApprove()` */
  static readonly AdditionalAgreementSendForApprovePath = '/api/AdditionalAgreement/{id}/SendToCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementSendForApprove()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementSendForApprove$Response(params: AdditionalAgreementSendForApprove$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return additionalAgreementSendForApprove(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementSendForApprove$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementSendForApprove(params: AdditionalAgreementSendForApprove$Params, context?: HttpContext): Observable<Blob> {
    return this.additionalAgreementSendForApprove$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `additionalAgreementSendToParticipant()` */
  static readonly AdditionalAgreementSendToParticipantPath = '/api/AdditionalAgreement/{id}/SendToParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementSendToParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementSendToParticipant$Response(params: AdditionalAgreementSendToParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return additionalAgreementSendToParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementSendToParticipant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementSendToParticipant(params: AdditionalAgreementSendToParticipant$Params, context?: HttpContext): Observable<Blob> {
    return this.additionalAgreementSendToParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `additionalAgreementSign()` */
  static readonly AdditionalAgreementSignPath = '/api/AdditionalAgreement/Sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementSign$Response(params?: AdditionalAgreementSign$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return additionalAgreementSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementSign(params?: AdditionalAgreementSign$Params, context?: HttpContext): Observable<Blob> {
    return this.additionalAgreementSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `additionalAgreementReject()` */
  static readonly AdditionalAgreementRejectPath = '/api/AdditionalAgreement/Reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementReject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementReject$Response(params?: AdditionalAgreementReject$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return additionalAgreementReject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementReject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementReject(params?: AdditionalAgreementReject$Params, context?: HttpContext): Observable<Blob> {
    return this.additionalAgreementReject$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `additionalAgreementGetAdditionalAgreementByDealId()` */
  static readonly AdditionalAgreementGetAdditionalAgreementByDealIdPath = '/api/AdditionalAgreement/GetByDealId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementGetAdditionalAgreementByDealId()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementGetAdditionalAgreementByDealId$Response(params: AdditionalAgreementGetAdditionalAgreementByDealId$Params, context?: HttpContext): Observable<StrictHttpResponse<Array<ApiAdditionalAgreementDto>>> {
    return additionalAgreementGetAdditionalAgreementByDealId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementGetAdditionalAgreementByDealId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementGetAdditionalAgreementByDealId(params: AdditionalAgreementGetAdditionalAgreementByDealId$Params, context?: HttpContext): Observable<Array<ApiAdditionalAgreementDto>> {
    return this.additionalAgreementGetAdditionalAgreementByDealId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Array<ApiAdditionalAgreementDto>>): Array<ApiAdditionalAgreementDto> => r.body)
    );
  }

  /** Path part for operation `additionalAgreementGetDataToSign()` */
  static readonly AdditionalAgreementGetDataToSignPath = '/api/AdditionalAgreement/DataToSign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementGetDataToSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementGetDataToSign$Response(params?: AdditionalAgreementGetDataToSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiAdditionalAgreementHashToSignDto>> {
    return additionalAgreementGetDataToSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementGetDataToSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementGetDataToSign(params?: AdditionalAgreementGetDataToSign$Params, context?: HttpContext): Observable<ApiAdditionalAgreementHashToSignDto> {
    return this.additionalAgreementGetDataToSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiAdditionalAgreementHashToSignDto>): ApiAdditionalAgreementHashToSignDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer()` */
  static readonly AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomerPath = '/api/AdditionalAgreement/GetDataForDocumentSignedByCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Response(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCertificateViewModelDto>> {
    return additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Params, context?: HttpContext): Observable<ApiCertificateViewModelDto> {
    return this.additionalAgreementGetDataForAdditionalAgreementDocumentSignedByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiCertificateViewModelDto>): ApiCertificateViewModelDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant()` */
  static readonly AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipantPath = '/api/AdditionalAgreement/GetDataForDocumentSignedByParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Response(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCertificateViewModelDto>> {
    return additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant(params?: AdditionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Params, context?: HttpContext): Observable<ApiCertificateViewModelDto> {
    return this.additionalAgreementGetDataForAdditionalAgreementDocumentSignedByParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiCertificateViewModelDto>): ApiCertificateViewModelDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementGetAdditionalAgreementSignature()` */
  static readonly AdditionalAgreementGetAdditionalAgreementSignaturePath = '/api/AdditionalAgreement/GetAdditionalAgreementSignature/{additionalAgreementId}/{fileGuid}/{participant}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementGetAdditionalAgreementSignature()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementGetAdditionalAgreementSignature$Response(params: AdditionalAgreementGetAdditionalAgreementSignature$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiAdditionalAgreementSignatureDto>> {
    return additionalAgreementGetAdditionalAgreementSignature(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementGetAdditionalAgreementSignature$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementGetAdditionalAgreementSignature(params: AdditionalAgreementGetAdditionalAgreementSignature$Params, context?: HttpContext): Observable<ApiAdditionalAgreementSignatureDto> {
    return this.additionalAgreementGetAdditionalAgreementSignature$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiAdditionalAgreementSignatureDto>): ApiAdditionalAgreementSignatureDto => r.body)
    );
  }

}
