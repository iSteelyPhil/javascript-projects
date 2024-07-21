// Define your Book class here:
class Book {
    constructor(title, author, copyrightDate, isbn, pageCount, bookRentals, bookDiscarded){
        this.tite = title;
        this.author = author;
        this.copyrightDate = copyrightDate;
        this.isbn = isbn;
        this.pageCount= pageCount;
        this.bookRentals = bookRentals;
        this.bookDiscarded = bookDiscarded;
    }
    rentals(rents=1){
        this.bookRentals += rents
    }
}

// Define your Manual and Novel classes here:
class Novel extends Book {
    constructor(title, author, copyrightDate, isbn, pageCount, bookRentals, bookDiscarded){
        super(title, author, copyrightDate, isbn, pageCount, bookRentals, bookDiscarded);
    }
    dispose(currentYear){
        if (currentYear-this.copyrightDate > 5) {
           this.bookDiscarded = 'Yes';
        }
    }
} 
class Manual extends Book {
    constructor(title, author, copyrightDate, isbn, pageCount, bookRentals, bookDiscarded){
        super(title, author, copyrightDate, isbn, pageCount, bookRentals, bookDiscarded);
    }
    dispose(){
        if (this.bookRentals > 100) {
            this.bookDiscarded = 'Yes';
        }
     }
    
} 
// Declare the objects for exercises 2 and 3 here:
let pridPred = new Novel('Pride and Prejudice', 'Jane Austen',1813,'1111111111111',432,32,'No')
let shuttleBuild = new Manual('Top Secret Shuttle Building Manual','Redacted',2013,'0000000000000',1147,1,'No')


// Code exercises 4 & 5 here:
pridPred.dispose(2024)
console.log(pridPred)

shuttleBuild.rentals();
console.log(shuttleBuild);