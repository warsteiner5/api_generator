import { Injectable, inject } from '@angular/core';
import { IntegrationApiService } from '../../swagger/services/integration-api.service';
import { IntegrationCreateEmployeeParams, integrationCreateEmployeeAdapter } from './params/integration-create-employee.params';
import { IntegrationCreateOrganizationParams, integrationCreateOrganizationAdapter } from './params/integration-create-organization.params';
import { IntegrationImportMinpromTorgParams, integrationImportMinpromTorgAdapter } from './params/integration-import-minprom-torg.params';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class IntegrationRepository {
  private readonly _api = inject(IntegrationApiService);

  integrationCreateEmployee(params?: IntegrationCreateEmployeeParams): Observable<Blob> {
    return this._api.integrationCreateEmployee(integrationCreateEmployeeAdapter(params));
  }

  integrationCreateOrganization(params?: IntegrationCreateOrganizationParams): Observable<Blob> {
    return this._api.integrationCreateOrganization(integrationCreateOrganizationAdapter(params));
  }

  integrationImportMinpromTorg(params?: IntegrationImportMinpromTorgParams): Observable<Blob> {
    return this._api.integrationImportMinpromTorg(integrationImportMinpromTorgAdapter(params));
  }

}
