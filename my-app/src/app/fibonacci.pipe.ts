import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fibonacci'
})
export class FibonacciPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): Array<number> {
    var f=0;
    var s=1;
    var sum=f+s;
    var arr=[0,1]
    for(var i=0;i<5;i++)
    {
      
      var temp=f+s;
      f=s;
      s=temp;
      arr.push(s);
      
      
    }
    return arr;
  }

}
