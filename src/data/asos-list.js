const airports = [
    {
        id: "K0J4",
        city: "Florala",
        name: "Florala Municipal Airport",
        county: "Covington",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "K79J",
        city: "Andalusia",
        name: "South Alabama Regional Airport at Bill Benton Field",
        county: "Covington",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KANB",
        city: "Anniston",
        name: "Anniston Regional Airport",
        county: "Calhoun",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KBFM",
        city: "Mobile",
        name: "Mobile International Airport",
        county: "Mobile",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KBHM",
        city: "Birmingham",
        name: "Shuttlesworth International Airport",
        county: "Jefferson",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KDCU",
        city: "Decatur",
        name: "Pryor Field Regional Airport",
        county: "Limestone",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KDHN",
        city: "Dothan",
        name: "Dothan Regional Airport",
        county: "Dale",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KEET",
        city: "Alabaster",
        name: "Shelby County Airport",
        county: "Shelby",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KEUF",
        city: "Eufaula",
        name: "Weedon Field Airport",
        county: "Barbour",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KGZH",
        city: "Evergreen",
        name: "Evergreen Regional Airport/Middleton Field",
        county: "Conecuh",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KHSV",
        city: "Huntsville",
        name: "Huntsville International Airport-Carl T Jones Field",
        county: "Madison",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KMGM",
        city: "Montgomery",
        name: "Montgomery Regional Airport (Dannelly Field)",
        county: "Montgomery",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KMOB",
        city: "Mobile",
        name: "Mobile Regional Airport",
        county: "Mobile",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KMSL",
        city: "Muscle Shoals",
        name: "Northwest Alabama Regional Airport",
        county: "Colbert",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KPRN",
        city: "Greenville",
        name: "Mac Crenshaw Memorial Airport",
        county: "Butler",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KTCL",
        city: "Tuscaloosa",
        name: "Tuscaloosa National Airport",
        county: "Tuscaloosa",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "KTOI",
        city: "Troy",
        name: "Troy Municipal Airport at N Kenneth Campbell Field",
        county: "Pike",
        state: "Alabama",
        stateAbr: "al"
    },
    {
        id: "PAAQ",
        city: "Palmer",
        name: "Warren 'Bud' Woods Palmer Municipal Airport",
        county: "Matanuska Susitna",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PABE",
        city: "Bethel",
        name: "Bethel Airport",
        county: "Bethel",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PABI",
        city: "Delta Junction",
        name: "Allen Army Airfield",
        county: "Southeast Fairbanks",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PABR",
        city: "Barrow",
        name: "Wiley Post - Will Rogers Memorial Airport",
        county: "North Slope",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PABT",
        city: "Bettles",
        name: "Bettles Airport",
        county: "Yukon Koyukuk",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PACD",
        city: "Cold Bay",
        name: "Cold Bay Airport",
        county: "Aleutians East",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PACV",
        city: "Cordova",
        name: "Merle K (Mudhole) Smith Airport",
        county: "Valdez Cordova",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PADE",
        city: "Deering",
        name: "Deering Airport",
        county: "Northwest Arctic",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PADQ",
        city: "Kodiak",
        name: "Kodiak Airport",
        county: "Kodiak Island",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAEG",
        city: "Eagle",
        name: "Eagle Airport",
        county: "Southeast Fairbanks",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAEN",
        city: "Kenai",
        name: "Kenai Municipal Airport",
        county: "Kenai Peninsula",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAFA",
        city: "Fairbanks",
        name: "Fairbanks International Airport",
        county: "Fairbanks North Star",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAGK",
        city: "Gulkana",
        name: "Gulkana Airport",
        county: "Valdez Cordova",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAGY",
        city: "Skagway",
        name: "Skagway Airport",
        county: "Skagway Hoonah Angoon",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAHN",
        city: "Haines",
        name: "Haines Airport",
        county: "Haines",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAHO",
        city: "Homer",
        name: "Homer Airport",
        county: "Kenai Peninsula",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAIL",
        city: "Iliamna",
        name: "Iliamna Airport",
        county: "Lake And Peninsula",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAJN",
        city: "Juneau",
        name: "Juneau International Airport",
        county: "Juneau",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAKN",
        city: "King Salmon",
        name: "King Salmon Airport",
        county: "Bristol Bay",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAKT",
        city: "Ketchikan",
        name: "Ketchikan International Airport",
        county: "Ketchikan Gateway",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAKV",
        city: "Kaltag",
        name: "Kaltag Airport",
        county: "Yukon Koyukuk",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAKW",
        city: "Klawock",
        name: "Klawock Airport",
        county: "Yukon Koyukuk",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PALH",
        city: "Anchorage",
        name: "Lake Hood Airport",
        county: "Anchorage",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAMC",
        city: "McGrath",
        name: "McGrath Airport",
        county: "Yukon Koyukuk",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAMR",
        city: "Anchorage",
        name: "Merrill Field Airport",
        county: "Anchorage",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PANC",
        city: "Anchorage",
        name: "Ted Stevens International Airport",
        county: "Anchorage",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PANN",
        city: "Nenana",
        name: "Nenana Municipal Airport",
        county: "Yukon Koyukuk",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAOM",
        city: "Nome",
        name: "Nome Airport",
        county: "Nome",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAOR",
        city: "Northway",
        name: "Northway Airport",
        county: "Southeast Fairbanks",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAOT",
        city: "Kotzebue",
        name: "Ralph Wien Memorial Airport",
        county: "Northwest Arctic",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAPB",
        city: "St. George Island",
        name: "St. George Airport",
        county: "Aleutians West",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAQT",
        city: "Nuiqsut",
        name: "Nuiqsut Airport",
        county: "North Slope",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PASC",
        city: "Deadhorse",
        name: "Deadhorse Airport",
        county: "North Slope",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PASI",
        city: "Sitka",
        name: "Rocky Gutierrez Airport",
        county: "Sitka",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PASN",
        city: "St. Paul Island",
        name: "St. Paul Island Airport",
        county: "Aleutians West",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PASO",
        city: "Seldovia",
        name: "Seldovia Airport",
        county: "Kenai Peninsula",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PASY",
        city: "Shemya",
        name: "Eareckson Air Station",
        county: "Aleutians West",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PATA",
        city: "Tanana",
        name: "Ralph M Calhoun Memorial Airport",
        county: "Yukon Koyukuk",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PATK",
        city: "Talkeetna",
        name: "Talkeetna Airport",
        county: "Matanuska Susitna",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PATO",
        city: "Portage Glacier",
        name: "Portage Glacier Weather Station",
        county: "Anchorage",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAVL",
        city: "Kivalina",
        name: "Kivalina Airport",
        county: "Northwest Arctic",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAWD",
        city: "Seward",
        name: "Seward Airport",
        county: "Kenai Peninsula",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAWI",
        city: "Wainwright",
        name: "Wainwright Airport",
        county: "North Slope",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "PAYA",
        city: "Yakult",
        name: "Yakult Weather Station",
        county: "Yakutat",
        state: "Alaska",
        stateAbr: "ak"
    },
    {
        id: "KDUG",
        city: "Douglas/Bisbee",
        name: "Bisbee Douglas International Airport",
        county: "Cochise",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KDVT",
        city: "Phoenix",
        name: "Phoenix Deer Valley Airport",
        county: "Maricopa",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KFFZ",
        city: "Mesa",
        name: "Falcon Field Airport",
        county: "Maricopa",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KFHU",
        city: "Sierra Vista",
        name: "Sierra Vista Municipal Airport-Libby Army Airfield",
        county: "Cochise",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KFLG",
        city: "Flagstaff",
        name: "Flagstaff Pulliam Airport",
        county: "Coconino",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KGCN",
        city: "Grand Canyon",
        name: "Grand Canyon National Park Airport",
        county: "Coconino",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KIGM",
        city: "Kingman",
        name: "Kingman Airport",
        county: "Mohave",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KINW",
        city: "Winslow",
        name: "Winslow-Lindbergh Regional Airport",
        county: "Navajo",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KNYL",
        city: "Yuma",
        name: "Yuma International Airport",
        county: "Yuma",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KOLS",
        city: "Nogales",
        name: "Nogales International Airport",
        county: "Santa Cruz",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KPGA",
        city: "Page",
        name: "Page Municipal Airport",
        county: "Coconino",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KPHX",
        city: "Phoenix",
        name: "Phoenix Sky Harbor International Airport",
        county: "Maricopa",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KPRC",
        city: "Prescott",
        name: "Prescott Regional Airport - Ernest A Love Field",
        county: "Yavapai",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KRQE",
        city: "Window Rock",
        name: "Window Rock Airport",
        county: "Apache",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KSAD",
        city: "Safford",
        name: "Safford Regional Airport",
        county: "Graham",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KSDL",
        city: "Scottsdale",
        name: "Scottsdale Airport",
        county: "Maricopa",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KSJN",
        city: "St Johns",
        name: "St Johns Industrial Air Park",
        county: "Apache",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KTUS",
        city: "Tucson",
        name: "Tucson International",
        county: "Pima",
        state: "Arizona",
        stateAbr: "az"
    },
    {
        id: "KAWM",
        city: "West Memphis",
        name: "West Memphis Municipal Airport",
        county: "Crittenden",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KBPK",
        city: "Mountain Home",
        name: "Baxter County Airport",
        county: "Baxter",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KDEQ",
        city: "De Queen",
        name: "J Lynn Helms Sevier County Airport",
        county: "Sevier",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KELD",
        city: "El Dorado",
        name: "South Arkansas Regional Airport at Goodwin Field",
        county: "Union",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KFSM",
        city: "Fort Smith",
        name: "Fort Smith Regional Airport",
        county: "Sebastian",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KFYV",
        city: "Fayetteville",
        name: "Drake Field Airport",
        county: "Washington",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KHKA",
        city: "Blytheville",
        name: "Blytheville Municipal Airport",
        county: "Mississippi",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KHOT",
        city: "Hot Springs",
        name: "Memorial Field Airport",
        county: "Garland",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KHRO",
        city: "Harrison",
        name: "Boone County Airport",
        county: "Boone",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KJBR",
        city: "Jonesboro",
        name: "Jonesboro Municipal Airport",
        county: "Craighead",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KLIT",
        city: "Little Rock",
        name: "Bill and Hillary Clinton National Airport/Adams Field",
        county: "Pulaski",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KLLQ",
        city: "Monticello",
        name: "Monticello Municipal Airport/Ellis Field",
        county: "Drew",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KPBF",
        city: "Pine Bluff",
        name: "Pinebluff Regional Airport/Grider Field",
        county: "Jefferson",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KRUE",
        city: "Russellville",
        name: "Russellville Regional Airport",
        county: "Pope",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KTXK",
        city: "Texarkana",
        name: "Texarkana Regional Airport-Webb Field",
        county: "Miller",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KXNA",
        city: "Bentonville",
        name: "Northwest Arkansas National",
        county: "Benton",
        state: "Arkansas",
        stateAbr: "ar"
    },
    {
        id: "KAAT",
        city: "Alturas",
        name: "Alturas Municipal Airport",
        county: "Modoc",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KACV",
        city: "Arcata",
        name: "California Redwood Coast-Humboldt County Airport",
        county: "Humboldt",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KAPC",
        city: "Napa",
        name: "Napa County Airport",
        county: "Napa",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KAVX",
        city: "Avalon",
        name: "Catalina Airport",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KBFL",
        city: "Bakersfield",
        name: "Meadows Field Airport",
        county: "Kern",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KBIH",
        city: "Bishop",
        name: "Bishop Airport",
        county: "Inyo",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KBLH",
        city: "Blythe",
        name: "Blythe Airport",
        county: "Riverside",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KBLU",
        city: "Emigrant Gap",
        name: "Blue Canyon - Nyack Airport",
        county: "Placer",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KBUR",
        city: "Burbank",
        name: "Bob Hope Airport",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KCCR",
        city: "Concord",
        name: "Buchanan Field Airport",
        county: "Contra Costa",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KCEC",
        city: "Crescent City",
        name: "Jack Mc Namera Field Airport",
        county: "Del Norte",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KCMA",
        city: "Camarillo",
        name: "Camarillo Airport",
        county: "Ventura",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KCNO",
        city: "Chino",
        name: "Chino Airport",
        county: "San Bernardino",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KCRQ",
        city: "Carlsbad",
        name: "Mc Clellan-Palomar Airport",
        county: "San Diego",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KDAG",
        city: "Daggett",
        name: "Barstow-Daggett Airport",
        county: "San Bernardino",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KEED",
        city: "Needles",
        name: "Needles Airport",
        county: "San Bernardino",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KFAT",
        city: "Fresno",
        name: "Fresno Yosemite International Airport",
        county: "Fresno",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KFUL",
        city: "Fullerton",
        name: "Fullerton Municipal Airport",
        county: "Orange",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KHHR",
        city: "Hawthorne",
        name: "Jack Northrop Field/Hawthorne Municipal Airport",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KHJO",
        city: "Hanford",
        name: "Hanford Municipal Airport",
        county: "Kings",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KHWD",
        city: "Hayward",
        name: "Hayward Executive Airport",
        county: "Alameda",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KIPL",
        city: "Imperial",
        name: "Imperial County Airport",
        county: "Imperial",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KLAX",
        city: "Los Angeles",
        name: "Los Angeles International Airport",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KLGB",
        city: "Long Beach",
        name: "Long Beach Airport (Daugherty Field)",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KLVK",
        city: "Livermore",
        name: "Livermore Municipal Airport",
        county: "Alameda",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KMAE",
        city: "Madera",
        name: "Madera Municipal Airport",
        county: "Madera",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KMCE",
        city: "Merced",
        name: "Merced Yosemite Regional Airport",
        county: "Merced",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KMHS",
        city: "Mount Shasta",
        name: "Mount Shasta Weather Station",
        county: "Siskiyou",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KMOD",
        city: "Modesto",
        name: "Modesto City-County Airport-Harry Sham Field",
        county: "Stanislaus",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KMRY",
        city: "Monterey",
        name: "Monterey Regional Airport",
        county: "Monterey",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KMYF",
        city: "San Diego",
        name: "Montgomery-Gibbs Executive Airports",
        county: "San Diego",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KMYV",
        city: "Marysville",
        name: "Yuba County Airport",
        county: "Yuba",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KOAK",
        city: "Oakland",
        name: "Metro Oakland International Airport",
        county: "Alameda",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KOKB",
        city: "Oceanside",
        name: "Bob Maxwell Memorial Airfield",
        county: "San Diego",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KONT",
        city: "Ontario",
        name: "Ontario International Airport",
        county: "San Bernardino",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KOVE",
        city: "Oroville",
        name: "Oroville Municipal Airport",
        county: "Butte",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KOXR",
        city: "Oxnard",
        name: "Oxnard Airport",
        county: "Ventura",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KPMD",
        city: "Palmdale",
        name: "Palmdale USAF Plant 42 Airport",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KPRB",
        city: "Paso Robles",
        name: "Paso Robles Municipal Airport",
        county: "San Luis Obispo",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KPSP",
        city: "Palm Springs",
        name: "Palm Springs International Airport",
        county: "Riverside",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KRAL",
        city: "Riverside",
        name: "Riverside Municipal Airport",
        county: "Riverside",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KRBL",
        city: "Red Bluff",
        name: "Red Bluff Municipal Airport",
        county: "Tehama",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KRDD",
        city: "Redding",
        name: "Redding Municipal Airport",
        county: "Shasta",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KRNM",
        city: "Ramona",
        name: "Ramona Airport",
        county: "San Diego",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSAC",
        city: "Sacramento",
        name: "Sacramento Executive Airport",
        county: "Sacramento",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSAN",
        city: "San Diego",
        name: "San Diego International Airport",
        county: "San Diego",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSBA",
        city: "Santa Barbara",
        name: "Santa Barbara Municipal Airport",
        county: "Santa Barbara",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSBP",
        city: "San Luis Obispo",
        name: "San Luis County Regional Airport",
        county: "San Luis Obispo",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSCK",
        city: "Stockton",
        name: "Stockton Metro Airport",
        county: "San Joaquin",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSDB",
        city: "Sandberg",
        name: "Sandberg Weather Station",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSDM",
        city: "San Diego",
        name: "Brown Field Municipal Airport",
        county: "San Diego",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSFO",
        city: "San Francisco",
        name: "San Francisco International Airport",
        county: "San Mateo",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSIY",
        city: "Montague",
        name: "Siskiyou County Airport",
        county: "Siskiyou",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSJC",
        city: "San Jose",
        name: "Norman Y Mineta San Jose International Airport",
        county: "Santa Clara",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSMF",
        city: "Sacramento",
        name: "Sacramento International Airport",
        county: "Sacramento",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSMO",
        city: "Santa Monica",
        name: "Santa Monica Municipal Airport",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSMX",
        city: "Santa Maria",
        name: "Santa Maria Public Airport/Capt G Allan Hancock Field",
        county: "Santa Barbara",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSNA",
        city: "Santa Ana",
        name: "John Wayne/Orange County Airport",
        county: "Orange",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSNS",
        city: "Salinas",
        name: "Salinas Municipal Airport",
        county: "Monterey",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KSTS",
        city: "Santa Rosa",
        name: "Charles M Schulz - Sonoma County Airport",
        county: "Sonoma",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KTRM",
        city: "Thermal",
        name: "Jacqueline Cochran Regional Airport",
        county: "Riverside",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KTVL",
        city: "South Lake Tahoe",
        name: "Lake Tahoe Airport",
        county: "El Dorado",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KUKI",
        city: "Ukiah",
        name: "Ukiah Municipal Airport",
        county: "Mendocino",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KVCB",
        city: "Vacaville",
        name: "Nut Tree Airport",
        county: "Solano",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KVNY",
        city: "Van Nuys",
        name: "Van Nuys Airport",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KWJF",
        city: "Lancaster",
        name: "General William J. Fox Airfield",
        county: "Los Angeles",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KWVI",
        city: "Watsonville",
        name: "Watsonville Municipal Airport",
        county: "Santa Cruz",
        state: "California",
        stateAbr: "ca"
    },
    {
        id: "KAKO",
        city: "Akron",
        name: "Colorado Plains Regional AIrport",
        county: "Washington",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KALS",
        city: "Alamosa",
        name: "San Luis Valley Regional Airport/ Bergman Field",
        county: "Alamosa",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KAPA",
        city: "Denver",
        name: "Centennial Airport",
        county: "Arapahoe",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KASE",
        city: "Aspen",
        name: "Aspen-Pitkin County Airport/Sardy Field",
        county: "Pitkin",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KCAG",
        city: "Craig",
        name: "Moffat Airport",
        county: "Moffat",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KCEZ",
        city: "Cortez",
        name: "Cortez Municipal Airport",
        county: "Montezuma",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KCOS",
        city: "Colorado Springs",
        name: "City Of Colorado Springs Municipal Airport",
        county: "El Paso",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KDEN",
        city: "Denver",
        name: "Denver International Airport",
        county: "Denver",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KDRO",
        city: "Durango",
        name: "Durango-La Plata County Airport",
        county: "La Plata",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KEEO",
        city: "Meeker",
        name: "Meeker Coulter Field Airport",
        county: "Rio Blanco",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KGJT",
        city: "Grand Junction",
        name: "Grand Junction Regional Airport",
        county: "Mesa",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KITR",
        city: "Burlington",
        name: "Kit Carson County Airport",
        county: "Kit Carson",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KLAA",
        city: "Lamar",
        name: "Southeast Colorado Regional Airport",
        county: "Prowers",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KLHX",
        city: "La Junta",
        name: "La Junta Municipal Airport",
        county: "Otero",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KLIC",
        city: "Limon",
        name: "Limon Municipal Airport",
        county: "Lincoln",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KLXV",
        city: "Leadville",
        name: "Lake County Airport",
        county: "Lake",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KMTJ",
        city: "Montrose",
        name: "Montrose Regional Airport",
        county: "Montrose",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KPUB",
        city: "Pueblo",
        name: "Pueblo Memorial Airport",
        county: "Pueblo",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KRIL",
        city: "Rifle",
        name: "Rifle Garfield County Airport",
        county: "Garfield",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KTAD",
        city: "Trinidad",
        name: "Perry Stokes Airport",
        county: "Las Animas",
        state: "Colorado",
        stateAbr: "co"
    },
    {
        id: "KBDL",
        city: "Windsor Locks",
        name: "Bradley International Airport",
        county: "Hartford",
        state: "Connecticut",
        stateAbr: "ct"
    },
    {
        id: "KBDR",
        city: "Bridgeport",
        name: "Bridgeport/Sikorsky Airport",
        county: "Fairfield",
        state: "Connecticut",
        stateAbr: "ct"
    },
    {
        id: "KDXR",
        city: "Danbury",
        name: "Danbury Municipal Airport",
        county: "Fairfield",
        state: "Connecticut",
        stateAbr: "ct"
    },
    {
        id: "KGON",
        city: "Groton",
        name: "Groton-New London Airport",
        county: "New London",
        state: "Connecticut",
        stateAbr: "ct"
    },
    {
        id: "KHFD",
        city: "Hartford",
        name: "Hartford-Brainard Airport",
        county: "Hartford",
        state: "Connecticut",
        stateAbr: "ct"
    },
    {
        id: "KHVN",
        city: "New Haven",
        name: "Tweed/New Haven Airport",
        county: "New Haven",
        state: "Connecticut",
        stateAbr: "ct"
    },
    {
        id: "KIJD",
        city: "Willimantic",
        name: "Windham Airport",
        county: "Windham",
        state: "Connecticut",
        stateAbr: "ct"
    },
    {
        id: "KMMK",
        city: "Meriden",
        name: "Meriden Markham Municipal Airport",
        county: "New Haven",
        state: "Connecticut",
        stateAbr: "ct"
    },
    {
        id: "K33N",
        city: "Dover",
        name: "Delaware Airpark",
        county: "Kent",
        state: "Delaware",
        stateAbr: "de"
    },
    {
        id: "KEVY",
        city: "Middletown",
        name: "Summit Airport - Middletown",
        county: "New Castle",
        state: "Delaware",
        stateAbr: "de"
    },
    {
        id: "KGED",
        city: "Georgetown",
        name: "Delaware Coastal Airport",
        county: "Sussex",
        state: "Delaware",
        stateAbr: "de"
    },
    {
        id: "KILG",
        city: "Wilmington",
        name: "New Castle Airport",
        county: "New Castle",
        state: "Delaware",
        stateAbr: "de"
    },
    {
        id: "KDCA",
        city: "District of Columbia",
        name: "Reagan Washington National",
        county: "District of Columbia",
        state: "District of Columbia",
        stateAbr: "dc"
    },
    {
        id: "KAAF",
        city: "Apalachicola",
        name: "Apalachicola Regional Airport-Cleve Randolph Field",
        county: "Franklin",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KAPF",
        city: "Naples",
        name: "Naples Municipal Airport",
        county: "Collier",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KBCR",
        city: "Bonifay",
        name: "Tri-County Airport",
        county: "Holmes",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KBKV",
        city: "Brooksville",
        name: "Brooksville-Tampa Bay Regional Airport",
        county: "Hernando",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KCEW",
        city: "Crestview",
        name: "Bob Sikes Airport",
        county: "Okaloosa",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KCRG",
        city: "Jacksonville",
        name: "Jacksonville Executive Airport at Craig",
        county: "Duval",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KDAB",
        city: "Daytona Beach",
        name: "Daytona Beach International Airport",
        county: "Volusia",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KDTS",
        city: "Destin",
        name: "Destin Executive Airport",
        county: "Okaloosa",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KECP",
        city: "Panama City",
        name: "Northwest Florida Beaches International Airport",
        county: "Bay",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KEYW",
        city: "Key West",
        name: "Key West International Airport",
        county: "Monroe",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KFLL",
        city: "Fort Lauderdale",
        name: "Fort Lauderdale/Hollywood International Airport",
        county: "Broward",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KFMY",
        city: "Ft. Myers",
        name: "Page Field Airport",
        county: "Lee",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KFPR",
        city: "Fort Pierce",
        name: "Treasure Coast International Airport",
        county: "Saint Lucie",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KFXE",
        city: "Fort Lauderdale",
        name: "Fort Lauderdale Executive Airport",
        county: "Broward",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KGIF",
        city: "Winter Haven",
        name: "Winter Haven Regional Airport",
        county: "Polk",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KGNV",
        city: "Gainesville",
        name: "Gainesville Regional Airport",
        county: "Alachua",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KHWO",
        city: "Hollywood",
        name: "North Perry Airport",
        county: "Broward",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KJAX",
        city: "Jacksonville",
        name: "Jacksonville International Airport",
        county: "Duval",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KLEE",
        city: "Leesburg",
        name: "Leesburg International Airport",
        county: "Lake",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KMAI",
        city: "Marianna",
        name: "Marianna Municipal Airport",
        county: "Jackson",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KMCO",
        city: "Orlando",
        name: "Orlando International Airport",
        county: "Orange",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KMIA",
        city: "Miami",
        name: "Miami International Airport",
        county: "Miami-Dade",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KMLB",
        city: "Melbourne",
        name: "Melbourne Orlando International Airport",
        county: "Brevard",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KMTH",
        city: "Marathon",
        name: "The Florida Keys Marathon International Airport",
        county: "Monroe",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KOPF",
        city: "Miami",
        name: "Miami-Opa Locka Executive Airport",
        county: "Miami-Dade",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KORL",
        city: "Orlando",
        name: "Executive Airport",
        county: "Orange",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KPBI",
        city: "West Palm Beach",
        name: "Palm Beach International Airport",
        county: "Palm Beach",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KPGD",
        city: "Punta Gorda",
        name: "Punta Gorda Airport",
        county: "Charlotte",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KPIE",
        city: "St. Petersburg",
        name: "St Pete-Clearwater International Airport",
        county: "Pinellas",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KPMP",
        city: "Pompano Beach",
        name: "Pompano Beach Airpark",
        county: "Broward",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KPNS",
        city: "Pensacola",
        name: "Pensacola International Airport",
        county: "Escambia",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KRSW",
        city: "Ft. Myers",
        name: "Southwest Florida International Airport",
        county: "Lee",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KSFB",
        city: "Sanford",
        name: "Orlando Sanford International Airport",
        county: "Seminole",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KSPG",
        city: "St. Petersburg",
        name: "Albert Whitted Airport",
        county: "Pinellas",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KSRQ",
        city: "Sarasota",
        name: "Sarasota/Bradenton International Airport",
        county: "Manatee",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KTLH",
        city: "Tallahassee",
        name: "Tallahassee International Airport",
        county: "Leon",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KTMB",
        city: "Miami",
        name: "Miami Executive Airport",
        county: "Miami-Dade",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KTPA",
        city: "Tampa",
        name: "Tampa International Airport",
        county: "Hillsborough",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KVRB",
        city: "Vero Beach",
        name: "Vero Beach Regional Airport",
        county: "Indian River",
        state: "Florida",
        stateAbr: "fl"
    },
    {
        id: "KABY",
        city: "Albany",
        name: "Southwest Georgia Regional Airport",
        county: "Dougherty",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KAGS",
        city: "Augusta",
        name: "Augusta Regional Airport at Bush Field",
        county: "Richmond",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KAHN",
        city: "Athens",
        name: "Athens/Ben Epps Airport",
        county: "Clarke",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KAMG",
        city: "Alma",
        name: "Bacon County Airport",
        county: "Bacon",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KATL",
        city: "Atlanta",
        name: "Hartsfield - Jackson Atlanta International Airport",
        county: "Fulton",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KCSG",
        city: "Columbus",
        name: "Columbus Airport",
        county: "Muscogee",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KDNL",
        city: "Augusta",
        name: "Daniel Field Airport",
        county: "Richmond",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KFFC",
        city: "Atlanta",
        name: "Atlanta Regional Airport-Falcon Field",
        county: "Fayette",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KFTY",
        city: "Atlanta",
        name: "Fulton County Executive Airport/Charlie Brown Field",
        county: "Fulton",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KGVL",
        city: "Gainesville",
        name: "Lee Gilmer Memorial Airport",
        county: "Hall",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KMCN",
        city: "Macon",
        name: "Middle Georgia Regional Airport",
        county: "Bibb",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KPDK",
        city: "Atlanta",
        name: "Dekalb-Peachtree Airport",
        county: "Dekalb",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KRMG",
        city: "Rome",
        name: "Richard B. Russell Regional Airport - J.H. Towers Field",
        county: "Floyd",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KSAV",
        city: "Savannah",
        name: "Savannah/Hilton Head International Airport",
        county: "Chatham",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "KVLD",
        city: "Valdosta",
        name: "Valdosta Regional Airport",
        county: "Lowndes",
        state: "Georgia",
        stateAbr: "ga"
    },
    {
        id: "PGUM",
        city: "Agana Heights",
        name: "Agana Heights Weather Station",
        county: "Guam",
        state: "Guam",
        stateAbr: "gu"
    },
    {
        id: "PHJR",
        city: "Kalaeloa/Kapolei",
        name: "Kalaeloa Airport (John Rodgers Field)",
        county: "Honolulu",
        state: "Hawaii",
        stateAbr: "hi"
    },
    {
        id: "PHKO",
        city: "Kona",
        name: "Ellison Onizuka Kona International Airport at Keahole",
        county: "Hawaii",
        state: "Hawaii",
        stateAbr: "hi"
    },
    {
        id: "PHLI",
        city: "Lihue",
        name: "Lihue Airport",
        county: "Kauai",
        state: "Hawaii",
        stateAbr: "hi"
    },
    {
        id: "PHMK",
        city: "Molokai/Kaunakakai",
        name: "Molokai Airport",
        county: "Maui",
        state: "Hawaii",
        stateAbr: "hi"
    },
    {
        id: "PHNL",
        city: "Honolulu",
        name: "Daniel K Inouye International Airport",
        county: "Honolulu",
        state: "Hawaii",
        stateAbr: "hi"
    },
    {
        id: "PHOG",
        city: "Kahului",
        name: "Kahului Airport",
        county: "Maui",
        state: "Hawaii",
        stateAbr: "hi"
    },
    {
        id: "PHTO",
        city: "Hilo",
        name: "Hilo International Airport",
        county: "Hawaii",
        state: "Hawaii",
        stateAbr: "hi"
    },
    {
        id: "KBOI",
        city: "Boise",
        name: "Boise Air Terminal/Gowen Field",
        county: "Ada",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KBYI",
        city: "Burley",
        name: "Burley Municipal Airport",
        county: "Cassia",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KIDA",
        city: "Idaho Falls",
        name: "Idaho Falls Regional Airport",
        county: "Bonneville",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KJER",
        city: "Jerome",
        name: "Jerome County Airport",
        county: "Jerome",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KLLJ",
        city: "Challis",
        name: "Challis Airport",
        county: "Custer",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KLWS",
        city: "Lewiston",
        name: "Lewiston/Nez Perce County Airport",
        county: "Nez Perce",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KMLP",
        city: "Mullan Pass",
        name: "Mullan Pass",
        county: "Shoshone",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KMYL",
        city: "Mc Call",
        name: "Mc Call Municipal Airport",
        county: "Valley",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KPIH",
        city: "Pocatello",
        name: "Pocatello Regional Airport",
        county: "Bannock",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KRXE",
        city: "Rexburg",
        name: "Rexburg-Madison County Airport",
        county: "Madison",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KTWF",
        city: "Twin Falls",
        name: "Joslin Field/Magic Valley Regional Airport",
        county: "Twin Falls",
        state: "Idaho",
        stateAbr: "id"
    },
    {
        id: "KARR",
        city: "Chicago",
        name: "Aurora - Aurora Municipal Airport",
        county: "Kane",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KCMI",
        city: "Champaign",
        name: "University of Illinois/Willard Airport",
        county: "Champaign",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KCPS",
        city: "Cahokia",
        name: "St Louis Downtown Airport",
        county: "Saint Clair",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KDEC",
        city: "Decatur",
        name: "Decatur Airport",
        county: "Macon",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KDPA",
        city: "Chicago",
        name: "Du Page Airport",
        county: "Dupage",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KLWV",
        city: "Lawrenceville",
        name: "Lawrenceville-Vincennes International Airport",
        county: "Lawrence",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KMDH",
        city: "Carbondale",
        name: "Southern Illinois Airport",
        county: "Jackson",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KMDW",
        city: "Chicago",
        name: "Chicago Midway International Airport",
        county: "Cook",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KMLI",
        city: "Moline",
        name: "Quad Cities International Airport",
        county: "Rock Island",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KMTO",
        city: "Mattoon",
        name: "Coles County Memorial Airport",
        county: "Coles",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KORD",
        city: "Chicago",
        name: "Chicago O'Hare International Airport",
        county: "Cook",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KPIA",
        city: "Peoria",
        name: "General Downing - Peoria International Airport",
        county: "Peoria",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KPWK",
        city: "Chicago Prospect Hgts",
        name: "Chicago Executive Airport",
        county: "Cook",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KRFD",
        city: "Rockford",
        name: "Chicago/Rockford International Airport",
        county: "Winnebago",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KSPI",
        city: "Springfield",
        name: "Abraham Lincoln Capital Airport",
        county: "Sangamon",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KUGN",
        city: "Chicago",
        name: "Waukegan National Airport",
        county: "Lake",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KUIN",
        city: "Quincy",
        name: "Quincy Regional Airport-Baldwin Field",
        county: "Adams",
        state: "Illinois",
        stateAbr: "il"
    },
    {
        id: "KBMG",
        city: "Bloomington",
        name: "Monroe County Airport",
        county: "Monroe",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KEVV",
        city: "Evansville",
        name: "Evansville Regional Airport",
        county: "Vanderburgh",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KEYE",
        city: "Indianapolis",
        name: "Eagle Creek Airpark",
        county: "Marion",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KFWA",
        city: "Fort Wayne",
        name: "Fort Wayne International Airport",
        county: "Allen",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KGEZ",
        city: "Shelbyville",
        name: "Shelbyville Municipal Airport",
        county: "Shelby",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KGSH",
        city: "Goshen",
        name: "Goshen Municipal Airport",
        county: "Elkhart",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KHUF",
        city: "Terre Haute",
        name: "Terre Haute Regional Airport",
        county: "Vigo",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KIND",
        city: "Indianapolis",
        name: "Indianapolis International Airport",
        county: "Marion",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KLAF",
        city: "Lafayette",
        name: "Purdue University Airport",
        county: "Tippecanoe",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KMIE",
        city: "Muncie",
        name: "Delaware County Regional Airport",
        county: "Delaware",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KSBN",
        city: "South Bend",
        name: "South Bend International Airport",
        county: "St Joseph",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KVPZ",
        city: "Valparaiso",
        name: "Porter County Regional Airport",
        county: "Porter",
        state: "Indiana",
        stateAbr: "in"
    },
    {
        id: "KALO",
        city: "Waterloo",
        name: "Waterloo Regional Airport",
        county: "Black Hawk",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KAMW",
        city: "Ames",
        name: "Ames Municipal Airport",
        county: "Story",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KBRL",
        city: "Burlington",
        name: "Southeast Iowa Regional Airport",
        county: "Des Moines",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KCID",
        city: "Cedar Rapids",
        name: "The Eastern Iowa Airport",
        county: "Linn",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KDBQ",
        city: "Dubuque",
        name: "Dubuque Regional Airport",
        county: "Dubuque",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KDSM",
        city: "Des Moines",
        name: "Des Moines International Airport",
        county: "Polk",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KDVN",
        city: "Davenport",
        name: "Davenport Municipal Airport",
        county: "Scott",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KEST",
        city: "Estherville",
        name: "Estherville Municipal Airport",
        county: "Emmet",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KIOW",
        city: "Iowa City",
        name: "Iowa City Municipal Airport",
        county: "Johnson",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KLWD",
        city: "Lamoni",
        name: "Lamoni Municipal Airport",
        county: "Decatur",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KMCW",
        city: "Mason City",
        name: "Mason City Municipal Airport",
        county: "Cerro Gordo",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KMIW",
        city: "Marshalltown",
        name: "Marshalltown Municipal Airport",
        county: "Marshall",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KOTM",
        city: "Ottumwa",
        name: "Ottumwa Regional Airport",
        county: "Wapello",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KSPW",
        city: "Spencer",
        name: "Spencer Municipal Airport",
        county: "Clay",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KSUX",
        city: "Sioux City",
        name: "Sioux Gateway Airport/Brigadier General Bud Day Field",
        county: "Woodbury",
        state: "Iowa",
        stateAbr: "ia"
    },
    {
        id: "KAAO",
        city: "Wichita",
        name: "Colonel James Jabara Airport",
        county: "Sedgwick",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KCFV",
        city: "Coffeyville",
        name: "Coffeyville Municipal Airport",
        county: "Montgomery",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KCNK",
        city: "Concordia",
        name: "Blosser Municipal Airport",
        county: "Cloud",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KCNU",
        city: "Chanute",
        name: "Chanute Martin Johnson Airport",
        county: "Neosho",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KDDC",
        city: "Dodge City",
        name: "Dodge City Regional Airport",
        county: "Ford",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KEMP",
        city: "Emporia",
        name: "Emporia Municipal Airport",
        county: "Lyon",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KFOE",
        city: "Topeka",
        name: "Topeka Regional Airport",
        county: "Shawnee",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KGCK",
        city: "Garden City",
        name: "Garden City Regional Airport",
        county: "Finney",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KGLD",
        city: "Goodland",
        name: "Renner Field/Goodland Municipal Airport",
        county: "Sherman",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KHLC",
        city: "Hill City",
        name: "Hill City Municipal Airport",
        county: "Graham",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KHUT",
        city: "Hutchinson",
        name: "Hutchinson Regional Airport",
        county: "Reno",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KICT",
        city: "Wichita",
        name: "Wichita Dwight D Eisenhower National Airport",
        county: "Sedgwick",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KIXD",
        city: "Olathe",
        name: "New Century Air Center Airport",
        county: "Johnson",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KLWC",
        city: "Lawrence",
        name: "Lawrence Regional Airport",
        county: "Douglas",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KMHK",
        city: "Manhattan",
        name: "Manhattan Regional Airport",
        county: "Riley",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KOJC",
        city: "Olathe",
        name: "Johnson County Executive Airport",
        county: "Johnson",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KPPF",
        city: "Parsons",
        name: "Tri-City Airport",
        county: "Montgomery",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KRSL",
        city: "Russell",
        name: "Russel Municipal Airport",
        county: "Russell",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KSLN",
        city: "Salina",
        name: "Salina Regional Airport",
        county: "Saline",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KTOP",
        city: "Topeka",
        name: "Philip Billard Municipal Airport",
        county: "Shawnee",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KWLD",
        city: "Winfield",
        name: "Strother Field Airport",
        county: "Cowley",
        state: "Kansas",
        stateAbr: "ks"
    },
    {
        id: "KBWG",
        city: "Bowling Green",
        name: "Bowling Green-Warren County Regional Airport",
        county: "Warren",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KCVG",
        city: "Covington",
        name: "Cincinnati/Northern Kentucky International Airport",
        county: "Kenton",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KFFT",
        city: "Frankfort",
        name: "Capital City Airport",
        county: "Franklin",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KJKL",
        city: "Jackson",
        name: "Julian Carroll Airport",
        county: "Breathitt",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KLEX",
        city: "Lexington",
        name: "Blue Grass Airport",
        county: "Fayette",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KLOU",
        city: "Louisville",
        name: "Bowman Field Airport",
        county: "Jefferson",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KLOZ",
        city: "London",
        name: "London (Corbin) Magee Airport",
        county: "Laurel",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KPAH",
        city: "Paducah",
        name: "Barkley Regional Airport",
        county: "Mccracken",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KSDF",
        city: "Louisville",
        name: "Louisville Muhammad Ali International Airport",
        county: "Jefferson",
        state: "Kentucky",
        stateAbr: "ky"
    },
    {
        id: "KAEX",
        city: "Alexandria",
        name: "Alexandria International Airport",
        county: "Rapides",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KARA",
        city: "New Iberia",
        name: "Acadiana Regional Airport",
        county: "Iberia",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KASD",
        city: "Slidell",
        name: "Slidell Airport",
        county: "Saint Tammany",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KBTR",
        city: "Baton Rouge",
        name: "Baton Rouge Metropolitan Airport, Ryan Field",
        county: "East Baton Rouge",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KDTN",
        city: "Shreveport",
        name: "Shreveport Downtown Airport",
        county: "Bossier",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KESF",
        city: "Alexandria",
        name: "Esler Regional Airport",
        county: "Rapides",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KLCH",
        city: "Lake Charles",
        name: "Lake Charles Regional Airport",
        county: "Calcasieu",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KLFT",
        city: "Lafayette",
        name: "Lafayette Regional Airport/Paul Fournet Field",
        county: "Lafayette",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KMLU",
        city: "Monroe",
        name: "Monroe Regional Airport",
        county: "Ouachita",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KMSY",
        city: "New Orleans",
        name: "Louis Armstrong New Orleans International Airport",
        county: "Jefferson",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KNEW",
        city: "New Orleans",
        name: "Lakefront Airport",
        county: "Orleans",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KSHV",
        city: "Shreveport",
        name: "Shreveport Regional Airport",
        county: "Caddo",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KTVR",
        city: "Tallulah",
        name: "Vicksburg Tallulah Regional Airport",
        county: "Madison",
        state: "Louisiana",
        stateAbr: "la"
    },
    {
        id: "KAUG",
        city: "Augusta",
        name: "Augusta State Airport",
        county: "Kennebec",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KBGR",
        city: "Bangor",
        name: "Bangor International Airport",
        county: "Penobscot",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KCAR",
        city: "Caribou",
        name: "Caribou Municipal Airport",
        county: "Aroostook",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KFVE",
        city: "Frenchville",
        name: "Northern Aroostook Regional Airport",
        county: "Aroostook",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KHUL",
        city: "Houlton",
        name: "Houlton International Airport",
        county: "Aroostook",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KIWI",
        city: "Wiscasset",
        name: "Wiscasset Airport",
        county: "Lincoln",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KIZG",
        city: "Fryeburg",
        name: "Eastern Slopes Regional Airport",
        county: "Oxford",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KMLT",
        city: "Millinocket",
        name: "Millinocket Municipal Airport",
        county: "Penobscot",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KPWM",
        city: "Portland",
        name: "Portland International Jetport",
        county: "Cumberland",
        state: "Maine",
        stateAbr: "me"
    },
    {
        id: "KBWI",
        city: "Baltimore",
        name: "Baltimore/Washington International Thurgood Marshall Airport",
        county: "Anne Arundel",
        state: "Maryland",
        stateAbr: "md"
    },
    {
        id: "KHGR",
        city: "Hagerstown",
        name: "Hagerstown Regional Airport-Richard A Henson Field",
        county: "Washington",
        state: "Maryland",
        stateAbr: "md"
    },
    {
        id: "KOXB",
        city: "Ocean City",
        name: "Ocean City Municipal Airport",
        county: "Worcester",
        state: "Maryland",
        stateAbr: "md"
    },
    {
        id: "KSBY",
        city: "Salisbury",
        name: "Salisbury-Ocean City Wicomico Regional Airport",
        county: "Wicomico",
        state: "Maryland",
        stateAbr: "md"
    },
    {
        id: "KACK",
        city: "Nantucket",
        name: "Nantucket Memorial Airport",
        county: "Nantucket",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KAQW",
        city: "North Adams",
        name: "Harriman-And-West Airport",
        county: "Berkshire",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KBAF",
        city: "Westfield",
        name: "Westfield-Barnes Regional Airport",
        county: "Hampden",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KBED",
        city: "Bedford",
        name: "Laurence G Hanscom Field Airport",
        county: "Middlesex",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KBOS",
        city: "Boston",
        name: "General Edward Lawrence Logan International Airport",
        county: "Suffolk",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KBVY",
        city: "Beverly",
        name: "Beverly Regional Airport",
        county: "Essex",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KCQX",
        city: "Chatham",
        name: "Chatham Municipal Airport",
        county: "Barnstable",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KEWB",
        city: "New Bedford",
        name: "New Bedford Regional Airport",
        county: "Bristol",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KFIT",
        city: "Fitchburg",
        name: "Fitchburg Municipal Airport",
        county: "Worcester",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KHYA",
        city: "Hyannis",
        name: "Cape Cod Gateway Airport",
        county: "Barnstable",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KLWM",
        city: "Lawrence",
        name: "Lawrence Municipal Airport",
        county: "Essex",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KMVY",
        city: "Martha's Vineyard",
        name: "Martha's Vineyard Airport",
        county: "Dukes",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KORE",
        city: "Orange",
        name: "Orange Municipal Airport",
        county: "Franklin",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KORH",
        city: "Worcester",
        name: "Worcester Regional Airport",
        county: "Worcester",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KOWD",
        city: "Norwood",
        name: "Norwood Memorial Airport",
        county: "Norfolk",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KPSF",
        city: "Pittsfield",
        name: "Pittsfield Municipal Airport",
        county: "Berkshire",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KPYM",
        city: "Plymouth",
        name: "Plymouth Municipal Airport",
        county: "Plymouth",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KTAN",
        city: "Taunton",
        name: "Taunton Municipal Airport - King Field",
        county: "Bristol",
        state: "Massachusetts",
        stateAbr: "ma"
    },
    {
        id: "KADG",
        city: "Adrian",
        name: "Lenawee County Airport",
        county: "Lenawee",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KANJ",
        city: "Sault Ste Marie",
        name: "Sault Ste Marie Municipal Airport/Sanderson Field",
        county: "Chippewa",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KAPN",
        city: "Alpena",
        name: "Alpena County Regional Airport",
        county: "Alpena",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KARB",
        city: "Ann Arbor",
        name: "Ann Arbor Municipal Airport",
        county: "Washtenaw",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KAZO",
        city: "Kalamazoo",
        name: "Kalamazoo/Battle Creek International Airport",
        county: "Kalamazoo",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KBEH",
        city: "Benton Harbor",
        name: "Southwest Michigan Regional Airport",
        county: "Berrien",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KBIV",
        city: "Holland",
        name: "West Michigan Regional Airport",
        county: "Ottawa",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KBTL",
        city: "Battle Creek",
        name: "Battle Creek Executive Airport at Kellogg Field",
        county: "Calhoun",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KCMX",
        city: "Hancock",
        name: "Houghton County Memorial Airport",
        county: "Houghton",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KDET",
        city: "Detroit",
        name: "Coleman A. Young Memorial AIrport",
        county: "Wayne",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KDTW",
        city: "Detroit",
        name: "Detroit Metro Wayne County Airport",
        county: "Wayne",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KFNT",
        city: "Flint",
        name: "Bishop International Airport",
        county: "Genesee",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KGLR",
        city: "Gaylord",
        name: "Gaylord Regional Airport",
        county: "Otsego",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KGRR",
        city: "Grand Rapids",
        name: "Gerald R Ford International Airport",
        county: "Kent",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KHTL",
        city: "Houghton Lake",
        name: "Roscommon County - Blodgett Memorial Airport",
        county: "Roscommon",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KIMT",
        city: "Iron Mountain",
        name: "Ford Airport",
        county: "Dickinson",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KJXN",
        city: "Jackson",
        name: "Jackson County Airport/Reynolds Field",
        county: "Jackson",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KLAN",
        city: "Lansing",
        name: "Capital Region International Airport",
        county: "Ingham",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KMBS",
        city: "Saginaw",
        name: "MBS International Airport",
        county: "Saginaw",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KMKG",
        city: "Muskegon",
        name: "Muskegon County Airport",
        county: "Muskegon",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KPLN",
        city: "Pellston",
        name: "Pellston Regional/Emmet County Airport",
        county: "Emmet",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KPTK",
        city: "Pontiac",
        name: "Oakland County International Airport",
        county: "Oakland",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KTVC",
        city: "Traverse City",
        name: "Cherry Capital Airport",
        county: "Grand Traverse",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KYIP",
        city: "Detroit",
        name: "Willow Run Airport",
        county: "Wayne",
        state: "Michigan",
        stateAbr: "mi"
    },
    {
        id: "KAXN",
        city: "Alexandria",
        name: "Chandler Field Airport",
        county: "Douglas",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KBDE",
        city: "Baudette",
        name: "Baudette International Airport",
        county: "Lake Of The Woods",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KBRD",
        city: "Brainerd Lakes",
        name: "Brainerd Lakes Regional Airport",
        county: "Crow Wing",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KDLH",
        city: "Duluth",
        name: "Duluth International Airport",
        county: "Saint Louis",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KFCM",
        city: "Minneapolis",
        name: "Flying Cloud Airport",
        county: "Hennepin",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KHIB",
        city: "Hibbing",
        name: "Range Regional Airport",
        county: "Saint Louis",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KINL",
        city: "International Falls",
        name: "Falls International Airport-Einarson Field",
        county: "Koochiching",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KMIC",
        city: "Minneapolis",
        name: "Crystal Airport",
        county: "Hennepin",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KMSP",
        city: "Minneapolis",
        name: "Minneapolis-St Paul International/Wold-Chamberlain Airport",
        county: "Hennepin",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KPKD",
        city: "Park Rapids",
        name: "Park Rapids Municipal Airport-Konshok Field",
        county: "Hubbard",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KRST",
        city: "Rochester",
        name: "Rochester International Airport",
        county: "Olmsted",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KRWF",
        city: "Redwood Falls",
        name: "Redwood Falls Municipal Airport",
        county: "Redwood",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KSTC",
        city: "St. Cloud",
        name: "St Cloud Regional Airport",
        county: "Benton",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KSTP",
        city: "St. Paul",
        name: "St Paul Downtown Airport Holman Field",
        county: "Ramsey",
        state: "Minnesota",
        stateAbr: "mn"
    },
    {
        id: "KGLH",
        city: "Greenville",
        name: "Greenville Mid-Delta Airport",
        county: "Washington",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KGPT",
        city: "Gulfport",
        name: "Gulfport-Biloxi International Airport",
        county: "Harrison",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KGWO",
        city: "Greenwood",
        name: "Greenwood-Leflore Airport",
        county: "Tallahatchie",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KHBG",
        city: "Hattiesburg",
        name: "Hattiesburg Bobby L Chain Municipal Airport",
        county: "Forrest",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KHKS",
        city: "Jackson",
        name: "Hawkins Field Airport",
        county: "Hinds",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KJAN",
        city: "Jackson",
        name: "Jackson-Medgar Wiley Evers International Airport",
        county: "Rankin",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KMCB",
        city: "Mc Comb",
        name: "Mc Comb (Pike County) Airport/John E Lewis Field",
        county: "Pike",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KMEI",
        city: "Meridian",
        name: "Key Field Airport",
        county: "Lauderdale",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KPQL",
        city: "Pascagoula",
        name: "Trent Lott International Airport",
        county: "Jackson",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KTUP",
        city: "Tupelo",
        name: "Tupelo Regional Airport",
        county: "Lee",
        state: "Mississippi",
        stateAbr: "ms"
    },
    {
        id: "KCGI",
        city: "Cape Girardeau",
        name: "Cape Girardeau Regional Airport",
        county: "Scott",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KCOU",
        city: "Columbia",
        name: "Columbia Regional Airport",
        county: "Boone",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KDMO",
        city: "Sedalia",
        name: "Sedalia Regional Airport",
        county: "Pettis",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KIRK",
        city: "Kirksville",
        name: "Kirksville Regional Airport",
        county: "Adair",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KJEF",
        city: "Jefferson City",
        name: "Jefferson City Memorial Airport",
        county: "Callaway",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KJLN",
        city: "Joplin",
        name: "Joplin Regional Airport",
        county: "Jasper",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KLXT",
        city: "Lee's Summit",
        name: "Lee's Summit Municipal Airport",
        county: "Jackson",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KMCI",
        city: "Kansas City",
        name: "Kansas City International Airport",
        county: "Platte",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KMKC",
        city: "Kansas City",
        name: "Charles B Wheeler Downtown Airport",
        county: "Clay",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KPOF",
        city: "Poplar Bluff",
        name: "Poplar Bluff Regional Business Airport",
        county: "Butler",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KSET",
        city: "St. Charles",
        name: "St Charles County Smartt Airport",
        county: "Saint Charles",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KSGF",
        city: "Springfield",
        name: "Springfield-Branson National Airport",
        county: "Greene",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KSTJ",
        city: "St. Joseph",
        name: "Rosecrans Memorial Airport",
        county: "Buchanan",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KSTL",
        city: "St. Louis",
        name: "St Louis Lambert International Airport",
        county: "Saint Louis",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KSUS",
        city: "St. Louis",
        name: "Spirit of St Louis Airport",
        county: "Saint Louis",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KUNO",
        city: "West Plains",
        name: "West Plains Regional Airport",
        county: "Howell",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KVIH",
        city: "Rolla",
        name: "Rolla National Airport",
        county: "Maries",
        state: "Missouri",
        stateAbr: "mo"
    },
    {
        id: "KBHK",
        city: "Baker",
        name: "Baker Municipal Airport",
        county: "Fallon",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KBIL",
        city: "Billings",
        name: "Billings Logan International Airport",
        county: "Yellowstone",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KBTM",
        city: "Butte",
        name: "Bert Mooney Airport",
        county: "Silver Bow",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KBZN",
        city: "Bozeman",
        name: "Bozeman Yellowstone International Airport",
        county: "Gallatin",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KCTB",
        city: "Cut Bank",
        name: "Cut Bank International Airport",
        county: "Glacier",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KDLN",
        city: "Dillon",
        name: "Dillon Airport",
        county: "Beaverhead",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KGGW",
        city: "Glasgow",
        name: "Wokal Field/Glasgow-Valley County Airport",
        county: "Valley",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KGPI",
        city: "Kalispell",
        name: "Glacier Park International Airport",
        county: "Flathead",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KGTF",
        city: "Great Falls",
        name: "Great Falls International Airport",
        county: "Cascade",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KHLN",
        city: "Helena",
        name: "Helena Regional Airport",
        county: "Lewis And Clark",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KHVR",
        city: "Havre City",
        name: "Havre City-County Airport",
        county: "Hill",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KLVM",
        city: "Livingston",
        name: "Mission Field Airport",
        county: "Park",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KLWT",
        city: "Lewistown",
        name: "Lewistown Municipal Airport",
        county: "Fergus",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KMLS",
        city: "Miles City",
        name: "Frank Wiley Field Airport",
        county: "Custer",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KMSO",
        city: "Missoula",
        name: "Missoula Montana Airport",
        county: "Missoula",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KOLF",
        city: "Wolf Point",
        name: "L.M. Clayton Airport",
        county: "Roosevelt",
        state: "Montana",
        stateAbr: "mt"
    },
    {
        id: "KAIA",
        city: "Alliance",
        name: "Alliance Municipal Airport",
        county: "Box Butte",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KBBW",
        city: "Broken Bow",
        name: "Broken Bow Municipal Airport/Keith Glaze Field",
        county: "Custer",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KBFF",
        city: "Scottsbluff",
        name: "Western Nebraska Regional Airport/William B. Heilig Field",
        county: "Scotts Bluff",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KCDR",
        city: "Chadron",
        name: "Chadron Municipal Airport",
        county: "Dawes",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KFNB",
        city: "Falls City",
        name: "Brenner Field Airport",
        county: "Richardson",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KGRI",
        city: "Grand Island",
        name: "Central Nebraska Regional Airport",
        county: "Hall",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KHSI",
        city: "Hastings",
        name: "Hastings Municipal Airport",
        county: "Adams",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KIML",
        city: "Imperial",
        name: "Imperial Municipal Airport",
        county: "Chase",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KLBF",
        city: "North Platte",
        name: "North Platte Regional Airport/Lee Bird Field",
        county: "Lincoln",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KLNK",
        city: "Lincoln",
        name: "Lincoln Airport",
        county: "Lancaster",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KMCK",
        city: "Mc Cook",
        name: "Mc Cook Ben Nelson Regional Airport",
        county: "Red Willow",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KODX",
        city: "Ord",
        name: "Evelyn Sharp Field Airport",
        county: "Valley",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KOFK",
        city: "Norfolk",
        name: "Norfolk Regional Airport/Karl Stefan Memorial Field",
        county: "Madison",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KOMA",
        city: "Omaha",
        name: "Eppley Airfield",
        county: "Douglas",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KSNY",
        city: "Sidney",
        name: "Sidney Municipal Airport/Lloyd W. Carr Field",
        county: "Cheyenne",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KTQE",
        city: "Tekamah",
        name: "Tekamah Municipal Airport",
        county: "Burt",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KVTN",
        city: "Valentine",
        name: "Miller Field Airport",
        county: "Cherry",
        state: "Nebraska",
        stateAbr: "ne"
    },
    {
        id: "KEKO",
        city: "Elko",
        name: "Elko Regional Airport",
        county: "Elko",
        state: "Nevada",
        stateAbr: "nv"
    },
    {
        id: "KELY",
        city: "Ely",
        name: "Ely Airport/Yelland Field",
        county: "White Pine",
        state: "Nevada",
        stateAbr: "nv"
    },
    {
        id: "KLAS",
        city: "Las Vegas",
        name: "Harry Reid International Airport",
        county: "Clark",
        state: "Nevada",
        stateAbr: "nv"
    },
    {
        id: "KLOL",
        city: "Lovelock",
        name: "Derby Field Airport",
        county: "Pershing",
        state: "Nevada",
        stateAbr: "nv"
    },
    {
        id: "KRNO",
        city: "Reno",
        name: "Reno/Tahoe International Airport",
        county: "Washoe",
        state: "Nevada",
        stateAbr: "nv"
    },
    {
        id: "KTPH",
        city: "Tonopah",
        name: "Tonopah Airport",
        county: "Nye",
        state: "Nevada",
        stateAbr: "nv"
    },
    {
        id: "KVGT",
        city: "North Las Vegas",
        name: "North Las Vegas Airport",
        county: "Clark",
        state: "Nevada",
        stateAbr: "nv"
    },
    {
        id: "KWMC",
        city: "Winnemucca",
        name: "Winnemucca Municipal Airport",
        county: "Humboldt",
        state: "Nevada",
        stateAbr: "nv"
    },
    {
        id: "KAFN",
        city: "Jaffrey",
        name: "Jaffrey Airfield Silver Ranch",
        county: "Cheshire",
        state: "New Hampshire",
        stateAbr: "nh"
    },
    {
        id: "KBML",
        city: "Berlin",
        name: "Berlin Regional Airport",
        county: "Coos",
        state: "New Hampshire",
        stateAbr: "nh"
    },
    {
        id: "KCON",
        city: "Concord",
        name: "Concord Municipal Airport",
        county: "Merrimack",
        state: "New Hampshire",
        stateAbr: "nh"
    },
    {
        id: "KDAW",
        city: "Rochester",
        name: "Skyhaven Airport",
        county: "Strafford",
        state: "New Hampshire",
        stateAbr: "nh"
    },
    {
        id: "KHIE",
        city: "Whitefield",
        name: "Mount Washington Regional Airport",
        county: "Coos",
        state: "New Hampshire",
        stateAbr: "nh"
    },
    {
        id: "KLEB",
        city: "Lebanon",
        name: "Lebanon Municipal Airport",
        county: "Grafton",
        state: "New Hampshire",
        stateAbr: "nh"
    },
    {
        id: "KMHT",
        city: "Manchester",
        name: "Manchester Boston Regional Airport",
        county: "Hillsborough",
        state: "New Hampshire",
        stateAbr: "nh"
    },
    {
        id: "KACY",
        city: "Atlantic City",
        name: "Atlantic City International Airport",
        county: "Atlantic",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KCDW",
        city: "Caldwell",
        name: "Essex County Airport",
        county: "Essex",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KEWR",
        city: "Newark",
        name: "Newark Liberty International Airport",
        county: "Essex",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KFWN",
        city: "Sussex",
        name: "Sussex Airport",
        county: "Sussex",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KMIV",
        city: "Millville",
        name: "Millville Municipal Airport",
        county: "Cumberland",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KSMQ",
        city: "Somerville",
        name: "Somerset Airport",
        county: "Somerset",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KTEB",
        city: "Teterboro",
        name: "Somerset Airport",
        county: "Bergen",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KTTN",
        city: "Trenton",
        name: "Trenton Mercer Airport",
        county: "Mercer",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KVAY",
        city: "Mount Holly",
        name: "South Jersey Regional Airport",
        county: "Burlington",
        state: "New Jersey",
        stateAbr: "nj"
    },
    {
        id: "KABQ",
        city: "Albuquerque",
        name: "Albuquerque International Sunport Airport",
        county: "Bernalillo",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KCAO",
        city: "Clayton",
        name: "Clayton Municipal Airpark",
        county: "Union",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KCNM",
        city: "Carlsbad",
        name: "Cavern City Air Terminal",
        county: "Eddy",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KDMN",
        city: "Deming",
        name: "Deming Municipal Airport",
        county: "Luna",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KFMN",
        city: "Farmington",
        name: "Four Corners Regional Airport",
        county: "San Juan",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KGUP",
        city: "Gallup",
        name: "Gallup Municipal Airport",
        county: "Mckinley",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KLVS",
        city: "Las Vegas",
        name: "Las Vegas Municipal Airport",
        county: "San Miguel",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KROW",
        city: "Roswell",
        name: "Roswell Air Center Airport",
        county: "Chaves",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KRTN",
        city: "Raton",
        name: "Raton Municipal Airport/Crews Field",
        county: "Colfax",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KSAF",
        city: "Santa Fe",
        name: "Santa Fe Municipal Airport",
        county: "Santa Fe",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KTCC",
        city: "Tucumcari",
        name: "Tucumcari Municipal Airport",
        county: "Quay",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KTCS",
        city: "Truth Or Consequences",
        name: "Truth or Consequences Municipal Airport",
        county: "Sierra",
        state: "New Mexico",
        stateAbr: "nm"
    },
    {
        id: "KALB",
        city: "Albany",
        name: "Albany International Airport",
        county: "Albany",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KART",
        city: "Watertown",
        name: "Watertown International Airport",
        county: "Jefferson",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KBGM",
        city: "Binghamton",
        name: "Greater Binghamton Airport/Edwin A Link Field",
        county: "Broome",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KBUF",
        city: "Buffalo",
        name: "Buffalo Niagara International Airport",
        county: "Erie",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KDKK",
        city: "Dunkirk",
        name: "Chautauqua County/Dunkirk Airport",
        county: "Chautauqua",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KDSV",
        city: "Dansville",
        name: "Dansville Municipal Airport",
        county: "Livingston",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KELM",
        city: "Elmira",
        name: "Elmira/Corning Regional Airport",
        county: "Chemung",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KELZ",
        city: "Wellsville",
        name: "Wellsville Municipal Airport/Tarantine Field",
        county: "Allegany",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KFOK",
        city: "Francis Gabreski Airport",
        name: "Francis Gabreski Airport",
        county: "Suffolk",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KFRG",
        city: "Farmingdale",
        name: "Republic Airport",
        county: "Nassau",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KFZY",
        city: "Fulton",
        name: "Oswego County Airport",
        county: "Oswego",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KGFL",
        city: "Glens Falls",
        name: "Floyd Bennett Memorial Airport",
        county: "Warren",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KHPN",
        city: "White Plains",
        name: "Westchester County Airport",
        county: "Westchester",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KHWV",
        city: "Shirley",
        name: "Brookhaven Airport",
        county: "Suffolk",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KIAG",
        city: "Niagara Falls",
        name: "Niagara Falls International Airport",
        county: "Niagara",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KISP",
        city: "Islip",
        name: "Long Island Mac Arthur Airport",
        county: "Suffolk",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KJFK",
        city: "New York",
        name: "John F. Kennedy International Airport",
        county: "Queens",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KLGA",
        city: "New York",
        name: "La Guardia Airport",
        county: "Queens",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KMGJ",
        city: "Montgomery",
        name: "Orange County Airport",
        county: "Orange",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KMSS",
        city: "Massena",
        name: "Massena International Airport-Richards Field",
        county: "Saint Lawrence",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KPBG",
        city: "Plattsburgh",
        name: "Plattsburgh International Airport",
        county: "Clinton",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KPEO",
        city: "Penn Yan",
        name: "Penn Yan Airport",
        county: "Yates",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KPOU",
        city: "Poughkeepsie",
        name: "Hudson Valley Regional Airport",
        county: "Dutchess",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KRME",
        city: "Rome",
        name: "Griffiss International Airport",
        county: "Oneida",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KROC",
        city: "Rochester",
        name: "Frederick Douglass/Greater Rochester International Airport",
        county: "Monroe",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KSLK",
        city: "Saranac Lake",
        name: "Adirondack Regional Airport",
        county: "Franklin",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KSYR",
        city: "Syracuse",
        name: "Syracuse Hancock International Airport",
        county: "Onondaga",
        state: "New York",
        stateAbr: "ny"
    },
    {
        id: "KAKH",
        city: "Gastonia",
        name: "Gastonia Municipal Airport",
        county: "Gaston",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KAVL",
        city: "Asheville",
        name: "Asheville Regional Airport",
        county: "Buncombe",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KBUY",
        city: "Burlington",
        name: "Burlington/Alamance Regional Airport",
        county: "Alamance",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KCLT",
        city: "Charlotte",
        name: "Charlotte/Douglas International Airport",
        county: "Mecklenburg",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KECG",
        city: "Elizabeth City",
        name: "Elizabeth City Coast Guard Air Station/Regional Airport",
        county: "Pasquotank",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KEQY",
        city: "Monroe",
        name: "Charlotte-Monroe Executive Airport",
        county: "Union",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KEWN",
        city: "New Bern",
        name: "Coastal Carolina Regional Airport",
        county: "Craven",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KFAY",
        city: "Fayetteville",
        name: "Fayetteville Regional Airport/Grannis Field",
        county: "Cumberland",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KGSO",
        city: "Greensboro",
        name: "Piedmont Triad International Airport",
        county: "Guilford",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KHKY",
        city: "Hickory",
        name: "Hickory Regional Airport",
        county: "Catawba",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KHSE",
        city: "Hatteras",
        name: "Billy Mitchell Airport",
        county: "Dare",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KILM",
        city: "Wilmington",
        name: "Wilmington International Airport",
        county: "New Hanover",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KINT",
        city: "Winston Salem",
        name: "Smith Reynolds Airport",
        county: "Forsyth",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KLBT",
        city: "Lumberton",
        name: "Lumberton Regional Airport",
        county: "Robeson",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KMEB",
        city: "Maxton",
        name: "Laurinburg/Maxton Airport",
        county: "Scotland",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KMRH",
        city: "Beaufort",
        name: "Michael J Smith Field Airport",
        county: "Carteret",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KNCA",
        city: "New River",
        name: "McCutcheon Field",
        county: "Onslow",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KRDU",
        city: "Raleigh",
        name: "Raleigh-Durham International Airport",
        county: "Wake",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KRWI",
        city: "Rocky Mount",
        name: "Rocky Mount/Wilson Regional Airport",
        county: "Wilson",
        state: "North Carolina",
        stateAbr: "nc"
    },
    {
        id: "KBIS",
        city: "Bismarck",
        name: "Bismarck Municipal Airport",
        county: "Burleigh",
        state: "North Dakota",
        stateAbr: "nd"
    },
    {
        id: "KDIK",
        city: "Dickinson",
        name: "Dickinson/Theodore Roosevelt Regional Airport",
        county: "Stark",
        state: "North Dakota",
        stateAbr: "nd"
    },
    {
        id: "KFAR",
        city: "Fargo",
        name: "Hector International Airport",
        county: "Cass",
        state: "North Dakota",
        stateAbr: "nd"
    },
    {
        id: "KGFK",
        city: "Grand Forks",
        name: "Grand Forks International Airport",
        county: "Grand Forks",
        state: "North Dakota",
        stateAbr: "nd"
    },
    {
        id: "KHEI",
        city: "Hettinger",
        name: "Hettinger/JB Lindquist Regional Airport",
        county: "Adams",
        state: "North Dakota",
        stateAbr: "nd"
    },
    {
        id: "KJMS",
        city: "Jamestown",
        name: "Jamestown Regional Airport",
        county: "Stutsman",
        state: "North Dakota",
        stateAbr: "nd"
    },
    {
        id: "KMOT",
        city: "Minot",
        name: "Minot International Airport",
        county: "Ward",
        state: "North Dakota",
        stateAbr: "nd"
    },
    {
        id: "KXWA",
        city: "Williston",
        name: "Williston Basin International Airport",
        county: "Williams",
        state: "North Dakota",
        stateAbr: "nd"
    },
    {
        id: "PGSN",
        city: "Obyan",
        name: "Francisco C Ada/Saipan International Airport",
        county: "Northern Mariana Islands",
        state: "Northern Mariana Islands",
        stateAbr: "mp"
    },
    {
        id: "KAKR",
        city: "Akron",
        name: "Akron Fulton International Airport",
        county: "Summit",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KAOH",
        city: "Lima",
        name: "Lima Allen County Airport",
        county: "Allen",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KBJJ",
        city: "Wooster",
        name: "Wayne County Airport",
        county: "Wayne",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KBKL",
        city: "Cleveland",
        name: "Burke Lakefront Airport",
        county: "Cuyahoga",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KCAK",
        city: "Akron",
        name: "Akron-Canton Regional Airport",
        county: "Stark",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KCLE",
        city: "Cleveland",
        name: "Cleveland-Hopkins International Airport",
        county: "Cuyahoga",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KCMH",
        city: "Columbus",
        name: "John Glenn Columbus International Airport",
        county: "Franklin",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KDAY",
        city: "Dayton",
        name: "James M Cox Dayton International Airport",
        county: "Montgomery",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KDFI",
        city: "Defiance",
        name: "Defiance Memorial Airport",
        county: "Defiance",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KFDY",
        city: "Findlay",
        name: "Findlay Airport",
        county: "Hancock",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KHAO",
        city: "Hamilton",
        name: "Butler County Regional Airport/Hogan Field",
        county: "Butler",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KHZY",
        city: "Ashtabula",
        name: "Northeast Ohio Regional Airport",
        county: "Ashtabula",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KILN",
        city: "Wilmington",
        name: "Wilmington Air Park",
        county: "Clinton",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KLHQ",
        city: "Lancaster",
        name: "Fairfield County Airport",
        county: "Fairfield",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KLPR",
        city: "Lorain-Elyria",
        name: "Lorain County Regional Airport",
        county: "Lorain",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KLUK",
        city: "Cincinnati",
        name: "Cincinnati Municipal Airport/Lunken Field",
        county: "Hamilton",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KMFD",
        city: "Mansfield",
        name: "Mansfield Lahm Regional Airport",
        county: "Richland",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KMGY",
        city: "Dayton",
        name: "Dayton/Wright Brothers Airport",
        county: "Montgomery",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KMNN",
        city: "Marion",
        name: "Marion Municipal Airport",
        county: "Marion",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KOSU",
        city: "Columbus",
        name: "Ohio State University Airport",
        county: "Franklin",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KPHD",
        city: "New Philadelphia",
        name: "Harry Clever Field Airport",
        county: "Tuscarawas",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KTDZ",
        city: "Toledo",
        name: "Toledo Executive Airport",
        county: "Wood",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KTOL",
        city: "Toledo",
        name: "Eugene F Kranz Toledo Express Airport",
        county: "Fulton",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KVTA",
        city: "Newark",
        name: "Newark-Heath Airport",
        county: "Licking",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KYNG",
        city: "Youngstown",
        name: "Youngstown/Warren Regional Airport",
        county: "Trumbull",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KZZV",
        city: "Zanesville",
        name: "Zanesville Municipal Airport",
        county: "Muskingum",
        state: "Ohio",
        stateAbr: "oh"
    },
    {
        id: "KBVO",
        city: "Bartlesville",
        name: "Bartlesville Municipal Airport",
        county: "Washington",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KCSM",
        city: "Clinton",
        name: "Clinton/Sherman Airport",
        county: "Washita",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KFDR",
        city: "Frederick",
        name: "Frederick Regional Airport",
        county: "Tillman",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KGAG",
        city: "Gage",
        name: "Gage Airport",
        county: "Ellis",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KGOK",
        city: "Guthrie",
        name: "Guthrie/Edmond Regional Airport",
        county: "Logan",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KGUY",
        city: "Guymon",
        name: "Guymon Municipal Airport",
        county: "Texas",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KHBR",
        city: "Hobart",
        name: "Hobart Regional Airport",
        county: "Kiowa",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KLAW",
        city: "Lawton",
        name: "Lawton-Fort Sill Regional Airport",
        county: "Comanche",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KMKO",
        city: "Muskogee",
        name: "Muskogee-Davis Regional Airport",
        county: "Muskogee",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KMLC",
        city: "Mc Alester",
        name: "Mc Alester Regional Airport",
        county: "Pittsburg",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KOKC",
        city: "Oklahoma City",
        name: "Will Rogers World Airport",
        county: "Oklahoma",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KPNC",
        city: "Ponca City",
        name: "Ponca City Regional Airport",
        county: "Kay",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KPWA",
        city: "Oklahoma City",
        name: "Wiley Post Airport",
        county: "Oklahoma",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KRVS",
        city: "Tulsa",
        name: "ulsa Riverside Airport",
        county: "Tulsa",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KSWO",
        city: "Stillwater",
        name: "Stillwater Regional Airport",
        county: "Payne",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KTUL",
        city: "Tulsa",
        name: "Tulsa International Airport",
        county: "Tulsa",
        state: "Oklahoma",
        stateAbr: "ok"
    },
    {
        id: "KAST",
        city: "Astoria",
        name: "Astoria Regional Airport",
        county: "Clatsop",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KBKE",
        city: "Baker",
        name: "Baker City Municipal Airport",
        county: "Baker",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KBNO",
        city: "Burns",
        name: "Burns Municipal Airport",
        county: "Harney",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KDLS",
        city: "Dallesport",
        name: "The Dalles - Columbia Gorge Regional/The Dalles Municipal Airport",
        county: "Klickitat",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KEUG",
        city: "Eugene",
        name: "Mahlon Sweet Field Airport",
        county: "Lane",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KHIO",
        city: "Hillsboro",
        name: "Portland-Hillsboro Airport",
        county: "Washington",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KHRI",
        city: "Hermiston",
        name: "Hermiston Municipal Airport",
        county: "Umatilla",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KLMT",
        city: "Klamath Falls",
        name: "Crater Lake/Klamath Regional Airport",
        county: "Klamath",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KMEH",
        city: "Meacham",
        name: "Meacham Weather Station",
        county: "Umatilla",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KMFR",
        city: "Medford",
        name: "Rogue Valley International - Medford Airport",
        county: "Jackson",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KMMV",
        city: "Mc Minnville",
        name: "Mc Minnville Municipal Airport",
        county: "Yamhill",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KONO",
        city: "Ontario",
        name: "Ontario Municipal Airport",
        county: "Malheur",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KPDT",
        city: "Pendleton",
        name: "Eastern Oregon Regional Airport at Pendleton",
        county: "Umatilla",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KPDX",
        city: "Portland",
        name: "Portland International Airport",
        county: "Multnomah",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KRBG",
        city: "Roseburg",
        name: "Roseburg Regional Airport",
        county: "Douglas",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KRDM",
        city: "Redmond",
        name: "Roberts Field Airport",
        county: "Deschutes",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KSLE",
        city: "Salem",
        name: "McNary Field Airport",
        county: "Marion",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KSPB",
        city: "Scappoose",
        name: "Scappoose Airport",
        county: "Columbia",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KSXT",
        city: "Sexton Summit",
        name: "Sexton Summit Weather Station",
        county: "Josephine",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KTTD",
        city: "Troutdale",
        name: "Portland-Troutdale Airport",
        county: "Multnomah",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KUAO",
        city: "Aurora",
        name: "Aurora State Airport",
        county: "Marion",
        state: "Oregon",
        stateAbr: "or"
    },
    {
        id: "KABE",
        city: "Allentown",
        name: "Lehigh Valley International Airport",
        county: "Lehigh",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KAGC",
        city: "Pittsburgh",
        name: "Allegheny County Airport",
        county: "Allegheny",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KAOO",
        city: "Altoona",
        name: "Altoona/Blair County Airport",
        county: "Blair",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KAVP",
        city: "Wilkes-Barre",
        name: "Wilkes-Barre/Scranton International Airport",
        county: "Luzerne",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KBFD",
        city: "Bradford",
        name: "Bradford Regional Airport",
        county: "Mckean",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KCXY",
        city: "Harrisburg",
        name: "Capital City Airport",
        county: "Cumberland",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KDUJ",
        city: "Dubois",
        name: "Dubois Regional Airport",
        county: "Jefferson",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KDYL",
        city: "Doylestown",
        name: "Doylestown Airport",
        county: "Bucks",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KERI",
        city: "Erie",
        name: "Erie International Airport/Tom Ridge Field",
        county: "Erie",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KFIG",
        city: "Clearfield",
        name: "Clearfield-Lawrence Airport",
        county: "Clearfield",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KGKJ",
        city: "Meadville",
        name: "Port Meadville Airport",
        county: "Crawford",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KIPT",
        city: "Williamsport",
        name: "Port Meadville Airport",
        county: "Lycoming",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KJST",
        city: "Johnstown",
        name: "John Murtha Johnstown/Cambria County Airport",
        county: "Cambria",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KLNS",
        city: "Lancaster",
        name: "Lancaster Airport",
        county: "Lancaster",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KMDT",
        city: "Middletown",
        name: "Harrisburg International Airport",
        county: "Dauphin",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KMPO",
        city: "Mt Pocono",
        name: "Pocono Mountains Regional Airport",
        county: "Monroe",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KPHL",
        city: "Philadelphia",
        name: "Philadelphia International Airport",
        county: "Delaware",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KPIT",
        city: "Pittsburgh",
        name: "Pittsburgh International Airport",
        county: "Allegheny",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KPNE",
        city: "Philadelphia",
        name: "Northeast Philadelphia Airport",
        county: "Philadelphia",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KPTW",
        city: "Pottstown",
        name: "Heritage Field Airport",
        county: "Montgomery",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KRDG",
        city: "Reading",
        name: "Reading Regional Airport/Carl A Spaatz Field",
        county: "Berks",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KSEG",
        city: "Selinsgrove",
        name: "Penn Valley Airport",
        county: "Snyder",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "KTHV",
        city: "York",
        name: "York Airport",
        county: "York",
        state: "Pennsylvania",
        stateAbr: "pa"
    },
    {
        id: "TJBQ",
        city: "Aguadilla",
        name: "Rafael Hernandez",
        county: "Aguadilla",
        state: "Puerto Rico",
        stateAbr: "pr"
    },
    {
        id: "TJSJ",
        city: "San Juan",
        name: "Luis Munoz Marin International Airport",
        county: "Carolina",
        state: "Puerto Rico",
        stateAbr: "pr"
    },
    {
        id: "KPVD",
        city: "Providence",
        name: "Rhode Island TF Green International Airport",
        county: "Kent",
        state: "Rhode Island",
        stateAbr: "ri"
    },
    {
        id: "KUUU",
        city: "Newport",
        name: "Newport State Airport",
        county: "Newport",
        state: "Rhode Island",
        stateAbr: "ri"
    },
    {
        id: "KWST",
        city: "Westerly",
        name: "Westerly State Airport",
        county: "Washington",
        state: "Rhode Island",
        stateAbr: "ri"
    },
    {
        id: "KAND",
        city: "Anderson",
        name: "Anderson Regional Airport",
        county: "Anderson",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KCAE",
        city: "Columbia",
        name: "Columbia Metro Airport",
        county: "Lexington",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KCEU",
        city: "Clemson",
        name: "Oconee County Regional Airport",
        county: "Oconee",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KCHS",
        city: "Charleston",
        name: "Charleston Air Force Base/International Airport",
        county: "Charleston",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KCRE",
        city: "North Myrtle Beach",
        name: "Grand Strand Airport",
        county: "Horry",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KCUB",
        city: "Columbia",
        name: "Jim Hamilton L B Owens Airport",
        county: "Richland",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KFLO",
        city: "Florence",
        name: "Florence Regional Airport",
        county: "Florence",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KGMU",
        city: "Greenville",
        name: "Greenville Downtown Airport",
        county: "Greenville",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KGRD",
        city: "Greenwood",
        name: "Greenwood County Airport",
        county: "Greenwood",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KGSP",
        city: "Greer",
        name: "Greenville Spartanburg International Airport",
        county: "Greenville",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KOGB",
        city: "Orangeburg",
        name: "Orangeburg Municipal Airport",
        county: "Orangeburg",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KUZA",
        city: "Rock Hill",
        name: "Rock Hill (York County) Airport-Bryant Field",
        county: "York",
        state: "South Carolina",
        stateAbr: "sc"
    },
    {
        id: "KABR",
        city: "Aberdeen",
        name: "Aberdeen Regional Airport",
        county: "Brown",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KATY",
        city: "Watertown",
        name: "Watertown Regional Airport",
        county: "Codington",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KCUT",
        city: "Custer",
        name: "Custer County Airport",
        county: "Custer",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KFSD",
        city: "Sioux Falls",
        name: "Joe Foss Field Airport",
        county: "Minnehaha",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KHON",
        city: "Huron",
        name: "Huron Regional Airport",
        county: "Beadle",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KICR",
        city: "Winner",
        name: "Winner Regional Airport",
        county: "Tripp",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KIEN",
        city: "Pine Ridge",
        name: "Pine Ridge Airport",
        county: "Shannon",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KMBG",
        city: "Mobridge",
        name: "Mobridge Municipal Airport",
        county: "Walworth",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KMHE",
        city: "Mitchell",
        name: "Mitchell Municipal Airport",
        county: "Davison",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KPHP",
        city: "Philip",
        name: "Philip Airport",
        county: "Haakon",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KPIR",
        city: "Pierre",
        name: "Pierre Regional Airport",
        county: "Hughes",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KRAP",
        city: "Rapid City",
        name: "Rapid City Regional Airport",
        county: "Pennington",
        state: "South Dakota",
        stateAbr: "sd"
    },
    {
        id: "KBNA",
        city: "Nashville",
        name: "Nashville International Airport",
        county: "Davidson",
        state: "Tennessee",
        stateAbr: "tn"
    },
    {
        id: "KCHA",
        city: "Chattanooga",
        name: "Lovell Field Airport",
        county: "Hamilton",
        state: "Tennessee",
        stateAbr: "tn"
    },
    {
        id: "KCKV",
        city: "Clarksville",
        name: "Outlaw Field Airport",
        county: "Montgomery",
        state: "Tennessee",
        stateAbr: "tn"
    },
    {
        id: "KCSV",
        city: "Crossville",
        name: "Crossville Memorial Airport-Whitson Field",
        county: "Cumberland",
        state: "Tennessee",
        stateAbr: "tn"
    },
    {
        id: "KMEM",
        city: "Memphis",
        name: "Memphis International Airport",
        county: "Shelby",
        state: "Tennessee",
        stateAbr: "tn"
    },
    {
        id: "KMKL",
        city: "Jackson",
        name: "Mc Kellar-Sipes Regional Airport",
        county: "Madison",
        state: "Tennessee",
        stateAbr: "tn"
    },
    {
        id: "KTRI",
        city: "Bristol/Johnson/Kingsport",
        name: "Tri-Cities Airport",
        county: "Sullivan",
        state: "Tennessee",
        stateAbr: "tn"
    },
    {
        id: "KTYS",
        city: "Knoxville",
        name: "Mcghee Tyson Airport",
        county: "Blount",
        state: "Tennessee",
        stateAbr: "tn"
    },
    {
        id: "KABI",
        city: "Abilene",
        name: "Abilene Regional Airport",
        county: "Taylor",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KACT",
        city: "Waco",
        name: "Waco Regional Airport",
        county: "Mclennan",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KAFW",
        city: "Fort Worth",
        name: "Perot Field/Fort Worth Alliance Airport",
        county: "Tarrant",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KALI",
        city: "Alice",
        name: "Alice International Airport",
        county: "Jim Wells",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KAMA",
        city: "Amarillo",
        name: "Rick Husband Amarillo International Airport",
        county: "Potter",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KATT",
        city: "Austin",
        name: "Austin Weather Station",
        county: "Travis",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KAUS",
        city: "Austin",
        name: "Austin-Bergstrom International Airport",
        county: "Travis",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KBAZ",
        city: "New Braunfels",
        name: "New Braunfels National Airport",
        county: "Comal",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KBGD",
        city: "Borger",
        name: "Hutchinson County Airport",
        county: "Hutchinson",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KBMQ",
        city: "Burnet",
        name: "Burnet Municipal Airport/Kate Craddock Field",
        county: "Burnet",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KBPT",
        city: "Beaumont",
        name: "Jack Brooks Regional Airport",
        county: "Jefferson",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KBRO",
        city: "Brownsville",
        name: "Brownsville/South Padre Island International Airport",
        county: "Cameron",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KCDS",
        city: "Childress",
        name: "Childress Municipal Airport",
        county: "Childress",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KCLL",
        city: "College Station",
        name: "Easterwood Field Airport",
        county: "Brazos",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KCOT",
        city: "Cotulla",
        name: "Cotulla-La Salle County Airport",
        county: "La Salle",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KCRP",
        city: "Corpus Christi",
        name: "Corpus Christi International Airport",
        county: "Nueces",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KCRS",
        city: "Corsicana",
        name: "C David Campbell Field-Corsicana Municipal Airport",
        county: "Navarro",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KCXO",
        city: "Conroe",
        name: "Conroe/North Houston Regional Airport",
        county: "Montgomery",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KDAL",
        city: "Dallas",
        name: "Dallas Love Field Airport",
        county: "Dallas",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KDFW",
        city: "Dallas/Fort Worth",
        name: "Dallas-Fort Worth International Airport",
        county: "Dallas",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KDHT",
        city: "Dalhart",
        name: "Dalhart Municipal Airport",
        county: "Dallam",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KDRT",
        city: "Del Rio",
        name: "Del Rio International Airport",
        county: "Val Verde",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KDTO",
        city: "Denton",
        name: "Denton Enterprise Airport",
        county: "Denton",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KDWH",
        city: "Houston",
        name: "David Wayne Hooks Memorial Airport",
        county: "Harris",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KELP",
        city: "El Paso",
        name: "El Paso International Airport",
        county: "El Paso",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KFST",
        city: "Fort Stockton",
        name: "Fort Stockton-Pecos County Airport",
        county: "Pecos",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KFTW",
        city: "Fort Worth",
        name: "Fort Worth Meacham International Airport",
        county: "Tarrant",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KGGG",
        city: "Longview",
        name: "East Texas Regional Airport",
        county: "Gregg",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KGKY",
        city: "Arlington",
        name: "Arlington Municipal Airport",
        county: "Tarrant",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KGLS",
        city: "Galveston",
        name: "Scholes International Airport at Galveston",
        county: "Galveston",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KHDO",
        city: "Hondo",
        name: "South Texas Regional Airport at Hondo",
        county: "Medina",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KHOU",
        city: "Houston",
        name: "William P Hobby Airport",
        county: "Harris",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KHRL",
        city: "Harlingen",
        name: "Valley International Airport",
        county: "Cameron",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KIAH",
        city: "Houston",
        name: "George Bush Intercontinental/Houston Airport",
        county: "Harris",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KINK",
        city: "Wink",
        name: "Winkler County Airport",
        county: "Winkler",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KJCT",
        city: "Junction",
        name: "Kimble County Airport",
        county: "Kimble",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KLBB",
        city: "Lubbock",
        name: "Lubbock Preston Smith International Airport",
        county: "Lubbock",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KLBX",
        city: "Angleton",
        name: "Texas Gulf Coast Regional Airport",
        county: "Brazoria",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KLFK",
        city: "Lufkin",
        name: "Angelina County Airport",
        county: "Angelina",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KLVJ",
        city: "Houston",
        name: "Pearland Regional Airport",
        county: "Brazoria",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KMAF",
        city: "Midland",
        name: "Midland International Air and Space Port Airport",
        county: "Midland",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KMFE",
        city: "Mc Allen",
        name: "Mc Allen International Airport",
        county: "Hidalgo",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KMWL",
        city: "Mineral Wells",
        name: "Mineral Wells Regional Airport",
        county: "Palo Pinto",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KODO",
        city: "Odessa",
        name: "Odessa Airport-Schlemeyer Field",
        county: "Ector",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KPIL",
        city: "Port Isabel",
        name: "Port Isabel-Cameron County Airport",
        county: "Cameron",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KPSX",
        city: "Palacios",
        name: "Palacios Municipal Airport",
        county: "Matagorda",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KRBD",
        city: "Dallas",
        name: "Dallas Executive Airport",
        county: "Dallas",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KRKP",
        city: "Rockport",
        name: "Aransas County Airport",
        county: "Aransas",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KSAT",
        city: "San Antonio",
        name: "San Antonio International Airport",
        county: "Bexar",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KSGR",
        city: "Houston",
        name: "Sugar Land Regional Airport",
        county: "Fort Bend",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KSJT",
        city: "San Angelo",
        name: "San Angelo Regional Airport/Mathis Field",
        county: "Tom Green",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KSPS",
        city: "Wichita Falls",
        name: "Sheppard Air Force Base/Wichita Falls Municipal Airport",
        county: "Wichita",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KSSF",
        city: "San Antonio",
        name: "Stinson Municipal Airport",
        county: "Bexar",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KTKI",
        city: "Dallas",
        name: "McKinney National Airport",
        county: "Collin",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KTRL",
        city: "Terrell",
        name: "Terrell Municipal Airport",
        county: "Kaufman",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KTYR",
        city: "Tyler",
        name: "Tyler Pounds Regional Airport",
        county: "Smith",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KUTS",
        city: "Huntsville",
        name: "Huntsville Municipal Airport",
        county: "Walker",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KVCT",
        city: "Victoria",
        name: "Victoria Regional Airport",
        county: "Victoria",
        state: "Texas",
        stateAbr: "tx"
    },
    {
        id: "KBCE",
        city: "Bryce Canyon",
        name: "Bryce Canyon Airport",
        county: "Garfield",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KCDC",
        city: "Cedar City",
        name: "Cedar City Regional Airport",
        county: "Iron",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KCNY",
        city: "Moab",
        name: "Canyonlands Regional Airport",
        county: "Grand",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KLGU",
        city: "Logan",
        name: "Logan-Cache Airport",
        county: "Cache",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KMLF",
        city: "Milford",
        name: "Milford Municipal Airport/Ben and Judy Briscoe Field",
        county: "Beaver",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KOGD",
        city: "Ogden",
        name: "Ogden-Hinckley Airport",
        county: "Weber",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KPUC",
        city: "Price",
        name: "Carbon County Regional Airport/Buck Davis Field",
        county: "Carbon",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KSLC",
        city: "Salt Lake City",
        name: "Salt Lake City International Airport",
        county: "Salt Lake",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KVEL",
        city: "Vernal",
        name: "Vernal Regional Airport",
        county: "Uintah",
        state: "Utah",
        stateAbr: "ut"
    },
    {
        id: "KBTV",
        city: "Burlington",
        name: "Burlington International Airport",
        county: "Chittenden",
        state: "Vermont",
        stateAbr: "vt"
    },
    {
        id: "KDDH",
        city: "Bennington",
        name: "William H Morse State Airport",
        county: "Bennington",
        state: "Vermont",
        stateAbr: "vt"
    },
    {
        id: "KMPV",
        city: "Barre",
        name: "Edward F Knapp State Airport",
        county: "Washington",
        state: "Vermont",
        stateAbr: "vt"
    },
    {
        id: "KMVL",
        city: "Morrisville",
        name: "Morrisville-Stowe State Airport",
        county: "Lamoille",
        state: "Vermont",
        stateAbr: "vt"
    },
    {
        id: "KVSF",
        city: "Springfield",
        name: "Hartness State Airport (Springfield)",
        county: "Windsor",
        state: "Vermont",
        stateAbr: "vt"
    },
    {
        id: "KAKQ",
        city: "Wakefield",
        name: "Wakefield Municipal Airport",
        county: "Sussex",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KCHO",
        city: "Charlottesville",
        name: "Wakefield Municipal Airport",
        county: "Albemarle",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KDAN",
        city: "Danville",
        name: "Wakefield Municipal Airport",
        county: "Pittsylvania",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KDCA",
        city: "Washington",
        name: "Wakefield Municipal Airport",
        county: "Arlington",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KIAD",
        city: "Dulles",
        name: "Wakefield Municipal Airport",
        county: "Loudoun",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KLYH",
        city: "Lynchburg",
        name: "Wakefield Municipal Airport",
        county: "Lynchburg City",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KOFP",
        city: "Ashland",
        name: "Wakefield Municipal Airport",
        county: "Hanover",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KORF",
        city: "Norfolk",
        name: "Wakefield Municipal Airport",
        county: "Norfolk City",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KPHF",
        city: "Newport News",
        name: "Wakefield Municipal Airport",
        county: "Newport News City",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KRIC",
        city: "Richmond",
        name: "Wakefield Municipal Airport",
        county: "Henrico",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KROA",
        city: "Roanoke",
        name: "Wakefield Municipal Airport",
        county: "Roanoke",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "KWAL",
        city: "Wallops Island",
        name: "Wakefield Municipal Airport",
        county: "Accomack",
        state: "Virginia",
        stateAbr: "va"
    },
    {
        id: "TIST",
        city: "Charlotte Amalie",
        name: "Cyril E. King Airport",
        county: "Saint Thomas",
        state: "Virgin Islands",
        stateAbr: "vi"
    },
    {
        id: "TISX",
        city: "Christiansted",
        name: "Henry Rohlsen Airport",
        county: "Saint Croix",
        state: "Virgin Islands",
        stateAbr: "vi"
    },
    {
        id: "KALW",
        city: "Walla Walla",
        name: "Walla Walla Regional Airport",
        county: "Walla Walla",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KBFI",
        city: "Seattle",
        name: "Boeing Field/King County International Airport",
        county: "King",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KBLI",
        city: "Bellingham",
        name: "Bellingham International Airport",
        county: "Whatcom",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KCLM",
        city: "Port Angeles",
        name: "William R Fairchild International Airport",
        county: "Clallam",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KDEW",
        city: "Deer Park",
        name: "Deer Park Airport",
        county: "Spokane",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KEAT",
        city: "Wenatchee",
        name: "Pangborn Memorial Airport",
        county: "Douglas",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KELN",
        city: "Ellensburg",
        name: "Bowers Field Airport",
        county: "Kittitas",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KEPH",
        city: "Ephrata",
        name: "Ephrata Municipal Airport",
        county: "Grant",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KFHR",
        city: "Friday Harbor",
        name: "Friday Harbor Airport",
        county: "San Juan",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KGEG",
        city: "Spokane",
        name: "Spokane International Airport",
        county: "Spokane",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KHQM",
        city: "Hoquiam",
        name: "Bowerman Airport",
        county: "Grays Harbor",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KHQM",
        city: "Moses Lake",
        name: "Grant County International Airport",
        county: "Grant",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KOLM",
        city: "Olympia",
        name: "Olympia Regional Airport",
        county: "Thurston",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KOMK",
        city: "Omak",
        name: "Omak Airport",
        county: "Okanogan",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KPAE",
        city: "Everett",
        name: "Snohomish County Airport",
        county: "Snohomish",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KPSC",
        city: "Pasco",
        name: "Tri-Cities Airport",
        county: "Franklin",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KPUW",
        city: "Pullman",
        name: "Pullman/Moscow Regional Airport",
        county: "Whitman",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KRNT",
        city: "Renton",
        name: "Renton Municipal Airport",
        county: "King",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KSEA",
        city: "Seattle",
        name: "Seattle-Tacoma International Airport",
        county: "King",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KSFF",
        city: "Spokane",
        name: "Felts Field Airport",
        county: "Spokane",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KSHN",
        city: "Shelton",
        name: "Sanderson Field Airport",
        county: "Mason",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KSMP",
        city: "Stampede Pass",
        name: "Stampede Pass Weather Station",
        county: "Kittitas",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KTIW",
        city: "Tacoma",
        name: "Tacoma Narrows Airport",
        county: "Pierce",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KUIL",
        city: "Quillayute",
        name: "Quillayute Airport",
        county: "Clallam",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KVUO",
        city: "Vancouver",
        name: "Pearson Field Airport",
        county: "Clark",
        state: "Washington",
        stateAbr: "wa"
    },
    {
        id: "KBKW",
        city: "Beckley",
        name: "Raleigh County Memorial Airport",
        county: "Raleigh",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KBLF",
        city: "Bluefield",
        name: "Mercer County Airport",
        county: "Mercer",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KCKB",
        city: "Clarksburg",
        name: "North Central West Virginia Airport",
        county: "Harrison",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KCRW",
        city: "Charleston",
        name: "West Virginia International Yeager Airport",
        county: "Kanawha",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KEKN",
        city: "Elkins",
        name: "Elkins-Randolph County Airport-Jennings Randolph Field",
        county: "Randolph",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KHLG",
        city: "Wheeling",
        name: "Wheeling Ohio County Airport",
        county: "Ohio",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KHTS",
        city: "Huntington",
        name: "Tri-State Airport/Milton J. Ferguson Field",
        county: "Wayne",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KMGW",
        city: "Morgantown",
        name: "Morgantown Municipal Airport/Walter L Bill Hart Field",
        county: "Monongalia",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KMRB",
        city: "Martinsburg",
        name: "Eastern WV Regional Airport/Shepherd Field",
        county: "Berkeley",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KPKB",
        city: "Parkersburg",
        name: "Mid-Ohio Valley Regional Airport",
        county: "Wood",
        state: "West Virginia",
        stateAbr: "wv"
    },
    {
        id: "KASX",
        city: "Ashland",
        name: "John F Kennedy Memorial Airport",
        county: "Ashland",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KAUW",
        city: "Wausau",
        name: "Wausau Downtown Airport",
        county: "Marathon",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KCMY",
        city: "Sparta",
        name: "Fort Mccoy",
        county: "Monroe",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KEAU",
        city: "Eau Claire",
        name: "Chippewa Valley Regional Airport",
        county: "Eau Claire",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KENW",
        city: "Kenosha",
        name: "Kenosha Regional Airport",
        county: "Kenosha",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KFLD",
        city: "Fond Du Lac",
        name: "Fond Du Lac County Airport",
        county: "Fond Du Lac",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KGRB",
        city: "Green Bay",
        name: "Green Bay/Austin Straubel International Airport",
        county: "Brown",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KHYR",
        city: "Hayward",
        name: "Sawyer County Airport",
        county: "Sawyer",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KISW",
        city: "Wisconsin Rapids",
        name: "Alexander Field South Wood County Airport",
        county: "Wood",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KLNR",
        city: "Lone Rock",
        name: "Tri-County Regional Airport",
        county: "Sauk",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KLSE",
        city: "La Crosse",
        name: "La Crosse Regional Airport",
        county: "La Crosse",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KMFI",
        city: "Marshfield",
        name: "Marshfield Municipal Airport",
        county: "Wood",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KMKE",
        city: "Milwaukee",
        name: "General Mitchell International Airport",
        county: "Milwaukee",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KMSN",
        city: "Madison",
        name: "Dane County Regional Airport-Truax Field",
        county: "Dane",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KOSH",
        city: "Oshkosh",
        name: "Wittman Regional Airport",
        county: "Winnebago",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KOVS",
        city: "Boscobel",
        name: "Boscobel Airport",
        county: "Grant",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KRAC",
        city: "Racine",
        name: "Batten International Airport",
        county: "Racine",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KRHI",
        city: "Rhinelander",
        name: "Rhinelander/Oneida County Airport",
        county: "Oneida",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KSBM",
        city: "Sheboygan",
        name: "Sheboygan County Memorial Airport",
        county: "Sheboygan",
        state: "Wisconsin",
        stateAbr: "wi"
    },
    {
        id: "KBPI",
        city: "Big Piney",
        name: "Miley Memorial Field Airport",
        county: "Sublette",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KBYG",
        city: "Buffalo",
        name: "Johnson County Airport",
        county: "Johnson",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KCPR",
        city: "Casper",
        name: "Casper/Natrona County International Airport",
        county: "Natrona",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KCYS",
        city: "Cheyenne",
        name: "Cheyenne Regional Airport/Jerry Olson Field",
        county: "Laramie",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KDGW",
        city: "Douglas",
        name: "Converse County Airport",
        county: "Converse",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KEVW",
        city: "Evanston",
        name: "Evanston-Uinta County Airport - Burns Field",
        county: "Uinta",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KGCC",
        city: "Gillette",
        name: "Northeast Wyoming Regional Airport",
        county: "Campbell",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KGEY",
        city: "Greybull",
        name: "South Big Horn County Airport",
        county: "Big Horn",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KLAR",
        city: "Laramie",
        name: "Laramie Regional Airport",
        county: "Albany",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KLND",
        city: "Lander",
        name: "Hunt Field Airport",
        county: "Fremont",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KRIW",
        city: "Riverton",
        name: "Central Wyoming Regional Airport",
        county: "Fremont",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KRKS",
        city: "Rock Springs",
        name: "Southwest Wyoming Regional Airport",
        county: "Sweetwater",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KRWL",
        city: "Rawlins",
        name: "Rawlins Municipal Airport/Harvey Field",
        county: "Carbon",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KSHR",
        city: "Sheridan",
        name: "Sheridan County Airport",
        county: "Sheridan",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KTOR",
        city: "Torrington",
        name: "Torrington Municipal Airport",
        county: "Goshen",
        state: "Wyoming",
        stateAbr: "wy"
    },
    {
        id: "KWRL",
        city: "Worland",
        name: "Worland Municipal Airport",
        county: "Washakie",
        state: "Wyoming",
        stateAbr: "wy"
    }
];

export { airports };