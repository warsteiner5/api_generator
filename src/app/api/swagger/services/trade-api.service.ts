/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiApiSearchResultOfTradeInfoForAnonymousAltDto } from '../models/api-api-search-result-of-trade-info-for-anonymous';
import { ApiApiSearchResultOfTradeInfoForCustomerAltDto } from '../models/api-api-search-result-of-trade-info-for-customer';
import { ApiApiSearchResultOfTradeInfoForParticipantAltDto } from '../models/api-api-search-result-of-trade-info-for-participant';
import { ApiBatchProcessingResultAltDto } from '../models/api-batch-processing-result';
import { ApiCustomerContactInfoAltDto } from '../models/api-customer-contact-info';
import { ApiExpiringTradesInfoForCustomerAltDto } from '../models/api-expiring-trades-info-for-customer';
import { ApiImportExcelLotItemResponseAltDto } from '../models/api-import-excel-lot-item-response';
import { tradeCanTradeBeExportedToPp } from '../fn/trade/trade-can-trade-be-exported-to-pp';
import { TradeCanTradeBeExportedToPp$Params } from '../fn/trade/trade-can-trade-be-exported-to-pp';
import { tradeCheckAndGetTradeExtCustomerInfo } from '../fn/trade/trade-check-and-get-trade-ext-customer-info';
import { TradeCheckAndGetTradeExtCustomerInfo$Params } from '../fn/trade/trade-check-and-get-trade-ext-customer-info';
import { tradeCompleteTrade } from '../fn/trade/trade-complete-trade';
import { TradeCompleteTrade$Params } from '../fn/trade/trade-complete-trade';
import { tradeCreateApplicationsByCustomer } from '../fn/trade/trade-create-applications-by-customer';
import { TradeCreateApplicationsByCustomer$Params } from '../fn/trade/trade-create-applications-by-customer';
import { ApiTradeDatesDto } from '../models/api-trade-dates-dto';
import { ApiTradeDto } from '../models/api-trade-dto';
import { tradeEditPublishedTrade } from '../fn/trade/trade-edit-published-trade';
import { TradeEditPublishedTrade$Params } from '../fn/trade/trade-edit-published-trade';
import { tradeEditPublishedTradeByExternalSystem } from '../fn/trade/trade-edit-published-trade-by-external-system';
import { TradeEditPublishedTradeByExternalSystem$Params } from '../fn/trade/trade-edit-published-trade-by-external-system';
import { tradeEditPublishedTradeDates } from '../fn/trade/trade-edit-published-trade-dates';
import { TradeEditPublishedTradeDates$Params } from '../fn/trade/trade-edit-published-trade-dates';
import { tradeExportToExcel } from '../fn/trade/trade-export-to-excel';
import { TradeExportToExcel$Params } from '../fn/trade/trade-export-to-excel';
import { tradeExportToExcelByFilter } from '../fn/trade/trade-export-to-excel-by-filter';
import { TradeExportToExcelByFilter$Params } from '../fn/trade/trade-export-to-excel-by-filter';
import { tradeExtendTradeExternal } from '../fn/trade/trade-extend-trade-external';
import { TradeExtendTradeExternal$Params } from '../fn/trade/trade-extend-trade-external';
import { tradeFinishReviewApplication } from '../fn/trade/trade-finish-review-application';
import { TradeFinishReviewApplication$Params } from '../fn/trade/trade-finish-review-application';
import { tradeFinishReviewApplicationWithoutDeal } from '../fn/trade/trade-finish-review-application-without-deal';
import { TradeFinishReviewApplicationWithoutDeal$Params } from '../fn/trade/trade-finish-review-application-without-deal';
import { tradeGetAllTradesForCustomer } from '../fn/trade/trade-get-all-trades-for-customer';
import { TradeGetAllTradesForCustomer$Params } from '../fn/trade/trade-get-all-trades-for-customer';
import { tradeGetCommissionInformationForLot } from '../fn/trade/trade-get-commission-information-for-lot';
import { TradeGetCommissionInformationForLot$Params } from '../fn/trade/trade-get-commission-information-for-lot';
import { tradeGetCustomerContactInfo } from '../fn/trade/trade-get-customer-contact-info';
import { TradeGetCustomerContactInfo$Params } from '../fn/trade/trade-get-customer-contact-info';
import { tradeGetExpiringTradesInfoForCustomer } from '../fn/trade/trade-get-expiring-trades-info-for-customer';
import { TradeGetExpiringTradesInfoForCustomer$Params } from '../fn/trade/trade-get-expiring-trades-info-for-customer';
import { tradeGetFinishReviewApplicationProtocolDefault } from '../fn/trade/trade-get-finish-review-application-protocol-default';
import { TradeGetFinishReviewApplicationProtocolDefault$Params } from '../fn/trade/trade-get-finish-review-application-protocol-default';
import { tradeGetFullTradeInfo } from '../fn/trade/trade-get-full-trade-info';
import { TradeGetFullTradeInfo$Params } from '../fn/trade/trade-get-full-trade-info';
import { tradeGetOldId } from '../fn/trade/trade-get-old-id';
import { TradeGetOldId$Params } from '../fn/trade/trade-get-old-id';
import { tradeGetParticipantInfoArchive } from '../fn/trade/trade-get-participant-info-archive';
import { TradeGetParticipantInfoArchive$Params } from '../fn/trade/trade-get-participant-info-archive';
import { tradeGetTradeCopy } from '../fn/trade/trade-get-trade-copy';
import { TradeGetTradeCopy$Params } from '../fn/trade/trade-get-trade-copy';
import { tradeGetTradeDatesForEdit } from '../fn/trade/trade-get-trade-dates-for-edit';
import { TradeGetTradeDatesForEdit$Params } from '../fn/trade/trade-get-trade-dates-for-edit';
import { tradeGetTradeDocuments } from '../fn/trade/trade-get-trade-documents';
import { TradeGetTradeDocuments$Params } from '../fn/trade/trade-get-trade-documents';
import { tradeGetTradeExtCustomerInfoFileTemplate } from '../fn/trade/trade-get-trade-ext-customer-info-file-template';
import { TradeGetTradeExtCustomerInfoFileTemplate$Params } from '../fn/trade/trade-get-trade-ext-customer-info-file-template';
import { tradeGetTradeForEdit } from '../fn/trade/trade-get-trade-for-edit';
import { TradeGetTradeForEdit$Params } from '../fn/trade/trade-get-trade-for-edit';
import { tradeGetTradeInfoByLotId } from '../fn/trade/trade-get-trade-info-by-lot-id';
import { TradeGetTradeInfoByLotId$Params } from '../fn/trade/trade-get-trade-info-by-lot-id';
import { tradeGetTradesForAdmin } from '../fn/trade/trade-get-trades-for-admin';
import { TradeGetTradesForAdmin$Params } from '../fn/trade/trade-get-trades-for-admin';
import { tradeGetTradesForAnonymous } from '../fn/trade/trade-get-trades-for-anonymous';
import { TradeGetTradesForAnonymous$Params } from '../fn/trade/trade-get-trades-for-anonymous';
import { tradeGetTradesForCustomer } from '../fn/trade/trade-get-trades-for-customer';
import { TradeGetTradesForCustomer$Params } from '../fn/trade/trade-get-trades-for-customer';
import { tradeGetTradesForParticipant } from '../fn/trade/trade-get-trades-for-participant';
import { TradeGetTradesForParticipant$Params } from '../fn/trade/trade-get-trades-for-participant';
import { tradeGetTradeShortInfoById } from '../fn/trade/trade-get-trade-short-info-by-id';
import { TradeGetTradeShortInfoById$Params } from '../fn/trade/trade-get-trade-short-info-by-id';
import { tradeImportLotItemsFromExcel } from '../fn/trade/trade-import-lot-items-from-excel';
import { TradeImportLotItemsFromExcel$Params } from '../fn/trade/trade-import-lot-items-from-excel';
import { tradeIsTradeApplicationFromPp } from '../fn/trade/trade-is-trade-application-from-pp';
import { TradeIsTradeApplicationFromPp$Params } from '../fn/trade/trade-is-trade-application-from-pp';
import { tradePrepareDataForTradeCreate } from '../fn/trade/trade-prepare-data-for-trade-create';
import { TradePrepareDataForTradeCreate$Params } from '../fn/trade/trade-prepare-data-for-trade-create';
import { tradePrepareOrganizationForTradeCreate } from '../fn/trade/trade-prepare-organization-for-trade-create';
import { TradePrepareOrganizationForTradeCreate$Params } from '../fn/trade/trade-prepare-organization-for-trade-create';
import { tradePublish } from '../fn/trade/trade-publish';
import { TradePublish$Params } from '../fn/trade/trade-publish';
import { tradeRejectApplicationDealByCustomer } from '../fn/trade/trade-reject-application-deal-by-customer';
import { TradeRejectApplicationDealByCustomer$Params } from '../fn/trade/trade-reject-application-deal-by-customer';
import { tradeRemoveDraft } from '../fn/trade/trade-remove-draft';
import { TradeRemoveDraft$Params } from '../fn/trade/trade-remove-draft';
import { tradeRevokeTrade } from '../fn/trade/trade-revoke-trade';
import { TradeRevokeTrade$Params } from '../fn/trade/trade-revoke-trade';
import { tradeSaveAsDraft } from '../fn/trade/trade-save-as-draft';
import { TradeSaveAsDraft$Params } from '../fn/trade/trade-save-as-draft';
import { tradeSetTradeNotTookPlace } from '../fn/trade/trade-set-trade-not-took-place';
import { TradeSetTradeNotTookPlace$Params } from '../fn/trade/trade-set-trade-not-took-place';
import { ApiTradeShortInfoDto } from '../models/api-trade-short-info-dto';
import { ApiTradeViewDto } from '../models/api-trade-view-dto';

