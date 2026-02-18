import { adaptOrganizationShortInfoToUI } from '../adapters/toUI/organization-short-info.adapter';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { NotificationFilterApiService } from '../../swagger/services/notification-filter-api.service';
import { NotificationFilterGetPossibleOrganizationsToUseInFilterParams, notificationFilterGetPossibleOrganizationsToUseInFilterParamsAdapter } from './params/notification-filter-get-possible-organizations-to-use-in-filter.params';
import { Observable } from 'rxjs';
import { OrganizationShortInfo } from '../models/organization-short-info.interface';

@Injectable({ providedIn: 'root' })
export class NotificationFilterRepository {
  private readonly _api = inject(NotificationFilterApiService);

  notificationFilterGetPossibleOrganizationsToUseInFilter(params?: NotificationFilterGetPossibleOrganizationsToUseInFilterParams): Observable<OrganizationShortInfo[]> {
    return this._api.notificationFilterGetPossibleOrganizationsToUseInFilter(notificationFilterGetPossibleOrganizationsToUseInFilterParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => adaptOrganizationShortInfoToUI(item)))
    );
  }

}
