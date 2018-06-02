function Category(_id,_name){
    let id=_id;
    this.name=_name;
    this.getId=function(){
        return id;
    }
}
let indexMassiv=[];
let k=1;
let yoxlama1=true;
let yoxlama2=true;
let yoxlama3=true;
let yoxlama4=true;
let _ceki;
let _qiymet;
let _etsayi=1;
let _terevezsayi=1;
let _sirniyyat=1;
let abc;
let ab;
function yoxla(){
    nameM();
    cekiM();
    qiymetM();
    tarixM();
    if(yoxlama1 && yoxlama2 && yoxlama3 && yoxlama4 && mallar.value!=0){
        let Name;
        if(mallar.value==1){
            Name="Et";
        }
        else if(mallar.value==2){
            Name="Terevez";
        }
        else if(mallar.value==3){
            Name="Sirniyyat";
        }
        let newCategory=new Category(k,Name);
        indexMassiv.push(newCategory);
        k++;
        ad.value="";
        ceki.value="";
        qiymet.value="";
        mallar.value="0";
        tarix.value="";
    }
    stokSay();
    etSay();
    terevezSay();
    sirniyyatSay();
    
}

function nameM(){
    if(ad.value.length<3 || ad.value.length>50){
        ad.style.background="red";
        yoxlama1=false;
    }
    else{
        ad.style.background="white";
        yoxlama1=true;
    }
}
function cekiM(){
    _ceki=parseFloat(ceki.value);
    if(_ceki<=0 || ceki.value==""){
        ceki.style.background="red";
        yoxlama2=false;
    }
    else{
        ceki.style.background="white";
        yoxlama2=true;
    }
}
function qiymetM(){
    _qiymet=parseFloat(qiymet.value);
    if(_qiymet<=0 || qiymet.value==""){
        qiymet.style.background="red";
        yoxlama3=false;
    }
    else{
        qiymet.style.background="white";
        yoxlama3=true;
    }
}
function tarixM(){
    let _tarixString=tarix.value.split("/");
    let _tarixInt=[];
    for(let i=0;i<_tarixString.length;i++){
        _tarixInt[i]=parseInt(_tarixString[i]);
    }
    yoxlama4=false;
    tarix.style.background="red";
    if(_tarixInt.length==3){
        if(_tarixInt[0]>=1 && _tarixInt[0]<=31){
            if(_tarixInt[1]>=1 && _tarixInt[1]<=12){
                if(_tarixInt[2]>=2018){
                    yoxlama4=true;
                    tarix.style.background="white";
                }
            }
        }
    }

    
}
function stokSay(){
    abc=mallsayi.innerText.split("-");
    abc[1]=indexMassiv["length"]; 
    mallsayi.innerText=abc[0]+"-"+abc[1];
}
function etSay(){
    for(let i=0;i<indexMassiv.length;i++){
        if(indexMassiv[i]["name"]=="Et"){
            
            ab=etsayi.innerText.split("-");
            ab[1]=_etsayi; 
            etsayi.innerText=ab[0]+"-"+ab[1];
            _etsayi++;
        }
    }
    _etsayi=1;
}
function terevezSay(){
    for(let k in indexMassiv){
        if(indexMassiv[k]["name"]=="Terevez"){
            a=terevezsayi.innerText.split("-");
            a[1]=_terevezsayi;
            terevezsayi.innerText=a[0]+"-"+a[1];
            _terevezsayi++;
        }
    }
    _terevezsayi=1;
}
function sirniyyatSay(){
    for(let k in indexMassiv){
        if(indexMassiv[k]["name"]=="Sirniyyat"){
            abcd=sirniyyatsayi.innerText.split("-");
            abcd[1]=_sirniyyat;
            sirniyyatsayi.innerText=abcd[0]+"-"+abcd[1];
            _sirniyyat++;
        }
    }
    _sirniyyat=1;
}