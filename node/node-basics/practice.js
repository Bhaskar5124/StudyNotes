import fs from 'fs/promises';

// async function folderCreation(){
//     await fs.mkdir('Practice');
// }
// folderCreation();



// async function creation(){
//     const data = 'Helloworld';
//     await fs.writeFile('./Practice/practice.txt', data , 'utf8');
// }

// creation();



// async function copying(){
//     await fs.copyFile('./Practice/practice.txt', './test.txt');
// }

// copying();




// async function checkingStats(){
//     const result = await fs.stat('./Practice/practice.txt');
//     return result;
// }
// let res = await checkingStats();
// console.log(res);




// async function updation(){
//     await fs.appendFile('./Practice/practice.txt', '\n I am updating the file using appendFile method', 'utf8');
// }

// updation();




// async function reading(){
//     try{
//         const data = await fs.readFile('./Practice/practice.txt', 'utf8');
//         return data;
//         // console.log(data);
//     }catch(e){
//         console.log('Error', e.message);
//     }
// }

// // reading();
// let readingResult = await reading();
// console.log(readingResult);




// async function deletion(){
//     await fs.unlink('./test.txt')
// }

// deletion();




async function folderDeletion(){
    try{
        // await fs.rm('./Practice');
        await fs.rm('./Practice', {recursive: true, force: true});
    }catch(e){
        console.log('Message:', e.message);
    }
    
    
}

folderDeletion();



