import { Injectable, inject } from '@angular/core';
import { NotificationApiService } from '../../swagger/services/notification-api.service';
import { NotificationGetNewNotificationsCountParams, notificationGetNewNotificationsCountAdapter } from './params/notification-get-new-notifications-count.params';
import { NotificationGetNotificationParams, notificationGetNotificationAdapter } from './params/notification-get-notification.params';
import { NotificationGetNotificationsParams, notificationGetNotificationsAdapter } from './params/notification-get-notifications.params';
import { NotificationMarkNotificationsAsReadParams, notificationMarkNotificationsAsReadAdapter } from './params/notification-mark-notifications-as-read.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NotificationRepository {
  private readonly _api = inject(NotificationApiService);

  notificationGetNewNotificationsCount(params?: NotificationGetNewNotificationsCountParams): Observable<Blob> {
    return this._api.notificationGetNewNotificationsCount(notificationGetNewNotificationsCountAdapter(params));
  }

  notificationGetNotification(params: NotificationGetNotificationParams): Observable<Blob> {
    return this._api.notificationGetNotification(notificationGetNotificationAdapter(params));
  }

  notificationGetNotifications(params?: NotificationGetNotificationsParams): Observable<Blob> {
    return this._api.notificationGetNotifications(notificationGetNotificationsAdapter(params));
  }

  notificationMarkNotificationsAsRead(params?: NotificationMarkNotificationsAsReadParams): Observable<Blob> {
    return this._api.notificationMarkNotificationsAsRead(notificationMarkNotificationsAsReadAdapter(params));
  }

}
