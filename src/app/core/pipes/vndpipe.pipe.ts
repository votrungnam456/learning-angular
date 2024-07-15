import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'vnd',
  // nếu không có standalone thì không thể import vào module có standalone = true, và khi import vào ngModule thì phải import vào declarations
  // có standalone thì standalone mới thêm đc
  // nếu có standalone thì phải import vào module chứ không phải declarations
  standalone: true,
})
export class VndPipe implements PipeTransform {
  transform(value: string | number): string {
    if (!value) return '';
    let tempValue = parseFloat(
      value.toString().replace(/,/g, '').replace(/\s/g, '')
    );

    return tempValue.toLocaleString('vi-VN', {
      style: 'currency',
      currency: 'VND',
    });
    // if (value.length <= maxLength) return value;
    // return value.substring(0, maxLength) + '...';
  }
}
