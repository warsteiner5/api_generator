import { FileInfoForSign } from '../models/file-info-for-sign.interface';
import { fileInfoForSignAdapter } from '../adapters/models/file-info-for-sign.adapter';
import { FileSignApiService } from '../../swagger/services/file-sign-api.service';
import { FileSignGetInfoForSignParams, fileSignGetInfoForSignAdapter } from './params/file-sign-get-info-for-sign.params';
import { FileSignGetInfosForSignParams, fileSignGetInfosForSignAdapter } from './params/file-sign-get-infos-for-sign.params';
import { FileSignSignFileParams, fileSignSignFileAdapter } from './params/file-sign-sign-file.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FileSignRepository {
  private readonly _api = inject(FileSignApiService);

  fileSignGetInfoForSign(params?: FileSignGetInfoForSignParams): Observable<FileInfoForSign> {
    return this._api.fileSignGetInfoForSign(fileSignGetInfoForSignAdapter(params)).pipe(
      map((res) => fileInfoForSignAdapter(res))
    );
  }

  fileSignGetInfosForSign(params?: FileSignGetInfosForSignParams): Observable<FileInfoForSign> {
    return this._api.fileSignGetInfosForSign(fileSignGetInfosForSignAdapter(params)).pipe(
      map((res) => fileInfoForSignAdapter(res))
    );
  }

  fileSignSignFile(params?: FileSignSignFileParams): Observable<void> {
    return this._api.fileSignSignFile(fileSignSignFileAdapter(params));
  }

}
