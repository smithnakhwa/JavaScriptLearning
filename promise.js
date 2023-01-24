let notes_sharing_status=false;
const promise_to_share_notes=new Promise((resolve,reject)=>{
    if(notes_sharing_status){
        resolve("Sir.... Shared Notes and recording !");

    }
    else{
        reject("Opps... Sir did not share notes");

    }
});
promise_to_share_notes.then(on_success =>console.log(on_success)).catch(on_rejection => console.log(on_rejection)).finally(()=>console.log("Finally...... SomeHow You Will have Session notes"));