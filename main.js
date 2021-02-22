// Some data we can work with

    // Array of person objects
    const inventors = [
        {
            first: 'Albert',
            last: 'Einstein',
            year: 1879,
            passed: 1955
        },

        {
            first: 'Isaac',
            last: 'Newton',
            year: 1643,
            passed: 1727
        },
        
        {
            first: 'Galileo',
            last: 'Galilei',
            year: 1564,
            passed: 1642
        },
        
        {
            first: 'Marie',
            last: 'Curie',
            year: 1867,
            passed: 1934
        },
        
        {
            first: 'Johannes',
            last: 'Kepler',
            year: 1571,
            passed: 1630
        },
        
        {
            first: 'Nicolaus',
            last: 'Copernicus',
            year: 1473,
            passed: 1543
        },
        
        {
            first: 'Max',
            last: 'Planck',
            year: 1858,
            passed: 1947
        },
        
        {
            first: 'Katherine',
            last: 'Blodgett',
            year: 1898,
            passed: 1979
        },
        
        {
            first: 'Ada',
            last: 'Lovelace',
            year: 1815,
            passed: 1852
        },
        
        {
            first: 'Sarah E.',
            last: 'Goode',
            year: 1855,
            passed: 1905
        },
        
        {
            first: 'Lise',
            last: 'Meitner',
            year: 1878,
            passed: 1968
        },
        
        {
            first: 'Hanna',
            last: 'Hammarström',
            year: 1829,
            passed: 1909
        }
    ];
  
    // Array of names of people
    const people = [
        'Bernhard, Sandra',
        'Bethea, Erin',
        'Becker, Carl',
        'Bentsen, Lloyd',
        'Beckett, Samuel',
        'Blake, William',
        'Berger, Ric',
        'Beddoes, Mick',
        'Beethoven, Ludwig',
        'Belloc, Hilaire',
        'Begin, Menachem',
        'Bellow, Saul',
        'Benchley, Robert',
        'Blair, Robert',
        'Benenson, Peter',
        'Benjamin, Walter',
        'Berlin, Irving',
        'Benn, Tony',
        'Benson, Leana',
        'Bent, Silas',
        'Berle, Milton',
        'Berry, Halle',
        'Biko, Steve',
        'Beck, Glenn',
        'Bergman, Ingmar',
        'Black, Elk',
        'Berio, Luciano',
        'Berne, Eric',
        'Berra, Yogi',
        'Berry, Wendell',
        'Bevan, Aneurin',
        'Ben-Gurion, David',
        'Bevel, Ken',
        'Biden, Joseph',
        'Bennington, Chester',
        'Bierce, Ambrose',
        'Billings, Josh',
        'Birrell, Augustine',
        'Blair, Tony',
        'Beecher, Henry',
        'Biondo, Frank'
    ];
    
    // Array.prototype.filter()
    // 1. Filter the list of inventors for those who were born in the 1500's

    // Callback function to filter year values of 1500 - 1599
    const filterYear = investor => investor.year >= 1500 && investor.year <= 1599;

    // Create new array of filtered items that passed the test
    const bornInThe1500s = inventors.filter(filterYear);

    console.log('Table of inventors who were born in the 1500s');
    console.table(bornInThe1500s);

    
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    // Callback function to get first and last names
    const firstAndLastNames = inventor => `${inventor.first} ${inventor.last}`;
    
    // Create new array of mapped names
    const fullNames = inventors.map(firstAndLastNames);

    console.log('Table of inventors with their full names');
    console.table(fullNames);


    // Array.prototype.sort()
    // 3. Sort the inventors by birthdates (year)
    
    // Sort array functions
    // const sortFunction = (a, b) => b - a; - To sort array in descending order
    // const sortFunction = (a, b) => a - b; - To sort array in ascending order
    // Sort birthdates in descending order
    const sortFunction = (a, b) => a.year < b.year ? 1 : -1; // change < to > if you want to sort in ascending order

    // New array of sorted birthdates
    const ages = inventors.sort(sortFunction);

    console.log('Table of inventors sorted by their birthdates in descending order');
    console.table(ages);


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    // Callback function to sum all birthdays
    // const sum = (accummulator, value) => accummulator + value; - accummulator refers to the number every value adds to, you might input 0 or any other number
    const calculateBirthdays = (accummulator, inventor) => accummulator + (inventor.passed - inventor.year);
    
    // Sum all birthdays
    const birthdays = inventors.reduce(calculateBirthdays, 0); // 0 is assigned to accummulator as its initial value

    console.log(`All the inventors lived for ${birthdays} years.`);


    // 5. Sort the inventors by years lived

    // Callback function to sort items by years lived in ascending order
    const calculateYearsLived = (a, b) => {
        const firstComparism = a.passed - a.year;
        const secondComparism = b.passed - b.year;
        return firstComparism > secondComparism ? 1 : -1;
    }

    // New array of sorted inventors by years lived 
    const yearsLived = inventors.sort(calculateYearsLived);

    console.log('Table of inventors sorted by years lived in ascending order');
    console.table(yearsLived);


    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

    // Getting list of Boulevards in Paris from website
    /* const category = document.querySelector('.mw-category');
    const links = category.querySelectorAll('a'); // Returns a nodelist */

    // Converting a nodelist to an array
    // Using spread operator to transfer nodelist contents into array
    // const boulevards = [...links];

    // OR using Array.from() converts contents into array

    // const streets = Array.from(links);

    /* const paris = boulevards
                    .map(link => link.textContent)
                    .filter(boulevard => boulevard.includes('de')); */
    //  when includes() returns true, items containing 'de' are filtered into the new array

    // Results of array map
    /* array = ["Boulevards of Paris", "City walls of Paris", "Thiers wall", "Wall of Charles V", "Wall of Philip II Augustus", "City gates of Paris", "Haussmann's renovation of Paris", "Boulevards of the Marshals", "Boulevard Auguste-Blanqui", "Boulevard Barbès", "Boulevard Beaumarchais", "Boulevard de l'Amiral-Bruix", "Boulevard Mortier", "Boulevard Poniatowski", "Boulevard Soult", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard du Crime", "Boulevard du Général-d'Armée-Jean-Simon", "Boulevard Haussmann", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard Lefebvre", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard Montmartre", "Boulevard du Montparnasse", "Boulevard Raspail", "Boulevard Richard-Lenoir", "Boulevard Saint-Germain", "Boulevard Saint-Michel", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard du Temple", "Boulevard Voltaire", "Boulevard de la Zone"] */

    // Results of filtered Array
    /* array = ["Boulevard de l'Amiral-Bruix", "Boulevard des Capucines", "Boulevard de la Chapelle", "Boulevard de Clichy", "Boulevard de l'Hôpital", "Boulevard des Italiens", "Boulevard de la Madeleine", "Boulevard de Magenta", "Boulevard Marguerite-de-Rochechouart", "Boulevard de Sébastopol", "Boulevard de Strasbourg", "Boulevard de la Zone"] */


    // 7. sort Exercise
    // Sort the people alphabetically by last name
    const alphabetically = people.sort((a, b) => {
        // Using array destructuring to store last and first name variables
        const [aLastName, aFirstName] = a.split(', ');
        const [bLastName, bFirstName] = b.split(', ');
        return aLastName > bLastName ? 1 : -1; // return array in ascending order 
    })
    console.table(alphabetically);


    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

    // Counting instances of array values in an object using reduce
    // .reduce((accumulator, value) => acummulator + value, initialValue of accumulator)
    const instances = data.reduce((object, item) => {
        // if item is a property in object, increment item's number of occurence
        // else, add item's number of occurence
        (item in object) ? object[item]++ : object[item] = 1; 
        return object;
    }, {}); // set initial value to be an empty object therefore making the accumulator an object 

    console.log(instances);

    // ############# PART 2 ##############

    const persons = [
        {
            name: 'Wes',
            year: 1988
        },
        {
            name: 'Kait',
            year: 1986
        },
        {
            name: 'Irv',
            year: 1970
        },
        {
            name: 'Lux',
            year: 2015
        }
    ];
  
    const comments = [
    {
        text: 'Love this!',
        id: 523423 
    },
    {
        text: 'Super good',
        id: 823423 
    },
    {
        text: 'You are the best',
        id: 2039842 
    },
    {
        text: 'Ramen is my fav food ever',
        id: 123523 
    },
    {
        text: 'Nice Nice Nice!',
        id: 542328
    }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19 or older?

    // some() returns true if some array items pass a test and vice-versa
    const isAdult = persons.some(person => {
        // subtract person's year from current year to get person's age
        const age = (new Date()).getFullYear() - person.year;
        return age >= 19;
    });

    console.log({isAdult});


    // Array.prototype.every() // is everyone 19 or older?

    // every() returns true if every array item passes a test and vice versa
    const isEveryoneAdult = persons.every(person => (new Date()).getFullYear() - person.year >= 19 );
    // subtract person's year from current year to get person's age, then compare

    console.log({isEveryoneAdult});


    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423

    // find() returns the first array element that passes a test function
    const findId = comments.find(comment => comment.id == 823423);
    console.log(findId);

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423

    // findIndex() returns the index(position) of the array element that passes a test function
    const index = comments.findIndex(comment => comment.id === 823423);
    console.log(index);

    // remove array elements from array using its index position
    /* comments.splice(index, 1); // splice(start position of element, number of elements to remove)
    console.table(comments); */

    // slice() is better to use for removing elements because it's immutable, does not alter the value of the array
    // slice() returns a new array, it does not remove items from the source array
    const newComments = [
        ...comments.slice(0, index), // .slice(start position, stop point but not including element)
        ...comments.slice(index + 1) // .slice(start position till end) returns all elements till end
    ];

    console.table(newComments);