@Injectable({ providedIn: 'root' })
export class TradeApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `tradeGetOldId()` */
  static readonly TradeGetOldIdPath = '/api/Trade/GetOldId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetOldId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetOldId$Response(params: TradeGetOldId$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeGetOldId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetOldId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetOldId(params: TradeGetOldId$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeGetOldId$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeSaveAsDraft()` */
  static readonly TradeSaveAsDraftPath = '/api/Trade/SaveAsDraft';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeSaveAsDraft()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeSaveAsDraft$Response(params?: TradeSaveAsDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return tradeSaveAsDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeSaveAsDraft$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeSaveAsDraft(params?: TradeSaveAsDraft$Params, context?: HttpContext): Observable<number> {
    return this.tradeSaveAsDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `tradePrepareDataForTradeCreate()` */
  static readonly TradePrepareDataForTradeCreatePath = '/api/Trade/PrepareDataForTradeCreate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePrepareDataForTradeCreate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePrepareDataForTradeCreate$Response(params?: TradePrepareDataForTradeCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradePrepareDataForTradeCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePrepareDataForTradeCreate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePrepareDataForTradeCreate(params?: TradePrepareDataForTradeCreate$Params, context?: HttpContext): Observable<Blob> {
    return this.tradePrepareDataForTradeCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradePrepareOrganizationForTradeCreate()` */
  static readonly TradePrepareOrganizationForTradeCreatePath = '/api/Trade/PrepareOrganizationForTradeCreate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePrepareOrganizationForTradeCreate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePrepareOrganizationForTradeCreate$Response(params: TradePrepareOrganizationForTradeCreate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradePrepareOrganizationForTradeCreate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePrepareOrganizationForTradeCreate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradePrepareOrganizationForTradeCreate(params: TradePrepareOrganizationForTradeCreate$Params, context?: HttpContext): Observable<Blob> {
    return this.tradePrepareOrganizationForTradeCreate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradePublish()` */
  static readonly TradePublishPath = '/api/Trade/Publish';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradePublish()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePublish$Response(params?: TradePublish$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return tradePublish(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradePublish$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradePublish(params?: TradePublish$Params, context?: HttpContext): Observable<number> {
    return this.tradePublish$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `tradeEditPublishedTrade()` */
  static readonly TradeEditPublishedTradePath = '/api/Trade/EditPublishedTrade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeEditPublishedTrade()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeEditPublishedTrade$Response(params?: TradeEditPublishedTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return tradeEditPublishedTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeEditPublishedTrade$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeEditPublishedTrade(params?: TradeEditPublishedTrade$Params, context?: HttpContext): Observable<number> {
    return this.tradeEditPublishedTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `tradeEditPublishedTradeByExternalSystem()` */
  static readonly TradeEditPublishedTradeByExternalSystemPath = '/api/Trade/EditPublishedTradeByExternalSystem';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeEditPublishedTradeByExternalSystem()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeEditPublishedTradeByExternalSystem$Response(params?: TradeEditPublishedTradeByExternalSystem$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return tradeEditPublishedTradeByExternalSystem(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeEditPublishedTradeByExternalSystem$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeEditPublishedTradeByExternalSystem(params?: TradeEditPublishedTradeByExternalSystem$Params, context?: HttpContext): Observable<number> {
    return this.tradeEditPublishedTradeByExternalSystem$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `tradeEditPublishedTradeDates()` */
  static readonly TradeEditPublishedTradeDatesPath = '/api/Trade/EditPublishedTradeDates';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeEditPublishedTradeDates()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeEditPublishedTradeDates$Response(params?: TradeEditPublishedTradeDates$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeEditPublishedTradeDates(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeEditPublishedTradeDates$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeEditPublishedTradeDates(params?: TradeEditPublishedTradeDates$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeEditPublishedTradeDates$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeGetFullTradeInfo()` */
  static readonly TradeGetFullTradeInfoPath = '/api/Trade/{id}/GetFullTradeInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetFullTradeInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetFullTradeInfo$Response(params: TradeGetFullTradeInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeViewDto>> {
    return tradeGetFullTradeInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetFullTradeInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetFullTradeInfo(params: TradeGetFullTradeInfo$Params, context?: HttpContext): Observable<ApiTradeViewDto> {
    return this.tradeGetFullTradeInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiTradeViewDto>): ApiTradeViewDto => r.body)
    );
  }

  /** Path part for operation `tradeGetTradeInfoByLotId()` */
  static readonly TradeGetTradeInfoByLotIdPath = '/api/Trade/{id}/GetTradeInfoByLotId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradeInfoByLotId()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeInfoByLotId$Response(params: TradeGetTradeInfoByLotId$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeViewDto>> {
    return tradeGetTradeInfoByLotId(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradeInfoByLotId$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeInfoByLotId(params: TradeGetTradeInfoByLotId$Params, context?: HttpContext): Observable<ApiTradeViewDto> {
    return this.tradeGetTradeInfoByLotId$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiTradeViewDto>): ApiTradeViewDto => r.body)
    );
  }

  /** Path part for operation `tradeGetTradeForEdit()` */
  static readonly TradeGetTradeForEditPath = '/api/Trade/{id}/GetTradeForEdit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradeForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeForEdit$Response(params: TradeGetTradeForEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeDto>> {
    return tradeGetTradeForEdit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradeForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeForEdit(params: TradeGetTradeForEdit$Params, context?: HttpContext): Observable<ApiTradeDto> {
    return this.tradeGetTradeForEdit$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiTradeDto>): ApiTradeDto => r.body)
    );
  }

  /** Path part for operation `tradeGetTradeCopy()` */
  static readonly TradeGetTradeCopyPath = '/api/Trade/Copy/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradeCopy()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeCopy$Response(params: TradeGetTradeCopy$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeDto>> {
    return tradeGetTradeCopy(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradeCopy$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeCopy(params: TradeGetTradeCopy$Params, context?: HttpContext): Observable<ApiTradeDto> {
    return this.tradeGetTradeCopy$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiTradeDto>): ApiTradeDto => r.body)
    );
  }

  /** Path part for operation `tradeGetTradeDatesForEdit()` */
  static readonly TradeGetTradeDatesForEditPath = '/api/Trade/{id}/GetTradeDatesForEdit';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradeDatesForEdit()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeDatesForEdit$Response(params: TradeGetTradeDatesForEdit$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeDatesDto>> {
    return tradeGetTradeDatesForEdit(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradeDatesForEdit$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeDatesForEdit(params: TradeGetTradeDatesForEdit$Params, context?: HttpContext): Observable<ApiTradeDatesDto> {
    return this.tradeGetTradeDatesForEdit$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiTradeDatesDto>): ApiTradeDatesDto => r.body)
    );
  }

  /** Path part for operation `tradeRemoveDraft()` */
  static readonly TradeRemoveDraftPath = '/api/Trade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeRemoveDraft()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeRemoveDraft$Response(params: TradeRemoveDraft$Params, context?: HttpContext): Observable<StrictHttpResponse<void>> {
    return tradeRemoveDraft(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeRemoveDraft$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeRemoveDraft(params: TradeRemoveDraft$Params, context?: HttpContext): Observable<void> {
    return this.tradeRemoveDraft$Response(params, context).pipe(
      map((r: StrictHttpResponse<void>): void => r.body)
    );
  }

  /** Path part for operation `tradeRevokeTrade()` */
  static readonly TradeRevokeTradePath = '/api/Trade/{id}/RevokeTrade';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeRevokeTrade()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeRevokeTrade$Response(params: TradeRevokeTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeRevokeTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeRevokeTrade$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeRevokeTrade(params: TradeRevokeTrade$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeRevokeTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeCompleteTrade()` */
  static readonly TradeCompleteTradePath = '/api/Trade/{tradeId}/complete';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeCompleteTrade()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeCompleteTrade$Response(params: TradeCompleteTrade$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeCompleteTrade(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeCompleteTrade$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeCompleteTrade(params: TradeCompleteTrade$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeCompleteTrade$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeGetTradesForParticipant()` */
  static readonly TradeGetTradesForParticipantPath = '/api/Trade/GetTradesForParticipant';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradesForParticipant()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetTradesForParticipant$Response(params?: TradeGetTradesForParticipant$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForParticipantAltDto>> {
    return tradeGetTradesForParticipant(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradesForParticipant$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetTradesForParticipant(params?: TradeGetTradesForParticipant$Params, context?: HttpContext): Observable<ApiApiSearchResultOfTradeInfoForParticipantAltDto> {
    return this.tradeGetTradesForParticipant$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfTradeInfoForParticipantAltDto>): ApiApiSearchResultOfTradeInfoForParticipantAltDto => r.body)
    );
  }

  /** Path part for operation `tradeGetTradesForAnonymous()` */
  static readonly TradeGetTradesForAnonymousPath = '/api/Trade/GetTradesForAnonymous';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradesForAnonymous()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetTradesForAnonymous$Response(params?: TradeGetTradesForAnonymous$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForAnonymousAltDto>> {
    return tradeGetTradesForAnonymous(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradesForAnonymous$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetTradesForAnonymous(params?: TradeGetTradesForAnonymous$Params, context?: HttpContext): Observable<ApiApiSearchResultOfTradeInfoForAnonymousAltDto> {
    return this.tradeGetTradesForAnonymous$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfTradeInfoForAnonymousAltDto>): ApiApiSearchResultOfTradeInfoForAnonymousAltDto => r.body)
    );
  }

  /** Path part for operation `tradeGetTradesForCustomer()` */
  static readonly TradeGetTradesForCustomerPath = '/api/Trade/GetTradesForCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradesForCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetTradesForCustomer$Response(params?: TradeGetTradesForCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForCustomerAltDto>> {
    return tradeGetTradesForCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradesForCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetTradesForCustomer(params?: TradeGetTradesForCustomer$Params, context?: HttpContext): Observable<ApiApiSearchResultOfTradeInfoForCustomerAltDto> {
    return this.tradeGetTradesForCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfTradeInfoForCustomerAltDto>): ApiApiSearchResultOfTradeInfoForCustomerAltDto => r.body)
    );
  }

  /** Path part for operation `tradeGetAllTradesForCustomer()` */
  static readonly TradeGetAllTradesForCustomerPath = '/api/Trade/GetAllTradesForCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetAllTradesForCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetAllTradesForCustomer$Response(params?: TradeGetAllTradesForCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForParticipantAltDto>> {
    return tradeGetAllTradesForCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetAllTradesForCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetAllTradesForCustomer(params?: TradeGetAllTradesForCustomer$Params, context?: HttpContext): Observable<ApiApiSearchResultOfTradeInfoForParticipantAltDto> {
    return this.tradeGetAllTradesForCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfTradeInfoForParticipantAltDto>): ApiApiSearchResultOfTradeInfoForParticipantAltDto => r.body)
    );
  }

  /** Path part for operation `tradeGetExpiringTradesInfoForCustomer()` */
  static readonly TradeGetExpiringTradesInfoForCustomerPath = '/api/Trade/GetExpiringTradesInfoForCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetExpiringTradesInfoForCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetExpiringTradesInfoForCustomer$Response(params?: TradeGetExpiringTradesInfoForCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiExpiringTradesInfoForCustomerAltDto>> {
    return tradeGetExpiringTradesInfoForCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetExpiringTradesInfoForCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetExpiringTradesInfoForCustomer(params?: TradeGetExpiringTradesInfoForCustomer$Params, context?: HttpContext): Observable<ApiExpiringTradesInfoForCustomerAltDto> {
    return this.tradeGetExpiringTradesInfoForCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiExpiringTradesInfoForCustomerAltDto>): ApiExpiringTradesInfoForCustomerAltDto => r.body)
    );
  }

  /** Path part for operation `tradeGetTradesForAdmin()` */
  static readonly TradeGetTradesForAdminPath = '/api/Trade/GetTradesForAdmin';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradesForAdmin()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetTradesForAdmin$Response(params?: TradeGetTradesForAdmin$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiApiSearchResultOfTradeInfoForCustomerAltDto>> {
    return tradeGetTradesForAdmin(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradesForAdmin$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetTradesForAdmin(params?: TradeGetTradesForAdmin$Params, context?: HttpContext): Observable<ApiApiSearchResultOfTradeInfoForCustomerAltDto> {
    return this.tradeGetTradesForAdmin$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiApiSearchResultOfTradeInfoForCustomerAltDto>): ApiApiSearchResultOfTradeInfoForCustomerAltDto => r.body)
    );
  }

  /** Path part for operation `tradeGetParticipantInfoArchive()` */
  static readonly TradeGetParticipantInfoArchivePath = '/api/Trade/GetParticipantInfoArchive';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetParticipantInfoArchive()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetParticipantInfoArchive$Response(params: TradeGetParticipantInfoArchive$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeGetParticipantInfoArchive(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetParticipantInfoArchive$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetParticipantInfoArchive(params: TradeGetParticipantInfoArchive$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeGetParticipantInfoArchive$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeExportToExcel()` */
  static readonly TradeExportToExcelPath = '/api/Trade/ExportToExcel';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeExportToExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeExportToExcel$Response(params?: TradeExportToExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeExportToExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeExportToExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeExportToExcel(params?: TradeExportToExcel$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeExportToExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeExportToExcelByFilter()` */
  static readonly TradeExportToExcelByFilterPath = '/api/Trade/ExportToExcelByFilter';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeExportToExcelByFilter()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeExportToExcelByFilter$Response(params?: TradeExportToExcelByFilter$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeExportToExcelByFilter(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeExportToExcelByFilter$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeExportToExcelByFilter(params?: TradeExportToExcelByFilter$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeExportToExcelByFilter$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeCreateApplicationsByCustomer()` */
  static readonly TradeCreateApplicationsByCustomerPath = '/api/Trade/{id}/CreateApplicationsByCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeCreateApplicationsByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeCreateApplicationsByCustomer$Response(params: TradeCreateApplicationsByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiBatchProcessingResultAltDto>> {
    return tradeCreateApplicationsByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeCreateApplicationsByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeCreateApplicationsByCustomer(params: TradeCreateApplicationsByCustomer$Params, context?: HttpContext): Observable<ApiBatchProcessingResultAltDto> {
    return this.tradeCreateApplicationsByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiBatchProcessingResultAltDto>): ApiBatchProcessingResultAltDto => r.body)
    );
  }

  /** Path part for operation `tradeFinishReviewApplication()` */
  static readonly TradeFinishReviewApplicationPath = '/api/Trade/FinishReviewApplication';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeFinishReviewApplication()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeFinishReviewApplication$Response(params?: TradeFinishReviewApplication$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeFinishReviewApplication(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeFinishReviewApplication$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeFinishReviewApplication(params?: TradeFinishReviewApplication$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeFinishReviewApplication$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeGetFinishReviewApplicationProtocolDefault()` */
  static readonly TradeGetFinishReviewApplicationProtocolDefaultPath = '/api/Trade/FinishReviewApplicationProtocolDefault';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetFinishReviewApplicationProtocolDefault()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetFinishReviewApplicationProtocolDefault$Response(params?: TradeGetFinishReviewApplicationProtocolDefault$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeGetFinishReviewApplicationProtocolDefault(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetFinishReviewApplicationProtocolDefault$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeGetFinishReviewApplicationProtocolDefault(params?: TradeGetFinishReviewApplicationProtocolDefault$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeGetFinishReviewApplicationProtocolDefault$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeFinishReviewApplicationWithoutDeal()` */
  static readonly TradeFinishReviewApplicationWithoutDealPath = '/api/Trade/FinishReviewApplicationWithoutDeal';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeFinishReviewApplicationWithoutDeal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeFinishReviewApplicationWithoutDeal$Response(params?: TradeFinishReviewApplicationWithoutDeal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeFinishReviewApplicationWithoutDeal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeFinishReviewApplicationWithoutDeal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeFinishReviewApplicationWithoutDeal(params?: TradeFinishReviewApplicationWithoutDeal$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeFinishReviewApplicationWithoutDeal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeRejectApplicationDealByCustomer()` */
  static readonly TradeRejectApplicationDealByCustomerPath = '/api/Trade/RejectApplicationDealByCustomer';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeRejectApplicationDealByCustomer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeRejectApplicationDealByCustomer$Response(params?: TradeRejectApplicationDealByCustomer$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return tradeRejectApplicationDealByCustomer(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeRejectApplicationDealByCustomer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeRejectApplicationDealByCustomer(params?: TradeRejectApplicationDealByCustomer$Params, context?: HttpContext): Observable<boolean> {
    return this.tradeRejectApplicationDealByCustomer$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `tradeGetTradeDocuments()` */
  static readonly TradeGetTradeDocumentsPath = '/api/Trade/{tradeId}/GetTradeDocuments';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradeDocuments()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeDocuments$Response(params: TradeGetTradeDocuments$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeGetTradeDocuments(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradeDocuments$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeDocuments(params: TradeGetTradeDocuments$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeGetTradeDocuments$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeGetCustomerContactInfo()` */
  static readonly TradeGetCustomerContactInfoPath = '/api/Trade/GetCustomerContactInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetCustomerContactInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetCustomerContactInfo$Response(params?: TradeGetCustomerContactInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiCustomerContactInfoAltDto>> {
    return tradeGetCustomerContactInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetCustomerContactInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetCustomerContactInfo(params?: TradeGetCustomerContactInfo$Params, context?: HttpContext): Observable<ApiCustomerContactInfoAltDto> {
    return this.tradeGetCustomerContactInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiCustomerContactInfoAltDto>): ApiCustomerContactInfoAltDto => r.body)
    );
  }

  /** Path part for operation `tradeGetCommissionInformationForLot()` */
  static readonly TradeGetCommissionInformationForLotPath = '/api/Trade/GetCommissionInformationForLot/{lotId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetCommissionInformationForLot()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetCommissionInformationForLot$Response(params: TradeGetCommissionInformationForLot$Params, context?: HttpContext): Observable<StrictHttpResponse<number>> {
    return tradeGetCommissionInformationForLot(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetCommissionInformationForLot$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetCommissionInformationForLot(params: TradeGetCommissionInformationForLot$Params, context?: HttpContext): Observable<number> {
    return this.tradeGetCommissionInformationForLot$Response(params, context).pipe(
      map((r: StrictHttpResponse<number>): number => r.body)
    );
  }

  /** Path part for operation `tradeCanTradeBeExportedToPp()` */
  static readonly TradeCanTradeBeExportedToPpPath = '/api/Trade/{tradeId}/CanTradeBeExportedToPP';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeCanTradeBeExportedToPp()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeCanTradeBeExportedToPp$Response(params: TradeCanTradeBeExportedToPp$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return tradeCanTradeBeExportedToPp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeCanTradeBeExportedToPp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeCanTradeBeExportedToPp(params: TradeCanTradeBeExportedToPp$Params, context?: HttpContext): Observable<boolean> {
    return this.tradeCanTradeBeExportedToPp$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `tradeIsTradeApplicationFromPp()` */
  static readonly TradeIsTradeApplicationFromPpPath = '/api/Trade/IsTradeApplicationFromPP';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeIsTradeApplicationFromPp()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeIsTradeApplicationFromPp$Response(params: TradeIsTradeApplicationFromPp$Params, context?: HttpContext): Observable<StrictHttpResponse<boolean>> {
    return tradeIsTradeApplicationFromPp(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeIsTradeApplicationFromPp$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeIsTradeApplicationFromPp(params: TradeIsTradeApplicationFromPp$Params, context?: HttpContext): Observable<boolean> {
    return this.tradeIsTradeApplicationFromPp$Response(params, context).pipe(
      map((r: StrictHttpResponse<boolean>): boolean => r.body)
    );
  }

  /** Path part for operation `tradeGetTradeExtCustomerInfoFileTemplate()` */
  static readonly TradeGetTradeExtCustomerInfoFileTemplatePath = '/api/Trade/TradeExtCustomerInfoFileTemplate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradeExtCustomerInfoFileTemplate()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeExtCustomerInfoFileTemplate$Response(params?: TradeGetTradeExtCustomerInfoFileTemplate$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeGetTradeExtCustomerInfoFileTemplate(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradeExtCustomerInfoFileTemplate$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeExtCustomerInfoFileTemplate(params?: TradeGetTradeExtCustomerInfoFileTemplate$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeGetTradeExtCustomerInfoFileTemplate$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeCheckAndGetTradeExtCustomerInfo()` */
  static readonly TradeCheckAndGetTradeExtCustomerInfoPath = '/api/Trade/{fileGuid}/CheckAndGetTradeExtCustomerInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeCheckAndGetTradeExtCustomerInfo()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeCheckAndGetTradeExtCustomerInfo$Response(params: TradeCheckAndGetTradeExtCustomerInfo$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeCheckAndGetTradeExtCustomerInfo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeCheckAndGetTradeExtCustomerInfo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeCheckAndGetTradeExtCustomerInfo(params: TradeCheckAndGetTradeExtCustomerInfo$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeCheckAndGetTradeExtCustomerInfo$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeImportLotItemsFromExcel()` */
  static readonly TradeImportLotItemsFromExcelPath = '/api/Trade/importlotitems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeImportLotItemsFromExcel()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeImportLotItemsFromExcel$Response(params?: TradeImportLotItemsFromExcel$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiImportExcelLotItemResponseAltDto>> {
    return tradeImportLotItemsFromExcel(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeImportLotItemsFromExcel$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeImportLotItemsFromExcel(params?: TradeImportLotItemsFromExcel$Params, context?: HttpContext): Observable<ApiImportExcelLotItemResponseAltDto> {
    return this.tradeImportLotItemsFromExcel$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiImportExcelLotItemResponseAltDto>): ApiImportExcelLotItemResponseAltDto => r.body)
    );
  }

  /** Path part for operation `tradeGetTradeShortInfoById()` */
  static readonly TradeGetTradeShortInfoByIdPath = '/api/Trade/{id}/GetTradeShortInfoById';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeGetTradeShortInfoById()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeShortInfoById$Response(params: TradeGetTradeShortInfoById$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiTradeShortInfoDto>> {
    return tradeGetTradeShortInfoById(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeGetTradeShortInfoById$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  tradeGetTradeShortInfoById(params: TradeGetTradeShortInfoById$Params, context?: HttpContext): Observable<ApiTradeShortInfoDto> {
    return this.tradeGetTradeShortInfoById$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiTradeShortInfoDto>): ApiTradeShortInfoDto => r.body)
    );
  }

  /** Path part for operation `tradeSetTradeNotTookPlace()` */
  static readonly TradeSetTradeNotTookPlacePath = '/api/Trade/setnottookplace';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeSetTradeNotTookPlace()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeSetTradeNotTookPlace$Response(params?: TradeSetTradeNotTookPlace$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeSetTradeNotTookPlace(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeSetTradeNotTookPlace$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeSetTradeNotTookPlace(params?: TradeSetTradeNotTookPlace$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeSetTradeNotTookPlace$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `tradeExtendTradeExternal()` */
  static readonly TradeExtendTradeExternalPath = '/api/Trade/extend';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `tradeExtendTradeExternal()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeExtendTradeExternal$Response(params?: TradeExtendTradeExternal$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return tradeExtendTradeExternal(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `tradeExtendTradeExternal$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  tradeExtendTradeExternal(params?: TradeExtendTradeExternal$Params, context?: HttpContext): Observable<Blob> {
    return this.tradeExtendTradeExternal$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
