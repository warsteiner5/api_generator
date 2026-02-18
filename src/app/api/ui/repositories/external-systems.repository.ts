import { ExternalSystemsApiService } from '../../swagger/services/external-systems-api.service';
import { ExternalSystemsGetExternalSystemById2Params, externalSystemsGetExternalSystemById2ParamsAdapter } from './params/external-systems-get-external-system-by-id-2.params';
import { ExternalSystemsGetExternalSystemByIdParams, externalSystemsGetExternalSystemByIdParamsAdapter } from './params/external-systems-get-external-system-by-id.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExternalSystemsRepository {
  private readonly _api = inject(ExternalSystemsApiService);

  externalSystemsGetExternalSystemById(params: ExternalSystemsGetExternalSystemByIdParams): Observable<Blob> {
    return this._api.externalSystemsGetExternalSystemById(externalSystemsGetExternalSystemByIdParamsAdapter.adapt(params));
  }

  externalSystemsGetExternalSystemById2(params: ExternalSystemsGetExternalSystemById2Params): Observable<Blob> {
    return this._api.externalSystemsGetExternalSystemById2(externalSystemsGetExternalSystemById2ParamsAdapter.adapt(params));
  }

}
