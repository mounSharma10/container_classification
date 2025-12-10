import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})

export class CommonJson {
  jsonPath = '/assets/json_data/container.json';
  tablePath = '/assets/json_data/tableData.json';
  http = inject(HttpClient);

  getContainers() {
    return this.http.get<any>(this.jsonPath).pipe(map((response) => response.containers));
  }

  getTableHeader() {
    return this.http.get<any>(this.tablePath).pipe(map((response) => response.headers));
  }

  getTableData() {
    return this.http.get<any>(this.tablePath).pipe(map((response) => response.rows));
  }
}
