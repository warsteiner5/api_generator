import { adaptPaginationResultOfOrganizationForAutocompleteToUI } from '../adapters/toUI/pagination-result-of-organization-for-autocomplete.adapter';
import { Injectable, inject } from '@angular/core';
import { ManagerAgentApiService } from '../../swagger/services/manager-agent-api.service';
import { ManagerAgentAttachOrganisationParams, managerAgentAttachOrganisationParamsAdapter } from './params/manager-agent-attach-organisation.params';
import { ManagerAgentCreateManagerEmployeeIfNotExistsParams, managerAgentCreateManagerEmployeeIfNotExistsParamsAdapter } from './params/manager-agent-create-manager-employee-if-not-exists.params';
import { ManagerAgentDetachOrganisationParams, managerAgentDetachOrganisationParamsAdapter } from './params/manager-agent-detach-organisation.params';
import { ManagerAgentGetManagerPublicIdParams, managerAgentGetManagerPublicIdParamsAdapter } from './params/manager-agent-get-manager-public-id.params';
import { ManagerAgentGetOrganizationsForAutocompleteParams, managerAgentGetOrganizationsForAutocompleteParamsAdapter } from './params/manager-agent-get-organizations-for-autocomplete.params';
import { ManagerAgentIsOrganizationAttachedParams, managerAgentIsOrganizationAttachedParamsAdapter } from './params/manager-agent-is-organization-attached.params';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { PaginationResultOfOrganizationForAutocomplete } from '../models/pagination-result-of-organization-for-autocomplete.interface';

@Injectable({ providedIn: 'root' })
export class ManagerAgentRepository {
  private readonly _api = inject(ManagerAgentApiService);

  managerAgentAttachOrganisation(params: ManagerAgentAttachOrganisationParams): Observable<Blob> {
    return this._api.managerAgentAttachOrganisation(managerAgentAttachOrganisationParamsAdapter.adapt(params));
  }

  managerAgentCreateManagerEmployeeIfNotExists(params: ManagerAgentCreateManagerEmployeeIfNotExistsParams): Observable<Blob> {
    return this._api.managerAgentCreateManagerEmployeeIfNotExists(managerAgentCreateManagerEmployeeIfNotExistsParamsAdapter.adapt(params));
  }

  managerAgentDetachOrganisation(params: ManagerAgentDetachOrganisationParams): Observable<Blob> {
    return this._api.managerAgentDetachOrganisation(managerAgentDetachOrganisationParamsAdapter.adapt(params));
  }

  managerAgentGetManagerPublicId(params?: ManagerAgentGetManagerPublicIdParams): Observable<Blob> {
    return this._api.managerAgentGetManagerPublicId(managerAgentGetManagerPublicIdParamsAdapter.adapt(params));
  }

  managerAgentGetOrganizationsForAutocomplete(params?: ManagerAgentGetOrganizationsForAutocompleteParams): Observable<PaginationResultOfOrganizationForAutocomplete> {
    return this._api.managerAgentGetOrganizationsForAutocomplete(managerAgentGetOrganizationsForAutocompleteParamsAdapter.adapt(params)).pipe(
      map((res) => adaptPaginationResultOfOrganizationForAutocompleteToUI(res?.data))
    );
  }

  managerAgentIsOrganizationAttached(params: ManagerAgentIsOrganizationAttachedParams): Observable<Blob> {
    return this._api.managerAgentIsOrganizationAttached(managerAgentIsOrganizationAttachedParamsAdapter.adapt(params));
  }

}
