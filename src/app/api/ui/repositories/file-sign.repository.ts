import { adaptFileInfoForSignToUI } from '../adapters/toUI/file-info-for-sign.adapter';
import { FileInfoForSign } from '../models/file-info-for-sign.interface';
import { FileSignApiService } from '../../swagger/services/file-sign-api.service';
import { FileSignGetInfoForSignParams, fileSignGetInfoForSignParamsAdapter } from './params/file-sign-get-info-for-sign.params';
import { FileSignGetInfosForSignParams, fileSignGetInfosForSignParamsAdapter } from './params/file-sign-get-infos-for-sign.params';
import { FileSignSignFileParams, fileSignSignFileParamsAdapter } from './params/file-sign-sign-file.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileSignRepository {
  private readonly _api = inject(FileSignApiService);

  fileSignGetInfoForSign(params?: FileSignGetInfoForSignParams): Observable<FileInfoForSign> {
    return this._api.fileSignGetInfoForSign(fileSignGetInfoForSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFileInfoForSignToUI(res))
    );
  }

  fileSignGetInfosForSign(params?: FileSignGetInfosForSignParams): Observable<FileInfoForSign> {
    return this._api.fileSignGetInfosForSign(fileSignGetInfosForSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptFileInfoForSignToUI(res))
    );
  }

  fileSignSignFile(params?: FileSignSignFileParams): Observable<void> {
    return this._api.fileSignSignFile(fileSignSignFileParamsAdapter.adapt(params));
  }

}
