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

    console.log('Table of investors who were born in the 1500s');
    console.table(bornInThe1500s);

    
    // Array.prototype.map()
    // 2. Give us an array of the inventors first and last names

    // Callback function to get first and last names
    const firstAndLastNames = inventor => `${inventor.first} ${inventor.last}`;
    
    // Create new array of mapped names
    const fullNames = inventors.map(firstAndLastNames);

    console.log('Table of investors with their full names');
    console.table(fullNames);


    // Array.prototype.sort()
    // 3. Sort the inventors by birthdate, oldest to youngest

    // Callback function to get birthdates
    const calculateBirthDates = inventor => inventor.passed - inventor.year;

    // Create new array containing birthdates
    const birthDates = inventors.map(calculateBirthDates);
    
    // Sort array itens from oldest to youngest age
    const sortFunction = (a, b) => b - a; // To sort array in descending order
    // const sortFunction = (a, b) => a - b; - To sort array in ascending order
    const ages = birthDates.sort(sortFunction);

    console.log('Age of investors arranged in descending order');
    console.table(ages);


    // Array.prototype.reduce()
    // 4. How many years did all the inventors live all together?

    // Callback function to sum all array elements
    const sum = (total, value) => total + value;
    
    // Sum all array elements and return them.
    const sumOfYears = birthDates.reduce(sum);
    console.log(`All the investors lived for ${sumOfYears} years.`);

    // 5. Sort the inventors by years lived

    // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
    // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


    // 7. sort Exercise
    // Sort the people alphabetically by last name

    // 8. Reduce Exercise
    // Sum up the instances of each of these
    const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];