import { DeclarationApiService } from '../../swagger/services/declaration-api.service';
import { DeclarationGetParams, declarationGetParamsAdapter } from './params/declaration-get.params';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DeclarationRepository {
  private readonly _api = inject(DeclarationApiService);

  declarationGet(params?: DeclarationGetParams): Observable<Blob> {
    return this._api.declarationGet(declarationGetParamsAdapter.adapt(params));
  }

}
