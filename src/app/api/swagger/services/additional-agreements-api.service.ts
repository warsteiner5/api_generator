/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { additionalAgreementsCreate } from '../fn/additional-agreements/additional-agreements-create';
import { AdditionalAgreementsCreate$Params } from '../fn/additional-agreements/additional-agreements-create';
import { additionalAgreementsGetDataToSign } from '../fn/additional-agreements/additional-agreements-get-data-to-sign';
import { AdditionalAgreementsGetDataToSign$Params } from '../fn/additional-agreements/additional-agreements-get-data-to-sign';
import { additionalAgreementsGetDocumentFileDigitalSignature } from '../fn/additional-agreements/additional-agreements-get-document-file-digital-signature';
import { AdditionalAgreementsGetDocumentFileDigitalSignature$Params } from '../fn/additional-agreements/additional-agreements-get-document-file-digital-signature';
import { additionalAgreementsGetFullAdditionalAgreementData } from '../fn/additional-agreements/additional-agreements-get-full-additional-agreement-data';
import { AdditionalAgreementsGetFullAdditionalAgreementData$Params } from '../fn/additional-agreements/additional-agreements-get-full-additional-agreement-data';
import { additionalAgreementsReject } from '../fn/additional-agreements/additional-agreements-reject';
import { AdditionalAgreementsReject$Params } from '../fn/additional-agreements/additional-agreements-reject';
import { additionalAgreementsRejectExternal } from '../fn/additional-agreements/additional-agreements-reject-external';
import { AdditionalAgreementsRejectExternal$Params } from '../fn/additional-agreements/additional-agreements-reject-external';
import { additionalAgreementsSend } from '../fn/additional-agreements/additional-agreements-send';
import { AdditionalAgreementsSend$Params } from '../fn/additional-agreements/additional-agreements-send';
import { additionalAgreementsSend2 } from '../fn/additional-agreements/additional-agreements-send-2';
import { AdditionalAgreementsSend2$Params } from '../fn/additional-agreements/additional-agreements-send-2';
import { additionalAgreementsSendToParticipant } from '../fn/additional-agreements/additional-agreements-send-to-participant';
import { AdditionalAgreementsSendToParticipant$Params } from '../fn/additional-agreements/additional-agreements-send-to-participant';
import { additionalAgreementsSign } from '../fn/additional-agreements/additional-agreements-sign';
import { AdditionalAgreementsSign$Params } from '../fn/additional-agreements/additional-agreements-sign';
import { additionalAgreementsSignExternal } from '../fn/additional-agreements/additional-agreements-sign-external';
import { AdditionalAgreementsSignExternal$Params } from '../fn/additional-agreements/additional-agreements-sign-external';
import { ApiMarketJsonResultOfAdditionalAgreementHashToSignDto } from '../models/api-market-json-result-of-additional-agreement-hash-to-sign-dto';
import { ApiMarketJsonResultOfCertificateViewModelDto } from '../models/api-market-json-result-of-certificate-view-model-dto';
import { ApiMarketJsonResultOfIListOfAdditionalAgreementDto } from '../models/api-market-json-result-of-i-list-of-additional-agreement-dto';
import { ApiMarketJsonResultOfLongAltDto } from '../models/api-market-json-result-of-long';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';

