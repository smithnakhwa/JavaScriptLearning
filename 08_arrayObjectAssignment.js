console.log(`==================The Bank Details are====================`);
class BankDetials{
    

constructor(bankName,location,account_no,ifscCode,interest_rate){

        this.bankName=bankName;;
        this.location=location;
        this.ifscCode=ifscCode;
        this.interest_rate=interest_rate;
        this.account_no=account_no;
      


}
}
console.log(`=========Bank Name and Location ==========`);
let kotak=new BankDetials("Kotak_Bank","Thane",7647455465364547,"KOTAKB0UNTY25","5%");
let sbi=new BankDetials( "SBI_Bank","Pune",5463425384727384,"SBIN0014473","8%");
let icic=new BankDetials( "icic_bank","Navi Mumbai",78364528394019473,"ICIC0001028","5.5%");
let axis=new BankDetials("Axis_Bank","Mumbai",6473893540025364,"UTIB0004701","6.5%");
let hdfc=new BankDetials("HDFC_bank","Andheri",7643457787654387,"HDFC0004981","4.5%");
let panjab_bank=new BankDetials("panjab_Bank","Dehli",6574563579845211,"PAN0007571","9.5%");
const arrayObj=[kotak,sbi,icic,axis,hdfc,panjab_bank];
for (const iterator of arrayObj) {
        console.log(`Bank Name: ${iterator.bankName}, Location: ${iterator.location}`);
        
}
console.log(`========Finding the Values of Kotak Bank Using For Of Loop =========`);
let res={};
for (const iterator of arrayObj) {
        if(iterator.bankName=="Kotak_Bank")
        {
            res=iterator;
        }
        
}
console.log(res);
console.log(`=============Printing The Object Found Using For Loop===============`);
let arraykeys=[...Object.keys(res)];
let arrayvalues=[...Object.values(res)];
for (let index = 0; index < arraykeys.length; index++) {
        const keys = arraykeys[index];
        const values= arrayvalues[index];
        console.log(`${keys} : ${values}`);
        
}