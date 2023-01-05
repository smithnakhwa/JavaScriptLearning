class BankDetials{
    

    constructor(bankName,location,account_no,ifscCode,interest_rate){
    
            this.bankName=bankName;;
            this.location=location;
            this.ifscCode=ifscCode;
            this.interest_rate=interest_rate;
            this.account_no=account_no;
          
    
    
    }
    }
    console.log(`=========Bank Name,Account No.,InterestRate by using Map ==========`);
    let kotak=new BankDetials("Kotak_Bank","Thane",7647455465364547,"KOTAKB0UNTY25","5%");
    let sbi=new BankDetials( "SBI_Bank","Pune",5463425384727384,"SBIN0014473","8%");
    let icic=new BankDetials( "icic_bank","Navi Mumbai",78364528394019473,"ICIC0001028","5.5%");
    let axis=new BankDetials("Axis_Bank","Mumbai",6473893540025364,"UTIB0004701","6.5%");
    let hdfc=new BankDetials("HDFC_bank","Andheri",7643457787654387,"HDFC0004981","4.5%");
    let panjab_bank=new BankDetials("panjab_Bank","Dehli",6574563579845211,"PAN0007571","9.5%");
    var mapOfBank=new Map();
    mapOfBank.set(7647455465364547,kotak),
    mapOfBank.set(5463425384727384,sbi);
    mapOfBank.set(78364528394019473,icic);
    mapOfBank.set(6473893540025364,axis);
    mapOfBank.set(7643457787654387,hdfc);
    mapOfBank.set(6574563579845211,panjab_bank);
    let keysOfBank=mapOfBank.keys();
    for (const keys of keysOfBank) {
        
        console.log(`the bank name is: ${mapOfBank.get(keys).bankName},  accountno: ${mapOfBank.get(keys).account_no}, interestRate: ${mapOfBank.get(keys).interest_rate}`);
    }
