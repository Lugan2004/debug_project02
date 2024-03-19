// scripts.js

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line 
function doTheThing(id){
    const book = document.querySelector(id);
    const status = book.querySelector(".status")
    status.style.color = STATUS_MAP[status.textContent].color;

    if (!STATUS_MAP[status.textContent].canReserve) {
        const reserveBtn = book.querySelector(".reserve");
        reserveBtn.setAttribute("disabled", "disabled");
    }

    if (!STATUS_MAP[status.textContent].canCheckout) {
        const checkoutBtn = book.querySelector(".checkout");
        checkoutBtn.setAttribute("disabled", "disabled");
    }

    if (!STATUS_MAP[status.textContent].canCheckIn) {
        const checkInBtn = book.querySelector(".checkin");
        checkInBtn.setAttribute("disabled", "disabled");
    }
    
    console.log(status.textContent);
    console.log(STATUS_MAP[status.textContent]);
}

doTheThing('#book1')
doTheThing('#book2');
doTheThing('#book3');