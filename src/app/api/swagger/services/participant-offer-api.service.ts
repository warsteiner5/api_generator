/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiImportedResultsAltDto } from '../models/api-imported-results';
import { participantOfferCheckOffersForOrderCreation } from '../fn/participant-offer/participant-offer-check-offers-for-order-creation';
import { ParticipantOfferCheckOffersForOrderCreation$Params } from '../fn/participant-offer/participant-offer-check-offers-for-order-creation';
import { participantOfferCommercial } from '../fn/participant-offer/participant-offer-commercial';
import { ParticipantOfferCommercial$Params } from '../fn/participant-offer/participant-offer-commercial';
import { participantOfferCommercialPrintForm } from '../fn/participant-offer/participant-offer-commercial-print-form';
import { ParticipantOfferCommercialPrintForm$Params } from '../fn/participant-offer/participant-offer-commercial-print-form';
import { participantOfferDeactivateOffers } from '../fn/participant-offer/participant-offer-deactivate-offers';
import { ParticipantOfferDeactivateOffers$Params } from '../fn/participant-offer/participant-offer-deactivate-offers';
import { participantOfferExportToExcel } from '../fn/participant-offer/participant-offer-export-to-excel';
import { ParticipantOfferExportToExcel$Params } from '../fn/participant-offer/participant-offer-export-to-excel';
import { participantOfferExportToExcelByFilter } from '../fn/participant-offer/participant-offer-export-to-excel-by-filter';
import { ParticipantOfferExportToExcelByFilter$Params } from '../fn/participant-offer/participant-offer-export-to-excel-by-filter';
import { participantOfferGenerateCommercialPrintForms } from '../fn/participant-offer/participant-offer-generate-commercial-print-forms';
import { ParticipantOfferGenerateCommercialPrintForms$Params } from '../fn/participant-offer/participant-offer-generate-commercial-print-forms';
import { participantOfferGetActualOfferIds } from '../fn/participant-offer/participant-offer-get-actual-offer-ids';
import { ParticipantOfferGetActualOfferIds$Params } from '../fn/participant-offer/participant-offer-get-actual-offer-ids';
import { participantOfferGetOfferInfo } from '../fn/participant-offer/participant-offer-get-offer-info';
import { ParticipantOfferGetOfferInfo$Params } from '../fn/participant-offer/participant-offer-get-offer-info';
import { participantOfferGetOffers } from '../fn/participant-offer/participant-offer-get-offers';
import { ParticipantOfferGetOffers$Params } from '../fn/participant-offer/participant-offer-get-offers';
import { participantOfferGetOffersInfo } from '../fn/participant-offer/participant-offer-get-offers-info';
import { ParticipantOfferGetOffersInfo$Params } from '../fn/participant-offer/participant-offer-get-offers-info';
import { participantOfferGetParticipantOfferForEdit } from '../fn/participant-offer/participant-offer-get-participant-offer-for-edit';
import { ParticipantOfferGetParticipantOfferForEdit$Params } from '../fn/participant-offer/participant-offer-get-participant-offer-for-edit';
import { participantOfferGetPublicOfferIds } from '../fn/participant-offer/participant-offer-get-public-offer-ids';
import { ParticipantOfferGetPublicOfferIds$Params } from '../fn/participant-offer/participant-offer-get-public-offer-ids';
import { participantOfferGetTemplateForExcelDocument } from '../fn/participant-offer/participant-offer-get-template-for-excel-document';
import { ParticipantOfferGetTemplateForExcelDocument$Params } from '../fn/participant-offer/participant-offer-get-template-for-excel-document';
import { participantOfferLoadCommercialExcelDocument } from '../fn/participant-offer/participant-offer-load-commercial-excel-document';
import { ParticipantOfferLoadCommercialExcelDocument$Params } from '../fn/participant-offer/participant-offer-load-commercial-excel-document';
import { participantOfferLoadDataFromDocument } from '../fn/participant-offer/participant-offer-load-data-from-document';
import { ParticipantOfferLoadDataFromDocument$Params } from '../fn/participant-offer/participant-offer-load-data-from-document';
import { participantOfferLoadDataFromExcelDocument } from '../fn/participant-offer/participant-offer-load-data-from-excel-document';
import { ParticipantOfferLoadDataFromExcelDocument$Params } from '../fn/participant-offer/participant-offer-load-data-from-excel-document';
import { participantOfferPriceLists } from '../fn/participant-offer/participant-offer-price-lists';
import { ParticipantOfferPriceLists$Params } from '../fn/participant-offer/participant-offer-price-lists';
import { participantOfferPriceListsForAnonymous } from '../fn/participant-offer/participant-offer-price-lists-for-anonymous';
import { ParticipantOfferPriceListsForAnonymous$Params } from '../fn/participant-offer/participant-offer-price-lists-for-anonymous';
import { participantOfferPublish } from '../fn/participant-offer/participant-offer-publish';
import { ParticipantOfferPublish$Params } from '../fn/participant-offer/participant-offer-publish';
import { participantOfferPublishCommercialOffers } from '../fn/participant-offer/participant-offer-publish-commercial-offers';
import { ParticipantOfferPublishCommercialOffers$Params } from '../fn/participant-offer/participant-offer-publish-commercial-offers';
import { participantOfferRemoveParticipantOffer } from '../fn/participant-offer/participant-offer-remove-participant-offer';
import { ParticipantOfferRemoveParticipantOffer$Params } from '../fn/participant-offer/participant-offer-remove-participant-offer';
import { participantOfferSaveAsDraft } from '../fn/participant-offer/participant-offer-save-as-draft';
import { ParticipantOfferSaveAsDraft$Params } from '../fn/participant-offer/participant-offer-save-as-draft';
import { participantOfferValidateAndGenerateCommercialPrintForm } from '../fn/participant-offer/participant-offer-validate-and-generate-commercial-print-form';
import { ParticipantOfferValidateAndGenerateCommercialPrintForm$Params } from '../fn/participant-offer/participant-offer-validate-and-generate-commercial-print-form';

