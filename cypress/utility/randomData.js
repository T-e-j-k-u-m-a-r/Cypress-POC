import casual from "casual-browserify"

/**
 * Serves the fn, mn & ln needed to create a new employee
 */

//Test data ->Random test data generator for fn, mn, ln & etc..   

class EmpDetails {

    constructor() {
        this.fn = casual._first_name();
        this.mn = casual._last_name();
        this.ln = casual._last_name();
        this.locale = casual._locale()

    }

    getfN() {
        return this.fn;
    }

    getmN() {
        return this.mn;
    }

    getlN() {
        return this.ln;
    }

    getLocale() {
        return this.locale;
    }

}



let empDetails = new EmpDetails()

// console.log(empDetails.getfN());
// console.log(empDetails.getmN());
// console.log(empDetails.getlN());

export default empDetails;
