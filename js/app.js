// const election = 
// ['solim', 'kolim', 'rohim', 'molim', 'halum', 'halum', 'halum', 'ikri'];
// const election2 = {
//     solim : 1 ,
//     kolim: 1,
//     romihm: 1,
//     molim: 1,
//     halum: 3,
//     ikri: 1
// }

let db = {};
const addToDb = item => {
    const storedTracker =  localStorage.getItem('habijabi');
    if(storedTracker){
        db = JSON.parse(storedTracker);
    }
    // db.alom = 1;
    // db ['alom'] = 1;
    // db[item] = 1;
    if(item in db){
        db[item] = db[item] + 1;
    }
    else{
        db[item] = 1;
    }
    localStorage.setItem('habijabi', JSON.stringify(db));
}
const removeItem = item => {
    const storedTracker = localStorage.getItem('habijabi');
    if(storedTracker){
        const storedObject = JSON.parse(storedTracker);
        delete storedObject [item];
        localStorage.setItem('habijabi', JSON.stringify(storedObject))
    }
}
