import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrganizationRegistrationAgreementFile } from '../models/organization-registration-agreement-file.interface';
import { organizationRegistrationAgreementFileAdapter } from '../adapters/models/organization-registration-agreement-file.adapter';
import { OrganizationRegistrationApiService } from '../../swagger/services/organization-registration-api.service';
import { OrganizationRegistrationGenerateDocumentsLinkParams, organizationRegistrationGenerateDocumentsLinkAdapter } from './params/organization-registration-generate-documents-link.params';
import { OrganizationRegistrationRegisterParams, organizationRegistrationRegisterAdapter } from './params/organization-registration-register.params';

@Injectable({ providedIn: 'root' })
export class OrganizationRegistrationRepository {
  private readonly _api = inject(OrganizationRegistrationApiService);

  organizationRegistrationGenerateDocumentsLink(params?: OrganizationRegistrationGenerateDocumentsLinkParams): Observable<OrganizationRegistrationAgreementFile[]> {
    return this._api.organizationRegistrationGenerateDocumentsLink(organizationRegistrationGenerateDocumentsLinkAdapter(params)).pipe(
      map((res) => (res?.data ?? []).map((item) => organizationRegistrationAgreementFileAdapter(item)))
    );
  }

  organizationRegistrationRegister(params?: OrganizationRegistrationRegisterParams): Observable<void> {
    return this._api.organizationRegistrationRegister(organizationRegistrationRegisterAdapter(params)).pipe(
      map((res) => void 0)
    );
  }

}
