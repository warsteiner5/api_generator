import { adaptEmployeeDataToSignToUI } from '../adapters/toUI/employee-data-to-sign.adapter';
import { adaptEmployeeItemToUI } from '../adapters/toUI/employee-item.adapter';
import { adaptEmployeeToUI } from '../adapters/toUI/employee.adapter';
import { Employee } from '../models/employee.interface';
import { EmployeeDataToSign } from '../models/employee-data-to-sign.interface';
import { EmployeeItem } from '../models/employee-item.interface';
import { EmployeesApiService } from '../../swagger/services/employees-api.service';
import { EmployeesBlockParams, employeesBlockParamsAdapter } from './params/employees-block.params';
import { EmployeesGetEmployeeDataToSignParams, employeesGetEmployeeDataToSignParamsAdapter } from './params/employees-get-employee-data-to-sign.params';
import { EmployeesGetParams, employeesGetParamsAdapter } from './params/employees-get.params';
import { EmployeesSearchParams, employeesSearchParamsAdapter } from './params/employees-search.params';
import { EmployeesSelfParams, employeesSelfParamsAdapter } from './params/employees-self.params';
import { EmployeesUnblockParams, employeesUnblockParamsAdapter } from './params/employees-unblock.params';
import { EmployeesUpdateParams, employeesUpdateParamsAdapter } from './params/employees-update.params';
import { EmployeesUpdateSignedEmployeeParams, employeesUpdateSignedEmployeeParamsAdapter } from './params/employees-update-signed-employee.params';
import { Injectable, inject } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class EmployeesRepository {
  private readonly _api = inject(EmployeesApiService);

  employeesBlock(params: EmployeesBlockParams): Observable<void> {
    return this._api.employeesBlock(employeesBlockParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  employeesGet(params: EmployeesGetParams): Observable<Employee> {
    return this._api.employeesGet(employeesGetParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEmployeeToUI(res?.data))
    );
  }

  employeesGetEmployeeDataToSign(params: EmployeesGetEmployeeDataToSignParams): Observable<EmployeeDataToSign> {
    return this._api.employeesGetEmployeeDataToSign(employeesGetEmployeeDataToSignParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEmployeeDataToSignToUI(res?.data))
    );
  }

  employeesSearch(params?: EmployeesSearchParams): Observable<EmployeeItem[]> {
    return this._api.employeesSearch(employeesSearchParamsAdapter.adapt(params)).pipe(
      map((res) => (res?.data?.items ?? []).map((item) => adaptEmployeeItemToUI(item)))
    );
  }

  employeesSelf(params?: EmployeesSelfParams): Observable<Employee> {
    return this._api.employeesSelf(employeesSelfParamsAdapter.adapt(params)).pipe(
      map((res) => adaptEmployeeToUI(res?.data))
    );
  }

  employeesUnblock(params: EmployeesUnblockParams): Observable<void> {
    return this._api.employeesUnblock(employeesUnblockParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  employeesUpdate(params: EmployeesUpdateParams): Observable<void> {
    return this._api.employeesUpdate(employeesUpdateParamsAdapter.adapt(params)).pipe(
      map((res) => void 0)
    );
  }

  employeesUpdateSignedEmployee(params: EmployeesUpdateSignedEmployeeParams): Observable<boolean> {
    return this._api.employeesUpdateSignedEmployee(employeesUpdateSignedEmployeeParamsAdapter.adapt(params)).pipe(
      map((res) => res?.data ?? false)
    );
  }

}