@Injectable({ providedIn: 'root' })
export class ParticipantOfferApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `participantOfferGetOffers()` */
  static readonly ParticipantOfferGetOffersPath = '/api/participantoffer/GetOffers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferGetOffers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGetOffers$Response(params?: ParticipantOfferGetOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferGetOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferGetOffers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGetOffers(params?: ParticipantOfferGetOffers$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferGetOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferGetActualOfferIds()` */
  static readonly ParticipantOfferGetActualOfferIdsPath = '/api/participantoffer/actual-offer-ids';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferGetActualOfferIds()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGetActualOfferIds$Response(params?: ParticipantOfferGetActualOfferIds$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferGetActualOfferIds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferGetActualOfferIds$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGetActualOfferIds(params?: ParticipantOfferGetActualOfferIds$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferGetActualOfferIds$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferGetPublicOfferIds()` */
  static readonly ParticipantOfferGetPublicOfferIdsPath = '/api/participantoffer/GetPublicOfferIds';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferGetPublicOfferIds()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGetPublicOfferIds$Response(params?: ParticipantOfferGetPublicOfferIds$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferGetPublicOfferIds(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferGetPublicOfferIds$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGetPublicOfferIds(params?: ParticipantOfferGetPublicOfferIds$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferGetPublicOfferIds$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferPriceLists()` */
  static readonly ParticipantOfferPriceListsPath = '/api/participantoffer/pricelists';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferPriceLists()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferPriceLists$Response(params?: ParticipantOfferPriceLists$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferPriceLists(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferPriceLists$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferPriceLists(params?: ParticipantOfferPriceLists$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferPriceLists$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferPriceListsForAnonymous()` */
  static readonly ParticipantOfferPriceListsForAnonymousPath = '/api/participantoffer/pricelistsforanonymous';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferPriceListsForAnonymous()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferPriceListsForAnonymous$Response(params?: ParticipantOfferPriceListsForAnonymous$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferPriceListsForAnonymous(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferPriceListsForAnonymous$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferPriceListsForAnonymous(params?: ParticipantOfferPriceListsForAnonymous$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferPriceListsForAnonymous$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferCommercial()` */
  static readonly ParticipantOfferCommercialPath = '/api/participantoffer/commercial';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferCommercial()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferCommercial$Response(params?: ParticipantOfferCommercial$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferCommercial(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferCommercial$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferCommercial(params?: ParticipantOfferCommercial$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferCommercial$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferSaveAsDraft()` */
  static readonly ParticipantOfferSaveAsDraftPath = '/api/participantoffer/SaveAsDraft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferSaveAsDraft$Response(params?: ParticipantOfferSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferSaveAsDraft(params?: ParticipantOfferSaveAsDraft$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferPublish()` */
  static readonly ParticipantOfferPublishPath = '/api/participantoffer/Publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferPublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferPublish$Response(params?: ParticipantOfferPublish$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferPublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferPublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferPublish(params?: ParticipantOfferPublish$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferPublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferExportToExcel()` */
  static readonly ParticipantOfferExportToExcelPath = '/api/participantoffer/exporttoexcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferExportToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferExportToExcel$Response(params?: ParticipantOfferExportToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferExportToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferExportToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferExportToExcel(params?: ParticipantOfferExportToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferExportToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferExportToExcelByFilter()` */
  static readonly ParticipantOfferExportToExcelByFilterPath = '/api/participantoffer/ExportToExcelByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferExportToExcelByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferExportToExcelByFilter$Response(params?: ParticipantOfferExportToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferExportToExcelByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferExportToExcelByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferExportToExcelByFilter(params?: ParticipantOfferExportToExcelByFilter$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferExportToExcelByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferGetParticipantOfferForEdit()` */
  static readonly ParticipantOfferGetParticipantOfferForEditPath = '/api/participantoffer/{id}/GetParticipantOfferForEdit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferGetParticipantOfferForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferGetParticipantOfferForEdit$Response(params: ParticipantOfferGetParticipantOfferForEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferGetParticipantOfferForEdit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferGetParticipantOfferForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferGetParticipantOfferForEdit(params: ParticipantOfferGetParticipantOfferForEdit$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferGetParticipantOfferForEdit$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferGetOfferInfo()` */
  static readonly ParticipantOfferGetOfferInfoPath = '/api/participantoffer/{offerId}/GetOfferInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferGetOfferInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferGetOfferInfo$Response(params: ParticipantOfferGetOfferInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferGetOfferInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferGetOfferInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferGetOfferInfo(params: ParticipantOfferGetOfferInfo$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferGetOfferInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferGetOffersInfo()` */
  static readonly ParticipantOfferGetOffersInfoPath = '/api/participantoffer/getoffersinfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferGetOffersInfo()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGetOffersInfo$Response(params?: ParticipantOfferGetOffersInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferGetOffersInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferGetOffersInfo$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGetOffersInfo(params?: ParticipantOfferGetOffersInfo$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferGetOffersInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferLoadDataFromExcelDocument()` */
  static readonly ParticipantOfferLoadDataFromExcelDocumentPath = '/api/participantoffer/LoadDataFromExcelDocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferLoadDataFromExcelDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferLoadDataFromExcelDocument$Response(params?: ParticipantOfferLoadDataFromExcelDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferLoadDataFromExcelDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferLoadDataFromExcelDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferLoadDataFromExcelDocument(params?: ParticipantOfferLoadDataFromExcelDocument$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferLoadDataFromExcelDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferLoadDataFromDocument()` */
  static readonly ParticipantOfferLoadDataFromDocumentPath = '/api/participantoffer/LoadDataFromDocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferLoadDataFromDocument()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferLoadDataFromDocument$Response(params?: ParticipantOfferLoadDataFromDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiImportedResultsAltDto>> {
    return participantOfferLoadDataFromDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferLoadDataFromDocument$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferLoadDataFromDocument(params?: ParticipantOfferLoadDataFromDocument$Params, context?: HttpContext): Observable<ApiImportedResultsAltDto> {
    return this.participantOfferLoadDataFromDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiImportedResultsAltDto>): ApiImportedResultsAltDto => r.body)
    );
  }

  /** Path part for operation `participantOfferLoadCommercialExcelDocument()` */
  static readonly ParticipantOfferLoadCommercialExcelDocumentPath = '/api/participantoffer/LoadCommercialExcelDocument';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferLoadCommercialExcelDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferLoadCommercialExcelDocument$Response(params?: ParticipantOfferLoadCommercialExcelDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferLoadCommercialExcelDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferLoadCommercialExcelDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferLoadCommercialExcelDocument(params?: ParticipantOfferLoadCommercialExcelDocument$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferLoadCommercialExcelDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferGetTemplateForExcelDocument()` */
  static readonly ParticipantOfferGetTemplateForExcelDocumentPath = '/api/participantoffer/GetTemplateForExcelDocument/{type}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferGetTemplateForExcelDocument()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferGetTemplateForExcelDocument$Response(params: ParticipantOfferGetTemplateForExcelDocument$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferGetTemplateForExcelDocument(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferGetTemplateForExcelDocument$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferGetTemplateForExcelDocument(params: ParticipantOfferGetTemplateForExcelDocument$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferGetTemplateForExcelDocument$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferRemoveParticipantOffer()` */
  static readonly ParticipantOfferRemoveParticipantOfferPath = '/api/participantoffer/Remove';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferRemoveParticipantOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferRemoveParticipantOffer$Response(params?: ParticipantOfferRemoveParticipantOffer$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferRemoveParticipantOffer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferRemoveParticipantOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferRemoveParticipantOffer(params?: ParticipantOfferRemoveParticipantOffer$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferRemoveParticipantOffer$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferDeactivateOffers()` */
  static readonly ParticipantOfferDeactivateOffersPath = '/api/participantoffer/DeactivateOffers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferDeactivateOffers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferDeactivateOffers$Response(params?: ParticipantOfferDeactivateOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferDeactivateOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferDeactivateOffers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferDeactivateOffers(params?: ParticipantOfferDeactivateOffers$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferDeactivateOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferCheckOffersForOrderCreation()` */
  static readonly ParticipantOfferCheckOffersForOrderCreationPath = '/api/participantoffer/CheckOffersForOrderCreation';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferCheckOffersForOrderCreation()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferCheckOffersForOrderCreation$Response(params?: ParticipantOfferCheckOffersForOrderCreation$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferCheckOffersForOrderCreation(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferCheckOffersForOrderCreation$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferCheckOffersForOrderCreation(params?: ParticipantOfferCheckOffersForOrderCreation$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferCheckOffersForOrderCreation$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferValidateAndGenerateCommercialPrintForm()` */
  static readonly ParticipantOfferValidateAndGenerateCommercialPrintFormPath = '/api/participantoffer/ValidateAndGenerateCommercialPrintForm';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferValidateAndGenerateCommercialPrintForm()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferValidateAndGenerateCommercialPrintForm$Response(params?: ParticipantOfferValidateAndGenerateCommercialPrintForm$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferValidateAndGenerateCommercialPrintForm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferValidateAndGenerateCommercialPrintForm$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferValidateAndGenerateCommercialPrintForm(params?: ParticipantOfferValidateAndGenerateCommercialPrintForm$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferValidateAndGenerateCommercialPrintForm$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferGenerateCommercialPrintForms()` */
  static readonly ParticipantOfferGenerateCommercialPrintFormsPath = '/api/participantoffer/GenerateCommercialPrintForms';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferGenerateCommercialPrintForms()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGenerateCommercialPrintForms$Response(params?: ParticipantOfferGenerateCommercialPrintForms$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferGenerateCommercialPrintForms(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferGenerateCommercialPrintForms$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferGenerateCommercialPrintForms(params?: ParticipantOfferGenerateCommercialPrintForms$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferGenerateCommercialPrintForms$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferPublishCommercialOffers()` */
  static readonly ParticipantOfferPublishCommercialOffersPath = '/api/participantoffer/PublishCommercialOffers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferPublishCommercialOffers()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferPublishCommercialOffers$Response(params?: ParticipantOfferPublishCommercialOffers$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferPublishCommercialOffers(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferPublishCommercialOffers$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  participantOfferPublishCommercialOffers(params?: ParticipantOfferPublishCommercialOffers$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferPublishCommercialOffers$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `participantOfferCommercialPrintForm()` */
  static readonly ParticipantOfferCommercialPrintFormPath = '/api/participantoffer/CommercialPrintForm/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `participantOfferCommercialPrintForm()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferCommercialPrintForm$Response(params: ParticipantOfferCommercialPrintForm$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return participantOfferCommercialPrintForm(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `participantOfferCommercialPrintForm$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  participantOfferCommercialPrintForm(params: ParticipantOfferCommercialPrintForm$Params, context?: HttpContext): Observable<Blob> {
    return this.participantOfferCommercialPrintForm$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
