import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'sort'
})
export class SortPipe implements PipeTransform  {

    transform(value: [], type: string){
       if(value && value.length >= 1){
        return value.sort((a, b) => (a[type] > b[type]) ? 1 : -1);
       }
       return value;
    }

}