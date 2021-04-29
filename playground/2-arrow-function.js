

const square = (x) => {
    return x*x
}

//if the function has only one statement there is no need for return

const square1 = (x) => x * x


const event = {
    name: 'Birthday Party',
    printGuestList: function () {
        console.log('Guest list for' + this)
    }
}

event.printGuestList()

const eventWithArrowFunction = {
    name: 'Birthday Party',
    printGuestList: () => {
        console.log('Guest list for' + this.name) // this wont work since arrow functions do not bind their own this value, so it is better to use
        //a standard function
    }
}


const eventAnotherWay = {
    name: 'Birthday Party',
    guestList: ['Andrew','Jen','Mike'],
    printGuestList() {
        const that = this// binds this to the eventAnotherWay
        console.log('Guest list for' + this.name)
        this.guestList.forEach(function (guest) {
            console.log(guest + 'is attending' + this.name)// wont work, because this function will bind its this

        })
        //a standard function
    }
}

const eventAnotherWay = {
    name: 'Birthday Party',
    guestList: ['Andrew','Jen','Mike'],
    printGuestList() {
        const that = this// binds this to the eventAnotherWay
        console.log('Guest list for' + this.name)
        this.guestList.forEach((guest) => {
            console.log(guest + 'is attending' + this.name)//this will work because arrow functions do not bind their own this
        })
    }
}
