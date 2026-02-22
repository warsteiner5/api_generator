import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NotificationFilterApiService } from '../../swagger/services/notification-filter-api.service';
import { NotificationFilterGetPossibleOrganizationsToUseInFilterParams, notificationFilterGetPossibleOrganizationsToUseInFilterAdapter } from './params/notification-filter-get-possible-organizations-to-use-in-filter.params';
import { Observable } from 'rxjs';
import { OrganizationShortInfo } from '../models/organization-short-info.interface';
import { organizationShortInfoAdapter } from '../adapters/models/organization-short-info.adapter';

@Injectable({ providedIn: 'root' })
export class NotificationFilterRepository {
  private readonly _api = inject(NotificationFilterApiService);

  notificationFilterGetPossibleOrganizationsToUseInFilter(params?: NotificationFilterGetPossibleOrganizationsToUseInFilterParams): Observable<OrganizationShortInfo[]> {
    return this._api.notificationFilterGetPossibleOrganizationsToUseInFilter(notificationFilterGetPossibleOrganizationsToUseInFilterAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => organizationShortInfoAdapter(item)))
    );
  }

}
