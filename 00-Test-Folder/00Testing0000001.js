

const hoursWorked = 8
export function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let fullMonths = Math.floor(numDays/22)

    let remainingDays = numDays % 22
    

    let normalRateDays = ratePerHour * hoursWorked * remainingDays
    let discountRateDays = ratePerHour * hoursWorked * (fullMonths * 22)
    let discountTotal =  discountRateDays * discount;
    let grandDiscount = (normalRateDays + discountRateDays) - discountTotal;
    return Math.ceil(grandDiscount);
    
  }


  console.log(priceWithMonthlyDiscount(89, 230, 0.42))


  //expect: 97972