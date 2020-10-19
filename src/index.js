// 大整数相加，a,b都是string
export default function add(a, b) {
    const i = a.length - 1;
    const j = b.length - 1;
    //进位
    let carry = 0;
    //结果
    let ret = '';

    while (i >= 0 || b >= 0) {
        let x = 0;
        let y = 0;
        let sum = 0;
        if (i >= 0) {
            //将字符转换为数字
            x = a[i] - '0';
            i--;
        }
        if (j >= 0) {
            y = b[i] - '0';
            i--;
        }

        sum = x + y + carry;

        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        } else {
            carry = 0
        }
        ret = ret + sum;
    }
    if(carry){
        ret=carry+ret;
    }
    return ret;
}
//add ('999','1')
//add ('1','999')
//add ('123','321')
//add('9999999999999999999999999999999999999','2')