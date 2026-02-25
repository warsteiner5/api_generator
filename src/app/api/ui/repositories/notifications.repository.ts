import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { MarketPaginationResult } from '../models/market-pagination-result.interface';
import { marketPaginationResultOfListOfNotificationInfoAltAdapter } from '../adapters/models/market-pagination-result-of-list-of-notification-info-alt.adapter';
import { Notification } from '../models/notification.interface';
import { notificationAdapter } from '../adapters/models/notification.adapter';
import { NotificationInfoAlt } from '../models/notification-info-alt.interface';
import { NotificationsApiService } from '../../swagger/services/notifications-api.service';
import { NotificationsGetNewNotificationsCountParams, notificationsGetNewNotificationsCountAdapter } from './params/notifications-get-new-notifications-count.params';
import { NotificationsGetNotificationParams, notificationsGetNotificationAdapter } from './params/notifications-get-notification.params';
import { NotificationsGetNotificationsCountParams, notificationsGetNotificationsCountAdapter } from './params/notifications-get-notifications-count.params';
import { NotificationsGetNotificationsParams, notificationsGetNotificationsAdapter } from './params/notifications-get-notifications.params';
import { NotificationsMarkAllNotificationsAsReadParams, notificationsMarkAllNotificationsAsReadAdapter } from './params/notifications-mark-all-notifications-as-read.params';
import { NotificationsSendApplicatonEndDateNotificationForMmoParams, notificationsSendApplicatonEndDateNotificationForMmoAdapter } from './params/notifications-send-applicaton-end-date-notification-for-mmo.params';
import { NotificationsSendDealSigningExpiredNotificationParams, notificationsSendDealSigningExpiredNotificationAdapter } from './params/notifications-send-deal-signing-expired-notification.params';
import { NotificationsSendDealWarningNotificationForMmoParams, notificationsSendDealWarningNotificationForMmoAdapter } from './params/notifications-send-deal-warning-notification-for-mmo.params';
import { NotificationsSendFirstRedirectFromZmoToMarketNotificationParams, notificationsSendFirstRedirectFromZmoToMarketNotificationAdapter } from './params/notifications-send-first-redirect-from-zmo-to-market-notification.params';
import { NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParams, notificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationAdapter } from './params/notifications-send-mmo-trade-from-deal-signing-to-deal-not-signed-notification.params';
import { NotificationsSendParticipantOfferTermsEndNotificationsParams, notificationsSendParticipantOfferTermsEndNotificationsAdapter } from './params/notifications-send-participant-offer-terms-end-notifications.params';
import { NotificationsSendPreliminaryOfferRequestsToSupplierParams, notificationsSendPreliminaryOfferRequestsToSupplierAdapter } from './params/notifications-send-preliminary-offer-requests-to-supplier.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationsRepository {
  private readonly _api = inject(NotificationsApiService);

  notificationsGetNewNotificationsCount(params?: NotificationsGetNewNotificationsCountParams): Observable<number> {
    return this._api.notificationsGetNewNotificationsCount(notificationsGetNewNotificationsCountAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  notificationsGetNotification(params: NotificationsGetNotificationParams): Observable<Notification> {
    return this._api.notificationsGetNotification(notificationsGetNotificationAdapter(params)).pipe(
      map((res) => notificationAdapter(res?.data))
    );
  }

  notificationsGetNotifications(params?: NotificationsGetNotificationsParams): Observable<MarketPaginationResult<NotificationInfoAlt[]>> {
    return this._api.notificationsGetNotifications(notificationsGetNotificationsAdapter(params)).pipe(
      map((res) => marketPaginationResultOfListOfNotificationInfoAltAdapter(res?.data))
    );
  }

  notificationsGetNotificationsCount(params?: NotificationsGetNotificationsCountParams): Observable<number> {
    return this._api.notificationsGetNotificationsCount(notificationsGetNotificationsCountAdapter(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  notificationsMarkAllNotificationsAsRead(params?: NotificationsMarkAllNotificationsAsReadParams): Observable<boolean> {
    return this._api.notificationsMarkAllNotificationsAsRead(notificationsMarkAllNotificationsAsReadAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendApplicatonEndDateNotificationForMmo(params: NotificationsSendApplicatonEndDateNotificationForMmoParams): Observable<boolean> {
    return this._api.notificationsSendApplicatonEndDateNotificationForMmo(notificationsSendApplicatonEndDateNotificationForMmoAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendDealSigningExpiredNotification(params?: NotificationsSendDealSigningExpiredNotificationParams): Observable<boolean> {
    return this._api.notificationsSendDealSigningExpiredNotification(notificationsSendDealSigningExpiredNotificationAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendDealWarningNotificationForMmo(params: NotificationsSendDealWarningNotificationForMmoParams): Observable<boolean> {
    return this._api.notificationsSendDealWarningNotificationForMmo(notificationsSendDealWarningNotificationForMmoAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendFirstRedirectFromZmoToMarketNotification(params?: NotificationsSendFirstRedirectFromZmoToMarketNotificationParams): Observable<Blob> {
    return this._api.notificationsSendFirstRedirectFromZmoToMarketNotification(notificationsSendFirstRedirectFromZmoToMarketNotificationAdapter(params));
  }

  notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification(params: NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParams): Observable<boolean> {
    return this._api.notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification(notificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationAdapter(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendParticipantOfferTermsEndNotifications(params?: NotificationsSendParticipantOfferTermsEndNotificationsParams): Observable<void> {
    return this._api.notificationsSendParticipantOfferTermsEndNotifications(notificationsSendParticipantOfferTermsEndNotificationsAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

  notificationsSendPreliminaryOfferRequestsToSupplier(params: NotificationsSendPreliminaryOfferRequestsToSupplierParams): Observable<void> {
    return this._api.notificationsSendPreliminaryOfferRequestsToSupplier(notificationsSendPreliminaryOfferRequestsToSupplierAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
