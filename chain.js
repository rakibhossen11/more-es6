const person = [{id:1, name:'Abul', salary: 40000}];
// console.log(user[0].salary);

const data = {
    count: 500,
    data:[
        {id: 1, Nama: 'babul', job: 'leader'},
        {id: 2, Nama: 'dabul', job: 'leader'}
    ]
}
const firstJob = (data.data[0].job);
// console.log(firstJob);

const user = {
    id: 5001,
    name: 'Thomas alba edison',
    address:{
        street: {
            first: '35/A kochukhat',
            second: 'third floor',
            third: 'right side'
        },
        psotOffiice: 'cantonment',
        city: 'dhaka'
    }
}

const userFloor = user.address.stret?.second;
console.log(userFloor);