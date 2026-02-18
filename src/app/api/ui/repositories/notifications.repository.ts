import { adaptNotificationInfoAltToUI } from '../adapters/toUI/notification-info-alt.adapter';
import { adaptNotificationToUI } from '../adapters/toUI/notification.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Notification } from '../models/notification.interface';
import { NotificationInfoAlt } from '../models/notification-info-alt.interface';
import { NotificationsApiService } from '../../swagger/services/notifications-api.service';
import { NotificationsGetNewNotificationsCountParams, notificationsGetNewNotificationsCountParamsAdapter } from './params/notifications-get-new-notifications-count.params';
import { NotificationsGetNotificationParams, notificationsGetNotificationParamsAdapter } from './params/notifications-get-notification.params';
import { NotificationsGetNotificationsCountParams, notificationsGetNotificationsCountParamsAdapter } from './params/notifications-get-notifications-count.params';
import { NotificationsGetNotificationsParams, notificationsGetNotificationsParamsAdapter } from './params/notifications-get-notifications.params';
import { NotificationsMarkAllNotificationsAsReadParams, notificationsMarkAllNotificationsAsReadParamsAdapter } from './params/notifications-mark-all-notifications-as-read.params';
import { NotificationsSendApplicatonEndDateNotificationForMmoParams, notificationsSendApplicatonEndDateNotificationForMmoParamsAdapter } from './params/notifications-send-applicaton-end-date-notification-for-mmo.params';
import { NotificationsSendDealSigningExpiredNotificationParams, notificationsSendDealSigningExpiredNotificationParamsAdapter } from './params/notifications-send-deal-signing-expired-notification.params';
import { NotificationsSendDealWarningNotificationForMmoParams, notificationsSendDealWarningNotificationForMmoParamsAdapter } from './params/notifications-send-deal-warning-notification-for-mmo.params';
import { NotificationsSendFirstRedirectFromZmoToMarketNotificationParams, notificationsSendFirstRedirectFromZmoToMarketNotificationParamsAdapter } from './params/notifications-send-first-redirect-from-zmo-to-market-notification.params';
import { NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParams, notificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParamsAdapter } from './params/notifications-send-mmo-trade-from-deal-signing-to-deal-not-signed-notification.params';
import { NotificationsSendParticipantOfferTermsEndNotificationsParams, notificationsSendParticipantOfferTermsEndNotificationsParamsAdapter } from './params/notifications-send-participant-offer-terms-end-notifications.params';
import { NotificationsSendPreliminaryOfferRequestsToSupplierParams, notificationsSendPreliminaryOfferRequestsToSupplierParamsAdapter } from './params/notifications-send-preliminary-offer-requests-to-supplier.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationsRepository {
  private readonly _api = inject(NotificationsApiService);

  notificationsGetNewNotificationsCount(params?: NotificationsGetNewNotificationsCountParams): Observable<number> {
    return this._api.notificationsGetNewNotificationsCount(notificationsGetNewNotificationsCountParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  notificationsGetNotification(params: NotificationsGetNotificationParams): Observable<Notification> {
    return this._api.notificationsGetNotification(notificationsGetNotificationParamsAdapter.adapt(params)).pipe(
      map((res) => adaptNotificationToUI(res?.data))
    );
  }

  notificationsGetNotifications(params?: NotificationsGetNotificationsParams): Observable<NotificationInfoAlt[]> {
    return this._api.notificationsGetNotifications(notificationsGetNotificationsParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptNotificationInfoAltToUI(item)))
    );
  }

  notificationsGetNotificationsCount(params?: NotificationsGetNotificationsCountParams): Observable<number> {
    return this._api.notificationsGetNotificationsCount(notificationsGetNotificationsCountParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? 0)
    );
  }

  notificationsMarkAllNotificationsAsRead(params?: NotificationsMarkAllNotificationsAsReadParams): Observable<boolean> {
    return this._api.notificationsMarkAllNotificationsAsRead(notificationsMarkAllNotificationsAsReadParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendApplicatonEndDateNotificationForMmo(params: NotificationsSendApplicatonEndDateNotificationForMmoParams): Observable<boolean> {
    return this._api.notificationsSendApplicatonEndDateNotificationForMmo(notificationsSendApplicatonEndDateNotificationForMmoParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendDealSigningExpiredNotification(params?: NotificationsSendDealSigningExpiredNotificationParams): Observable<boolean> {
    return this._api.notificationsSendDealSigningExpiredNotification(notificationsSendDealSigningExpiredNotificationParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendDealWarningNotificationForMmo(params: NotificationsSendDealWarningNotificationForMmoParams): Observable<boolean> {
    return this._api.notificationsSendDealWarningNotificationForMmo(notificationsSendDealWarningNotificationForMmoParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendFirstRedirectFromZmoToMarketNotification(params?: NotificationsSendFirstRedirectFromZmoToMarketNotificationParams): Observable<Blob> {
    return this._api.notificationsSendFirstRedirectFromZmoToMarketNotification(notificationsSendFirstRedirectFromZmoToMarketNotificationParamsAdapter.adapt(params));
  }

  notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification(params: NotificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParams): Observable<boolean> {
    return this._api.notificationsSendMmoTradeFromDealSigningToDealNotSignedNotification(notificationsSendMmoTradeFromDealSigningToDealNotSignedNotificationParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

  notificationsSendParticipantOfferTermsEndNotifications(params?: NotificationsSendParticipantOfferTermsEndNotificationsParams): Observable<void> {
    return this._api.notificationsSendParticipantOfferTermsEndNotifications(notificationsSendParticipantOfferTermsEndNotificationsParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  notificationsSendPreliminaryOfferRequestsToSupplier(params: NotificationsSendPreliminaryOfferRequestsToSupplierParams): Observable<void> {
    return this._api.notificationsSendPreliminaryOfferRequestsToSupplier(notificationsSendPreliminaryOfferRequestsToSupplierParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
