function uniqueArray(array){
    const newArray=[];
    for (let index1 = 0; index1 < array.length; index1++) {
           const element1=array[index1];
           let count=0;
        for (let index2 = 0; index2 < array.length; index2++) {
            const element2 = array[index2];
            if(element1==element2)
            {
                count++;
            }
        }
        if(count==1)
        {
            newArray.push(element1);
        }
        
    }
    return newArray;

}
console.log(uniqueArray(([1,2,3]).concat([2,3,4],[3,4,5])));