setTimeout(() => {
    console.log('Two seconds are up');
},2000);

const names = ['Andrew',"Daniel","Diana"];

const shortNames = names.filter((name) => {
    return name.length <= 4;
});

const geocode = (address,callback) => {
    const data = {
        latitude: 0,
        longitude: 0
    };
    return data; //ignoring the callback, there is nothing async here
};

//using callback is for the async functions

const geocodeAsync = (address,callback) => {
    setTimeout(() => {
        const data = {
            latitude: 0,
            longitude: 0
        };
        callback(data);
    },1000);
};

geocodeAsync('Philadelphia',(data) => {
        console.log(data)
})

//
// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!

const add = (num1,num2,callback) => {
    setTimeout(() => {
        const sum = num1 + num2;
        callback(sum);
    },1000);
};
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})


