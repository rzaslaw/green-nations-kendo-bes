import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { GridDataResult } from '@progress/kendo-angular-grid';
import { toODataString } from '@progress/kendo-data-query';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Everlive  } from 'angular-everlive';
import { State, FilterDescriptor } from '@progress/kendo-data-query';

import 'rxjs/add/operator/map';

export abstract class AppGridDataService extends BehaviorSubject<GridDataResult> {
    private BASE_URL: string = 'https://api.everlive.com/v1/ejdvn0vq0t4dw3y4/';

    constructor(private http: Http, private tableName: string, private el: Everlive) {
        super(null);
    }

    private filterToString({ filter }: { filter?: string }): string {
        return filter ? `&$filter=${filter}` : '';
    }

    public fetchData(state: State): Observable<GridDataResult> {
        console.log("fetch data fired");
        var data = this.el.data('Countries');
        var query = new Everlive.Query();
 

        if (state.filter == undefined) {
            query.skip(state.skip).take(state.take);
            console.log(query);
        } else {
            let x =<FilterDescriptor> state.filter.filters[0];
            query.where().gte(x.field,x.value).done().order(state.sort).take(state.take).skip(state.skip);
            console.log(query);
        }

        if(state.sort){
            state.sort.forEach((sortElement)=>{
                if(sortElement.dir === "asc"){
                    query.order(sortElement.field);
                }
                else if(sortElement.dir ==="desc") {
                    query.orderDesc(sortElement.field);
                }
            })
        }
        return Observable.fromPromise(data.get(query)).map(returnedData => <GridDataResult>{data:returnedData.result, total:returnedData.count});
    }
}

@Injectable()
export class CountriesService extends AppGridDataService {
    constructor(http: Http, el: Everlive ) { super(http, "Countries", el); }
}

