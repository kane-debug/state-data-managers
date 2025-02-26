interface StateInfo {
  name: string;
  capital: string;
}

interface Representative {
  name: string;
  party: 'D' | 'R' | 'I';
  district: number;
}

interface Senator {
  name: string;
  party: 'D' | 'R' | 'I';
  class: 1 | 2 | 3;
  termEnds?: number;
}

interface Governor {
  name: string;
  party: 'D' | 'R' | 'I';
  termEnds: number;
}

interface StateData {
  name: string;
  capital: string;
  governor: Governor;
  senators: Senator[];
  representatives: Representative[];
  population?: number;
  largestCity?: string;
  statehood?: string;
  nickname?: string;
}

export const stateData: Record<string, StateData> = {
  AL: {
    name: "Alabama",
    capital: "Montgomery",
    governor: {
      name: "Kay Ivey",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Katie Britt",
        party: "R",
        class: 3
      },
      {
        name: "Tommy Tuberville",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Jerry Carl", party: "R", district: 1 },
      { name: "Barry Moore", party: "R", district: 2 },
      { name: "Mike Rogers", party: "R", district: 3 },
      { name: "Robert Aderholt", party: "R", district: 4 },
      { name: "Dale Strong", party: "R", district: 5 },
      { name: "Gary Palmer", party: "R", district: 6 },
      { name: "Terri Sewell", party: "D", district: 7 }
    ]
  },
  AK: {
    name: "Alaska",
    capital: "Juneau",
    governor: {
      name: "Mike Dunleavy",
      party: "R",
      termEnds: 2026
    },
    senators: [
      {
        name: "Lisa Murkowski",
        party: "R",
        class: 3
      },
      {
        name: "Dan Sullivan",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Mary Peltola", party: "D", district: 1 }
    ]
  },
  AZ: {
    name: "Arizona",
    capital: "Phoenix",
    governor: {
      name: "Katie Hobbs",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Kyrsten Sinema",
        party: "I",
        class: 1
      },
      {
        name: "Mark Kelly",
        party: "D",
        class: 3
      }
    ],
    representatives: [
      { name: "David Schweikert", party: "R", district: 1 },
      { name: "Eli Crane", party: "R", district: 2 },
      { name: "Ruben Gallego", party: "D", district: 3 },
      { name: "Greg Stanton", party: "D", district: 4 },
      { name: "Andy Biggs", party: "R", district: 5 },
      { name: "Juan Ciscomani", party: "R", district: 6 },
      { name: "Raúl Grijalva", party: "D", district: 7 },
      { name: "Debbie Lesko", party: "R", district: 8 },
      { name: "Paul Gosar", party: "R", district: 9 }
    ]
  },
  AR: {
    name: "Arkansas",
    capital: "Little Rock",
    governor: {
      name: "Sarah Huckabee Sanders",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "John Boozman",
        party: "R",
        class: 3
      },
      {
        name: "Tom Cotton",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Rick Crawford", party: "R", district: 1 },
      { name: "French Hill", party: "R", district: 2 },
      { name: "Steve Womack", party: "R", district: 3 },
      { name: "Bruce Westerman", party: "R", district: 4 }
    ]
  },
  CA: {
    name: "California",
    capital: "Sacramento",
    governor: {
      name: "Gavin Newsom",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Laphonza Butler",
        party: "D",
        class: 1
      },
      {
        name: "Alex Padilla",
        party: "D",
        class: 3
      }
    ],
    representatives: [
      { name: "Doug LaMalfa", party: "R", district: 1 },
      { name: "Jared Huffman", party: "D", district: 2 },
      { name: "Kevin Kiley", party: "R", district: 3 },
      { name: "Mike Thompson", party: "D", district: 4 },
      { name: "Tom McClintock", party: "R", district: 5 },
      { name: "Ami Bera", party: "D", district: 6 },
      { name: "Doris Matsui", party: "D", district: 7 },
      { name: "John Garamendi", party: "D", district: 8 },
      { name: "Josh Harder", party: "D", district: 9 },
      { name: "Mark DeSaulnier", party: "D", district: 10 },
      { name: "Nancy Pelosi", party: "D", district: 11 },
      { name: "Barbara Lee", party: "D", district: 12 },
      { name: "John Duarte", party: "R", district: 13 },
      { name: "Eric Swalwell", party: "D", district: 14 },
      { name: "Kevin Mullin", party: "D", district: 15 },
      { name: "Anna Eshoo", party: "D", district: 16 },
      { name: "Ro Khanna", party: "D", district: 17 },
      { name: "Zoe Lofgren", party: "D", district: 18 },
      { name: "Jimmy Panetta", party: "D", district: 19 },
      { name: "Kevin McCarthy", party: "R", district: 20 }
    ]
  },
  CO: {
    name: "Colorado",
    capital: "Denver",
    governor: {
      name: "Jared Polis",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Michael Bennet",
        party: "D",
        class: 3
      },
      {
        name: "John Hickenlooper",
        party: "D",
        class: 2
      }
    ],
    representatives: [
      { name: "Diana DeGette", party: "D", district: 1 },
      { name: "Joe Neguse", party: "D", district: 2 },
      { name: "Lauren Boebert", party: "R", district: 3 },
      { name: "Ken Buck", party: "R", district: 4 },
      { name: "Doug Lamborn", party: "R", district: 5 },
      { name: "Jason Crow", party: "D", district: 6 },
      { name: "Brittany Pettersen", party: "D", district: 7 },
      { name: "Yadira Caraveo", party: "D", district: 8 }
    ]
  },
  CT: {
    name: "Connecticut",
    capital: "Hartford",
    governor: {
      name: "Ned Lamont",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Richard Blumenthal",
        party: "D",
        class: 3
      },
      {
        name: "Chris Murphy",
        party: "D",
        class: 1
      }
    ],
    representatives: [
      { name: "John Larson", party: "D", district: 1 },
      { name: "Joe Courtney", party: "D", district: 2 },
      { name: "Rosa DeLauro", party: "D", district: 3 },
      { name: "Jim Himes", party: "D", district: 4 },
      { name: "Jahana Hayes", party: "D", district: 5 }
    ]
  },
  DE: {
    name: "Delaware",
    capital: "Dover",
    governor: {
      name: "John Carney",
      party: "D",
      termEnds: 2025
    },
    senators: [
      {
        name: "Tom Carper",
        party: "D",
        class: 1
      },
      {
        name: "Chris Coons",
        party: "D",
        class: 2
      }
    ],
    representatives: [
      { name: "Lisa Blunt Rochester", party: "D", district: 1 }
    ]
  },
  FL: {
    name: "Florida",
    capital: "Tallahassee",
    governor: {
      name: "Ron DeSantis",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Marco Rubio",
        party: "R",
        class: 3
      },
      {
        name: "Rick Scott",
        party: "R",
        class: 1
      }
    ],
    representatives: [
      { name: "Matt Gaetz", party: "R", district: 1 },
      { name: "Neal Dunn", party: "R", district: 2 },
      { name: "Kat Cammack", party: "R", district: 3 },
      { name: "Aaron Bean", party: "R", district: 4 },
      { name: "John Rutherford", party: "R", district: 5 },
      { name: "Michael Waltz", party: "R", district: 6 },
      { name: "Cory Mills", party: "R", district: 7 },
      { name: "Bill Posey", party: "R", district: 8 },
      { name: "Darren Soto", party: "D", district: 9 },
      { name: "Maxwell Frost", party: "D", district: 10 }
    ]
  },
  GA: {
    name: "Georgia",
    capital: "Atlanta",
    governor: {
      name: "Brian Kemp",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Jon Ossoff",
        party: "D",
        class: 2,
        termEnds: 2027
      },
      {
        name: "Raphael Warnock",
        party: "D",
        class: 3,
        termEnds: 2029
      }
    ],
    representatives: [
      { name: "Buddy Carter", party: "R", district: 1 },
      { name: "Sanford Bishop", party: "D", district: 2 },
      { name: "Drew Ferguson", party: "R", district: 3 },
      { name: "Henry C. Johnson Jr.", party: "D", district: 4 },
      { name: "Rich McCormick", party: "R", district: 5 },
      { name: "Lucy McBath", party: "D", district: 6 },
      { name: "Mark Gaines", party: "R", district: 7 },
      { name: "Austin Scott", party: "R", district: 8 },
      { name: "Andrew Clyde", party: "R", district: 9 },
      { name: "Mike Collins", party: "R", district: 10 },
      { name: "Barry Loudermilk", party: "R", district: 11 },
      { name: "Rick Allen", party: "R", district: 12 },
      { name: "David Scott", party: "D", district: 13 },
      { name: "Marjorie Taylor Greene", party: "R", district: 14 }
    ]
  },
  HI: {
    name: "Hawaii",
    capital: "Honolulu",
    governor: {
      name: "Josh Green",
      party: "D",
      termEnds: 2026
    },
    senators: [
      {
        name: "Brian Schatz",
        party: "D",
        class: 3,
        termEnds: 2029
      },
      {
        name: "Mazie Hirono",
        party: "D",
        class: 1,
        termEnds: 2025
      }
    ],
    representatives: [
      { name: "Ed Case", party: "D", district: 1 },
      { name: "Jill Tokuda", party: "D", district: 2 }
    ]
  },
  ID: {
    name: "Idaho",
    capital: "Boise",
    governor: {
      name: "Brad Little",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Mike Crapo",
        party: "R",
        class: 3,
        termEnds: 2029
      },
      {
        name: "Jim Risch",
        party: "R",
        class: 2,
        termEnds: 2027
      }
    ],
    representatives: [
      { name: "Russ Fulcher", party: "R", district: 1 },
      { name: "Mike Simpson", party: "R", district: 2 }
    ]
  },
  IL: {
    name: "Illinois",
    capital: "Springfield",
    governor: {
      name: "J.B. Pritzker",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Dick Durbin",
        party: "D",
        class: 2,
        termEnds: 2027
      },
      {
        name: "Tammy Duckworth",
        party: "D",
        class: 3,
        termEnds: 2029
      }
    ],
    representatives: [
      { name: "Jonathan Jackson", party: "D", district: 1 },
      { name: "Robin Kelly", party: "D", district: 2 },
      { name: "Delia Ramirez", party: "D", district: 3 },
      { name: "Jesús García", party: "D", district: 4 },
      { name: "Mike Quigley", party: "D", district: 5 },
      { name: "Sean Casten", party: "D", district: 6 },
      { name: "Danny K. Davis", party: "D", district: 7 },
      { name: "Raja Krishnamoorthi", party: "D", district: 8 },
      { name: "Jan Schakowsky", party: "D", district: 9 },
      { name: "Brad Schneider", party: "D", district: 10 },
      { name: "Bill Foster", party: "D", district: 11 },
      { name: "Mike Bost", party: "R", district: 12 },
      { name: "Nikki Budzinski", party: "D", district: 13 },
      { name: "Lauren Underwood", party: "D", district: 14 },
      { name: "Mary Miller", party: "R", district: 15 },
      { name: "Darin LaHood", party: "R", district: 16 },
      { name: "Eric Sorensen", party: "D", district: 17 }
    ]
  },
  IN: {
    name: "Indiana",
    capital: "Indianapolis",
    governor: {
      name: "Eric Holcomb",
      party: "R",
      termEnds: 2025
    },
    senators: [
      {
        name: "Todd Young",
        party: "R",
        class: 3
      },
      {
        name: "Mike Braun",
        party: "R",
        class: 1
      }
    ],
    representatives: [
      { name: "Frank Mrvan", party: "D", district: 1 },
      { name: "Rudy Yakym", party: "R", district: 2 },
      { name: "Jim Banks", party: "R", district: 3 },
      { name: "Jim Baird", party: "R", district: 4 },
      { name: "Victoria Spartz", party: "R", district: 5 },
      { name: "Greg Pence", party: "R", district: 6 },
      { name: "André Carson", party: "D", district: 7 },
      { name: "Larry Bucshon", party: "R", district: 8 },
      { name: "Erin Houchin", party: "R", district: 9 }
    ]
  },
  IA: {
    name: "Iowa",
    capital: "Des Moines",
    governor: {
      name: "Kim Reynolds",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Chuck Grassley",
        party: "R",
        class: 3
      },
      {
        name: "Joni Ernst",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Mariannette Miller-Meeks", party: "R", district: 1 },
      { name: "Ashley Hinson", party: "R", district: 2 },
      { name: "Zach Nunn", party: "R", district: 3 },
      { name: "Randy Feenstra", party: "R", district: 4 }
    ]
  },
  KS: {
    name: "Kansas",
    capital: "Topeka",
    governor: {
      name: "Laura Kelly",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Jerry Moran",
        party: "R",
        class: 3
      },
      {
        name: "Roger Marshall",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Tracey Mann", party: "R", district: 1 },
      { name: "Jake LaTurner", party: "R", district: 2 },
      { name: "Sharice Davids", party: "D", district: 3 },
      { name: "Ron Estes", party: "R", district: 4 }
    ]
  },
  KY: {
    name: "Kentucky",
    capital: "Frankfort",
    governor: {
      name: "Andy Beshear",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Mitch McConnell",
        party: "R",
        class: 2
      },
      {
        name: "Rand Paul",
        party: "R",
        class: 3
      }
    ],
    representatives: [
      { name: "James Comer", party: "R", district: 1 },
      { name: "Brett Guthrie", party: "R", district: 2 },
      { name: "Morgan McGarvey", party: "D", district: 3 },
      { name: "Thomas Massie", party: "R", district: 4 },
      { name: "Hal Rogers", party: "R", district: 5 },
      { name: "Andy Barr", party: "R", district: 6 }
    ]
  },
  LA: {
    name: "Louisiana",
    capital: "Baton Rouge",
    governor: {
      name: "Jeff Landry",
      party: "R",
      termEnds: 2028
    },
    senators: [
      {
        name: "Bill Cassidy",
        party: "R",
        class: 2
      },
      {
        name: "John Kennedy",
        party: "R",
        class: 3
      }
    ],
    representatives: [
      { name: "Steve Scalise", party: "R", district: 1 },
      { name: "Troy Carter", party: "D", district: 2 },
      { name: "Clay Higgins", party: "R", district: 3 },
      { name: "Mike Johnson", party: "R", district: 4 },
      { name: "Julia Letlow", party: "R", district: 5 },
      { name: "Garret Graves", party: "R", district: 6 }
    ]
  },
  ME: {
    name: "Maine",
    capital: "Augusta",
    governor: {
      name: "Janet Mills",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Susan Collins",
        party: "R",
        class: 2
      },
      {
        name: "Angus King",
        party: "I",
        class: 1
      }
    ],
    representatives: [
      { name: "Chellie Pingree", party: "D", district: 1 },
      { name: "Jared Golden", party: "D", district: 2 }
    ]
  },
  MD: {
    name: "Maryland",
    capital: "Annapolis",
    governor: {
      name: "Wes Moore",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Ben Cardin",
        party: "D",
        class: 1
      },
      {
        name: "Chris Van Hollen",
        party: "D",
        class: 3
      }
    ],
    representatives: [
      { name: "Andy Harris", party: "R", district: 1 },
      { name: "Dutch Ruppersberger", party: "D", district: 2 },
      { name: "John Sarbanes", party: "D", district: 3 },
      { name: "Glenn Ivey", party: "D", district: 4 },
      { name: "Steny Hoyer", party: "D", district: 5 },
      { name: "David Trone", party: "D", district: 6 },
      { name: "Kweisi Mfume", party: "D", district: 7 },
      { name: "Jamie Raskin", party: "D", district: 8 }
    ]
  },
  MA: {
    name: "Massachusetts",
    capital: "Boston",
    governor: {
      name: "Maura Healey",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Elizabeth Warren",
        party: "D",
        class: 1
      },
      {
        name: "Ed Markey",
        party: "D",
        class: 2
      }
    ],
    representatives: [
      { name: "Richard Neal", party: "D", district: 1 },
      { name: "Jim McGovern", party: "D", district: 2 },
      { name: "Lori Trahan", party: "D", district: 3 },
      { name: "Jake Auchincloss", party: "D", district: 4 },
      { name: "Katherine Clark", party: "D", district: 5 },
      { name: "Seth Moulton", party: "D", district: 6 },
      { name: "Ayanna Pressley", party: "D", district: 7 },
      { name: "Stephen Lynch", party: "D", district: 8 },
      { name: "Bill Keating", party: "D", district: 9 }
    ]
  },
  MI: {
    name: "Michigan",
    capital: "Lansing",
    governor: {
      name: "Gretchen Whitmer",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Debbie Stabenow",
        party: "D",
        class: 1
      },
      {
        name: "Gary Peters",
        party: "D",
        class: 2
      }
    ],
    representatives: [
      { name: "Hillary Scholten", party: "D", district: 1 },
      { name: "John Moolenaar", party: "R", district: 2 },
      { name: "Bill Huizenga", party: "R", district: 3 },
      { name: "Bill Huizenga", party: "R", district: 4 },
      { name: "Tim Walberg", party: "R", district: 5 },
      { name: "Debbie Dingell", party: "D", district: 6 },
      { name: "Elissa Slotkin", party: "D", district: 7 },
      { name: "Dan Kildee", party: "D", district: 8 },
      { name: "Lisa McClain", party: "R", district: 9 },
      { name: "John James", party: "R", district: 10 },
      { name: "Haley Stevens", party: "D", district: 11 },
      { name: "Rashida Tlaib", party: "D", district: 12 },
      { name: "Shri Thanedar", party: "D", district: 13 }
    ]
  },
  MN: {
    name: "Minnesota",
    capital: "St. Paul",
    governor: {
      name: "Tim Walz",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Amy Klobuchar",
        party: "D",
        class: 1
      },
      {
        name: "Tina Smith",
        party: "D",
        class: 2
      }
    ],
    representatives: [
      { name: "Brad Finstad", party: "R", district: 1 },
      { name: "Angie Craig", party: "D", district: 2 },
      { name: "Dean Phillips", party: "D", district: 3 },
      { name: "Betty McCollum", party: "D", district: 4 },
      { name: "Ilhan Omar", party: "D", district: 5 },
      { name: "Tom Emmer", party: "R", district: 6 },
      { name: "Michelle Fischbach", party: "R", district: 7 },
      { name: "Pete Stauber", party: "R", district: 8 }
    ]
  },
  MS: {
    name: "Mississippi",
    capital: "Jackson",
    governor: {
      name: "Tate Reeves",
      party: "R",
      termEnds: 2028
    },
    senators: [
      {
        name: "Roger Wicker",
        party: "R",
        class: 1
      },
      {
        name: "Cindy Hyde-Smith",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Trent Kelly", party: "R", district: 1 },
      { name: "Bennie Thompson", party: "D", district: 2 },
      { name: "Michael Guest", party: "R", district: 3 },
      { name: "Mike Ezell", party: "R", district: 4 }
    ]
  },
  MO: {
    name: "Missouri",
    capital: "Jefferson City",
    governor: {
      name: "Mike Parson",
      party: "R",
      termEnds: 2025
    },
    senators: [
      {
        name: "Josh Hawley",
        party: "R",
        class: 1
      },
      {
        name: "Eric Schmitt",
        party: "R",
        class: 3
      }
    ],
    representatives: [
      { name: "Eric Burlison", party: "R", district: 1 },
      { name: "Ann Wagner", party: "R", district: 2 },
      { name: "Blaine Luetkemeyer", party: "R", district: 3 },
      { name: "Mark Alford", party: "R", district: 4 },
      { name: "Emanuel Cleaver", party: "D", district: 5 },
      { name: "Sam Graves", party: "R", district: 6 },
      { name: "Eric Burlison", party: "R", district: 7 },
      { name: "Jason Smith", party: "R", district: 8 }
    ]
  },
  MT: {
    name: "Montana",
    capital: "Helena",
    governor: {
      name: "Greg Gianforte",
      party: "R",
      termEnds: 2025
    },
    senators: [
      {
        name: "Jon Tester",
        party: "D",
        class: 1
      },
      {
        name: "Steve Daines",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Ryan Zinke", party: "R", district: 1 },
      { name: "Matt Rosendale", party: "R", district: 2 }
    ]
  },
  NE: {
    name: "Nebraska",
    capital: "Lincoln",
    governor: {
      name: "Jim Pillen",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Deb Fischer",
        party: "R",
        class: 1
      },
      {
        name: "Pete Ricketts",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Mike Flood", party: "R", district: 1 },
      { name: "Don Bacon", party: "R", district: 2 },
      { name: "Adrian Smith", party: "R", district: 3 }
    ]
  },
  NV: {
    name: "Nevada",
    capital: "Carson City",
    governor: {
      name: "Joe Lombardo",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Jacky Rosen",
        party: "D",
        class: 1
      },
      {
        name: "Catherine Cortez Masto",
        party: "D",
        class: 3
      }
    ],
    representatives: [
      { name: "Dina Titus", party: "D", district: 1 },
      { name: "Mark Amodei", party: "R", district: 2 },
      { name: "Susie Lee", party: "D", district: 3 },
      { name: "Steven Horsford", party: "D", district: 4 }
    ]
  },
  NH: {
    name: "New Hampshire",
    capital: "Concord",
    governor: {
      name: "Chris Sununu",
      party: "R",
      termEnds: 2025
    },
    senators: [
      {
        name: "Jeanne Shaheen",
        party: "D",
        class: 2
      },
      {
        name: "Maggie Hassan",
        party: "D",
        class: 3
      }
    ],
    representatives: [
      { name: "Chris Pappas", party: "D", district: 1 },
      { name: "Annie Kuster", party: "D", district: 2 }
    ]
  },
  NJ: {
    name: "New Jersey",
    capital: "Trenton",
    governor: {
      name: "Phil Murphy",
      party: "D",
      termEnds: 2026
    },
    senators: [
      {
        name: "Bob Menendez",
        party: "D",
        class: 1
      },
      {
        name: "Cory Booker",
        party: "D",
        class: 2
      }
    ],
    representatives: [
      { name: "Donald Norcross", party: "D", district: 1 },
      { name: "Jeff Van Drew", party: "R", district: 2 },
      { name: "Andy Kim", party: "D", district: 3 },
      { name: "Chris Smith", party: "R", district: 4 },
      { name: "Josh Gottheimer", party: "D", district: 5 },
      { name: "Frank Pallone", party: "D", district: 6 },
      { name: "Tom Kean Jr.", party: "R", district: 7 },
      { name: "Rob Menendez", party: "D", district: 8 },
      { name: "Bill Pascrell", party: "D", district: 9 },
      { name: "Donald Payne Jr.", party: "D", district: 10 },
      { name: "Mikie Sherrill", party: "D", district: 11 },
      { name: "Rob Menendez", party: "D", district: 12 }
    ]
  },
  NM: {
    name: "New Mexico",
    capital: "Santa Fe",
    governor: {
      name: "Michelle Lujan Grisham",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Martin Heinrich",
        party: "D",
        class: 1
      },
      {
        name: "Ben Ray Luján",
        party: "D",
        class: 2
      }
    ],
    representatives: [
      { name: "Melanie Stansbury", party: "D", district: 1 },
      { name: "Gabe Vasquez", party: "D", district: 2 },
      { name: "Teresa Leger Fernandez", party: "D", district: 3 }
    ]
  },
  NY: {
    name: "New York",
    capital: "Albany",
    governor: {
      name: "Kathy Hochul",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Kirsten Gillibrand",
        party: "D",
        class: 1
      },
      {
        name: "Chuck Schumer",
        party: "D",
        class: 3
      }
    ],
    representatives: [
      { name: "Nick LaLota", party: "R", district: 1 },
      { name: "Andrew Garbarino", party: "R", district: 2 },
      { name: "George Santos", party: "R", district: 3 },
      { name: "Anthony D'Esposito", party: "R", district: 4 },
      { name: "Gregory Meeks", party: "D", district: 5 },
      { name: "Grace Meng", party: "D", district: 6 },
      { name: "Nydia Velázquez", party: "D", district: 7 },
      { name: "Hakeem Jeffries", party: "D", district: 8 },
      { name: "Yvette Clarke", party: "D", district: 9 },
      { name: "Dan Goldman", party: "D", district: 10 },
      { name: "Nicole Malliotakis", party: "R", district: 11 },
      { name: "Jerry Nadler", party: "D", district: 12 },
      { name: "Adriano Espaillat", party: "D", district: 13 },
      { name: "Alexandria Ocasio-Cortez", party: "D", district: 14 },
      { name: "Ritchie Torres", party: "D", district: 15 },
      { name: "Jamaal Bowman", party: "D", district: 16 },
      { name: "Mike Lawler", party: "R", district: 17 },
      { name: "Pat Ryan", party: "D", district: 18 },
      { name: "Marc Molinaro", party: "R", district: 19 },
      { name: "Paul Tonko", party: "D", district: 20 },
      { name: "Elise Stefanik", party: "R", district: 21 },
      { name: "Brandon Williams", party: "R", district: 22 },
      { name: "Nick Langworthy", party: "R", district: 23 },
      { name: "Claudia Tenney", party: "R", district: 24 },
      { name: "Joseph Morelle", party: "D", district: 25 },
      { name: "Brian Higgins", party: "D", district: 26 }
    ]
  },
  NC: {
    name: "North Carolina",
    capital: "Raleigh",
    governor: {
      name: "Roy Cooper",
      party: "D",
      termEnds: 2025
    },
    senators: [
      {
        name: "Ted Budd",
        party: "R",
        class: 3
      },
      {
        name: "Thom Tillis",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Don Davis", party: "D", district: 1 },
      { name: "Deborah Ross", party: "D", district: 2 },
      { name: "Greg Murphy", party: "R", district: 3 },
      { name: "Valerie Foushee", party: "D", district: 4 },
      { name: "Virginia Foxx", party: "R", district: 5 },
      { name: "Kathy Manning", party: "D", district: 6 },
      { name: "David Rouzer", party: "R", district: 7 },
      { name: "Dan Bishop", party: "R", district: 8 },
      { name: "Richard Hudson", party: "R", district: 9 },
      { name: "Patrick McHenry", party: "R", district: 10 },
      { name: "Chuck Edwards", party: "R", district: 11 },
      { name: "Alma Adams", party: "D", district: 12 },
      { name: "Wiley Nickel", party: "D", district: 13 },
      { name: "Jeff Jackson", party: "D", district: 14 }
    ]
  },
  ND: {
    name: "North Dakota",
    capital: "Bismarck",
    governor: {
      name: "Doug Burgum",
      party: "R",
      termEnds: 2025
    },
    senators: [
      {
        name: "John Hoeven",
        party: "R",
        class: 3
      },
      {
        name: "Kevin Cramer",
        party: "R",
        class: 1
      }
    ],
    representatives: [
      { name: "Kelly Armstrong", party: "R", district: 1 }
    ]
  },
  OH: {
    name: "Ohio",
    capital: "Columbus",
    governor: {
      name: "Mike DeWine",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Sherrod Brown",
        party: "D",
        class: 1
      },
      {
        name: "JD Vance",
        party: "R",
        class: 3
      }
    ],
    representatives: [
      { name: "Greg Landsman", party: "D", district: 1 },
      { name: "Brad Wenstrup", party: "R", district: 2 },
      { name: "Joyce Beatty", party: "D", district: 3 },
      { name: "Jim Jordan", party: "R", district: 4 },
      { name: "Bob Latta", party: "R", district: 5 },
      { name: "Bill Johnson", party: "R", district: 6 },
      { name: "Max Miller", party: "R", district: 7 },
      { name: "Warren Davidson", party: "R", district: 8 },
      { name: "Marcy Kaptur", party: "D", district: 9 },
      { name: "Mike Turner", party: "R", district: 10 },
      { name: "Shontel Brown", party: "D", district: 11 },
      { name: "Troy Balderson", party: "R", district: 12 },
      { name: "Emilia Sykes", party: "D", district: 13 },
      { name: "David Joyce", party: "R", district: 14 },
      { name: "Mike Carey", party: "R", district: 15 }
    ]
  },
  OK: {
    name: "Oklahoma",
    capital: "Oklahoma City",
    governor: {
      name: "Kevin Stitt",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "James Lankford",
        party: "R",
        class: 3
      },
      {
        name: "Markwayne Mullin",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Kevin Hern", party: "R", district: 1 },
      { name: "Josh Brecheen", party: "R", district: 2 },
      { name: "Frank Lucas", party: "R", district: 3 },
      { name: "Tom Cole", party: "R", district: 4 },
      { name: "Stephanie Bice", party: "R", district: 5 }
    ]
  },
  OR: {
    name: "Oregon",
    capital: "Salem",
    governor: {
      name: "Tina Kotek",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Ron Wyden",
        party: "D",
        class: 3
      },
      {
        name: "Jeff Merkley",
        party: "D",
        class: 2
      }
    ],
    representatives: [
      { name: "Suzanne Bonamici", party: "D", district: 1 },
      { name: "Cliff Bentz", party: "R", district: 2 },
      { name: "Earl Blumenauer", party: "D", district: 3 },
      { name: "Val Hoyle", party: "D", district: 4 },
      { name: "Lori Chavez-DeRemer", party: "R", district: 5 },
      { name: "Andrea Salinas", party: "D", district: 6 }
    ]
  },
  PA: {
    name: "Pennsylvania",
    capital: "Harrisburg",
    governor: {
      name: "Josh Shapiro",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Bob Casey Jr.",
        party: "D",
        class: 1
      },
      {
        name: "John Fetterman",
        party: "D",
        class: 3
      }
    ],
    representatives: [
      { name: "Brian Fitzpatrick", party: "R", district: 1 },
      { name: "Brendan Boyle", party: "D", district: 2 },
      { name: "Dwight Evans", party: "D", district: 3 },
      { name: "Dan Meuser", party: "R", district: 4 },
      { name: "Mary Gay Scanlon", party: "D", district: 5 },
      { name: "Chrissy Houlahan", party: "D", district: 6 },
      { name: "Susan Wild", party: "D", district: 7 },
      { name: "Matt Cartwright", party: "D", district: 8 },
      { name: "Christopher Deluzio", party: "D", district: 9 },
      { name: "Scott Perry", party: "R", district: 10 },
      { name: "Lloyd Smucker", party: "R", district: 11 },
      { name: "Summer Lee", party: "D", district: 12 },
      { name: "John Joyce", party: "R", district: 13 },
      { name: "Guy Reschenthaler", party: "R", district: 14 },
      { name: "Glenn Thompson", party: "R", district: 15 },
      { name: "Mike Kelly", party: "R", district: 16 },
      { name: "Rich McCormick", party: "R", district: 17 }
    ]
  },
  RI: {
    name: "Rhode Island",
    capital: "Providence",
    governor: {
      name: "Dan McKee",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Jack Reed",
        party: "D",
        class: 2
      },
      {
        name: "Sheldon Whitehouse",
        party: "D",
        class: 1
      }
    ],
    representatives: [
      { name: "Gabe Amo", party: "D", district: 1 },
      { name: "Seth Magaziner", party: "D", district: 2 }
    ]
  },
  SC: {
    name: "South Carolina",
    capital: "Columbia",
    governor: {
      name: "Henry McMaster",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Lindsey Graham",
        party: "R",
        class: 2
      },
      {
        name: "Tim Scott",
        party: "R",
        class: 3
      }
    ],
    representatives: [
      { name: "Nancy Mace", party: "R", district: 1 },
      { name: "Joe Wilson", party: "R", district: 2 },
      { name: "Jeff Duncan", party: "R", district: 3 },
      { name: "William Timmons", party: "R", district: 4 },
      { name: "Ralph Norman", party: "R", district: 5 },
      { name: "Russell Fry", party: "R", district: 6 },
      { name: "Jim Clyburn", party: "D", district: 7 }
    ]
  },
  SD: {
    name: "South Dakota",
    capital: "Pierre",
    governor: {
      name: "Kristi Noem",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "John Thune",
        party: "R",
        class: 3
      },
      {
        name: "Mike Rounds",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Dusty Johnson", party: "R", district: 1 }
    ]
  },
  TN: {
    name: "Tennessee",
    capital: "Nashville",
    governor: {
      name: "Bill Lee",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Marsha Blackburn",
        party: "R",
        class: 1
      },
      {
        name: "Bill Hagerty",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Diana Harshbarger", party: "R", district: 1 },
      { name: "Tim Burchett", party: "R", district: 2 },
      { name: "Chuck Fleischmann", party: "R", district: 3 },
      { name: "Scott DesJarlais", party: "R", district: 4 },
      { name: "Andy Ogles", party: "R", district: 5 },
      { name: "John Rose", party: "R", district: 6 },
      { name: "Mark Green", party: "R", district: 7 },
      { name: "David Kustoff", party: "R", district: 8 },
      { name: "Steve Cohen", party: "D", district: 9 }
    ]
  },
  TX: {
    name: "Texas",
    capital: "Austin",
    governor: {
      name: "Greg Abbott",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "Ted Cruz",
        party: "R",
        class: 1
      },
      {
        name: "John Cornyn",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Nathaniel Moran", party: "R", district: 1 },
      { name: "Dan Crenshaw", party: "R", district: 2 },
      { name: "Keith Self", party: "R", district: 3 },
      { name: "Pat Fallon", party: "R", district: 4 },
      { name: "Lance Gooden", party: "R", district: 5 },
      { name: "Jake Ellzey", party: "R", district: 6 },
      { name: "Lizzie Fletcher", party: "D", district: 7 },
      { name: "Morgan Luttrell", party: "R", district: 8 },
      { name: "Al Green", party: "D", district: 9 },
      { name: "Michael McCaul", party: "R", district: 10 },
      { name: "Randy Weber", party: "R", district: 11 },
      { name: "Kay Granger", party: "R", district: 12 },
      { name: "Pete Sessions", party: "R", district: 13 },
      { name: "Randy Weber", party: "R", district: 14 },
      { name: "Monica De La Cruz", party: "R", district: 15 },
      { name: "Veronica Escobar", party: "D", district: 16 },
      { name: "Troy Nehls", party: "R", district: 17 },
      { name: "Sheila Jackson Lee", party: "D", district: 18 },
      { name: "Jodey Arrington", party: "R", district: 19 },
      { name: "Joaquin Castro", party: "D", district: 20 },
      { name: "Chip Roy", party: "R", district: 21 },
      { name: "Troy Nehls", party: "R", district: 22 },
      { name: "Tony Gonzales", party: "R", district: 23 },
      { name: "Beth Van Duyne", party: "R", district: 24 },
      { name: "Roger Williams", party: "R", district: 25 },
      { name: "Michael Burgess", party: "R", district: 26 },
      { name: "Michael Cloud", party: "R", district: 27 },
      { name: "Henry Cuellar", party: "D", district: 28 },
      { name: "Sylvia Garcia", party: "D", district: 29 },
      { name: "Jasmine Crockett", party: "D", district: 30 },
      { name: "John Carter", party: "R", district: 31 },
      { name: "Colin Allred", party: "D", district: 32 },
      { name: "Marc Veasey", party: "D", district: 33 },
      { name: "Vicente Gonzalez", party: "D", district: 34 },
      { name: "Greg Casar", party: "D", district: 35 },
      { name: "Brian Babin", party: "R", district: 36 },
      { name: "Lloyd Doggett", party: "D", district: 37 },
      { name: "Wesley Hunt", party: "R", district: 38 }
    ]
  },
  UT: {
    name: "Utah",
    capital: "Salt Lake City",
    governor: {
      name: "Spencer Cox",
      party: "R",
      termEnds: 2025
    },
    senators: [
      {
        name: "Mike Lee",
        party: "R",
        class: 3
      },
      {
        name: "Mitt Romney",
        party: "R",
        class: 1
      }
    ],
    representatives: [
      { name: "Blake Moore", party: "R", district: 1 },
      { name: "Celeste Maloy", party: "R", district: 2 },
      { name: "John Curtis", party: "R", district: 3 },
      { name: "Burgess Owens", party: "R", district: 4 }
    ]
  },
  VT: {
    name: "Vermont",
    capital: "Montpelier",
    governor: {
      name: "Phil Scott",
      party: "R",
      termEnds: 2025
    },
    senators: [
      {
        name: "Peter Welch",
        party: "D",
        class: 1
      },
      {
        name: "Bernie Sanders",
        party: "I",
        class: 3
      }
    ],
    representatives: [
      { name: "Becca Balint", party: "D", district: 1 }
    ]
  },
  VA: {
    name: "Virginia",
    capital: "Richmond",
    governor: {
      name: "Glenn Youngkin",
      party: "R",
      termEnds: 2026
    },
    senators: [
      {
        name: "Mark Warner",
        party: "D",
        class: 2
      },
      {
        name: "Tim Kaine",
        party: "D",
        class: 1
      }
    ],
    representatives: [
      { name: "Rob Wittman", party: "R", district: 1 },
      { name: "Jen Kiggans", party: "R", district: 2 },
      { name: "Bobby Scott", party: "D", district: 3 },
      { name: "Jennifer McClellan", party: "D", district: 4 },
      { name: "Bob Good", party: "R", district: 5 },
      { name: "Ben Cline", party: "R", district: 6 },
      { name: "Abigail Spanberger", party: "D", district: 7 },
      { name: "Don Beyer", party: "D", district: 8 },
      { name: "Morgan Griffith", party: "R", district: 9 },
      { name: "Jennifer Wexton", party: "D", district: 10 },
      { name: "Gerry Connolly", party: "D", district: 11 }
    ]
  },
  WA: {
    name: "Washington",
    capital: "Olympia",
    governor: {
      name: "Jay Inslee",
      party: "D",
      termEnds: 2025
    },
    senators: [
      {
        name: "Patty Murray",
        party: "D",
        class: 3
      },
      {
        name: "Maria Cantwell",
        party: "D",
        class: 1
      }
    ],
    representatives: [
      { name: "Suzan DelBene", party: "D", district: 1 },
      { name: "Rick Larsen", party: "D", district: 2 },
      { name: "Marie Gluesenkamp Perez", party: "D", district: 3 },
      { name: "Dan Newhouse", party: "R", district: 4 },
      { name: "Cathy McMorris Rodgers", party: "R", district: 5 },
      { name: "Derek Kilmer", party: "D", district: 6 },
      { name: "Pramila Jayapal", party: "D", district: 7 },
      { name: "Kim Schrier", party: "D", district: 8 },
      { name: "Adam Smith", party: "D", district: 9 },
      { name: "Marilyn Strickland", party: "D", district: 10 }
    ]
  },
  WV: {
    name: "West Virginia",
    capital: "Charleston",
    governor: {
      name: "Jim Justice",
      party: "R",
      termEnds: 2025
    },
    senators: [
      {
        name: "Joe Manchin",
        party: "D",
        class: 1
      },
      {
        name: "Shelley Moore Capito",
        party: "R",
        class: 2
      }
    ],
    representatives: [
      { name: "Carol Miller", party: "R", district: 1 },
      { name: "Alex Mooney", party: "R", district: 2 }
    ]
  },
  WI: {
    name: "Wisconsin",
    capital: "Madison",
    governor: {
      name: "Tony Evers",
      party: "D",
      termEnds: 2027
    },
    senators: [
      {
        name: "Tammy Baldwin",
        party: "D",
        class: 1
      },
      {
        name: "Ron Johnson",
        party: "R",
        class: 3
      }
    ],
    representatives: [
      { name: "Bryan Steil", party: "R", district: 1 },
      { name: "Mark Pocan", party: "D", district: 2 },
      { name: "Derrick Van Orden", party: "R", district: 3 },
      { name: "Gwen Moore", party: "D", district: 4 },
      { name: "Scott Fitzgerald", party: "R", district: 5 },
      { name: "Glenn Grothman", party: "R", district: 6 },
      { name: "Tom Tiffany", party: "R", district: 7 },
      { name: "Mike Gallagher", party: "R", district: 8 }
    ]
  },
  WY: {
    name: "Wyoming",
    capital: "Cheyenne",
    governor: {
      name: "Mark Gordon",
      party: "R",
      termEnds: 2027
    },
    senators: [
      {
        name: "John Barrasso",
        party: "R",
        class: 1
      },
      {
        name: "Cynthia Lummis",
        party: "R",
        class: 3
      }
    ],
    representatives: [
      { name: "Harriet Hageman", party: "R", district: 1 }
    ]
  }
};

// Add type export for use in components
export type { StateData, Governor, Senator, Representative }; 