import { Injectable, inject } from '@angular/core';
import { ManagerAgentApiService } from '../../swagger/services/manager-agent-api.service';
import { ManagerAgentAttachOrganisationParams, managerAgentAttachOrganisationAdapter } from './params/manager-agent-attach-organisation.params';
import { ManagerAgentCreateManagerEmployeeIfNotExistsParams, managerAgentCreateManagerEmployeeIfNotExistsAdapter } from './params/manager-agent-create-manager-employee-if-not-exists.params';
import { ManagerAgentDetachOrganisationParams, managerAgentDetachOrganisationAdapter } from './params/manager-agent-detach-organisation.params';
import { ManagerAgentGetManagerPublicIdParams, managerAgentGetManagerPublicIdAdapter } from './params/manager-agent-get-manager-public-id.params';
import { ManagerAgentGetOrganizationsForAutocompleteParams, managerAgentGetOrganizationsForAutocompleteAdapter } from './params/manager-agent-get-organizations-for-autocomplete.params';
import { ManagerAgentIsOrganizationAttachedParams, managerAgentIsOrganizationAttachedAdapter } from './params/manager-agent-is-organization-attached.params';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaginationResultOfOrganizationForAutocomplete } from '../models/pagination-result-of-organization-for-autocomplete.interface';
import { paginationResultOfOrganizationForAutocompleteAdapter } from '../adapters/models/pagination-result-of-organization-for-autocomplete.adapter';

@Injectable({ providedIn: 'root' })
export class ManagerAgentRepository {
  private readonly _api = inject(ManagerAgentApiService);

  managerAgentAttachOrganisation(params: ManagerAgentAttachOrganisationParams): Observable<Blob> {
    return this._api.managerAgentAttachOrganisation(managerAgentAttachOrganisationAdapter(params));
  }

  managerAgentCreateManagerEmployeeIfNotExists(params: ManagerAgentCreateManagerEmployeeIfNotExistsParams): Observable<Blob> {
    return this._api.managerAgentCreateManagerEmployeeIfNotExists(managerAgentCreateManagerEmployeeIfNotExistsAdapter(params));
  }

  managerAgentDetachOrganisation(params: ManagerAgentDetachOrganisationParams): Observable<Blob> {
    return this._api.managerAgentDetachOrganisation(managerAgentDetachOrganisationAdapter(params));
  }

  managerAgentGetManagerPublicId(params?: ManagerAgentGetManagerPublicIdParams): Observable<Blob> {
    return this._api.managerAgentGetManagerPublicId(managerAgentGetManagerPublicIdAdapter(params));
  }

  managerAgentGetOrganizationsForAutocomplete(params?: ManagerAgentGetOrganizationsForAutocompleteParams): Observable<PaginationResultOfOrganizationForAutocomplete> {
    return this._api.managerAgentGetOrganizationsForAutocomplete(managerAgentGetOrganizationsForAutocompleteAdapter(params)).pipe(
      map((res) => paginationResultOfOrganizationForAutocompleteAdapter(res?.data))
    );
  }

  managerAgentIsOrganizationAttached(params: ManagerAgentIsOrganizationAttachedParams): Observable<Blob> {
    return this._api.managerAgentIsOrganizationAttached(managerAgentIsOrganizationAttachedAdapter(params));
  }

}
