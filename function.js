function checkNumber()
{
    var a=document.getElementById('firstNum').value;
    var b=document.getElementById('secondNum').value;
    if (!a&&!b)
    {
        document.getElementById('error').innerHTML="Cả hai ô đều chưa được nhập";
        return 0;
    }
    if (!a)
    {
        document.getElementById('error').innerHTML="Ô 'Số thứ nhất' chưa được nhập";
        return 0;
    }
    if (!b)
    {
        document.getElementById('error').innerHTML="Ô 'Số thứ hai' chưa được nhập";
        return 0;
    }
    
    if (isNaN(a))
    {
        document.getElementById('error').innerHTML="Giá trị nhập ở ô 'Số thứ nhất' không phải là số";
        return 0;
    }
    if (isNaN(b))
    {
        document.getElementById('error').innerHTML="Giá trị nhập ở ô 'Số thứ hai' không phải là số";
        return 0;
    }
    if (b==0 && document.getElementById('/').checked)
    {
        document.getElementById('error').innerHTML="Không thể chia cho 0";
        return 0;
    }
    return 1;
}

function showresult(){
    var check=checkNumber();
    if (check==0)
    {
        //xóa giá trị ô kết quả nếu trước đó tính thành công
        document.getElementById('result').value=undefined;
        return 0;
    }
    var n1=parseFloat(document.getElementById('firstNum').value);
    var n2=parseFloat(document.getElementById('secondNum').value);
    var r=0;
    var choose=0;
    if (document.getElementById('+').checked)
    {
        choose=1;
    }
    else if (document.getElementById('-').checked)
    {
        choose=2;
    }
    else if (document.getElementById('*').checked)
    {
        choose=3;
    }
    else if (document.getElementById('/').checked)
    {
        choose=4;
    }
    if (choose==0)
    {
        document.getElementById('error').innerHTML="Chưa chọn phép toán";
        return 0;
    }
 
    if (choose==1)
    {
        r=n1+n2;
    }
    else if (choose==2)
    {
        r=n1-n2;
    }
    else if (choose==3)
    {
        r=n1*n2;
    }
    else
    {
        r=n1/n2;
    }
    //Làm tròn đến 2 chữ số thập phân
    r=Math.round(r*100)/100;
    document.getElementById('result').value=r;
    //Xoá dòng lỗi nếu trước đó có lỗi
    document.getElementById('error').innerHTML='';
    return 1;
}
