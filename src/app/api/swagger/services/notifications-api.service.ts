/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { ApiMarketJsonResultOfBoolean } from '../models/api-market-json-result-of-boolean';
import { ApiMarketJsonResultOfInteger } from '../models/api-market-json-result-of-integer';
import { ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo } from '../models/api-market-json-result-of-market-pagination-result-of-list-of-notification-info';
import { ApiMarketJsonResultOfNotificationDto } from '../models/api-market-json-result-of-notification-dto';
import { ApiMarketJsonVoidResultAltDto } from '../models/api-market-json-void-result';
import { notificationsGetNewNotificationsCount } from '../fn/notifications/notifications-get-new-notifications-count';
import { NotificationsGetNewNotificationsCount$Params } from '../fn/notifications/notifications-get-new-notifications-count';
import { notificationsGetNotification } from '../fn/notifications/notifications-get-notification';
import { NotificationsGetNotification$Params } from '../fn/notifications/notifications-get-notification';
import { notificationsGetNotifications } from '../fn/notifications/notifications-get-notifications';
import { NotificationsGetNotifications$Params } from '../fn/notifications/notifications-get-notifications';
import { notificationsGetNotificationsCount } from '../fn/notifications/notifications-get-notifications-count';
import { NotificationsGetNotificationsCount$Params } from '../fn/notifications/notifications-get-notifications-count';
import { notificationsMarkAllNotificationsAsRead } from '../fn/notifications/notifications-mark-all-notifications-as-read';
import { NotificationsMarkAllNotificationsAsRead$Params } from '../fn/notifications/notifications-mark-all-notifications-as-read';
import { notificationsSendApplicatonEndDateNotificationForMmo } from '../fn/notifications/notifications-send-applicaton-end-date-notification-for-mmo';
import { NotificationsSendApplicatonEndDateNotificationForMmo$Params } from '../fn/notifications/notifications-send-applicaton-end-date-notification-for-mmo';
import { notificationsSendDealSigningExpiredNotification } from '../fn/notifications/notifications-send-deal-signing-expired-notification';
import { NotificationsSendDealSigningExpiredNotification$Params } from '../fn/notifications/notifications-send-deal-signing-expired-notification';
import { notificationsSendDealWarningNotificationForMmo } from '../fn/notifications/notifications-send-deal-warning-notification-for-mmo';
import { NotificationsSendDealWarningNotificationForMmo$Params } from '../fn/notifications/notifications-send-deal-warning-notification-for-mmo';
import { notificationsSendFirstRedirectFromZmoToMarketNotification } from '../fn/notifications/notifications-send-first-redirect-from-zmo-to-market-notification';
import { NotificationsSendFirstRedirectFromZmoToMarketNotification$Params } from '../fn/notifications/notifications-send-first-redirect-from-zmo-to-market-notification';
import { notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification } from '../fn/notifications/notifications-send-mmo-trade-from-deal-signing-to-deal-not-signed-notification';
import { NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Params } from '../fn/notifications/notifications-send-mmo-trade-from-deal-signing-to-deal-not-signed-notification';
import { notificationsSendParticipantOfferTermsEndNotifications } from '../fn/notifications/notifications-send-participant-offer-terms-end-notifications';
import { NotificationsSendParticipantOfferTermsEndNotifications$Params } from '../fn/notifications/notifications-send-participant-offer-terms-end-notifications';
import { notificationsSendPreliminaryOfferRequestsToSupplier } from '../fn/notifications/notifications-send-preliminary-offer-requests-to-supplier';
import { NotificationsSendPreliminaryOfferRequestsToSupplier$Params } from '../fn/notifications/notifications-send-preliminary-offer-requests-to-supplier';

