/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';

import { notificationGetNewNotificationsCount } from '../fn/notification/notification-get-new-notifications-count';
import { NotificationGetNewNotificationsCount$Params } from '../fn/notification/notification-get-new-notifications-count';
import { notificationGetNotification } from '../fn/notification/notification-get-notification';
import { NotificationGetNotification$Params } from '../fn/notification/notification-get-notification';
import { notificationGetNotifications } from '../fn/notification/notification-get-notifications';
import { NotificationGetNotifications$Params } from '../fn/notification/notification-get-notifications';
import { notificationMarkNotificationsAsRead } from '../fn/notification/notification-mark-notifications-as-read';
import { NotificationMarkNotificationsAsRead$Params } from '../fn/notification/notification-mark-notifications-as-read';

@Injectable({ providedIn: 'root' })
export class NotificationApiService extends BaseService {
  constructor(config: ApiConfiguration, http: HttpClient) {
    super(config, http);
  }

  /** Path part for operation `notificationGetNewNotificationsCount()` */
  static readonly NotificationGetNewNotificationsCountPath = '/api/Notification/GetNewNotificationsCount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationGetNewNotificationsCount()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationGetNewNotificationsCount$Response(params?: NotificationGetNewNotificationsCount$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return notificationGetNewNotificationsCount(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationGetNewNotificationsCount$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationGetNewNotificationsCount(params?: NotificationGetNewNotificationsCount$Params, context?: HttpContext): Observable<Blob> {
    return this.notificationGetNewNotificationsCount$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `notificationGetNotifications()` */
  static readonly NotificationGetNotificationsPath = '/api/Notification/GetNotifications';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationGetNotifications()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationGetNotifications$Response(params?: NotificationGetNotifications$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return notificationGetNotifications(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationGetNotifications$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationGetNotifications(params?: NotificationGetNotifications$Params, context?: HttpContext): Observable<Blob> {
    return this.notificationGetNotifications$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `notificationGetNotification()` */
  static readonly NotificationGetNotificationPath = '/api/Notification/GetNotification/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationGetNotification()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationGetNotification$Response(params: NotificationGetNotification$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return notificationGetNotification(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationGetNotification$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  notificationGetNotification(params: NotificationGetNotification$Params, context?: HttpContext): Observable<Blob> {
    return this.notificationGetNotification$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

  /** Path part for operation `notificationMarkNotificationsAsRead()` */
  static readonly NotificationMarkNotificationsAsReadPath = '/api/Notification/MarkNotificationsAsRead';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `notificationMarkNotificationsAsRead()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationMarkNotificationsAsRead$Response(params?: NotificationMarkNotificationsAsRead$Params, context?: HttpContext): Observable<StrictHttpResponse<Blob>> {
    return notificationMarkNotificationsAsRead(this.http, this.rootUrl, params, context);
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `notificationMarkNotificationsAsRead$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  notificationMarkNotificationsAsRead(params?: NotificationMarkNotificationsAsRead$Params, context?: HttpContext): Observable<Blob> {
    return this.notificationMarkNotificationsAsRead$Response(params, context).pipe(
      map((r: StrictHttpResponse<Blob>): Blob => r.body)
    );
  }

}
