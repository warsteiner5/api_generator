import { ApiSearchResultOfApplicationInfoAlt } from '../models/api-search-result-of-application-info-alt.interface';
import { apiSearchResultOfApplicationInfoAltAdapter } from '../adapters/models/api-search-result-of-application-info-alt.adapter';
import { Application } from '../models/application.interface';
import { applicationAdapter } from '../adapters/models/application.adapter';
import { ApplicationApiService } from '../../swagger/services/application-api.service';
import { ApplicationGetApplicationInfoParams, applicationGetApplicationInfoAdapter } from './params/application-get-application-info.params';
import { ApplicationGetApplicationsByTradeIdParams, applicationGetApplicationsByTradeIdAdapter } from './params/application-get-applications-by-trade-id.params';
import { ApplicationGetCreateApplicationInfoParams, applicationGetCreateApplicationInfoAdapter } from './params/application-get-create-application-info.params';
import { ApplicationGetOrganizationAccountsParams, applicationGetOrganizationAccountsAdapter } from './params/application-get-organization-accounts.params';
import { ApplicationParticipantApplicationsParams, applicationParticipantApplicationsAdapter } from './params/application-participant-applications.params';
import { ApplicationPublishParams, applicationPublishAdapter } from './params/application-publish.params';
import { ApplicationRemoveDraftParams, applicationRemoveDraftAdapter } from './params/application-remove-draft.params';
import { ApplicationRevokeParams, applicationRevokeAdapter } from './params/application-revoke.params';
import { ApplicationSaveUpdateApplicationParams, applicationSaveUpdateApplicationAdapter } from './params/application-save-update-application.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ApplicationRepository {
  private readonly _api = inject(ApplicationApiService);

  applicationGetApplicationInfo(params: ApplicationGetApplicationInfoParams): Observable<Application> {
    return this._api.applicationGetApplicationInfo(applicationGetApplicationInfoAdapter(params)).pipe(
      map((res) => applicationAdapter(res))
    );
  }

  applicationGetApplicationsByTradeId(params: ApplicationGetApplicationsByTradeIdParams): Observable<Application[]> {
    return this._api.applicationGetApplicationsByTradeId(applicationGetApplicationsByTradeIdAdapter(params)).pipe(
      map((res) => (res ?? []).map((item) => applicationAdapter(item)))
    );
  }

  applicationGetCreateApplicationInfo(params: ApplicationGetCreateApplicationInfoParams): Observable<Application> {
    return this._api.applicationGetCreateApplicationInfo(applicationGetCreateApplicationInfoAdapter(params)).pipe(
      map((res) => applicationAdapter(res))
    );
  }

  applicationGetOrganizationAccounts(params?: ApplicationGetOrganizationAccountsParams): Observable<Blob> {
    return this._api.applicationGetOrganizationAccounts(applicationGetOrganizationAccountsAdapter(params));
  }

  applicationParticipantApplications(params?: ApplicationParticipantApplicationsParams): Observable<ApiSearchResultOfApplicationInfoAlt> {
    return this._api.applicationParticipantApplications(applicationParticipantApplicationsAdapter(params)).pipe(
      map((res) => apiSearchResultOfApplicationInfoAltAdapter(res))
    );
  }

  applicationPublish(params?: ApplicationPublishParams): Observable<number> {
    return this._api.applicationPublish(applicationPublishAdapter(params));
  }

  applicationRemoveDraft(params: ApplicationRemoveDraftParams): Observable<boolean> {
    return this._api.applicationRemoveDraft(applicationRemoveDraftAdapter(params));
  }

  applicationRevoke(params: ApplicationRevokeParams): Observable<boolean> {
    return this._api.applicationRevoke(applicationRevokeAdapter(params));
  }

  applicationSaveUpdateApplication(params?: ApplicationSaveUpdateApplicationParams): Observable<number> {
    return this._api.applicationSaveUpdateApplication(applicationSaveUpdateApplicationAdapter(params));
  }

}