@Injectable({ providedIn: 'root' })
export class NotificationsApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `notificationsGetNotifications()` */
  static readonly NotificationsGetNotificationsPath = '/bla-bla-vla/notifications/my';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetNotifications()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationsGetNotifications$Response(params?: NotificationsGetNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo>> {
    return notificationsGetNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsGetNotifications$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationsGetNotifications(params?: NotificationsGetNotifications$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo> {
    return this.notificationsGetNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo>): ApiMarketJsonResultOfMarketPaginationResultOfListOfNotificationInfo => r.body)
    );
  }

  /** Path part for operation `notificationsGetNotification()` */
  static readonly NotificationsGetNotificationPath = '/bla-bla-vla/notifications/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetNotification$Response(params: NotificationsGetNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfNotificationDto>> {
    return notificationsGetNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsGetNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetNotification(params: NotificationsGetNotification$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfNotificationDto> {
    return this.notificationsGetNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfNotificationDto>): ApiMarketJsonResultOfNotificationDto => r.body)
    );
  }

  /** Path part for operation `notificationsGetNewNotificationsCount()` */
  static readonly NotificationsGetNewNotificationsCountPath = '/bla-bla-vla/notifications/unread/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetNewNotificationsCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetNewNotificationsCount$Response(params?: NotificationsGetNewNotificationsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return notificationsGetNewNotificationsCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsGetNewNotificationsCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetNewNotificationsCount(params?: NotificationsGetNewNotificationsCount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.notificationsGetNewNotificationsCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `notificationsGetNotificationsCount()` */
  static readonly NotificationsGetNotificationsCountPath = '/bla-bla-vla/notifications/count';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsGetNotificationsCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetNotificationsCount$Response(params?: NotificationsGetNotificationsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfInteger>> {
    return notificationsGetNotificationsCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsGetNotificationsCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsGetNotificationsCount(params?: NotificationsGetNotificationsCount$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfInteger> {
    return this.notificationsGetNotificationsCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfInteger>): ApiMarketJsonResultOfInteger => r.body)
    );
  }

  /** Path part for operation `notificationsMarkAllNotificationsAsRead()` */
  static readonly NotificationsMarkAllNotificationsAsReadPath = '/bla-bla-vla/notifications/unread/mark';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsMarkAllNotificationsAsRead()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsMarkAllNotificationsAsRead$Response(params?: NotificationsMarkAllNotificationsAsRead$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return notificationsMarkAllNotificationsAsRead(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsMarkAllNotificationsAsRead$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsMarkAllNotificationsAsRead(params?: NotificationsMarkAllNotificationsAsRead$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.notificationsMarkAllNotificationsAsRead$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `notificationsSendParticipantOfferTermsEndNotifications()` */
  static readonly NotificationsSendParticipantOfferTermsEndNotificationsPath = '/bla-bla-vla/notifications/sendOfferEndTermsNotifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsSendParticipantOfferTermsEndNotifications()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendParticipantOfferTermsEndNotifications$Response(params?: NotificationsSendParticipantOfferTermsEndNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return notificationsSendParticipantOfferTermsEndNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsSendParticipantOfferTermsEndNotifications$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendParticipantOfferTermsEndNotifications(params?: NotificationsSendParticipantOfferTermsEndNotifications$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.notificationsSendParticipantOfferTermsEndNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

  /** Path part for operation `notificationsSendApplicatonEndDateNotificationForMmo()` */
  static readonly NotificationsSendApplicatonEndDateNotificationForMmoPath = '/bla-bla-vla/notifications/{tradeId}/send-application-end-date-mmo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsSendApplicatonEndDateNotificationForMmo()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendApplicatonEndDateNotificationForMmo$Response(params: NotificationsSendApplicatonEndDateNotificationForMmo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return notificationsSendApplicatonEndDateNotificationForMmo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsSendApplicatonEndDateNotificationForMmo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendApplicatonEndDateNotificationForMmo(params: NotificationsSendApplicatonEndDateNotificationForMmo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.notificationsSendApplicatonEndDateNotificationForMmo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `notificationsSendDealWarningNotificationForMmo()` */
  static readonly NotificationsSendDealWarningNotificationForMmoPath = '/bla-bla-vla/notifications/{tradeId}/{dealId}/send-deal-warn-mmo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsSendDealWarningNotificationForMmo()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendDealWarningNotificationForMmo$Response(params: NotificationsSendDealWarningNotificationForMmo$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return notificationsSendDealWarningNotificationForMmo(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsSendDealWarningNotificationForMmo$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendDealWarningNotificationForMmo(params: NotificationsSendDealWarningNotificationForMmo$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.notificationsSendDealWarningNotificationForMmo$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `notificationsSendDealSigningExpiredNotification()` */
  static readonly NotificationsSendDealSigningExpiredNotificationPath = '/bla-bla-vla/notifications/send-deal-signing-expired';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsSendDealSigningExpiredNotification()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationsSendDealSigningExpiredNotification$Response(params?: NotificationsSendDealSigningExpiredNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return notificationsSendDealSigningExpiredNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsSendDealSigningExpiredNotification$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationsSendDealSigningExpiredNotification(params?: NotificationsSendDealSigningExpiredNotification$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.notificationsSendDealSigningExpiredNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification()` */
  static readonly NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationPath = '/bla-bla-vla/notifications/{tradeId}/{dealId}/SendMmoTradeFromDealSigningToDealNotSigned';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Response(params: NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonResultOfBoolean>> {
    return notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification(params: NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Params, context?: HttpContext): Observable<ApiMarketJsonResultOfBoolean> {
    return this.notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonResultOfBoolean>): ApiMarketJsonResultOfBoolean => r.body)
    );
  }

  /** Path part for operation `notificationsSendFirstRedirectFromZmoToMarketNotification()` */
  static readonly NotificationsSendFirstRedirectFromZmoToMarketNotificationPath = '/bla-bla-vla/notifications/send-first-redirect-from-zmo-to-market';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsSendFirstRedirectFromZmoToMarketNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendFirstRedirectFromZmoToMarketNotification$Response(params?: NotificationsSendFirstRedirectFromZmoToMarketNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return notificationsSendFirstRedirectFromZmoToMarketNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsSendFirstRedirectFromZmoToMarketNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendFirstRedirectFromZmoToMarketNotification(params?: NotificationsSendFirstRedirectFromZmoToMarketNotification$Params, context?: HttpContext): Observable<Blob> {
    return this.notificationsSendFirstRedirectFromZmoToMarketNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `notificationsSendPreliminaryOfferRequestsToSupplier()` */
  static readonly NotificationsSendPreliminaryOfferRequestsToSupplierPath = '/bla-bla-vla/notifications/send-preliminary-offer-requests';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationsSendPreliminaryOfferRequestsToSupplier()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendPreliminaryOfferRequestsToSupplier$Response(params: NotificationsSendPreliminaryOfferRequestsToSupplier$Params, context?: HttpContext): Observable<StrictHttpResponse<ApiMarketJsonVoidResultAltDto>> {
    return notificationsSendPreliminaryOfferRequestsToSupplier(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationsSendPreliminaryOfferRequestsToSupplier$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationsSendPreliminaryOfferRequestsToSupplier(params: NotificationsSendPreliminaryOfferRequestsToSupplier$Params, context?: HttpContext): Observable<ApiMarketJsonVoidResultAltDto> {
    return this.notificationsSendPreliminaryOfferRequestsToSupplier$Response(params, context).pipe(
      map((r: StrictHttpResponse<ApiMarketJsonVoidResultAltDto>): ApiMarketJsonVoidResultAltDto => r.body)
    );
  }

}