@Injectable({ providedIn: 'root' })
export class AdditionalAgreementsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `additionalAgreementsCreate()` */
  static readonly AdditionalAgreementsCreatePath = '/market/api/v1/additionalAgreements/create';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsCreate()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsCreate$Response(params?: AdditionalAgreementsCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>> {
    return additionalAgreementsCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsCreate$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsCreate(params?: AdditionalAgreementsCreate$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfLongAltDto> {
    return this.additionalAgreementsCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfLongAltDto>): ApiMarketJsonResultOfLongAltDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsSend()` */
  static readonly AdditionalAgreementsSendPath = '/market/api/v1/additionalAgreements/{id}/send-to-customer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsSend()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsSend$Response(params: AdditionalAgreementsSend$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return additionalAgreementsSend(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsSend$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsSend(params: AdditionalAgreementsSend$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.additionalAgreementsSend$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsSendToParticipant()` */
  static readonly AdditionalAgreementsSendToParticipantPath = '/market/api/v1/additionalAgreements/{id}/send-to-participant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsSendToParticipant()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementsSendToParticipant$Response(params: AdditionalAgreementsSendToParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return additionalAgreementsSendToParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsSendToParticipant$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementsSendToParticipant(params: AdditionalAgreementsSendToParticipant$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.additionalAgreementsSendToParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsSend2()` */
  static readonly AdditionalAgreementsSend2Path = '/market/api/v1/additionalAgreements/send';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsSend2()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsSend2$Response(params?: AdditionalAgreementsSend2$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return additionalAgreementsSend2(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsSend2$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsSend2(params?: AdditionalAgreementsSend2$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.additionalAgreementsSend2$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsSign()` */
  static readonly AdditionalAgreementsSignPath = '/market/api/v1/additionalAgreements/sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsSign$Response(params?: AdditionalAgreementsSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return additionalAgreementsSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsSign(params?: AdditionalAgreementsSign$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.additionalAgreementsSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsSignExternal()` */
  static readonly AdditionalAgreementsSignExternalPath = '/market/api/v1/additionalAgreements/sign-external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsSignExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsSignExternal$Response(params?: AdditionalAgreementsSignExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return additionalAgreementsSignExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsSignExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsSignExternal(params?: AdditionalAgreementsSignExternal$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.additionalAgreementsSignExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsReject()` */
  static readonly AdditionalAgreementsRejectPath = '/market/api/v1/additionalAgreements/reject';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsReject()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsReject$Response(params?: AdditionalAgreementsReject$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return additionalAgreementsReject(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsReject$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsReject(params?: AdditionalAgreementsReject$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.additionalAgreementsReject$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsRejectExternal()` */
  static readonly AdditionalAgreementsRejectExternalPath = '/market/api/v1/additionalAgreements/reject-external';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsRejectExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsRejectExternal$Response(params?: AdditionalAgreementsRejectExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return additionalAgreementsRejectExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsRejectExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsRejectExternal(params?: AdditionalAgreementsRejectExternal$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.additionalAgreementsRejectExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsGetFullAdditionalAgreementData()` */
  static readonly AdditionalAgreementsGetFullAdditionalAgreementDataPath = '/market/api/v1/additionalAgreements/get-by-deal-id/{dealId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsGetFullAdditionalAgreementData()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementsGetFullAdditionalAgreementData$Response(params: AdditionalAgreementsGetFullAdditionalAgreementData$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfIListOfAdditionalAgreementDto>> {
    return additionalAgreementsGetFullAdditionalAgreementData(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsGetFullAdditionalAgreementData$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  additionalAgreementsGetFullAdditionalAgreementData(params: AdditionalAgreementsGetFullAdditionalAgreementData$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfIListOfAdditionalAgreementDto> {
    return this.additionalAgreementsGetFullAdditionalAgreementData$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfIListOfAdditionalAgreementDto>): ApiMarketJsonResultOfIListOfAdditionalAgreementDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsGetDataToSign()` */
  static readonly AdditionalAgreementsGetDataToSignPath = '/market/api/v1/additionalAgreements/data-to-sign';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsGetDataToSign()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsGetDataToSign$Response(params?: AdditionalAgreementsGetDataToSign$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfAdditionalAgreementHashToSignDto>> {
    return additionalAgreementsGetDataToSign(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsGetDataToSign$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsGetDataToSign(params?: AdditionalAgreementsGetDataToSign$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfAdditionalAgreementHashToSignDto> {
    return this.additionalAgreementsGetDataToSign$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfAdditionalAgreementHashToSignDto>): ApiMarketJsonResultOfAdditionalAgreementHashToSignDto => r.body)
    );
  }

  /** Path part for operation `additionalAgreementsGetDocumentFileDigitalSignature()` */
  static readonly AdditionalAgreementsGetDocumentFileDigitalSignaturePath = '/market/api/v1/additionalAgreements/file-digital-signature';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `additionalAgreementsGetDocumentFileDigitalSignature()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsGetDocumentFileDigitalSignature$Response(params?: AdditionalAgreementsGetDocumentFileDigitalSignature$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>> {
    return additionalAgreementsGetDocumentFileDigitalSignature(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `additionalAgreementsGetDocumentFileDigitalSignature$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  additionalAgreementsGetDocumentFileDigitalSignature(params?: AdditionalAgreementsGetDocumentFileDigitalSignature$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfCertificateViewModelDto> {
    return this.additionalAgreementsGetDocumentFileDigitalSignature$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfCertificateViewModelDto>): ApiMarketJsonResultOfCertificateViewModelDto => r.body)
    );
  }

}
