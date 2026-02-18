import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { OrganizationAgreementApiService } from '../../swagger/services/organization-agreement-api.service';
import { OrganizationAgreementSetCatalogAgreementParams, organizationAgreementSetCatalogAgreementParamsAdapter } from './params/organization-agreement-set-catalog-agreement.params';

@Injectable({ providedIn: 'root' })
export class OrganizationAgreementRepository {
  private readonly _api = inject(OrganizationAgreementApiService);

  organizationAgreementSetCatalogAgreement(params?: OrganizationAgreementSetCatalogAgreementParams): Observable<void> {
    return this._api.organizationAgreementSetCatalogAgreement(organizationAgreementSetCatalogAgreementParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

}
