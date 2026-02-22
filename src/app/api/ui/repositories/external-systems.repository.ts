import { ExternalSystemsApiService } from '../../swagger/services/external-systems-api.service';
import { ExternalSystemsGetExternalSystemById2Params, externalSystemsGetExternalSystemById2Adapter } from './params/external-systems-get-external-system-by-id-2.params';
import { ExternalSystemsGetExternalSystemByIdParams, externalSystemsGetExternalSystemByIdAdapter } from './params/external-systems-get-external-system-by-id.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ExternalSystemsRepository {
  private readonly _api = inject(ExternalSystemsApiService);

  externalSystemsGetExternalSystemById(params: ExternalSystemsGetExternalSystemByIdParams): Observable<Blob> {
    return this._api.externalSystemsGetExternalSystemById(externalSystemsGetExternalSystemByIdAdapter(params));
  }

  externalSystemsGetExternalSystemById2(params: ExternalSystemsGetExternalSystemById2Params): Observable<Blob> {
    return this._api.externalSystemsGetExternalSystemById2(externalSystemsGetExternalSystemById2Adapter(params));
  }

}
