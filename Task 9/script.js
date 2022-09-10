/* ------------------------------ TASK 9 ---------------------------------------------------------------
Sukurkite konstruktoriaus funkciją "Movie" (naudokte ES6), kuri gebės sukurti objektus 3 savybėm ir 1 metodu.

Savybės:
title: string
director: string
budget: number

Metodas: 
wasExpensive() - jeigu filmo "budget" yra daugiau nei 100 000 000 mln USD, tada grąžins true, kitu atveju false. 
------------------------------------------------------------------------------------------------------ */

class Movie {
    constructor(title, director, budget) {
        this.title = title;
        this.director = director;
        this.budget = budget;
    }

    wasExpensive () {
        if (this.budget >= 100000000) {
            return `The film "${this.title}", directed by ${this.director} has a ${this.budget} USD budget`;
        } else {
            return `Sorry, the film "${this.title}" budget too small)`      
        }
    }
};

const CasinoRoyale = new Movie('Casino Royale', 'Martin Campbell', 102000000);
const Avatar = new Movie ('Avatar', 'James Cameron', 237000000);
const ecoBudgetMovie = new Movie ('Eco', 'Petras', 50);

console.log(CasinoRoyale.wasExpensive());
console.log(Avatar.wasExpensive());
console.log(ecoBudgetMovie.wasExpensive());