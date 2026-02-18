import { Injectable, inject } from '@angular/core';
import { NotificationApiService } from '../../swagger/services/notification-api.service';
import { NotificationGetNewNotificationsCountParams, notificationGetNewNotificationsCountParamsAdapter } from './params/notification-get-new-notifications-count.params';
import { NotificationGetNotificationParams, notificationGetNotificationParamsAdapter } from './params/notification-get-notification.params';
import { NotificationGetNotificationsParams, notificationGetNotificationsParamsAdapter } from './params/notification-get-notifications.params';
import { NotificationMarkNotificationsAsReadParams, notificationMarkNotificationsAsReadParamsAdapter } from './params/notification-mark-notifications-as-read.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationRepository {
  private readonly _api = inject(NotificationApiService);

  notificationGetNewNotificationsCount(params?: NotificationGetNewNotificationsCountParams): Observable<Blob> {
    return this._api.notificationGetNewNotificationsCount(notificationGetNewNotificationsCountParamsAdapter.adapt(params));
  }

  notificationGetNotification(params: NotificationGetNotificationParams): Observable<Blob> {
    return this._api.notificationGetNotification(notificationGetNotificationParamsAdapter.adapt(params));
  }

  notificationGetNotifications(params?: NotificationGetNotificationsParams): Observable<Blob> {
    return this._api.notificationGetNotifications(notificationGetNotificationsParamsAdapter.adapt(params));
  }

  notificationMarkNotificationsAsRead(params?: NotificationMarkNotificationsAsReadParams): Observable<Blob> {
    return this._api.notificationMarkNotificationsAsRead(notificationMarkNotificationsAsReadParamsAdapter.adapt(params));
  }

}
