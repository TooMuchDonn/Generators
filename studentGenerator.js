'use strict'

const generateStudentButton = document.getElementById("btnStudentGenerate");
const headerElement = document.getElementById("header");

const firstNameArrayMale = ["Michael", "Matthew", "Jacob", "Christopher", "Joshua", "Nicholas", "Tyler", "Brandon", "Austin", "Andrew", "Daniel", "Joseph", "David", "Zachary", "John", "Ryan", "James", "William", "Anthony", "Justin", "Jonathan", "Alexander", "Robert", "Christian", "Kyle", "Kevin", "Jordan", "Thomas", "Benjamin", "Samuel", "Cody", "Jose", "Dylan", "Aaron", "Eric", "Brian", "Nathan", "Steven", "Adam", "Timothy", "Jason", "Logan", "Charles", "Patrick", "Richard", "Sean", "Hunter", "Caleb", "Cameron", "Noah", "Jesse", "Juan", "Alex", "Connor", "Mark", "Jeremy", "Luis", "Dakota", "Stephen", "Devin", "Gabriel", "Ethan", "Trevor", "Jared", "Evan", "Bryan", "Carlos", "Tristan", "Nathaniel", "Ian", "Isaiah", "Jeffrey", "Travis", "Jesus", "Luke", "Chase", "Kenneth", "Paul", "Dustin", "Antonio", "Elijah", "Taylor", "Bradley", "Blake", "Garrett", "Isaac", "Marcus", "Mitchell", "Jack", "Tanner", "Miguel", "Adrian", "Lucas", "Corey", "Peter", "Edward", "Malik", "Gregory", "Dalton", "Victor", "Derek", "Angel", "Seth", "Mason", "Colton", "Cole", "Alejandro", "Scott", "Spencer", "Brett", "Shawn", "Shane", "Jorge", "Jake", "Collin", "Vincent", "Alec", "George", "Grant", "Bryce", "Dillon", "Erik", "Eduardo", "Joel", "Oscar", "Colin", "Devon", "Ricardo", "Julian", "Cristian", "Raymond", "Brendan", "Francisco", "Wyatt", "Dominic", "Jackson", "Wesley", "Johnathan", "Henry", "Omar", "Xavier", "Casey", "Alan", "Cory", "Manuel", "Riley", "Mario", "Edgar", "Clayton", "Phillip", "Nicolas", "Martin", "Javier", "Chance", "Troy", "Ronald", "Chandler", "Keith", "Donald", "Andres", "Chad", "Frank", "Levi", "Jeremiah", "Drew", "Ivan", "Sergio", "Hayden", "Derrick", "Cesar", "Jonathon", "Andre", "Hector", "Marco", "Roberto", "Brady", "Maxwell", "Fernando", "Parker", "Alexis", "Douglas", "Darius", "Calvin", "Liam", "Philip", "Kaleb", "Trenton", "Erick", "Preston", "Ruben", "Curtis", "Gavin", "Johnny", "Jerry", "Sebastian", "Edwin", "Jonah", "Pedro", "Conner", "Bailey", "Dennis", "Gary", "Gage", "Mathew", "Gerardo", "Randy", "Raul", "Max", "Harrison", "Micah", "Emmanuel", "Allen", "Julio", "Damian", "Rafael", "Landon", "Skyler", "Diego", "Zachery", "Larry", "Armando", "Jalen", "Jimmy", "Marcos", "Colby", "Brent", "Abraham", "Enrique", "Tony", "Jaime", "Albert", "Andy", "Marc", "Dallas", "Louis", "Alberto", "Trey", "Giovanni", "Josiah", "Kristopher", "Zackary", "Ty", "Carter", "Morgan", "Danny", "Donovan", "Craig", "Ricky", "Tristen", "Carl", "Avery", "Trent", "Darren", "Josue", "Jeffery", "Lawrence", "Nolan", "Terry", "Aidan", "Russell", "Lane", "Micheal", "Nickolas", "Israel", "Arturo", "Joe", "Rodney", "Lance", "Deandre", "Kody", "Ross", "Walter", "Alfredo", "Lorenzo", "Carson", "Arthur", "Owen", "Braden", "Damon", "Ramon", "Griffin", "Jamal", "Dante", "Quentin", "Roger", "Billy", "Jay", "Branden", "Dominick", "Bobby", "Elias", "Zane", "Brenden", "Theodore", "Gustavo", "Marquis", "Brennan", "Eli", "Todd", "Brock", "Jessie", "Johnathon", "Marvin", "Quinton", "Salvador", "Saul", "Drake", "Tommy", "Bryant", "Marshall", "Kyler", "Dean", "Malcolm", "Damien", "Jon", "Zackery", "Eddie", "Conor", "Miles", "Justice", "Randall", "Gerald", "Reginald", "Frederick", "Maurice", "Tucker", "Ashton", "Willie", "Fabian", "Keegan", "Pablo", "Quinn", "Angelo", "Ernesto", "Ismael", "Peyton", "Emilio", "Demetrius", "Esteban", "Terrance", "Simon", "Triston", "Lee", "Kameron", "Roy", "Dominique", "Zachariah", "Khalil", "Brendon", "Emanuel", "Franklin", "Guillermo", "Bryson", "Jamie", "Devonte", "Tyrone", "Devante", "Kelvin", "Kendall", "Trevon", "Roman", "Terrell", "Cooper", "Bruce", "Isiah", "Myles", "Rene", "Orlando", "Steve", "Clay", "Shaun", "Jarrett", "Skylar", "Tristin", "Desmond", "Terrence", "Nelson", "Rodrigo", "Weston", "Felix", "Jakob", "Lukas", "Darrell", "Francis", "Kristian", "Oliver", "Abel", "Harley", "Wayne", "Brayden", "Dangelo", "Ronnie", "Jerome", "Nikolas", "Brody", "Melvin", "Keenan", "Braxton", "Wade", "Cedric", "Leonardo", "Grayson", "Moises", "Neil", "Graham", "Payton", "Kendrick", "Kenny", "Davis", "Byron", "Deion", "Dale", "Tyrell", "Chris", "Leonard", "Rodolfo", "Marquise", "Corbin", "Javon", "Darian", "Devan", "Reed", "Austen", "Stanley", "Ali", "Jermaine", "Beau", "Sam", "Keaton", "Warren", "Darryl", "Hugo", "Jordon", "Tevin", "Dane", "Donte", "Ernest", "Noel", "Tomas", "Alfonso", "Daquan", "Harold", "Reid", "Duncan", "Tyson", "Walker", "Felipe", "Jaquan", "Karl", "Alvin", "Eugene", "Deshawn", "Ramiro", "Jayson", "Glenn", "Harry", "Kurt", "Leon", "Dwayne", "Gilberto", "Joey", "Ariel", "Sterling", "Davon", "Gilbert", "Jace", "Tylor", "Jarred", "Mackenzie", "Marlon", "Nathanael", "Rogelio", "Denzel", "Rudy", "Tyree", "Sheldon", "Charlie", "Elliot", "Garret", "Stefan", "Allan", "Leo", "Raekwon", "Ray", "Noe", "Damion", "Quincy", "Mauricio", "Forrest", "Juwan", "Deangelo", "Deonte", "Cade", "Lewis", "Jaylen", "Alfred", "Osvaldo", "Brad", "Colten", "Elliott", "Rashad", "Geoffrey", "Ralph", "Malachi", "Blaine", "Darnell", "Alonzo", "Santiago", "Julius", "Demarcus", "Adan", "Deon", "Mohammad", "Uriel", "Clinton", "Dorian", "Cullen", "Jaden", "Ahmad", "Ezekiel", "Issac", "Rolando", "Nigel", "Sawyer", "Wilson", "Efrain", "Clarence", "Sidney", "Kaden", "Moses", "Jarrod", "Stephan", "Mike", "Solomon", "Roderick", "Amir", "Dandre", "Clifford", "Kurtis", "Deven", "Quintin", "Humberto", "Addison", "Bret", "Stephon", "Coleman", "Gordon", "Toby", "Darien", "Barry", "Kelly", "Ezra", "Gunnar", "Kade", "Kolton", "Antoine", "Jonas", "Kory", "Kasey", "Dion", "Ezequiel", "Derick", "Leonel", "Stuart", "Bernard", "Holden", "Mitchel", "Bennett", "Freddy", "Earl", "Ahmed", "Brenton", "Dashawn", "Aron", "Alvaro", "Perry", "Shannon", "Ben", "Roland", "Vicente", "Sage", "Mohammed", "Pierce", "Fredrick", "Leroy", "Dexter", "Tate", "Markus", "Howard", "Shelby", "Joaquin", "Tristian", "Jarvis", "Kirk", "Cordell", "Kareem", "Anfernee", "Kai", "Brice", "Chaz", "Lamar", "Salvatore", "Jaylon", "Korey", "Jayden", "Shayne", "Daryl", "Irvin", "Rhett", "Agustin", "Clint", "Isaias", "Maximilian", "Mohamed", "Carlton", "Devyn", "Darion", "Everett", "Milton", "Keanu", "Travon", "Will", "Dayton", "Kieran", "Raheem", "Frankie", "Marcel", "Nathanial", "Austyn", "Tre", "Guadalupe", "River", "Caden", "Moshe", "Houston", "Dwight", "Baby", "Madison", "Norman", "Jaron", "Neal", "Clark", "Heath", "Ulises", "Adolfo", "Octavio", "Glen", "Darrius", "German", "Hudson", "Kent", "Reece", "Rigoberto", "Fred", "Vernon", "Brennen", "Raphael", "Courtney", "Kane", "Ignacio", "Jasper", "Jaylin", "Shaquille", "Brooks", "Jamar", "Justus", "Jamel", "Terence", "Winston", "Colt", "Lonnie", "Darrin", "Conrad", "Cornelius", "Kolby", "Quinten", "Rory", "Hakeem", "Reynaldo", "Davonte", "Jean", "Arnold", "Dequan", "Camden", "Nestor", "Darin", "Davion", "Dillan", "Duane", "Estevan", "Jefferson", "Marques", "Zechariah", "Don", "Clifton", "Jairo", "Mateo", "Elisha", "Stone", "Brandan", "Devonta", "Tracy", "Marquez", "Ladarius", "Reuben", "Elmer", "Keshawn", "Layne", "Raymundo", "Trever", "August", "Jameson", "Lamont", "Santos", "Aldo", "Keon", "Cruz", "Dontae", "Jamison", "Talon", "Kristofer", "Anton", "Jarod", "Thaddeus", "Rick", "Bernardo", "Antwan", "Bradford", "Rickey", "Coby", "Lloyd", "Cortez", "Cyrus", "Junior", "Kahlil", "Reese", "Hassan", "Armani", "Aubrey", "Kellen", "Silas", "Jimmie", "Ibrahim", "Herbert", "Jaleel", "Tobias", "Johnnie", "Paris", "Trace", "Infant", "Julien", "Cristopher", "Garrison", "Gino", "Benito", "Freddie", "Brandyn", "Darrion", "Dawson", "Gerard", "Heriberto", "Dusty", "Alonso", "Donavan", "Guy", "Hugh", "Dimitri", "Jovan", "Bo", "Misael", "Rashawn", "Arron", "Javonte", "Muhammad", "Antony", "Asher", "Elvis", "Montana", "Tavon", "Coty", "Dallin", "Ellis", "Keyshawn", "Zakary", "Jackie", "Camron", "Gonzalo", "Orion", "Ari", "Codey", "Efren", "Justyn", "Herman", "Sammy", "Destin", "Trystan", "Tyron", "Kerry", "Kelton", "Rasheed", "Tariq", "Benny", "Deondre", "Deshaun", "Donnie", "Kevon", "Royce", "Anderson", "Robin", "Ulysses", "Dylon", "Greyson", "Gunner", "Hernan", "Jamarcus", "Jerrod", "Dan", "Dillion", "Fidel", "Tyquan", "Aric", "Broderick", "Josef", "Leslie", "Aiden", "Jabari", "Alexandro", "Braeden", "Khalid", "Nick", "Adonis", "Grady", "Lester", "Stewart", "Turner", "Dakotah", "Jade", "Gene", "Mikel", "Kennedy", "Bradly", "Easton", "Maverick", "Brayan", "Josh", "Asa", "Bronson", "Donnell", "Garett", "Myron", "Pierre", "Tarik", "Draven", "Maximillian", "Remington", "Chaim", "Erich", "Gregorio", "Vance", "Axel", "Dana", "Demarco", "Emmett", "Mickey", "Shamar", "Tyshawn", "Jorden", "Jacoby", "Jamil", "Keion", "Keven", "Nico", "Titus", "Dewayne", "Jim", "Marcelo", "Raquan", "Seamus", "Abram", "Jeff", "Rohan", "Kole", "Shea", "Carlo", "Cecil", "Codie", "Jair", "Sonny", "Irving", "Loren", "Ryne", "Braydon", "Davin", "Auston", "Darrian", "Ervin", "Isai", "Jessy", "Lincoln", "Simeon", "Tayler", "Akeem", "Denver", "Luciano", "Niko", "Shemar", "Valentin", "Andreas", "Barrett", "Eliseo", "Killian", "Jess", "Leland", "Alden", "Cale", "Erin", "Galen", "Jonatan", "Najee", "Reilly", "Cedrick", "Harvey", "Rocky", "Romello", "Amos", "Brennon", "Dejuan", "Ishmael", "Jayce", "Devontae", "Domenic", "Kelsey", "Reagan", "Vaughn", "Dakoda", "Dionte", "Eddy", "Jude", "Kenton", "Markel", "Rex", "Edgardo", "Jacques", "Menachem", "Augustus", "Eliezer", "Rico", "Spenser", "Abdul", "Alton", "Armand", "Cristobal", "Shaquan", "Storm", "Alek", "Jamaal", "Justen", "Maximiliano", "Ted", "Brant", "Floyd", "Cain", "Clyde", "Dario", "Jaylan", "Nasir", "Syed", "Trayvon", "Alexandre", "Francesco", "Kirby", "Shelton", "Abdullah", "Bryon", "Lionel", "Romeo", "Dalvin", "Teddy", "Blaise", "Dyllan", "Edmund", "Jody", "Lazaro", "Sydney", "Chadwick", "Daron", "Dominik", "Emerson", "Randolph", "Giancarlo", "Keagan", "Kendal", "Kordell", "Montel", "Pete", "Rodrick", "Waylon", "Branson", "Bruno", "Deonta"];

const firstNameArrayFemale = ["Emily", "Jessica", "Ashley", "Sarah", "Samantha", "Taylor", "Hannah", "Alexis", "Rachel", "Elizabeth", "Kayla", "Megan", "Amanda", "Brittany", "Madison", "Lauren", "Brianna", "Victoria", "Jennifer", "Stephanie", "Courtney", "Nicole", "Alyssa", "Rebecca", "Morgan", "Alexandra", "Amber", "Jasmine", "Danielle", "Haley", "Katherine", "Abigail", "Anna", "Olivia", "Shelby", "Kelsey", "Maria", "Allison", "Sydney", "Kaitlyn", "Kimberly", "Melissa", "Savannah", "Mary", "Brooke", "Natalie", "Michelle", "Julia", "Jordan", "Sara", "Erin", "Tiffany", "Emma", "Gabrielle", "Chelsea", "Destiny", "Christina", "Sabrina", "Marissa", "Vanessa", "Andrea", "Sierra", "Mariah", "Katelyn", "Paige", "Laura", "Madeline", "Cheyenne", "Jacqueline", "Kristen", "Heather", "Briana", "Kelly", "Breanna", "Mackenzie", "Miranda", "Alexandria", "Caroline", "Erica", "Shannon", "Katie", "Monica", "Jenna", "Caitlin", "Bailey", "Lindsey", "Kathryn", "Amy", "Cassandra", "Angela", "Alicia", "Crystal", "Hailey", "Grace", "Catherine", "Jamie", "Angelica", "Leah", "Molly", "Alexa", "Cynthia", "Michaela", "Kaitlin", "Autumn", "Margaret", "Erika", "Diana", "Karina", "Cassidy", "Kaylee", "Kylie", "Chloe", "Meghan", "Veronica", "Brittney", "Claire", "Bethany", "Leslie", "Melanie", "Hayley", "Casey", "Dominique", "Bianca", "Daisy", "Sophia", "Carly", "Jocelyn", "Rachael", "Makayla", "Holly", "Brenda", "Gabriela", "Karen", "Lindsay", "Christine", "Kendra", "Summer", "Caitlyn", "Gabriella", "Whitney", "Ana", "Selena", "Mikayla", "Desiree", "Jade", "Rebekah", "Kristin", "Kristina", "Faith", "Julie", "Isabella", "Kathleen", "Adriana", "Valerie", "Zoe", "Ariana", "Alondra", "Mckenzie", "Patricia", "Alejandra", "Brandi", "Angel", "Ariel", "Audrey", "Kara", "Alison", "Tara", "Lisa", "Marisa", "Natasha", "Shania", "Nancy", "Lydia", "Claudia", "Dana", "Kirsten", "April", "Alexus", "Diamond", "Mia", "Sandra", "Deja", "Mallory", "Raven", "Tori", "Hope", "Cierra", "Evelyn", "Jasmin", "Kiana", "Katrina", "Bridget", "Meagan", "Yesenia", "Cindy", "Monique", "Isabel", "Kendall", "Jillian", "Asia", "Maya", "Ashlee", "Kassandra", "Karla", "Ciara", "Hanna", "Abby", "Kennedy", "Joanna", "Deanna", "Mercedes", "Naomi", "Kiara", "Arianna", "Brandy", "Jazmin", "Krystal", "Guadalupe", "Anne", "Tatiana", "Krista", "Amelia", "Chelsey", "Katelynn", "Jada", "Tessa", "Ashlyn", "Jazmine", "Mckenna", "Denise", "Tabitha", "Allyson", "Carolyn", "Gina", "Marisol", "Katlyn", "Ashleigh", "Meredith", "Imani", "Alisha", "Celeste", "Clarissa", "Nina", "Alana", "Ellen", "Cristina", "Brenna", "Riley", "Tiara", "Savanna", "Lillian", "Kasey", "Daniela", "Jordyn", "Peyton", "Maggie", "Logan", "Aubrey", "Justine", "Priscilla", "Lily", "Madeleine", "Felicia", "Kyra", "Delaney", "Alexia", "Alissa", "Marina", "Cecilia", "Teresa", "Tia", "Colleen", "Sadie", "Dakota", "Carolina", "Shayla", "Lacey", "Adrianna", "Raquel", "Mikaela", "Kylee", "Genesis", "Kelsie", "Payton", "Jenny", "Brooklyn", "Miriam", "Tamara", "Annie", "Kyla", "Heidi", "Rosa", "Linda", "Virginia", "Ruby", "Jessie", "Wendy", "Susan", "Renee", "Camille", "Elena", "Charlotte", "Jaclyn", "Tiana", "Elise", "Makenzie", "Cheyanne", "Gloria", "Serena", "Angelina", "Jacquelyn", "Helen", "Destinee", "Vivian", "Ashton", "Mayra", "Esther", "Theresa", "Martha", "Callie", "Carrie", "Carmen", "Madelyn", "Cara", "Justice", "Sharon", "Anastasia", "Skylar", "Valeria", "Sophie", "Baylee", "Kali", "Tyler", "Julianna", "Aaliyah", "Natalia", "Sidney", "Janet", "Juliana", "Josie", "Pamela", "Toni", "Marie", "Kate", "Liliana", "Ebony", "Ruth", "Lorena", "Eva", "Kelli", "Emilee", "Kierra", "Francesca", "Hunter", "Nichole", "Nadia", "Tatyana", "Haylee", "Carla", "Esmeralda", "Sofia", "Candace", "Bryanna", "Tierra", "Kaitlynn", "Elisabeth", "Macy", "Harley", "Kailey", "Isabelle", "Josephine", "Kira", "Carissa", "Christian", "Robin", "Carley", "Precious", "Rose", "Paola", "Britney", "Sasha", "Breana", "Tayler", "Alaina", "Nikki", "Janelle", "Kellie", "Barbara", "Haleigh", "Bria", "Aimee", "Aliyah", "Taryn", "Devin", "Antonia", "Alyson", "Clara", "India", "Melody", "Ann", "Brianne", "Gianna", "Cassie", "Devon", "Lucy", "Ivy", "Jane", "Larissa", "Sonia", "Deborah", "Kayleigh", "Regina", "Noelle", "Mariana", "Irene", "Marilyn", "Candice", "Carina", "Stacy", "Arielle", "Tyra", "Karissa", "Nicolette", "Kiersten", "Kenya", "Tania", "Kaila", "Yasmine", "Kourtney", "Alice", "Lesley", "Shayna", "Johanna", "Joy", "Daniella", "Kassidy", "Stacey", "Allie", "Adrienne", "Tina", "Elisa", "Tiffani", "Simone", "Tanya", "Yasmin", "Reagan", "Alma", "Nia", "Lexus", "Nora", "Micaela", "Sylvia", "Abbey", "Mckayla", "Paula", "Angelique", "Talia", "Leticia", "Chasity", "Frances", "Alanna", "Christy", "Cristal", "Kari", "Melinda", "Eliza", "Ciera", "Shawna", "Skyler", "Elaine", "Tianna", "Maritza", "Chelsie", "Kelsi", "Emilie", "Marlene", "Robyn", "Hailee", "Bailee", "Kaley", "Jaime", "Kaleigh", "Kaylin", "Viviana", "Chandler", "Avery", "Charity", "Moriah", "Thalia", "Regan", "Carlie", "Eleanor", "Kaylie", "Kristy", "Perla", "Kiera", "Darian", "Tamia", "Hallie", "Kristine", "Randi", "Maribel", "Christa", "Yvette", "Janae", "Shaina", "Chantel", "Judith", "Shyanne", "Cortney", "Margarita", "Paulina", "Jocelyne", "Ashlynn", "Genevieve", "Tracy", "Cameron", "Keely", "Iris", "Blanca", "Jeanette", "Leanna", "Meaghan", "Desirae", "Lizbeth", "Clare", "Halie", "Yvonne", "Maddison", "Kathy", "Makenna", "Madalyn", "Stephany", "Rachelle", "Cayla", "Dallas", "Julianne", "Brittani", "Ericka", "Paris", "Katharine", "Phoebe", "Darby", "Essence", "Katelin", "Addison", "Alexandrea", "Moesha", "Lyric", "Maranda", "Mollie", "Fatima", "Lena", "Jayla", "Rosemary", "Tanisha", "Donna", "Kaylyn", "Susana", "Alina", "Chanel", "Alisa", "Savanah", "Aisha", "Carol", "Kacie", "Tess", "Edith", "Lea", "Lexi", "Breanne", "Casandra", "Sandy", "Kristi", "Kiley", "Lucia", "Bridgette", "Shantel", "Michele", "Skye", "Anita", "Georgia", "Jaqueline", "Mara", "Diane", "Corinne", "Heaven", "Noemi", "Sarai", "Bonnie", "Estefania", "Tristan", "Lyndsey", "Reyna", "Araceli", "Ella", "Karly", "Beatriz", "Nathalie", "Ryan", "Jacklyn", "Rylee", "Stefanie", "Gillian", "Halle", "Sheila", "Yolanda", "Selina", "Fiona", "Laurel", "Ellie", "Karli", "Montana", "Eileen", "Brielle", "Destiney", "Karlee", "Katarina", "Misty", "Karlie", "Kianna", "Carli", "Sally", "Giselle", "Keisha", "Kailee", "Micah", "Alysha", "Aspen", "Emely", "Alayna", "Aurora", "Celina", "Lexie", "Eden", "Elaina", "Shauna", "Alex", "Kelley", "Dorothy", "Helena", "Yadira", "Abbie", "Antoinette", "Angie", "Demi", "Shakira", "Kaela", "Lori", "Jill", "Joyce", "Kelsea", "Shana", "Katlin", "Shirley", "Zoey", "Destini", "Janice", "Lauryn", "Ayanna", "Sage", "Celia", "Tasha", "Shelbie", "Annika", "Blair", "Suzanne", "Norma", "Trisha", "Trinity", "Lesly", "Roxanne", "Cora", "Rocio", "Carlee", "Ali", "Kasandra", "Ashlie", "Dulce", "Luz", "Odalys", "Fabiola", "Shelbi", "Joselyn", "Rochelle", "Shanice", "Dalia", "Athena", "Juanita", "Yessenia", "Kerri", "Ashanti", "Hillary", "Brook", "Keri", "Loren", "Daisha", "Maura", "Christiana", "Kirstin", "Itzel", "Janessa", "Aileen", "Rita", "Arlene", "Jena", "Yamilex", "Aleah", "Breann", "Kacey", "Kaelyn", "Rhiannon", "Anissa", "Sarina", "Kailyn", "Rebeca", "Annette", "Mariela", "Silvia", "Kori", "Charlene", "Gretchen", "Tristen", "Esperanza", "Jesse", "Kerry", "Maegan", "Zaria", "Allyssa", "Melina", "Mikala", "Shanna", "Sonya", "Drew", "Justina", "Miracle", "Shea", "Sydnee", "Tamera", "Ava", "Brionna", "Karley", "Cecelia", "Macey", "Alysia", "Darlene", "Mireya", "Sade", "Alize", "Jodi", "Myranda", "Berenice", "Bobbie", "Gwendolyn", "Alycia", "Ashly", "Kristian", "Xena", "Abbigail", "Corina", "Iesha", "Lucero", "Macie", "Dania", "Dasia", "Gladys", "Lacy", "Ashli", "Brooklynn", "Graciela", "Katy", "Katia", "Breonna", "Celine", "Kalyn", "Shyann", "Lara", "Lizette", "Elissa", "Malia", "Nataly", "Beverly", "Jackie", "Julissa", "Yasmeen", "Alessandra", "Jayme", "Joanne", "Unique", "Kaci", "Mandy", "Christen", "Kayli", "Khadijah", "Dawn", "Bryana", "Kristyn", "Leanne", "Alena", "Monika", "Connie", "Ingrid", "Kayley", "Roxana", "Devyn", "Patience", "Devan", "Kaylynn", "Daija", "Anika", "Carson", "Mindy", "Cheryl", "Magdalena", "Dianna", "Hollie", "Maricela", "Sienna", "Scarlett", "Ayana", "Mariam", "Aja", "Maia", "Chantal", "Juliet", "Kenzie", "Amani", "Jenifer", "Jennie", "Noel", "Daja", "Daphne", "Kortney", "Chynna", "Beth", "Bobbi", "Racheal", "Haylie", "Octavia", "Alysa", "Constance", "Vanesa", "Brandie", "Emerald", "Judy", "Myra", "Ayla", "Joelle", "Kalie", "Sydni", "Sydnie", "Jana", "Kala", "Lilly", "Mattie", "Maureen", "Marley", "Stevie", "Catalina", "Elyssa", "Tatianna", "Janie", "Trista", "Janette", "Alecia", "Marianna", "Nadine", "Terri", "Cori", "Elsa", "Gabriel", "Nayeli", "Hali", "Shianne", "Debra", "Kia", "Tammy", "Damaris", "Dayna", "Elisha", "Emilia", "Stacie", "Susanna", "Tabatha", "Chase", "Eliana", "Jessika", "Martina", "Amari", "Annamarie", "Juliette", "Hana", "Asha", "Audra", "Baby", "Juana", "Kallie", "Leigh", "Reina", "Tonya", "Domonique", "Isis", "Marisela", "Betty", "Christie", "Madisen", "Shelly", "Elyse", "Katlynn", "Kaycee", "Kinsey", "Odalis", "Adrian", "Beatrice", "Layla", "Brittni", "Kendal", "Stormy", "Yajaira", "Aubree", "Jazmyn", "Kenia", "Cydney", "Kaylah", "Princess", "Annabelle", "Marlena", "Chaya", "Krysta", "Sarahi", "Dina", "Leilani", "Lynn", "Alia", "Jalisa", "Denisse", "Jami", "Marlee", "Haven", "Katerina", "Liana", "Cinthia", "Jazlyn", "Terra", "Viridiana", "Jailene", "Kyleigh", "Tatum", "Valentina", "Alyssia", "Anjelica", "Billie", "Chyna", "Estefany", "Ivette", "Sheridan", "Alesha", "Ansley", "Madyson", "Paloma", "Rikki", "Eboni", "Jaycie", "Giovanna", "Jacey", "Lexis", "Lacie", "Olga", "Tyesha", "Belinda", "Tracey", "Yazmin", "Astrid", "Eryn", "Caitlynn", "Daijah", "Jasmyn", "Dejah", "Infant", "Joslyn", "Maxine", 
"Quinn", "Christin", "Fernanda", "Janay", "Pauline", "Yaritza", "Jessi", "Leeann", "Blake", "China", "Kimberley", "Melisa", "Rayna", "Alivia", "Leann", "Luisa", "Brittanie", "Griselda", "Jaden"];

const lastNameArray = ["SMITH", "JOHNSON", "WILLIAMS", "BROWN", "JONES", "MILLER", "DAVIS", "GARCIA", "RODRIGUEZ", "WILSON", "MARTINEZ", "ANDERSON", "TAYLOR", "THOMAS", "HERNANDEZ", "MOORE", "MARTIN", "JACKSON", "THOMPSON", "WHITE", "LOPEZ", "LEE", "GONZALEZ", "HARRIS", "CLARK", "LEWIS", "ROBINSON", "WALKER", "PEREZ", "HALL", "YOUNG", "ALLEN", "SANCHEZ", "WRIGHT", "KING", "SCOTT", "GREEN", "BAKER", "ADAMS", "NELSON", "HILL", "RAMIREZ", "CAMPBELL", "MITCHELL", "ROBERTS", "CARTER", "PHILLIPS", "EVANS", "TURNER", "TORRES", "PARKER", "COLLINS", "EDWARDS", "STEWART", "FLORES", "MORRIS", "NGUYEN", "MURPHY", "RIVERA", "COOK", "ROGERS", "MORGAN", "PETERSON", "COOPER", "REED", "BAILEY", "BELL", "GOMEZ", "KELLY", "HOWARD", "WARD", "COX", "DIAZ", "RICHARDSON", "WOOD", "WATSON", "BROOKS", "BENNETT", "GRAY", "JAMES", "REYES", "CRUZ", "HUGHES", "PRICE", "MYERS", "LONG", "FOSTER", "SANDERS", "ROSS", "MORALES", "POWELL", "SULLIVAN", "RUSSELL", "ORTIZ", "JENKINS", "GUTIERREZ", "PERRY", "BUTLER", "BARNES", "FISHER", "HENDERSON", "COLEMAN", "SIMMONS", "PATTERSON", "JORDAN", "REYNOLDS", "HAMILTON", "GRAHAM", "KIM", "GONZALES", "ALEXANDER", "RAMOS", "WALLACE", "GRIFFIN", "WEST", "COLE", "HAYES", "CHAVEZ", "GIBSON", "BRYANT", "ELLIS", "STEVENS", "MURRAY", "FORD", "MARSHALL", "OWENS", "MCDONALD", "HARRISON", "RUIZ", "KENNEDY", "WELLS", "ALVAREZ", "WOODS", "MENDOZA", "CASTILLO", "OLSON", "WEBB", "WASHINGTON", "TUCKER", "FREEMAN", "BURNS", "HENRY", "VASQUEZ", "SNYDER", "SIMPSON", "CRAWFORD", "JIMENEZ", "PORTER", "MASON", "SHAW", "GORDON", "WAGNER", "HUNTER", "ROMERO", "HICKS", "DIXON", "HUNT", "PALMER", "ROBERTSON", "BLACK", "HOLMES", "STONE", "MEYER", "BOYD", "MILLS", "WARREN", "FOX", "ROSE", "RICE", "MORENO", "SCHMIDT", "PATEL", "FERGUSON", "NICHOLS", "HERRERA", "MEDINA", "RYAN", "FERNANDEZ", "WEAVER", "DANIELS", "STEPHENS", "GARDNER", "PAYNE", "KELLEY", "DUNN", "PIERCE", "ARNOLD", "TRAN", "SPENCER", "PETERS", "HAWKINS", "GRANT", "HANSEN", "CASTRO", "HOFFMAN", "HART", "ELLIOTT", "CUNNINGHAM", "KNIGHT", "BRADLEY", "CARROLL", "HUDSON", "DUNCAN", "ARMSTRONG", "BERRY", "ANDREWS", "JOHNSTON", "RAY", "LANE", "RILEY", "CARPENTER", "PERKINS", "AGUILAR", "SILVA", "RICHARDS", "WILLIS", "MATTHEWS", "CHAPMAN", "LAWRENCE", "GARZA", "VARGAS", "WATKINS", "WHEELER", "LARSON", "CARLSON", "HARPER", "GEORGE", "GREENE", "BURKE", "GUZMAN", "MORRISON", "MUNOZ", "JACOBS", "OBRIEN", "LAWSON", "FRANKLIN", "LYNCH", "BISHOP", "CARR", "SALAZAR", "AUSTIN", "MENDEZ", "GILBERT", "JENSEN", "WILLIAMSON", "MONTGOMERY", "HARVEY", "OLIVER", "HOWELL", "DEAN", "HANSON", "WEBER", "GARRETT", "SIMS", "BURTON", "FULLER", "SOTO", "MCCOY", "WELCH", "CHEN", "SCHULTZ", "WALTERS", "REID", "FIELDS", "WALSH", "LITTLE", "FOWLER", "BOWMAN", "DAVIDSON", "MAY", "DAY", "SCHNEIDER", "NEWMAN", "BREWER", "LUCAS", "HOLLAND", "WONG", "BANKS", "SANTOS", "CURTIS", "PEARSON", "DELGADO", "VALDEZ", "PENA", "RIOS", "DOUGLAS", "SANDOVAL", "BARRETT", "HOPKINS", "KELLER", "GUERRERO", "STANLEY", "BATES", "ALVARADO", "BECK", "ORTEGA", "WADE", "ESTRADA", "CONTRERAS", "BARNETT", "CALDWELL", "SANTIAGO", "LAMBERT", "POWERS", "CHAMBERS", "NUNEZ", "CRAIG", "LEONARD", "LOWE", "RHODES", "BYRD", "GREGORY", "SHELTON", "FRAZIER", "BECKER", "MALDONADO", "FLEMING", "VEGA", "SUTTON", "COHEN", "JENNINGS", "PARKS", "MCDANIEL", "WATTS", "BARKER", "NORRIS", "VAUGHN", "VAZQUEZ", "HOLT", "SCHWARTZ", "STEELE", "BENSON", "NEAL", "DOMINGUEZ", "HORTON", "TERRY", "WOLFE", "HALE", "LYONS", "GRAVES", "HAYNES", "MILES", "PARK", "WARNER", "PADILLA", "BUSH", "THORNTON", "MCCARTHY", "MANN", "ZIMMERMAN", "ERICKSON", "FLETCHER", "MCKINNEY", "PAGE", "DAWSON", "JOSEPH", "MARQUEZ", "REEVES", "KLEIN", "ESPINOZA", "BALDWIN", "MORAN", "LOVE", "ROBBINS", "HIGGINS", "BALL", "CORTEZ", "LE", "GRIFFITH", "BOWEN", "SHARP", "CUMMINGS", "RAMSEY", "HARDY", "SWANSON", "BARBER", "ACOSTA", "LUNA", "CHANDLER", "BLAIR", "DANIEL", "CROSS", "SIMON", "DENNIS", "OCONNOR", "QUINN", "GROSS", "NAVARRO", "MOSS", "FITZGERALD", "DOYLE", "MCLAUGHLIN", "ROJAS", "RODGERS", "STEVENSON", "SINGH", "YANG", "FIGUEROA", "HARMON", "NEWTON", "PAUL", "MANNING", "GARNER", "MCGEE", "REESE", "FRANCIS", "BURGESS", "ADKINS", "GOODMAN", "CURRY", "BRADY", "CHRISTENSEN", "POTTER", "WALTON", "GOODWIN", "MULLINS", "MOLINA", "WEBSTER", "FISCHER", "CAMPOS", "AVILA", "SHERMAN", "TODD", "CHANG", "BLAKE", "MALONE", "WOLF", "HODGES", "JUAREZ", "GILL", "FARMER", "HINES", "GALLAGHER", "DURAN", "HUBBARD", "CANNON", "MIRANDA", "WANG", "SAUNDERS", "TATE", "MACK", "HAMMOND", "CARRILLO", "TOWNSEND", "WISE", "INGRAM", "BARTON", "MEJIA", "AYALA", "SCHROEDER", "HAMPTON", "ROWE", "PARSONS", "FRANK", "WATERS", "STRICKLAND", "OSBORNE", "MAXWELL", "CHAN", "DELEON", "NORMAN", "HARRINGTON", "CASEY", "PATTON", "LOGAN", "BOWERS", "MUELLER", "GLOVER", "FLOYD", "HARTMAN", "BUCHANAN", "COBB", "FRENCH", "KRAMER", "MCCORMICK", "CLARKE", "TYLER", "GIBBS", "MOODY", "CONNER", "SPARKS", "MCGUIRE", "LEON", "BAUER", "NORTON", "POPE", "FLYNN", "HOGAN", "ROBLES", "SALINAS", "YATES", "LINDSEY", "LLOYD", "MARSH", "MCBRIDE", "OWEN", "SOLIS", "PHAM", "LANG", "PRATT", "LARA", "BROCK", "BALLARD", "TRUJILLO", "SHAFFER", "DRAKE", "ROMAN", "AGUIRRE", "MORTON", "STOKES", "LAMB", "PACHECO", "PATRICK", "COCHRAN", "SHEPHERD", "CAIN", "BURNETT", "HESS", "LI", "CERVANTES", "OLSEN", "BRIGGS", "OCHOA", "CABRERA", "VELASQUEZ", "MONTOYA", "ROTH", "MEYERS", "CARDENAS", "FUENTES", "WEISS", "HOOVER", "WILKINS", "NICHOLSON", "UNDERWOOD", "SHORT", "CARSON", "MORROW", "COLON", "HOLLOWAY", "SUMMERS", "BRYAN", "PETERSEN", "MCKENZIE", "SERRANO", "WILCOX", "CAREY", "CLAYTON", "POOLE", "CALDERON", "GALLEGOS", "GREER", "RIVAS", "GUERRA", "DECKER", "COLLIER", "WALL", "WHITAKER", "BASS", "FLOWERS", "DAVENPORT", "CONLEY", "HOUSTON", "HUFF", "COPELAND", "HOOD", "MONROE", "MASSEY", "ROBERSON", "COMBS", "FRANCO", "LARSEN", "PITTMAN", "RANDALL", "SKINNER", "WILKINSON", "KIRBY", "CAMERON", "BRIDGES", "ANTHONY", "RICHARD", "KIRK", "BRUCE", "SINGLETON", "MATHIS", "BRADFORD", "BOONE", "ABBOTT", "CHARLES", "ALLISON", "SWEENEY", "ATKINSON", "HORN", "JEFFERSON", "ROSALES", "YORK", "CHRISTIAN", "PHELPS", "FARRELL", "CASTANEDA", "NASH", "DICKERSON", "BOND", "WYATT", "FOLEY", "CHASE", "GATES", "VINCENT", "MATHEWS", "HODGE", "GARRISON", "TREVINO", "VILLARREAL", "HEATH", "DALTON", "VALENCIA", "CALLAHAN", "HENSLEY", "ATKINS", "HUFFMAN", "ROY", "BOYER", "SHIELDS", "LIN", "HANCOCK", "GRIMES", "GLENN", "CLINE", "DELACRUZ", "CAMACHO", "DILLON", "PARRISH", "ONEILL", "MELTON", "BOOTH", "KANE", "BERG", "HARRELL", "PITTS", "SAVAGE", "WIGGINS", "BRENNAN", "SALAS", "MARKS", "RUSSO", "SAWYER", "BAXTER", "GOLDEN", "HUTCHINSON", "LIU", "WALTER", "MCDOWELL", "WILEY", "RICH", "HUMPHREY", "JOHNS", "KOCH", "SUAREZ", "HOBBS", "BEARD", "GILMORE", "IBARRA", "KEITH", "MACIAS", "KHAN", "ANDRADE", "WARE", "STEPHENSON", "HENSON", "WILKERSON", "DYER", "MCCLURE", "BLACKWELL", "MERCADO", "TANNER", "EATON", "CLAY", "BARRON", "BEASLEY", "ONEAL", "PRESTON", "SMALL", "WU", "ZAMORA", "MACDONALD", "VANCE", "SNOW", "MCCLAIN", "STAFFORD", "OROZCO", "BARRY", "ENGLISH", "SHANNON", "KLINE", "JACOBSON", "WOODARD", "HUANG", "KEMP", "MOSLEY", "PRINCE", "MERRITT", "HURST", "VILLANUEVA", "ROACH", "NOLAN", "LAM", "YODER", "MCCULLOUGH", "LESTER", "SANTANA", "VALENZUELA", "WINTERS", "BARRERA", "LEACH", "ORR", "BERGER", "MCKEE", "STRONG", "CONWAY", "STEIN", "WHITEHEAD", "BULLOCK", "ESCOBAR", "KNOX", "MEADOWS", "SOLOMON", "VELEZ", "ODONNELL", "KERR", "STOUT", "BLANKENSHIP", "BROWNING", "KENT", "LOZANO", "BARTLETT", "PRUITT", "BUCK", "BARR", "GAINES", "DURHAM", "GENTRY", "MCINTYRE", "SLOAN", "ROCHA", "MELENDEZ", "HERMAN", "SEXTON", "MOON", "HENDRICKS", "RANGEL", "STARK", "LOWERY", "HARDIN", "HULL", "SELLERS", "ELLISON", "CALHOUN", "GILLESPIE", "MORA", "KNAPP", "MCCALL", "MORSE", "DORSEY", "WEEKS", "NIELSEN", "LIVINGSTON", "LEBLANC", "MCLEAN", "BRADSHAW", "GLASS", "MIDDLETON", "BUCKLEY", "SCHAEFER", "FROST", "HOWE", "HOUSE", "MCINTOSH", "HO", "PENNINGTON", "REILLY", "HEBERT", "MCFARLAND", "HICKMAN", "NOBLE", "SPEARS", "CONRAD", "ARIAS", "GALVAN", "VELAZQUEZ", "HUYNH", "FREDERICK", "RANDOLPH", "CANTU", "FITZPATRICK", "MAHONEY", "PECK", "VILLA", "MICHAEL", "DONOVAN", "MCCONNELL", "WALLS", "BOYLE", "MAYER", "ZUNIGA", "GILES", "PINEDA", "PACE", "HURLEY", "MAYS", "MCMILLAN", "CROSBY", "AYERS", "CASE", "BENTLEY", "SHEPARD", "EVERETT", "PUGH", "DAVID", "MCMAHON", "DUNLAP", "BENDER", "HAHN", "HARDING", "ACEVEDO", "RAYMOND", "BLACKBURN", "DUFFY", "LANDRY", "DOUGHERTY", "BAUTISTA", "SHAH", "POTTS", "ARROYO", "VALENTINE", "MEZA", "GOULD", "VAUGHAN", "FRY", "RUSH", "AVERY", "HERRING", "DODSON", "CLEMENTS", "SAMPSON", "TAPIA", "BEAN", "LYNN", "CRANE", "FARLEY", "CISNEROS", "BENTON", "ASHLEY", "MCKAY", "FINLEY", "BEST", "BLEVINS", "FRIEDMAN", "MOSES", "SOSA", "BLANCHARD", "HUBER", "FRYE", "KRUEGER", "BERNARD", "ROSARIO", "RUBIO", "MULLEN", "BENJAMIN", "HALEY", "CHUNG", "MOYER", "CHOI", "HORNE", "YU", "WOODWARD", "ALI", "NIXON", "HAYDEN", "RIVERS", "ESTES", "MCCARTY", "RICHMOND", "STUART", "MAYNARD", "BRANDT", "OCONNELL", "HANNA", "SANFORD", "SHEPPARD", "CHURCH", "BURCH", "LEVY", "RASMUSSEN", "COFFEY", "PONCE", "FAULKNER", "DONALDSON", "SCHMITT", "NOVAK", "COSTA", "MONTES", "BOOKER", "CORDOVA", "WALLER", "ARELLANO", "MADDOX", "MATA", "BONILLA", "STANTON", "COMPTON", "KAUFMAN", "DUDLEY", "MCPHERSON", "BELTRAN", "DICKSON", "MCCANN", "VILLEGAS", "PROCTOR", "HESTER", "CANTRELL", "DAUGHERTY", "CHERRY", "BRAY", "DAVILA", "ROWLAND", "LEVINE", "MADDEN", "SPENCE", "GOOD", "IRWIN", "WERNER", "KRAUSE", "PETTY", "WHITNEY", "BAIRD", "HOOPER", "POLLARD", "ZAVALA", "JARVIS", "HOLDEN", "HAAS", "HENDRIX", "MCGRATH", "BIRD", "LUCERO", "TERRELL", "RIGGS", "JOYCE", "MERCER", "ROLLINS", "GALLOWAY", "DUKE", "ODOM", "ANDERSEN", "DOWNS", "HATFIELD", "BENITEZ", "ARCHER", "HUERTA", "TRAVIS", "MCNEIL", "HINTON", "ZHANG", "HAYS", "MAYO", "FRITZ", "BRANCH", "MOONEY", "EWING", "RITTER", "ESPARZA", "FREY", "BRAUN", "GAY", "RIDDLE", "HANEY", "KAISER", "HOLDER", "CHANEY", "MCKNIGHT", "GAMBLE", "VANG", "COOLEY", "CARNEY", "COWAN", "FORBES", "FERRELL", "DAVIES", 
"BARAJAS", "SHEA", "OSBORN", "BRIGHT", "CUEVAS", "BOLTON", "MURILLO", "LUTZ", "DUARTE", "KIDD", "KEY", "COOKE", "GOFF", "DEJESUS", "MARIN", "DOTSON", "BONNER", "COTTON", "MERRILL", "LINDSAY", "LANCASTER", "MCGOWAN", "FELIX", "SALGADO", "SLATER", "CARVER", "GUTHRIE", "HOLMAN", "FULTON", "SNIDER", "SEARS", "WITT", "NEWELL", "BYERS", "LEHMAN", "GORMAN", "COSTELLO", "DONAHUE", "DELANEY", "ALBERT", "WORKMAN", "ROSAS", "SPRINGER", "KINNEY", "JUSTICE", "ODELL", "LAKE", "DONNELLY", "LAW", "DAILEY", "GUEVARA", "SHOEMAKER", "BARLOW", "MARINO", "WINTER", "CRAFT", "KATZ", "PICKETT", "ESPINOSA", "MALONEY", "DALY", "GOLDSTEIN", "CROWLEY", "VOGEL", "KUHN", "PEARCE", "HARTLEY", "CLEVELAND", "PALACIOS", "MCFADDEN", "BRITT", "WOOTEN", "CORTES", "DILLARD", "CHILDERS", "ALFORD", "DODD", "EMERSON", "WILDER", "LANGE", "GOLDBERG", "QUINTERO", "BEACH", "ENRIQUEZ", "QUINTANA", "HELMS", "MACKEY", "FINCH", "CRAMER", "MINOR", "FLANAGAN", "FRANKS", "CORONA", "KENDALL", "MCCABE", "HENDRICKSON", "MOSER", "MCDERMOTT", "CAMP", "MCLEOD", "BERNAL", "KAPLAN", "MEDRANO", "LUGO", "TRACY", "BACON", "CROWE", "RICHTER", "WELSH", "HOLLEY", "RATLIFF", "MAYFIELD", "TALLEY", "HAINES", "DALE", "GIBBONS", "HICKEY", "BYRNE", "KIRKLAND", "FARRIS", "CORREA", "TILLMAN", "SWEET", "KESSLER", "ENGLAND", "HEWITT", "BLANCO", "CONNOLLY", "PATE", "ELDER", "BRUNO", "HOLCOMB", "HYDE", "MCALLISTER", "CASH", "CHRISTOPHER", "WHITFIELD", "MEEKS", "HATCHER", "FINK", "SUTHERLAND", "NOEL", "RITCHIE", "ROSA", "LEAL", "JOYNER", "STARR", "MORIN", "DELAROSA", "CONNOR", "HILTON", "ALSTON", "GILLIAM", "WYNN", "WILLS", "JARAMILLO", "ONEIL", "NIEVES", "BRITTON", "RANKIN", "BELCHER", "GUY", "CHAMBERLAIN", "TYSON", "PUCKETT", "DOWNING", "SHARPE", "BOGGS", "TRUONG", "PIERSON", "GODFREY", "MOBLEY", "JOHN", "KERN", "DYE", "HOLLIS", "BRAVO", "MAGANA", "RUTHERFORD", "NG", "TUTTLE", "LIM", "ROMANO", "TREJO", "ARTHUR", "KNOWLES", "LYON", "SHIRLEY", "QUINONES", "CHILDS", "DOLAN", "HEAD", "REYNA", "SAENZ", "HASTINGS", "KENNEY", "CANO", "FOREMAN", "DENTON", "VILLALOBOS", "PRYOR", "SARGENT", "DOHERTY", "HOPPER", "PHAN", "WOMACK", "LOCKHART", "VENTURA", "DWYER", "MULLER", "GALINDO", "GRACE", "SORENSEN", "COURTNEY", "PARRA", "RODRIGUES", "NICHOLAS", "AHMED", "MCGINNIS", "LANGLEY", "MADISON", "LOCKE", "JAMISON", "NAVA", "GUSTAFSON", "SYKES", "DEMPSEY", "HAMM", "RODRIQUEZ", "MCGILL", "XIONG", "ESQUIVEL", "SIMMS", "KENDRICK", "BOYCE", "VIGIL", "DOWNEY", "MCKENNA", "SIERRA", "WEBBER", "KIRKPATRICK", "DICKINSON", "COUCH", "BURKS", "SHEEHAN", "SLAUGHTER", "PIKE", "WHITLEY", "MAGEE", "CHENG", "SINCLAIR", "CASSIDY", "RUTLEDGE", "BURRIS", "BOWLING", "CRABTREE", "MCNAMARA", "AVALOS", "VU", "HERRON", "BROUSSARD", "ABRAHAM", "GARLAND", "CORBETT", "CORBIN", "STINSON", "CHIN", "BURT", "HUTCHINS", "WOODRUFF", "LAU", "BRANDON", "SINGER", "HATCH", "ROSSI", "SHAFER", "OTT", "GOSS", "GREGG", "DEWITT", "TANG", "POLK", "WORLEY", "COVINGTON", "SALDANA", "HELLER", "EMERY", "SWARTZ", "CHO", "MCCRAY", "ELMORE", "ROSENBERG", "SIMONS", "CLEMONS", "BEATTY", "HARDEN", "HERBERT", "BLAND", "RUCKER", "MANLEY", "ZIEGLER", "GRADY", "LOTT", "ROUSE", "GLEASON", "MCCLELLAN", "ABRAMS", "VO", "ALBRIGHT", "MEIER", "DUNBAR", "ACKERMAN", "PADGETT", "MAYES", "TIPTON", "COFFMAN", "PERALTA", "SHAPIRO", "ROE", "WESTON", "PLUMMER", "HELTON", "STERN", "FRASER", "STOVER", "FISH", "SCHUMACHER", "BACA", "CURRAN", "VINSON", "VERA", "CLIFTON", "ERVIN", "ELDRIDGE", "LOWRY", "CHILDRESS", "BECERRA", "GORE", "SEYMOUR", "CHU", "FIELD", "AKERS", "CARRASCO", "BINGHAM", "STERLING", "GREENWOOD", "LESLIE", "GROVES", "MANUEL", "SWAIN", "EDMONDS", "MUNIZ", "THOMSON", "CROUCH", "WALDEN", "SMART", "TOMLINSON", "ALFARO", "QUICK", "GOLDMAN", "MCELROY", "YARBROUGH", "FUNK", "HONG", "PORTILLO", "LUND", "NGO", "ELKINS", "STROUD", "MEREDITH", "BATTLE", "MCCAULEY", "ZAPATA", "BLOOM", "GEE", "GIVENS", "CARDONA", "SCHAFER", "ROBISON", "GUNTER", "GRIGGS", "TOVAR", "TEAGUE", "SWIFT", "BOWDEN", "SCHULZ", "BLANTON", "BUCKNER", "WHALEN", "PRITCHARD", "PIERRE", "KANG", "METCALF", "BUTTS", "KURTZ", "SANDERSON", "TOMPKINS", "INMAN", "CROWDER", "DICKEY", "HUTCHISON", "CONKLIN", "HOSKINS", "HOLBROOK", "HORNER", "NEELY", "TATUM", "HOLLINGSWORTH", "DRAPER", "CLEMENT", "LORD", "REECE", "FELDMAN", "KAY", "HAGEN", "CREWS", "BOWLES", "POST", "JEWELL", "DALEY", "CORDERO", "MCKINLEY", "VELASCO", "MASTERS", "DRISCOLL", "BURRELL", "VALLE", "CROW", "DEVINE", "LARKIN", "CHAPPELL", "POLLOCK", "LY", "KIMBALL", "SCHMITZ", "LU", "RUBIN", "SELF", "BARRIOS", "PEREIRA", "PHIPPS", "MCMANUS", "NANCE", "STEINER", "POE", "CROCKETT", "JEFFRIES", "AMOS", "NIX", "NEWSOME", "DOOLEY", "PAYTON", "ROSEN", "SWENSON", "CONNELLY", "TOLBERT", "SEGURA", "ESPOSITO", "COKER", "BIGGS", "HINKLE", "THURMAN", "DREW", "IVEY", "BULLARD", "BAEZ", "NEFF", "MAHER", "STRATTON", "EGAN", "DUBOIS", "GALLARDO", "BLUE", "RAINEY", "YEAGER", "SAUCEDO", "FERREIRA", "SPRAGUE", "LACY", "HURTADO", "HEARD", "CONNELL", "STAHL", "ALDRIDGE", "AMAYA", "FORREST", "ERWIN", "GUNN", "SWAN", "BUTCHER", "ROSADO", "GODWIN", "HAND", "GABRIEL", "OTTO", "WHALEY", "LUDWIG", "CLIFFORD", "GROVE", "BEAVER", "SILVER", "DANG", "HAMMER", "DICK", "BOSWELL", "MEAD", "COLVIN", "OLEARY", "MILLIGAN", "GOINS", "AMES", "DODGE", "KAUR", "ESCOBEDO", "ARREDONDO", "GEIGER", "WINKLER", "DUNHAM", "TEMPLE", "BABCOCK", "BILLINGS", "GRIMM", "LILLY", "WESLEY", "MCGHEE", "SIEGEL", "PAINTER", "BOWER", "PURCELL", "BLOCK", "AGUILERA", "NORWOOD", "SHERIDAN", "CARTWRIGHT", "COATES", "DAVISON", "REGAN", "RAMEY", "KOENIG", "KRAFT", "BUNCH", "ENGEL", "TAN", "WINN", "STEWARD", "LINK", "VICKERS", "BRAGG", "PIPER", "HUGGINS", "MICHEL", "HEALY", "JACOB", "MCDONOUGH", "WOLFF", "COLBERT", "ZEPEDA", "HOANG", "DUGAN", "MEADE", "KILGORE", "GUILLEN", "DO", "HINOJOSA", "GOODE", "ARRINGTON", "GARY", "SNELL", "WILLARD", "RENTERIA", "CHACON", "GALLO", "HANKINS", "MONTANO", "BROWNE", "PEACOCK", "OHARA", "CORNELL", "SHERWOOD", "CASTELLANOS", "THORPE", "STILES", "SADLER", "LATHAM", "REDMOND", "GREENBERG", "COTE", "WADDELL", "DUKES", "DIAMOND", "BUI", "MADRID", "ALONSO", "SHEETS", "IRVIN", "HURT", "FERRIS", "SEWELL", "CARLTON", "ARAGON", "BLACKMON", "HADLEY", "HOYT", "MCGRAW", "PAGAN", "LAND", "TIDWELL", "LOVELL", "MINER", "DOSS", "DAHL", "DELATORRE", "STANFORD", "KAUFFMAN", "VELA", "GAGNON", "WINSTON", "GOMES", "THACKER", "CORONADO", "ASH", "JARRETT", "HAGER", "SAMUELS", "METZGER", "RAINES", "SPIVEY", "MAURER", "HAN", "VOSS", "HENLEY", "CABALLERO", "CARUSO", "COULTER", "NORTH", "FINN", "CAHILL", "LANIER", "SOUZA", "MCWILLIAMS", "DEAL", "URBAN", "SCHAFFER", "HOUSER", "CUMMINS", "ROMO", "CROCKER", "BASSETT", "KRUSE", "BOLDEN", "YBARRA", "METZ", "ROOT", "MCMULLEN", "HAGAN", "CRUMP", "GUIDRY", "BRANTLEY", "KEARNEY", "BEAL", "TOTH", "JORGENSEN", "TIMMONS", "MILTON", "TRIPP", "HURD", "SAPP", "WHITMAN", "MESSER", "BURGOS", "MAJOR", "WESTBROOK", "CASTLE", "SERNA", "CARLISLE", "VARELA", "CULLEN", "WILHELM", "BERGERON", "BURGER", "POSEY", "BARNHART", "HACKETT", "MADRIGAL", "EUBANKS", "SIZEMORE", "HILLIARD", "HARGROVE", "BOUCHER", "THOMASON", "MELVIN", "ROPER", "BARNARD", "FONSECA", "PEDERSEN", "QUIROZ", "WASHBURN", "HOLLIDAY", "YEE", "RUDOLPH", "BERMUDEZ", "COYLE", "GIL", "PINA", "GOODRICH", "ELIAS", "LOCKWOOD", "CABRAL", "CARRANZA", "DUVALL", "CORNELIUS", "MCCOLLUM", "STREET", "MCNEAL", "CONNORS", "ANGEL", "PAULSON", "HINSON", "KEENAN", "SHELDON", "FARR", "EDDY", "SAMUEL", "RING", "LEDBETTER", "BETTS", "FONTENOT", "GIFFORD", "HANNAH", "HANLEY", "PERSON", "FOUNTAIN", "LEVIN", "STUBBS", "HIGHTOWER", "MURDOCK", "KOEHLER", "MA", "ENGLE", "SMILEY", "CARMICHAEL", "SHEFFIELD", "LANGSTON", "MCCRACKEN", "YOST", "TROTTER", "STORY", "STARKS", "LUJAN", "BLOUNT", "CODY", "RUSHING", "BENOIT", "HERNDON", "JACOBSEN", "NIETO", "WISEMAN", "LAYTON", "EPPS", "SHIPLEY", "LEYVA", "REEDER", "BRAND", "ROLAND", "FITCH", "RICO", "NAPIER", "CRONIN", "MCQUEEN", "PAREDES", "TRENT", "CHRISTIANSEN", "SPANGLER", "PETTIT", "LANGFORD", "BENAVIDES", "PENN", "PAIGE", "WEIR", "DIETZ", "PRATER", "BREWSTER", "LOUIS", "DIEHL", "PACK", "SPAULDING", "ERNST", "AVILES", "NOWAK", "OLVERA", "ROCK", "MANSFIELD", "AQUINO", "OGDEN", "STACY", "RIZZO", "SYLVESTER", "GILLIS", "SANDS", "MACHADO", "LOVETT", "DUONG", "HYATT", "LANDIS", "PLATT", "BUSTAMANTE", "HEDRICK", "PRITCHETT", "GASTON", "DOBSON", "CAUDILL", "TACKETT", "BATEMAN", "LANDERS", "CARMONA", "GIPSON", "URIBE", "MCNEILL", "LEDFORD", "MIMS", "ABEL", "GOLD", "SMALLWOOD", "THORNE", "MCHUGH", "DICKENS", "LEUNG", "TOBIN", "KOWALSKI", "MEDEIROS", "COPE", "QUEZADA", "KRAUS", "OVERTON", "MONTALVO", "STALEY", "WOODY", "HATHAWAY", "OSORIO", "LAIRD", "DOBBS", "CAPPS", "PUTNAM", "LAY", "FRANCISCO", "BERNSTEIN", "ADAIR", "HUTTON", "BURKETT", "RHOADES", "YANEZ", "RICHEY", "BLEDSOE", "MCCAIN", "BEYER", "CATES", "ROCHE", "SPICER", "QUEEN", "DOTY", "DARLING", "DARBY", "SUMNER", "KINCAID", "HAY", "GROSSMAN", "LACEY", "WILKES", "HUMPHRIES", "PAZ", "DARNELL", "KEYS", "KYLE", "LACKEY", "VOGT", "LOCKLEAR", "KISER", "PRESLEY", "BRYSON", "BERGMAN", "PEOPLES", "FAIR", "MCCLENDON", "CORLEY", "PRADO", "CHRISTIE", "DELONG", "SKAGGS", "DILL", "SHEARER", "JUDD", "STAPLETON", "FLAHERTY", "CASILLAS", "PINTO", "YOUNGBLOOD", "HAYWOOD", "TONEY", "RICKS", "GRANADOS", "CRUM", "TRIPLETT", "SORIANO", "WAITE", "HOFF", "ANAYA", "CRENSHAW", "JUNG", "CANALES", "CAGLE", "DENNY", "MARCUS", "BERMAN", "MUNSON", "OCAMPO", "BAUMAN", "CORCORAN", "KEEN", "ZIMMER", "FRIEND", "ORNELAS", "VARNER", "PELLETIER", "VERNON", "BLUM", "ALBRECHT", "CULVER", "SCHUSTER", "CUELLAR", "MCCORD", "SHULTZ", "MCRAE", "MORELAND", "CALVERT", "WILLIAM", "WHITTINGTON", "ECKERT", "KEENE", "MOHR", "HANKS", "KIMBLE", "CAVANAUGH", "CROWELL", "RUSS", "FELICIANO", "CRAIN", "BUSCH", "MCCORMACK", "DRUMMOND", "OMALLEY", "ALDRICH", "LUKE", "GRECO", "MOTT", "OAKES", "MALLORY", "MCLAIN", "BURROWS", "OTERO", "ALLRED", "EASON", "FINNEY", "WELLER", "WALDRON", "CHAMPION", "JEFFERS", "COON", "ROSENTHAL", "HUDDLESTON", "SOLANO", "HIRSCH", "AKINS", "OLIVARES", "SONG", "SNEED", "BENEDICT", "BAIN", "OKEEFE", "HIDALGO", "MATOS", "STALLINGS", "PARIS", "GAMEZ", "KENNY", "QUIGLEY", "MARRERO", 
"FAGAN", "DUTTON", "PAPPAS", "ATWOOD", "MCGOVERN", "BAGLEY", "READ", "LUNSFORD", "MOSELEY", "OAKLEY", "ASHBY", "GRANGER", "SHAVER", "HOPE", "COE", "BURROUGHS", "HELM", "NEUMANN", "AMBROSE", "MICHAELS", "PRESCOTT", "LIGHT", "DUMAS", "FLOOD", "STRINGER", "CURRIE", "COMER", "FONG", "WHITLOCK", "LEMUS", "HAWLEY", "ULRICH", "STAPLES", "BOYKIN", "KNUTSON", "GROVER", "HOBSON", "CORMIER", "DORAN", "THAYER", "WOODSON", "WHITT", "HOOKER", "KOHLER", "VANDYKE", "ADDISON", "SCHRADER", "HASKINS", "WHITTAKER", "MADSEN", "GAUTHIER", "BURNETTE", "KEATING", "PURVIS", "ALEMAN", "HUSTON", "PIMENTEL", "HAMLIN", "GERBER", "HOOKS", "SCHWAB", "HONEYCUTT", "SCHULTE", "ALONZO", "ISAAC", "CONROY", "ADLER", "EASTMAN", "COTTRELL", "OROURKE", "HAWK", "GOLDSMITH", "RADER", "CRANDALL", "REYNOSO", "SHOOK", "ABERNATHY", "BAER", "OLIVAS", "GRAYSON", "BARTLEY", "HENNING", "PARR", "DUFF", "BRUNSON", "BAUM", "ENNIS", "LAUGHLIN", "FOOTE", "VALADEZ", "ADAMSON", "BEGAY", "STOVALL", "LINCOLN", "CHEUNG", "MALLOY", "RIDER", "GIORDANO", "JANSEN", "LOPES", "ARNETT", "PENDLETON", "GAGE", "BARRAGAN", "KEYES", "NAVARRETE", "AMADOR", "HOFFMANN", "SCHILLING", "HAWTHORNE", "PERDUE", "SCHREIBER", "AREVALO", "NAYLOR", "DELUCA", "MARCUM", "ALTMAN", "MARK", "CHADWICK", "DOAN", "EASLEY", "LADD", "WOODALL", "BETANCOURT", "SHIN", "MAGUIRE", "BELLAMY", "QUINTANILLA", "HAM", "SORENSON", "MATTSON", "BRENNER", "MEANS", "FAUST", "CALLOWAY", "OJEDA", "MCNALLY", "DIETRICH", "RANSOM", "HARE", "FELTON", "WHITING", "BURKHART", "CLINTON", "SCHWARZ", "CLEARY", "WETZEL", "REAGAN", "STJOHN", "CHOW", "HAUSER", "DUPREE", "BRANNON", "LYLES", "PRATHER", "WILLOUGHBY", "SEPULVEDA", "NUGENT", "PICKENS", "MOSHER", "JOINER", "STONER", "DOWLING", "TRIMBLE", "VALDES", "CHEEK", "SCRUGGS", "COY", "TILLEY", "BARNEY", "SAYLOR", "NAGY", "HORVATH", "LAI", "COREY", "RUTH", "SAUER", "BARON", "THAO", "ROWELL", "GRUBBS", "SCHAEFFER", "HILLMAN", "SAMS", "HOGUE", "HUTSON", "BUSBY", "NICKERSON", "BRUNER", "PARHAM", "RENDON", "ANDERS", "LOMBARDO", "IVERSON", "KINSEY", "EARL", "BORDEN", "TITUS", "JEAN", "TELLEZ", "BEAVERS", "CORNETT", "SOTELO", "KELLOGG", "SILVERMAN", "BURNHAM", "MCNAIR", "JERNIGAN", "ESCAMILLA", "BARROW", "COATS", "LONDON", "REDDING", "RUFFIN", "YI", "BOUDREAUX", "GOODSON", "DOWELL", "FENTON", "MOCK", "DOZIER", "BYNUM", "GALE", "JOLLY", "BECKMAN", "GODDARD", "CRAVEN", "WHITMORE", "LEARY", "MCCLOUD", "GAMBOA", "KERNS", "BRUNNER", "NEGRON", "HOUGH", "CUTLER", "LEDESMA", "PYLE", "MONAHAN", "TABOR", "BURK", "LEONE", "STAUFFER", "HAYWARD", "DRIVER", "RUFF", "TALBOT", "SEALS", "BOSTON", "CARBAJAL", "FAY", "PURDY", "MCGREGOR", "SUN", "ORELLANA", "GENTILE", "MAHAN", "BROWER", "PATINO", "THURSTON", "SHIPMAN", "TORREZ", "AARON", "WEINER", "CALL", "WILBURN", "OLIVA", "HAIRSTON", "COLEY", "HUMMEL", "ARREOLA", "WATT", "SHARMA", "LENTZ", "ARCE", "POWER", "LONGORIA", "WAGONER", "BURR", "HSU", "TINSLEY", "BEEBE", "WRAY", "NUNN", "PRIETO", "GERMAN", "ROWLEY", "GRUBB", "BRITO", "ROYAL", "VALENTIN", "BARTHOLOMEW", "SCHULER", "ARANDA", "FLINT", "HEARN", "VENEGAS", "UNGER", "MATTINGLY", "BOLES", "CASAS", "BARGER", "JULIAN", "DOW", "DOBBINS", "VANN", "CHESTER", "STRANGE", "LEMON", "KAHN", "MCKINNON", "GANNON", "WAGGONER", "CONN", "MEEK", "CAVAZOS", "SKELTON", "LO", "KUMAR", "TOLEDO", "LORENZ", "VALLEJO", "STARKEY", "KITCHEN", "REAVES", "DEMARCO", "FARRAR", "STEARNS", "MICHAUD", "HIGGINBOTHAM", "FERNANDES", "ISAACS", "MARION", "GUILLORY", "PRIEST", "MEEHAN", "OLIVEIRA", "PALMA", "OSWALD", "LOOMIS", "GALVEZ", "LIND", "MENA", "STCLAIR", "HINDS", "REARDON", "ALLEY", "BARTH", "CROOK", "BLISS", "NAGEL", "BANUELOS", "PARISH", "HARMAN", "DOUGLASS", "KEARNS", "NEWCOMB", "MULLIGAN", "COUGHLIN", "WAY", "FOURNIER", "LAWLER", "KAMINSKI", "BARBOUR", "SOUSA", "STUMP", "ALANIZ", "IRELAND", "RUDD", "CARNES", "LUNDY", "GODINEZ", "PULIDO", "DENNISON", "BURDICK", "BAUMANN", "DOVE", "STODDARD", "LIANG", "DENT", "ROARK", "MCMAHAN", "BOWSER", "PARNELL", "MAYBERRY", "WAKEFIELD", "ARNDT", "OGLE", "WORTHINGTON", "DURBIN", "ESCALANTE", "PEDERSON", "WELDON", "VICK", "KNOTT", "RYDER", "ZARATE", "IRVING", "CLEMENS", "SHELLEY", "SALTER", "JACK", "CLOUD", "DASILVA", "MUHAMMAD", "SQUIRES", "RAPP", "DAWKINS", "POLANCO", "CHATMAN", "MAIER", "YAZZIE", "GRUBER", "STATON", "BLACKMAN", "MCDONNELL", "DYKES", "LAWS", "WHITTEN", "PFEIFFER", "VIDAL", "EARLY", "KELSEY", "BAUGHMAN", "DIAS", "STARNES", "CRESPO", "LOMBARDI", "KILPATRICK", "DEATON", "SATTERFIELD", "WILES", "WEINSTEIN", "ROWAN", "DELOSSANTOS", "HAMBY", "ESTEP", "DAIGLE", "ELAM", "CREECH", "HECK", "CHAVIS", "ECHOLS", "FOSS", "TRAHAN", "STRAUSS", "VANHORN", "WINSLOW", "REA", "HEATON", "FAIRCHILD", "MINTON", "HITCHCOCK", "LINTON", "HANDY", "CROUSE", "COLES", "UPTON", "FOY", "HERRINGTON", "MCCLELLAND", "HWANG", "RECTOR", "LUTHER", "KRUGER", "SALCEDO", "CHANCE", "GUNDERSON", "THARP", "GRIFFITHS", "GRAF", "BRANHAM", "HUMPHREYS", "RENNER", "LIMA", "ROONEY", "MOYA", "ALMEIDA", "GAVIN", "COBURN", "OUELLETTE", "GOETZ", "SEAY", "PARROTT", "HARMS", "ROBB", "STOREY", "BARBOSA", "BARRAZA", "LOYD", "MERCHANT", "DONOHUE", "CARRIER", "DIGGS", "CHASTAIN", "SHERRILL", "WHIPPLE", "BRASWELL", "WEATHERS", "LINDER", "CHAPA", "BOCK", "OH", "LOVELACE", "SAAVEDRA", "FERRARA", "CALLAWAY", "SALMON", "TEMPLETON", "CHRISTY", "HARP", "DOWD", "FORRESTER", "LAWTON", "EPSTEIN", "GANT", "TIERNEY", "SEAMAN", "CORRAL", "DOWDY", "ZARAGOZA", "MORRISSEY", "ELLER", "CHAU", "BREEN", "HIGH", "NEWBERRY", "BEAM", "YANCEY", "JARRELL", "CERDA", "ELLSWORTH", "LOFTON", "THIBODEAUX", "POOL", "RINEHART", "ARTEAGA", "MARLOW", "HACKER", "WILL", "MACKENZIE", "HOOK", "GILLILAND", "EMMONS", "PICKERING", "MEDLEY", "WILLEY", "ANDREW", "SHELL", "RANDLE", "BRINKLEY", "PRUETT", "TOBIAS", "EDMONDSON", "GRIER", "SALDIVAR", "BATISTA", "ASKEW", "MOELLER", "CHAVARRIA", "AUGUSTINE", "TROYER", "LAYNE", "MCNULTY", "SHANK", "DESAI", "HERRMANN", "HEMPHILL", "BEARDEN", "SPEAR", "KEENER", "HOLGUIN", "CULP", "BRADEN", "BRISCOE", "BALES", "GARVIN", "STOCKTON", "ABREU", "SUGGS", "MCCARTNEY", "FERRER", "RHOADS", "HA", "NEVAREZ", "SINGLETARY", "CHONG", "ALCALA", "CHENEY", "WESTFALL", "DAMICO", "SNODGRASS", "DEVRIES", "LOONEY", "HEIN", "LYLE", "LOCKETT", "JACQUES", "BARKLEY", "WAHL", "APONTE", "MYRICK", "BOLIN", "HOLM", "SLACK", "SCHERER", "MARTINO", "BACHMAN", "ELY", "NESBITT", "MARROQUIN", "BOUCHARD", "MAST", "JAMESON", "HILLS", "MIRELES", "BUENO", "PEASE", "VITALE", "ALARCON", "LINARES", "SCHELL", "LIPSCOMB", "ARRIAGA", "BOURGEOIS", "MARKHAM", "BONDS", "WISNIEWSKI", "IVY", "OLDHAM", "WENDT", "FALLON", "JOY", "STAMPER", "BABB", "STEINBERG", "ASHER", "FUCHS", "BLANK", "WILLETT", "HEREDIA", "CROFT", "LYTLE", "LANCE", "LASSITER", "BARRIENTOS", "CONDON", "BARFIELD", "DARDEN", "ARAUJO", "NOONAN", "GUINN", "BURLESON", "BELANGER", "MAIN", "TRAYLOR", "MESSINA", "ZEIGLER", "DANIELSON", "MILLARD", "KENYON", "RADFORD", "GRAFF", "BEATY", "BAGGETT", "SALISBURY", "CRISP", "TROUT", "LORENZO", "PARSON", "GANN", "GARBER", "ADCOCK", "COVARRUBIAS", "SCALES", "ACUNA", "THRASHER", "CARD", "VAN", "MABRY", "MOHAMED", "MONTANEZ", "STOCK", "REDD", "WILLINGHAM", "REDMAN", "ZAMBRANO", "GAFFNEY", "HERR", "SCHUBERT", "DEVLIN", "PRINGLE", "HOUCK", "CASPER", "REES", "WING", "EBERT", "JETER", "CORNEJO", "GILLETTE", "SHOCKLEY", "AMATO", "GIRARD", "LEGGETT", "CHEATHAM", "BUSTOS", "EPPERSON", "DUBOSE", "SEITZ", "FRIAS", "EAST", "SCHOFIELD", "STEEN", "ORLANDO", "MYLES", "CARON", "GREY", "DENNEY", "ONTIVEROS", "BURDEN", "JAEGER", "REICH", "WITHERSPOON", "NAJERA", "FRANTZ", "HAMMONDS", "XU", "LEAVITT", "GILCHRIST", "ADAM", "BARONE", "FORMAN", "CEJA", "RAGSDALE", "SISK", "TUBBS", "ELIZONDO", "PRESSLEY", "BOLLINGER", "LINN", "HUNTLEY", "DEWEY", "GEARY", "CARLOS", "RAGLAND", "MIXON", "MCARTHUR", "BAUGH", "TAM", "NOBLES", "CLEVENGER", "LUSK", "FOUST", "COONEY", "TAMAYO", "ROBERT", "LONGO", "OVERSTREET", "OGLESBY", "MACE", "CHURCHILL", "MATSON", "HAMRICK", "ROCKWELL", "TRAMMELL", "WHEATLEY", "CARRINGTON", "FERRARO", "RALSTON", "CLANCY", "MONDRAGON", "CARL", "HU", "HOPSON", "BREAUX", "MCCURDY", "MARES", "MAI", "CHISHOLM", "MATLOCK", "AIKEN", "CARY", "LEMONS", "ANGUIANO", "HERRICK", "CRAWLEY", "MONTERO", "HASSAN", "ARCHULETA", "FARIAS", "COTTER", "PARRIS", "FELDER", "LUU", "PENCE", "GILMAN", "KILLIAN", "NARANJO", "DUGGAN", "SCARBOROUGH", "SWANN", "EASTER", "RICKETTS", "FRANCE", "BELLO", "NADEAU", "STILL", "RINCON", "CORNWELL", "SLADE", "FIERRO", "MIZE", "CHRISTIANSON", "GREENFIELD", "MCAFEE", "LANDRUM", "ADAME", "DINH", "LANKFORD", "LEWANDOWSKI", "RUST", "BUNDY", "WATERMAN", "MILNER", "MCCRARY", "HITE", "CURLEY", "DONALD", "DUCKWORTH", "CECIL", "CARRERA", "SPEER", "BIRCH", "DENSON", "BECKWITH", "STACK", "DURANT", "LANTZ", "DORMAN", "CHRISTMAN", "SPANN", "MASTERSON", "HOSTETLER", "KOLB", "BRINK", "SCANLON", "NYE", "WYLIE", "BEVERLY", "WOO", "SPURLOCK", "SOMMER", "SHELBY", "REINHARDT", "ROBLEDO", "BERTRAND", "ASHTON", "CYR", "EDGAR", "DOE", "HARKINS", "BRUBAKER", "STOLL", "DANGELO", "ZHOU", "MOULTON", "HANNON", "FALK", "RAINS", "BROUGHTON", "APPLEGATE", "HUDGINS", "SLONE", "YOON", "FARNSWORTH", "PERALES", "REEDY", "MILAM", "FRANZ", "PONDER", "RICCI", "FONTAINE", "IRIZARRY", "PUENTE", "NEW", "SELBY", "CAZARES", "DOUGHTY", "MOFFETT", "BALDERAS", "FINE", "SMALLEY", "CARLIN", "TRINH", "DYSON", "GALVIN", "VALDIVIA", "BENNER", "LOW", "TURPIN", "LYMAN", "BILLINGSLEY", "MCADAMS", "CARDWELL", "FRALEY", "PATTEN", "HOLTON", "SHANKS", "MCALISTER", "CANFIELD", "SAMPLE", "HARLEY", "CASON", "TOMLIN", "AHMAD", "COYNE", "FORTE", "RIGGINS", "LITTLEJOHN", "FORSYTHE", "BRINSON", "HALVERSON", "BACH", "STUCKEY", "FALCON", "WENZEL", "TALBERT", "CHAMPAGNE", "MCHENRY", "VEST", "SHACKELFORD", "ORDONEZ", "COLLAZO", "BOLAND", "SISSON", "BIGELOW", "WHARTON", "HYMAN", "BRUMFIELD", "OATES", "MESA", "MORRELL", "BECKETT", "REIS", "ALVES", "CHIU", "LARUE", "STREETER", "GROGAN", "BLAKELY", "BROTHERS", "HATTON", "KIMBROUGH", "LAUER", "WALLIS", "JETT", "PEPPER", "HILDEBRAND", "RAWLS", "MELLO", "NEVILLE", "BULL", "STEFFEN", "BRAXTON", "COWART", "SIMPKINS", "MCNEELY", "BLALOCK", "SPAIN", "SHIPP", "LINDQUIST", "OREILLY", "BUTTERFIELD", "PERRIN", 
"QUALLS", "EDGE", "HAVENS", "LUONG", "SWITZER", "TROUTMAN", "FORTNER", "TOLLIVER", "MONK", "POINDEXTER", "RUPP", "FERRY", "NEGRETE", "MUSE", "GRESHAM", "BEAUCHAMP", "SCHMID", "BARCLAY", "CHUN", "BRICE", "FAULK", "WATTERS", "BRIONES", "GUAJARDO", "HARWOOD", "GRISSOM", "HARLOW", "WHELAN", "BURDETTE", "PALUMBO", "PAULSEN", "CORRIGAN", "GARVEY", "LEVESQUE", "DOCKERY", "DELGADILLO", "GOOCH", "CAO", "MULLIN", "RIDLEY", "STANFIELD", "NORIEGA", "DIAL", "CEBALLOS", "NUNES", "NEWBY", "BAUMGARTNER", "HUSSAIN", "WYMAN", "CAUSEY", "GOSSETT", "NESS", "WAUGH", "CHOATE", "CARMAN", "DAILY", "KONG", "DEVORE", "IRBY", "BREEDEN", "WHATLEY", "ELLINGTON", "LAMAR", "FULTZ", "BAIR", "ZIELINSKI", "COLBY", "HOUGHTON", "GRIGSBY", "FORTUNE", "PAXTON", "MCMILLIAN", "HAMMONS", "BRONSON", "KECK", "WELLMAN", "AYRES", "WHITESIDE", "MENARD", "ROUSH", "WARDEN", "ESPINO", "STRAND", "HAGGERTY", "BANDA", "KREBS", "FABIAN", "BOWIE", "BRANSON", "LENZ", "BENAVIDEZ", "KEELER", "NEWSOM", "EZELL", "JEFFREY", "PULLIAM", "CLARY", "BYRNES", "KOPP", "BEERS", "SMALLS", "SOMMERS", "GARDINER", "FENNELL", "MANCINI", "OSULLIVAN", "SEBASTIAN", "BRUNS", "GIRON", "PARENT", "BOYLES", "KEEFE", "MUIR", "WHEAT", "VERGARA", "SHULER", "PEMBERTON", "SOUTH", "BROWNLEE", "BROCKMAN", "ROYER", "FANNING", "HERZOG", "MORLEY", "BETHEA", "TONG", "NEEDHAM", "ROQUE", "MOJICA", "BUNN", "FRANCOIS", "NOE", "KUNTZ", "SNOWDEN", "WITHERS", "HARLAN", "SEIBERT", "LIMON", "KIEFER", "BONE", "SELL", "ALLAN", "SKIDMORE", "WREN", "DUNAWAY", "FINNEGAN", "MOE", "WOLFORD", "SEELEY", "KROLL", "LIVELY", "JANSSEN", "MONTAGUE", "RAHMAN", "BOEHM", "NETTLES", "DEES", "KRIEGER", "PEEK", "HERSHBERGER", "SAGE", "CUSTER", "ZHENG", "OTOOLE", "JAIMES", "ELROD", "SOMERS", "LIRA", "NAGLE", "GROOMS", "SORIA", "DRURY", "KEANE", "BOSTIC", "HARTMANN", "PAULEY", "MURRELL", "MANZO", "MOREY", "AGEE", "HAMEL", "TAVARES", "DUNNING", "MCCLOSKEY", "PLUNKETT", "MAPLES", "MARCH", "ARMENTA", "WALDROP", "ESPINAL", "FAJARDO", "CHRISTENSON", "ROBINS", "BAGWELL", "MASSIE", "LEAHY", "URBINA", "MEDLIN", "ZHU", "PANTOJA", "BARBEE", "CLAWSON", "REITER", "KO", "CRIDER", "MAXEY", "WORRELL", "BRACKETT", "MCLEMORE", "YOUNGER", "HER", "HARDESTY", "DANNER", "RAGAN", "ALMANZA", "NIELSON", "GRABER", "MCINTIRE", "TIRADO", "GRISWOLD", "SEIFERT", "VALLES", "LANEY", "GUPTA", "MALIK", "LIBBY", "MARVIN", "KOONTZ", "MARR", "KOZLOWSKI", "LEMKE", "BRANT", "PHELAN", "KEMPER", "GOODEN", "BEAULIEU", "CARDOZA", "HEALEY", "ZHAO", "HARDWICK", "KITCHENS", "BOX", "STEPP", "COMSTOCK", "POSTON", "SAGER", "CONTI", "BORGES", "FARROW", "ACKER", "GLASER", "ANTONIO", "LENNON", "GAITHER", "FREITAS", "ALICEA", "MCMILLEN", "CHAPIN", "RATCLIFF", "LERMA", "SEVERSON", "WILDE", "MORTENSEN", "WINCHESTER", "FLANNERY", "VILLASENOR", "CENTENO", "BURKHOLDER", "HORAN", "MEADOR", "INGLE", "ROLDAN", "ESTRELLA", "PULLEN", "NEWKIRK", "GAYTAN", "LINDBERG", "WINDHAM", "GATLIN", "STOLTZFUS", "BEHRENS", "CINTRON", "BRODERICK", "SOLORZANO", "JAIME", "VENABLE", "CULBERTSON", "GARAY", "CAPUTO", "GRANTHAM", "HANLON", "PARRY", "CRIST", "COSBY", "SHORE", "EVERHART", "DORN", "TURLEY", "ENG", "VALERIO", "RAND", "HIATT", "MOTA", "JUDGE", "KINDER", "COLWELL", "ASHWORTH", "TEJEDA", "SIKES", "OSHEA", "WESTMORELAND", "FABER", "CULPEPPER", "LOGSDON", "FUGATE", "APODACA", "LINDLEY", "SAMSON", "LILES", "MCCLANAHAN", "BURGE", "VAIL", "ETHERIDGE", "BOUDREAU", "ANDRES", "NOLL", "HIGGS", "SNEAD", "LAYMAN", "TURK", "NOLEN", "WAYNE", "BETZ", "VICTOR", "LAFFERTY", "CARBONE", "SKIPPER", "ZELLER", "KASPER", "DESANTIS", "FOGLE", "GANDY", "MENDENHALL", "SEWARD", "SCHWEITZER", "GULLEY", "STINE", "SOWERS", "DUENAS", "MONSON", "BRINKMAN", "HUBERT", "MOTLEY", "PFEIFER", "WEINBERG", "EGGLESTON", "ISOM", "QUINLAN", "GILLEY", "JASSO", "LOYA", "MULL", "REICHERT", "WIRTH", "REDDY", "HODGSON", "STOWE", "MCCALLUM", "AHRENS", "HUEY", "MATTOX", "DUPONT", "AGUAYO", "PAK", "TICE", "ALBA", "COLBURN", "CURRIER", "GASKINS", "HARDER", "COHN", "YOO", "GARNETT", "HARTER", "WENGER", "CHARLTON", "LITTLETON", "MINTER", "HENRIQUEZ", "CONE", "VINES", "KIMMEL", "CROOKS", "CARABALLO", "SEARCY", "PEYTON", "RENFRO", "GROFF", "THORN", "MOUA", "JAY", "LEIGH", "SANBORN", "WICKER", "MARTENS", "BROOME", "ABNEY", "FISK", "ARGUETA", "UPCHURCH", "ALDERMAN", "TISDALE", "CASTELLANO", "LEGG", "WILBUR", "BILLS", "DIX", "MAULDIN", "ISBELL", "MEARS", "LATIMER", "ASHCRAFT", "EARLEY", "TEJADA", "PARTRIDGE", "ANGLIN", "CASWELL", "EASTON", "KIRCHNER", "MEHTA", "LANHAM", "BLAYLOCK", "BINDER", "CATALANO", "HANDLEY", "STORM", "ALBERTSON", "FREE", "TUCK", "KEEGAN", "MORIARTY", "DEXTER", "MANCUSO", "ALLARD", "PINO", "CHAMBERLIN", "MOFFITT", "HAAG", "SCHOTT", "AGNEW", "MALCOLM", "HALLMAN", "HECKMAN", "KARR", "SOARES", "ALFONSO", "TOM", "WADSWORTH", "SCHINDLER", "GARIBAY", "KUYKENDALL", "PENNY", "LITTLEFIELD", "MCNABB", "SAM", "LEA", "BERRIOS", "MURRY", "REGALADO", "DEHART", "MOHAMMED", "COUNTS", "SOLORIO", "PRECIADO", "ARMENDARIZ", "MARTELL", "BARKSDALE", "FRICK", "HALLER", "BROYLES", "DOLL", "CABLE", "DELVALLE", "WEEMS", "KELLEHER", "GAGNE", "ALBERS", "KUNZ", "HOY", "HAWES", "GUENTHER", "JOHANSEN", "CHAFFIN", "WHITWORTH", "WYNNE", "MCMURRAY", "LUCE", "FIORE", "STRAUB", "MAJORS", "MCDUFFIE", "BOHANNON", "RAWLINGS", "FREED", "SUTTER", "LINDSTROM", "BUSS", "LOERA", "HOYLE", "WITTE", "TYREE", "LUTTRELL", "ANDRUS", "STEED", "THIEL", "CRANFORD", "FULMER", "GABLE", "PORRAS", "WEIS", "MAAS", "PACKARD", "NOYES", "KWON", "KNOLL", "MARX", "FEENEY", "ISRAEL", "BOHN", "COCKRELL", "GLICK", "COSGROVE", "KEEFER", "MUNDY", "BATCHELOR", "LOVELESS", "HOROWITZ", "HASKELL", "KUNKEL", "COLSON", "HEDGES", "STAGGS", "SWISHER", "LOMELI", "PADRON", "COTA", "HOMAN", "MUSSER", "CURTIN", "SALERNO", "SEGOVIA", "KEETON", "BRANDENBURG", "STARLING", "TSAI", "MAHON", "KLINGER", "PAQUETTE", "HADDAD", "MCCUNE", "MATHEW", "SHULL", "HIGDON", "GUEST", "SHAY", "SWAFFORD", "ANGULO", "HACKNEY", "EVERS", "SIBLEY", "WOODWORTH", "OSTRANDER", "MANGUM", "SMYTH", "QUARLES", "MCCARTER", "CLOSE", "TRUITT", "STPIERRE", "MACKAY", "BAYER", "TIMM", "THATCHER", "BESS", "TRINIDAD", "JACOBY", "PROFFITT", "CONCEPCION", "PARKINSON", "CARREON", "RAMON", "MONROY", "LEGER", "JAUREGUI", "GLYNN", "TAGGART", "NEIL", "REDDICK", "WIESE", "DOVER", "WICKS", "HENNESSY", "BITTNER", "MCCLUNG", "MCWHORTER", "DERRICK", "STROM", "BECKHAM", "KEE", "COOMBS", "SCHROCK", "HOLTZ", "MAKI", "WILLSON", "HULSEY", "WHITSON", "HAUGEN", "LUMPKIN", "SCHOLL", "GALL", "CARVALHO", "KOVACH", "VIEIRA", "MILLAN", "IRVINE", "HELD", "JOLLEY", "JASPER", "CADENA", "RUNYON", "LOMAX", "FAHEY", "HOPPE", "BIVENS", "RUGGIERO", "HUSSEY", "AINSWORTH", "HARDMAN", "ULLOA", "DUGGER", "FITZSIMMONS", "SCROGGINS", "SOWELL", "TOLER", "BARBA", "BIDDLE", "RAFFERTY", "TRAPP", "BYLER", "BRILL", "DELAGARZA", "THIGPEN", "HILLER", "MARTINS", "JANKOWSKI", "FINDLEY", "HOLLINS", "STULL", "POLLACK", "POIRIER", "RENO", "BRATTON", "JEFFERY", "MENENDEZ", "MCNUTT", "KOHL", "FORSTER", "CLOUGH", "DELOACH", "BADER", "HANES", "STURM", "TAFOYA", "BEALL", "COBLE", "DEMERS", "KOHN", "SANTAMARIA", "VAUGHT", "CORREIA", "MCGREW", "SARMIENTO", "ROBY", "REINHART", "ROSENBAUM", "BERNIER", "SCHILLER", "FURMAN", "GRABOWSKI", "PERRYMAN", "KIDWELL", "SABO", "SAXTON", "NOLAND", "SEATON", "PACKER", "SEAL", "RUBY", "SMOOT", "LAVOIE", "PUTMAN", "FAIRBANKS", "NEILL", "FLORENCE", "BEATTIE", "TARVER", "STEPHEN", "BOLEN", "MCCOMBS", "FREEDMAN", "BARNHILL", "GADDIS", "GOAD", "WORDEN", "CANADA", "VICKERY", "CALVIN", "MCCLINTOCK", "SLOCUM", "CLAUSEN", "MCCUTCHEON", "RIPLEY", "RAZO", "SOUTHARD", "BOURNE", "AIELLO", "KNUDSEN", "ANGELES", "KEENEY", "STACEY", "NEELEY", "HOLLY", "GALLANT", "EADS", "LAFLEUR", "FREDRICKSON", "POPP", "BOBO", "PARDO", "ARTIS", "LAWLESS", "SHEN", "HEADLEY", "PEDRAZA", "PICKARD", "SALVADOR", "HOFMANN", "DAVEY", "SZYMANSKI", "DALLAS", "ERB", "PEREA", "ALCANTAR", "ASHFORD", "HARRY", "CRUTCHFIELD", "GOEBEL", "RIDGEWAY", "MCVEY", "CORDELL", "KOVACS", "FLOREZ", "CALKINS", "REDDEN", "RICKER", "SALCIDO", "FARRINGTON", "REIMER", "MULLIS", "MAYHEW", "REGISTER", "KAYE", "BLOCKER", "BUFORD", "MUNGUIA", "CADY", "BURLEY", "SANDER", "ROBINETTE", "STUBBLEFIELD", "SHUMAN", "SANTILLAN", "LOY", "DEUTSCH", "SALES", "LANGDON", "MAZUR", "CLAPP", "TEAL", "BUFFINGTON", "ELLIOT", "HALSTEAD", "STURGEON", "COLLEY", "KOEHN", "BERGSTROM", "DUNNE", "POND", "GANTT", "COUSINS", "VIERA", "WILKS", "HAASE", "SWEAT", "SIMONSON", "BREEDLOVE", "MUNN", "PITT", "FAIRCLOTH", "PETER", "WHEATON", "HOWLAND", "MERRIMAN", "FUSCO", "BURNEY", "BEDFORD", "BALTAZAR", "PERSAUD", "GERARD", "BOURQUE", "CHAO", "SLAGLE", "KIRSCH", "VOLK", "HEIM", "GLASGOW", "BORDERS", "RAUCH", "GOFORTH", "BATSON", "BASHAM", "MOUNT", "PEACE", "LAZO", "SAMPLES", "AMARO", "SLATTERY", "IBRAHIM", "WEATHERFORD", "TAFT", "SANTORO", "APARICIO", "JIANG", "RITCHEY", "GOBLE", "SPRING", "STRAIN", "SCULLY", "VILLAREAL", "TORO", "DUVAL", "JONAS", "NEUMAN", "WOZNIAK", "VARNEY", "DELL", "CONOVER", "LANDON", "SIGLER", "GALBRAITH", "BOSS", "CEPEDA", "BACK", "MATEO", "PEEBLES", "ARSENAULT", "CATHEY", "CALABRESE", "DODDS", "GILBERTSON", "HOKE", "GREENLEE", "SAUCEDA", "VUE", "LEHMANN", "ZINK", "LAPOINTE", "LASTER", "MOY", "AMMONS", "LLAMAS", "FOLTZ", "FLECK", "CHEW", "AMARAL", "GEER", "SU", "CARDEN", "NUNLEY", "CREEL", "CLARKSON", "PROVOST", "COVEY", "PAINE", "WOFFORD", "FRAME", "DUBE", "GRICE", "TULLY", "MOLNAR", "LUCIANO", "BARTELS", "WINSTEAD", "CANADY", "MOREAU", "BURNSIDE", "BRATCHER", "INFANTE", "PETERMAN", "SWOPE", "FREELAND", "VETTER", "LANNING", "MARQUIS", "SCHULZE", "THAI", "COPPOLA", "RAYBURN", "CONTE", "MARTZ", "SHOWALTER", "QUINONEZ", "BANDY", "RAO", "BUNTING", "BELT", "CRUSE", "HAMBLIN", "HIMES", "RANEY", "MERRELL", "SEE", "GOUGH", "MACIEL", "WIMBERLY", "CRADDOCK", "MARQUARDT", "WENTZ", "MEEKER", "SANDBERG", "MOSIER", "WASSON", "HUNDLEY", "JOE", "SHUMAKER", "FORTIN", "EMBRY", "OLIVAREZ", "AKIN", "SEIDEL", "COONS", "CORRALES", "EARLE", "MATHENY", "KISH", "OUTLAW", "LIEBERMAN", "SPALDING", "BARNETTE", "MARTEL", "HARGIS", "KELSO", "MERRICK", "FULLERTON", "FRIES", "DOUCETTE", "CLOUSE", "PREWITT", "HAWKS", "KEATON", "WORTHY", "ZOOK", "MONTEZ", "POORE", "AUTRY", "LEMAY", 
"VIENS"];

const clubNames = ["Student Council", "Academic Decathlon Club", "Amnesty Club", "Alford Academy Robotics Team", "Alford Key Club", "Alford Pride Foundation", "Alford Students for Equality", "Anime Club", "Art Club", "AVN (Alford Vision News)" , "Band", "Breakfast Club", "Chess Club", "Chorus", "Cooking Club", "Creative Writing Club", "Crew", "Dance", "Debate Club", "Democrat Club", "DECA", "Environmental Club", "Film Club", "Gaming Club", "History Club", "Improv Club", "Law Club", "Maskers Drama Club", "Mock Trial Team", "Model UN", "National Art Honor Society", "National English Honor Society", "National Honor Society", "Alford Honor Society", "Oracle", "Orchestra", "Photography Club", "Pottery Club", "Religious Club", "Republican Club", "Rho Kappa", "The Science Club", "Skate Club", "World Language Honor Society", "Yearbook Club", "Other"];
const sportNames = ["Football", "Soccer", "Cheerleading", "Golf", "Cross Country", "Field Hockey", "Basketball", "Ice Hockey", "Indoor Track", "Swimming", "Wrestling", "Nordic Skiing", "Alpine Skiing", "Gymnastics", "Lacrosse", "Track and Field", "Baseball", "Softball", "Volleyball", "Tennis"];
var color = false;

function randomArrayIndexWeighted(length){
    return Math.floor(Math.random()*Math.random() * length);
}

function getLastNameFirstLetterCapitalized(name){
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}

class Student{
    constructor(){
        this.character = new Character(0);

        if(this.character.sex>1){
            this.firstName = firstNameArrayMale[randomArrayIndexWeighted(firstNameArrayMale.length)];
        }else{
            this.firstName = firstNameArrayFemale[randomArrayIndexWeighted(firstNameArrayFemale.length)];
        }
        if(this.character.trans){
            let deadName = this.firstName;
            let newName = "";
            if(this.character.sex>1){
                newName = firstNameArrayFemale[randomArrayIndexWeighted(firstNameArrayFemale.length)];
            }else{
                newName = firstNameArrayMale[randomArrayIndexWeighted(firstNameArrayMale.length)];
            }
            this.firstName = newName + " (" + deadName + ")";
        }

        this.lastName = getLastNameFirstLetterCapitalized(lastNameArray[randomArrayIndexWeighted(lastNameArray.length)]);

        this.wealth = bellCurveTraitGeneration();//Between -33 and 33 is middle class, above 33 is upper class, below -33 is lower class
        this.socialStatus = bellCurveTraitGeneration()+this.character.charisma/2-this.character.introversion/4+this.character.attractiveness/2+this.character.sanity/10;
        this.sports = ["", "", ""]
        this.clubs = [];
        this.GPA = this.getGPA();
        this.setFallSport();
        this.setWinterSport();
        this.setSpringSport();
        this.setClubs();
        this.race = this.setRace();
        this.class = random(4, 1);
        this.height = bellCurveTraitGeneration();
        this.weight = bellCurveTraitGeneration();
        this.hair   = this.setHairColor();
        this.eyes   = this.setEyeColor();
        this.birthday = this.setBirthday();
        this.birthdate = this.setBirthdate(this.birthday);
        this.rightHandedness = random(100, 1)>12
        //this.logStudentGeneration();
    }
    setBirthday(){
        let day = random(365, 1);//Not going to worry about leapdays
        //30 days has september, april, june, and november
        return day;
    }
    setBirthdate(day){
        let month = this.getMonthFromDay(day);
        let date = month +"/";
        while(month>1){
            month = month - 1;
            if(month==2){
                day = day - 28;
            }else if(month==9||month==4||month==6||month==11){
                day = day - 30;
            }else{
                day = day - 31;
            }
        }
        date = date+day;
        return date;
    }
    getMonthFromDay(day){//For non leap years
        let month = 0;
        while(day>0){
            if(month==2){
                day = day - 28;
            }else if(month==9||month==4||month==6||month==11){
                day = day - 30;
            }else{
                day = day - 31;
            }
            month++;
        }
        return month;
    }
    setEyeColor(){
        let eyeRoll = random(100, 0);
        if(this.race=="White"){
            if(eyeRoll<41){
                return "Brown";
            }else if(eyeRoll<66){
                return "Blue";
            }else if(eyeRoll<81){
                return "Green";
            }else if(eyeRoll<86){
                return "Hazel";
            }else if(eyeRoll<91){
                return "Amber";
            }else if(eyeRoll<94){
                return "Gray";
            }else if(eyeRoll==96){
                return "Special";   
            }else{
                return "Brown";
            }
        }else{
            if(eyeRoll<71){
                return "Brown";
            }else if(eyeRoll<81){
                return "Blue";
            }else if(eyeRoll<86){
                return "Hazel";
            }else if(eyeRoll<91){
                return "Amber";
            }else if(eyeRoll<94){
                return "Gray";
            }else if(eyeRoll<96){
                return "Green";
            }else if(eyeRoll==96){
                return "Special";   
            }else{
                return "Brown";
            }
        }
    }
    setHairColor(){
        let hairRoll = random(100,0);
        if(this.race=="White"){
            if(hairRoll<3){
                return "Red";
            }else if(hairRoll < 9){
                return "Black";
            }else if(hairRoll <37){
                return "Blond";
            }else if(hairRoll<76){
                return "Light Brown";
            }else if(hairRoll<86){
                return "Brown";
            }else{
                return "Dark Brown";
            }
        }else if(this.race=="Asian"){
            if(hairRoll<21){
                return "Black";
            }else if(hairRoll<71){
                return "Dark Brown";
            }else if(hairRoll<95){
                return "Brown";
            }else if(hairRoll<98){
                return "Light Brown";
            }else if(hairRoll<99){
                return "Blond";
            }else{
                return "Red"
            }
        }else{
            if(hairRoll<11){
                return "Black";
            }else if(hairRoll<60){
                return "Dark Brown";
            }else if(hairRoll<80){
                return "Brown";
            }else if(hairRoll<95){
                return "Light Brown";
            }else if(hairRoll<99){
                return "Blond";
            }else{
                return "Red"
            }
        }
    }
    setRace(){
        let raceRoll = random(100,0);
        let ethnicityRoll = random(100,0);
        let raceText = "";
        if(raceRoll<55){
            raceText = "White";
        }else if(raceRoll<95){
            raceText = "Black";
        }else if(raceRoll<100){
            raceText = "Asian";
        }else{
            raceText = "American Indian";
        }

        if(ethnicityRoll>94){
            raceText = raceText + " (Hispanic)";
        }

        return raceText;
    }
    getSocialStatusText(){
        if(this.socialStatus>200){
            return "The Elite";
        }else if(this.socialStatus>130){
            return "Royalty";
        }else if(this.socialStatus>50){
            return "Nobility";
        }else if(this.socialStatus>15){
            return "Above Average";
        }else if(this.socialStatus<-150){
            return "Pariah";
        }else if(this.socialStatus<-75){
            return "Outcast";
        }else if(this.socialStatus<0){
            return "Loser";
        }else if(this.socialStatus<7){
            return "Below Average";
        }else{
            return "Average"
        }
    }
    getGPA(){
        let gpa = 0.0;
        if(this.character.intelligence>(this.character.sloth+33)){
            if(this.character.intelligence>66){
                gpa = 5.0;
            }else if(this.character.intelligence>33){
                gpa = 4.5;
            }else if(this.character.intelligence>-33){
                gpa = 4.0;
            }else{
                gpa = 3.0;
            }
        }else if(this.character.intelligence>(this.character.sloth)){
            if(this.character.intelligence>33){
                gpa = 4.0;
            }else if(this.character.intelligence>-33){
                gpa = 3.5;
            }else{
                gpa = 2.5;
            }
        }else if(this.character.sloth<(this.character.intelligence+33)){
            if(this.character.intelligence>33){
                gpa = 3.0;
            }else if(this.character.intelligence>-33){
                gpa = 2.0;
            }else{
                gpa = 1.5;
            }
        }else if(this.character.sloth>66){
            if(this.character.intelligence<-33){
                gpa = 0.0;
            }
            gpa = 1.0;   
        }else{
            if(this.character.intelligence>33){
                gpa = 2.0;
            }else if(this.character.intelligence>-33){
                gpa = 1.5;
            }else{
                gpa = 0.5;
            }
        }
        if(this.wealth>66){
            if(gpa<3.0){
                gpa = gpa+2.0;
            }
        }else if(this.wealth>33){
            if(gpa<3.0){
                gpa = gpa+1.0;
            }
        }else if(this.wealth>10){
            if(gpa<3.0){
                gpa = gpa+0.5;
            }
        }
        return gpa;
    }
    getSports(){
        let list = "";
        if(this.sports[0]=="Cheerleading"){
            return "Cheerleading";
        }
        for(let i = 0; i < 3; i++){
            if(list == ""){
                list = this.sports[i];
            }else if(this.sports[i]!=""){
                list = list + ", " + this.sports[i];
            }
        }
        return list;
    }
    getClubsList(){
        let list = "";
        for(let i = 0; i <this.clubs.length; i++){
            if(i==0){
                list = this.clubs[0];
            }else{
                list = list + ", " + this.clubs[i];
            }
        }
        return list;
    }
    //#region Club Names
    /*
"Student Council" 			    
"Academic Decathlon Club" 	    
"Amnesty Club" 				    
"Alford Academy Robotics Team"  
"Alford Key Club" 			    
"Alford Pride Foundation" 	    
"Alford Students for Equality"  
"Anime Club" 					
"Art Club" 					    
"AVN (Alford Vision News)" 	    
"Band" 						    
"Breakfast Club" 				
"Chess Club" 					
"Chorus" 			
"Cooking Club"			
"Creative Writing Club" 		
"Crew" 						    
"Dance" 						
"Debate Club" 				    
"Democrat Club"
"DECA" 						    
"Environmental Club" 			
"Film Club" 					
"Gaming Club"
"History Club"
"Improv Club" 				    
"Law Club" 					    
"Maskers Drama Club" 			
"Mock Trial Team" 			    
"Model UN" 					    
"National Art Honor Society" 	
"National English Honor Society"
"National Honor Society" 		
"Alford Honor Society" 		    
"Oracle" 						
"Orchestra" 					
"Photography Club" 			    
"Pottery Club"
"Religious Club"
"Republican Club"
"Rho Kappa" 					
"The Science Club" 			    
"Skate Club" 					
"World Language Honor Society"  
"Yearbook Club" 	
"Other"			
    */
   //#endregion
    getPossibleClubs(){
        let possibleClubs = [];
        if(this.socialStatus>50){
            possibleClubs.push("Student Council" 			    );
        }
        if(this.character.intelligence>15){
            possibleClubs.push("Academic Decathlon Club" 	    );
        }
        if(this.character.altruism>33){
            possibleClubs.push("Amnesty Club" 				    );
        }
        if(this.character.intelligence>15){
            possibleClubs.push("Alford Academy Robotics Team"  );
        }
        if(this.character.altruism>15){
            possibleClubs.push("Alford Key Club" 			    );
        }
        if(this.character.pride>20){
            possibleClubs.push("Alford Pride Foundation" 	    );
        }
        if(this.character.sexuality!=straight||this.character.altruism>30){
            possibleClubs.push("Alford Students for Equality"  );
        }
        if(this.socialStatus<20){
            possibleClubs.push("Anime Club" 					);
        }
        if(this.character.creativity>20){
            possibleClubs.push("Art Club" 					    );
        }
        if(this.character.introversion<-10){
            possibleClubs.push("AVN (Alford Vision News)" 	    );
        }
        if(true){
            possibleClubs.push("Band" 						    );
        }
        if(this.socialStatus>50){
            possibleClubs.push("Breakfast Club" 				);
        }
        if(this.character.intelligence>20){
            possibleClubs.push("Chess Club" 					);
        }
        if(this.character.creativity>10){
            possibleClubs.push("Chorus" 						);
        }
        if(this.character.sex<2||this.socialStatus<20){
            possibleClubs.push("Cooking");
        }
        if(this.character.creativity>33){
            possibleClubs.push("Creative Writing Club" 		);
        }
        if(this.character.physical>5){
            possibleClubs.push("Crew" 						    );
        }
        if(this.character.physical>0&&this.character.creativity>0){
            possibleClubs.push("Dance" 						);
        }
        if(this.character.intelligence>0&&this.character.pride>33){
            possibleClubs.push("Debate Club" 				    );
        }
        if(this.character.altruism>this.character.lawfulness){
            possibleClubs.push("Democrat Club")
        }
        if(this.character.pride>33){
            possibleClubs.push("DECA" 						    );
        }
        if(this.character.altruism>33&&this.socialStatus<0){
            possibleClubs.push("Environmental Club" 			);
        }
        if(this.character.creativity>0){
            possibleClubs.push("Film Club" 					);
        }
        if(this.character.sloth>-33){
            possibleClubs.push("Gaming Club" 				    );
        }
        if(this.GPA>2.0){
            possibleClubs.push("History Club");
        }
        if(this.character.creativity>0){
            possibleClubs.push("Improv Club");
        }
        if(this.character.intelligence>0&&this.character.pride>33){
            possibleClubs.push("Law Club" 					    );
        }
        if(this.character.introversion<0||this.character.envy>15){
            possibleClubs.push("Maskers Drama Club" 			);
        }
        if(this.character.intelligence>0&&this.character.pride>33){
            possibleClubs.push("Mock Trial Team" 			    );
        }
        if(this.character.intelligence>0&&this.character.pride>33){
            possibleClubs.push("Model UN" 					    );
        }
        if(this.character.creativity > 33 && this.character.sloth<33){
            possibleClubs.push("National Art Honor Society" 	);
        }
        if(this.character.intelligence > 20 && this.character.sloth<20){
            possibleClubs.push("National English Honor Society");
        }
        if(this.character.intelligence > 33 && this.character.sloth<10){
            possibleClubs.push("National Honor Society" 		);
        }
        if(this.character.intelligence > 50 && this.character.sloth<0){
            possibleClubs.push("Alford Honor Society" 		    );
        }
        if(this.character.creativity>0){
            possibleClubs.push("Oracle" 						);
        }
        if(this.character.creativity>15){
            possibleClubs.push("Orchestra" 					);
        }
        if(this.character.creativity>0){
            possibleClubs.push("Photography Club" 			    );
        }
        if(this.character.sloth>0){
            possibleClubs.push("Pottery Club");
        }
        if(this.character.intelligence>20){
            possibleClubs.push("Rho Kappa" 					);
        }
        if(this.character.religiousness>0){
            possibleClubs.push("Religious Club")
        }
        if(this.character.religiousness>33||(this.character.lawfulness>this.character.altruism)){
            possibleClubs.push("Republican Club");
        }
        if(this.character.intelligence>0){
            possibleClubs.push("The Science Club" 			    );
        }
        if(this.character.lawfulness<0){
            possibleClubs.push("Skate Club" 					);
        }
        if(this.character.intelligence>20 && this.character.sloth<33){
            possibleClubs.push("World Language Honor Society"  );
        }
        if(this.character.sloth>-33){
            possibleClubs.push("Yearbook Club" 				);
        }
        if(true){
            possibleClubs.push("Other");
        }
        
        return possibleClubs;
    }
    addClub(club){
        this.clubs.push(club);
        if(club=="Student Council"){
            this.socialStatus=this.socialStatus+20;
        }              
        if(club=="Academic Decathlon Club"){
            this.socialStatus=this.socialStatus-20;
        }
        if(club=="Amnesty Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Alford Academy Robotics Team"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Alford Key Club"){
            this.socialStatus=this.socialStatus+5;
        }
        if(club=="Alford Pride Foundation"){
            this.socialStatus=this.socialStatus+15;
        }
        if(club=="Alford Students for Equality"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Anime Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Art Club"){

        }
        if(club=="AVN (Alford Vision News)"){
            this.socialStatus=this.socialStatus+10;
        }
        if(club=="Band"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Breakfast Club"){
            this.socialStatus=this.socialStatus+25;
        }
        if(club=="Chess Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Chorus"){
            this.socialStatus=this.socialStatus+this.character.creativity/3+this.character.charisma/2;
        }
        if(club=="Creative Writing Club"){
            this.socialStatus=this.socialStatus-2;
        }
        if(club=="Crew"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="Dance"){
            if(this.character.physical>10&&this.character.attractiveness>20){
                this.socialStatus=this.socialStatus+this.character.physical/2+this.character.attractiveness/2;
            }
        }
        if(club=="Debate Club"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="DECA"){
            this.socialStatus=this.socialStatus+10;
        }
        if(club=="Environmental Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Film Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Gaming Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Law Club"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="Maskers Drama Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Mock Trial Team"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="Model UN"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="National Art Honor Society"){
            this.socialStatus=this.socialStatus+10;
        }
        if(club=="National English Honor Society"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="National Honor Society"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="Alford Honor Society"){
            this.socialStatus=this.socialStatus+5;
        }
        if(club=="Oracle"){
            this.socialStatus=this.socialStatus-2;
        }
        if(club=="Orchestra"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="Photography Club"){
            this.socialStatus=this.socialStatus-2;
        }
        if(club=="Rho Kappa"){
            this.socialStatus=this.socialStatus+5;
        }
        if(club=="The Science Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="Skate Club"){
            this.socialStatus=this.socialStatus-5;
        }
        if(club=="World Language Honor Society"){
            this.socialStatus=this.socialStatus+2;
        }
        if(club=="Yearbook Club"){
            this.socialStatus=this.socialStatus+10;
        }
    }
    setClubs(){
        let possibleClubs = this.getPossibleClubs();
        let availability = 3 - this.countSports() - randomArrayIndexWeighted(4) - this.character.sloth/20;
        while(availability>0){
            this.addClub(possibleClubs[randomArrayIndex(possibleClubs.length, this.clubs)]);
            availability--;
        }
    }
    countSports(){
        let count = 0;
        for(let i = 0; i < 3; i++){
            if(this.sports[i]!=""){
                count++;
            }
        }
        return count;
    }
    setFallSport(){
        if(random(25, -25)<this.character.physical){
            let Sport = random(100, 0);
            if(this.character.sex>1){//Male
                //Options are cross country, football, soccer, golf, cheerleading
                if(this.character.physical>15&&random(5, 1)>1){
                    this.sports[0] = "Football";
                    this.socialStatus=this.socialStatus+this.character.physical+10;
                    return;
                }
                if(Sport >75){
                    this.sports[0] = "Football";
                    this.socialStatus=this.socialStatus+this.character.physical+10;
                }else if(Sport > 50){
                    this.sports[0] = "Soccer";
                    this.socialStatus=this.socialStatus+this.character.physical/2+2;
                }else if(Sport >35){
                    this.sports[0] = "Cheerleading";
                    this.socialStatus=this.socialStatus+5;
                }else if(Sport >30){
                    this.sports[0] = "Golf";
                }else if(Sport >5){
                    this.sports[0] = "Cross Country";
                    this.socialStatus=this.socialStatus+this.character.physical/5;
                }
            }else{
                //Options are cross country, field hockey, soccer, golf, cheerleading
                if(Sport >80){
                    this.sports[0] = "Field Hockey";
                    this.socialStatus=this.socialStatus+this.character.physical/2+2;
                }else if(Sport > 50){
                    this.sports[0] = "Soccer";
                    this.socialStatus=this.socialStatus+this.character.physical/2+5;
                }else if(Sport >25){
                    this.sports[0] = "Cheerleading";
                    this.socialStatus=this.socialStatus+this.character.attractiveness/2+10;
                }else if(Sport >20){
                    if(random(33, -66)>this.wealth){
                        return;
                    }
                    this.sports[0] = "Golf";
                    this.socialStatus=this.socialStatus+2;
                }else if(Sport >5){
                    this.sports[0] = "Cross Country";
                    this.socialStatus=this.socialStatus+this.character.physical/5;
                }
            }
        }
    }

    setWinterSport(){
        if(this.sports[0]=="Cheerleading"){
            this.sports[1]="Cheerleading";
        }else if(random(25, -25)<this.character.physical){
            let Sport = random(100, 0);
            if(this.character.sex>1){
                //Options are Alpine Skiing, Basketball, Gymnastics, Ice Hockey, Indoor Track, Nordic Skiing, Swimming, Wrestling
                if(Sport >80){
                    this.sports[1] = "Basketball";
                    this.socialStatus=this.socialStatus+this.character.physical+2;
                }else if(Sport > 60){
                    this.sports[1] = "Ice Hockey";
                    this.socialStatus=this.socialStatus+this.character.physical+2;
                }else if(Sport >45){
                    this.sports[1] = "Indoor Track";
                    this.socialStatus=this.socialStatus+this.character.physical/2;
                }else if(Sport >30){
                    this.sports[1] = "Swimming";
                    this.socialStatus=this.socialStatus+this.character.physical/2+this.character.attractiveness/4;
                }else if(Sport >20){
                    this.sports[1] = "Wrestling";
                    this.socialStatus=this.socialStatus+this.character.physical/2;
                }else if(Sport >15){
                    this.sports[1] = "Nordic Skiing";
                    this.socialStatus=this.socialStatus+this.character.physical/5;
                }else if(Sport >10){
                    if(random(33, -66)>this.wealth){
                        return;
                    }
                    this.sports[1] = "Alpine Skiing";
                    this.socialStatus=this.socialStatus+2;
                }else if(Sport >5){
                    this.sports[1] = "Gymnastics";
                    this.socialStatus=this.socialStatus+this.character.physical/5;
                }
            }else{
                //Options are Alpine Skiing, Basketball, Gymnastics, Ice Hockey, Indoor Track, Nordic Skiing, Swimming, Wrestling
                if(Sport >80){
                    this.sports[1] = "Basketball";
                    this.socialStatus=this.socialStatus+this.character.physical+2;
                }else if(Sport > 60){
                    this.sports[1] = "Ice Hockey";
                    this.socialStatus=this.socialStatus+this.character.physical+2;
                }else if(Sport >45){
                    this.sports[1] = "Indoor Track";
                    this.socialStatus=this.socialStatus+this.character.physical/2;
                }else if(Sport >30){
                    this.sports[1] = "Swimming";
                    this.socialStatus=this.socialStatus+this.character.physical/2+this.character.attractiveness/4;
                }else if(Sport >20){
                    this.sports[1] = "Wrestling";
                    this.socialStatus=this.socialStatus+this.character.physical/2;
                }else if(Sport >15){
                    this.sports[1] = "Nordic Skiing";
                    this.socialStatus=this.socialStatus+this.character.physical/5;
                }else if(Sport >10){
                    if(random(33, -66)>this.wealth){
                        return;
                    }
                    this.sports[1] = "Alpine Skiing";
                    this.socialStatus=this.socialStatus+2;
                }else if(Sport >5){
                    this.sports[1] = "Gymnastics";
                    this.socialStatus=this.socialStatus+this.character.attractiveness/2;
                }
            }
        }
    }

    setSpringSport(){
        if(this.sports[0]=="Cheerleading"){
            this.sports[2]="Cheerleading";
        }else if(random(25, -25)<this.character.physical){
            let Sport = random(100, 0);
            if(this.character.sex>1){
                //Options are Baseball, lacrosse, tennis, track and field, volleyball
                if(Sport >80){
                    this.sports[2] = "Lacrosse";
                    this.socialStatus=this.socialStatus+this.character.physical/2+2;
                }else if(Sport > 60){
                    this.sports[2] = "Track and Field";
                    this.socialStatus=this.socialStatus+this.character.physical/2+2;
                }else if(Sport >35){
                    this.sports[2] = "Baseball";
                    this.socialStatus=this.socialStatus+10;
                }else if(Sport >15){
                    this.sports[2] = "Volleyball";
                    this.socialStatus=this.socialStatus+this.character.physical/2+2;
                }else if(Sport >5){
                    if(random(33, -66)>this.wealth){
                        return;
                    }
                    this.sports[2] = "Tennis";
                    this.socialStatus=this.socialStatus+2;
                }
            }else{
                //Options are softball, lacrosse, tennis, track and field, volleyball
                if(this.character.physical>15&&random(5, 1)>1){
                    this.sports[2] = "Volleyball";
                    this.socialStatus=this.socialStatus+this.character.physical+10;
                }
                if(Sport >75){
                    this.sports[2] = "Volleyball";
                    this.socialStatus=this.socialStatus+this.character.physical+10;
                }else if(Sport > 60){
                    this.sports[2] = "Lacrosse";
                    this.socialStatus=this.socialStatus+this.character.physical/2+2;
                }else if(Sport >35){
                    this.sports[2] = "Track and Field";
                    this.socialStatus=this.socialStatus+this.character.physical/2+2;
                }else if(Sport >15){
                    this.sports[2] = "Softball";
                    this.socialStatus=this.socialStatus+5;
                }else if(Sport >5){
                    if(random(33, -66)>this.wealth){
                        return;
                    }
                    this.sports[2] = "Tennis";
                    this.socialStatus=this.socialStatus+2;
                }
            }
        }
    }

    getName(){
        return this.firstName + " " + this.lastName;
    }

    getEconomicClass(){
        if(this.wealth>33){
            if(this.wealth>66){
                return "Super Upper Class";
            }else{
                return "Upper Class";
            }
        }else if(this.wealth<-33){
            if(this.wealth<-66){
                return "Homeless";
            }else{
                return "Lower Class";
            }
        }else if(this.wealth>10){
            return "Upper Middle Class";
        }else if(this.wealth<-10){
            return "Lower Middle Class";
        }
        return "Middle Class";
    }
    logStudentGeneration(){
        console.log("Name: "+this.getName());
        console.log("Wealth: "+this.wealth);
        console.log("Social Status: "+this.socialStatus);
        console.log("Sports: "+this.getSports());
    }
}

function displayStudent(student){
    // create div element
    let divElement = document.createElement('div');
    if(color){
        divElement.style.backgroundColor = color1;
        color = false;
    }else{
        divElement.style.backgroundColor = color2;
        color = true;
    }

    addBlockOfText(divElement, "Name: "+student.getName(), "center");
    addBlockOfText(divElement, "Alignment: " + student.character.alignment());
    addBlockOfText(divElement, "Sex: " + student.character.getSex());
    addBlockOfText(divElement, "Sexuality: "+sexualityToString(student.character.getSexuality()));
    addBlockOfText(divElement, "Fear(s): "+student.character.getFearsText());
    addBlockOfText(divElement, "Flaw(s): "+student.character.getFlawsText());
    addBlockOfText(divElement, "Habit(s): "+student.character.getHabitsText());
    addBlockOfText(divElement, "Hobby: "+student.character.getHobbiesText());
    addBlockOfText(divElement, "Student Information", "center");
    addBlockOfText(divElement, "Economic Class: "+student.getEconomicClass());
    addBlockOfText(divElement, "Social Status: "+student.getSocialStatusText()+" ("+student.socialStatus+")");
    addBlockOfText(divElement, "Sports: "+student.getSports());
    addBlockOfText(divElement, "Clubs: "+student.getClubsList());
    addBlockOfText(divElement, "GPA: "+student.GPA);
    addBlockOfText(divElement, "Race: "+student.race);
    addBlockOfText(divElement, "------------------------------------");
    let charDataArray = student.character.getCharacterArray();
    let charDataArrayDescription = student.character.getCharacterArrayDescription();
    let charDataText = "";
    for(let i = 0; i < charDataArray.length; i++){
        charDataText = charDataText + charDataArrayDescription[i] + charDataArray[i];
    }
    addBlockOfText(divElement, charDataText);
    addBlockOfText(divElement, "------------------------------------------------------------------------");



    //addBlockOfText(divElement,""+villain.);
    divArray[0] = divElement;

    // append div element to document
    document.body.appendChild(divElement);
}

function displayHeaderOneLine(student){
    // create div element
    let divElement = document.createElement('div');
    if(color){
        divElement.style.backgroundColor = color1;
        color = false;
    }else{
        divElement.style.backgroundColor = color2;
        color = true;
    }
    let text = "Name";
    text = text+"***"+"Image";
    text = text+"***"+"Alignment";
    text = text+"***"+"Sex";
    text = text+"***"+"Sexuality";
    text = text+"***"+"Fears";
    text = text+"***"+"Flaws";
    text = text+"***"+"Habits";
    text = text+"***"+"Hobbies";
    text = text+"***"+"EconomicClass";
    text = text+"***"+"Social Status";
    text = text+"***"+"Social Status Number";
    text = text+"***"+"GPA";
    text = text+"***"+"Race";
    text = text+"***"+"Class";
    text = text+"***"+"Height";
    text = text+"***"+"Weight";
    text = text+"***"+"Hair";
    text = text+"***"+"Eyes";
    text = text+"***"+"Birthday";
    text = text+"***"+"Birthdate";
    text = text+"***"+"Right-handed";
    text = text+"***"+"Plays Sports";
    for(let i = 0; i < sportNames.length; i++){
        text = text+"***"+sportNames[i];
    }
    for(let i = 0; i < clubNames.length; i++){
        text = text+"***"+clubNames[i];
    }
    text = text+"***"+"Sin";
    text = text+"***"+"Virtue";
    let charDataArrayDescription = student.character.getCharacterArrayDescription();
    for(let i = 0; i < charDataArrayDescription.length; i++){
        text = text+"***"+ charDataArrayDescription[i];
    }

    addBlockOfText(divElement, text);

    //addBlockOfText(divElement,""+villain.);
    divArray[0] = divElement;

    // append div element to document
    document.body.appendChild(divElement);
}

function displayStudentOneLine(number, student){
    // create div element
    let divElement = document.createElement('div');
    if(color){
        divElement.style.backgroundColor = color1;
        color = false;
    }else{
        divElement.style.backgroundColor = color2;
        color = true;
    }
    let text = "";
    text = student.getName();
    text = text+"***"+"None";
    text = text+"***"+student.character.alignment();
    text = text+"***"+student.character.getSex();
    text = text+"***"+sexualityToString(student.character.getSexuality());
    text = text+"***"+ student.character.getFearsText();
    text = text+"***"+ student.character.getFlawsText();
    text = text+"***"+ student.character.getHabitsText();
    text = text+"***"+ student.character.getHobbiesText();
    text = text+"***"+ student.getEconomicClass();
    text = text+"***"+ student.getSocialStatusText();
    text = text+"***"+ student.socialStatus;
    text = text+"***"+ student.GPA;
    text = text+"***"+ student.race;
    text = text+"***"+ student.class;
    text = text+"***"+ student.height;
    text = text+"***"+ student.weight;
    text = text+"***"+ student.hair;
    text = text+"***"+ student.eyes;
    text = text+"***"+ student.birthday;
    text = text+"***"+ student.birthdate;
    text = text+"***"+ student.rightHandedness;

    text = text+"***"+ (student.sports.length);
    for(let i = 0; i < sportNames.length; i++){
        if(student.sports.includes(sportNames[i])){
            text = text+"***"+1;
        }else{
            text = text+"***"+0;
        }
    }
    
    for(let i = 0; i < clubNames.length; i++){
        if(student.clubs.includes(clubNames[i])){
            text = text+"***"+1;
        }else{
            text = text+"***"+0;
        }
    }

    text = text+"***"+ student.character.getNounText(student.character.getWorstSin()[0]);
    text = text+"***"+ student.character.getNounText(student.character.getGreatestVirtue()[0]);

    let charDataArray = student.character.getCharacterArray();
    for(let i = 0; i < charDataArray.length; i++){
        text = text+"***"+ charDataArray[i];
    }
    //text = text+"***"+ ;


    addBlockOfText(divElement, text);

    //addBlockOfText(divElement,""+villain.);
    divArray[number] = divElement;

    // append div element to document
    document.body.appendChild(divElement);
}

function displayStudentBodyStats(students, num){
    let n = students.length;
    let wealth = 0;
    let maxWealth = 0;
    let minWealth = 0;
    let status = 0;
    let maxStatus = 0;
    let minStatus = 0;
    let sports = 0;
    let clubs = 0;
    let gpa = 0.0;
    let crossCountry 						= [0, 0];
    let football 						= 0;
    let fieldHockey 						= 0;
    let soccer 						= [0, 0];
    let golf 						= [0, 0];
    let cheerleading 						= [0, 0];
    let baseball 						= 0;
    let softball 						= 0;
    let lacrosse 						= [0, 0];
    let tennis 						= [0, 0];
    let track 						= [0, 0];
    let volleyball 						= [0, 0];
    let alpineSkiing 						= [0, 0];
    let basketball 						= [0, 0];
    let gymnastics 						= [0, 0];
    let iceHockey 						= [0, 0];
    let indoorTrack  						= [0, 0];
    let nordicSkiing 						= [0, 0];
    let swimming 						= [0, 0];
    let wrestling 						= [0, 0];
    let clubTallies = new Array(clubNames.length).fill(0);
    let white = 0;
    let black = 0;
    let asian = 0;
    let indigenous = 0;
    let hispanic = 0;
    for(let i = 0; i < n; i++){
        wealth+=(students[i].wealth);
        if(students[i].wealth>maxWealth){
            maxWealth = students[i].wealth;
        }else if(students[i].wealth<minWealth){
            minWealth = students[i].wealth;
        }
        status+=(students[i].socialStatus);
        if(students[i].socialStatus>maxStatus){
            maxStatus = students[i].socialStatus;
        }else if(students[i].socialStatus<minStatus){
            minStatus = students[i].socialStatus;
        }
        sports+=(students[i].countSports());
        clubs+=(students[i].clubs.length);
        gpa+=(students[i].GPA);
        if(students[i].sports[0]=="Cross Country"){
            crossCountry[students[i].character.sex-1]++;
        }else if(students[i].sports[0]=="Soccer"){
            soccer[students[i].character.sex-1]++;
        }else if(students[i].sports[0]=="Golf"){
            golf[students[i].character.sex-1]++;
        }else if(students[i].sports[0]=="Cheerleading"){
            cheerleading[students[i].character.sex-1]++;
        }else if(students[i].sports[0]=="Football"){
            football++;
        }else if(students[i].sports[0]=="Field Hockey"){
            fieldHockey++;
        }
        if(students[i].sports[1]=="Basketball"){
            basketball[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Ice Hockey"){
            iceHockey[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Indoor Track"){
            indoorTrack[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Swimming"){
            swimming[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Wrestling"){
            wrestling[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Nordic Skiing"){
            nordicSkiing[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Alpine Skiing"){
            alpineSkiing[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Gymnastics"){
            gymnastics[students[i].character.sex-1]++;
        }
        if(students[i].sports[2]=="Lacrosse"){
            lacrosse[students[i].character.sex-1]++;
        }else if(students[i].sports[2]=="Track and Field"){
            track[students[i].character.sex-1]++;
        }else if(students[i].sports[2]=="Tennis"){
            tennis[students[i].character.sex-1]++;
        }else if(students[i].sports[2]=="Volleyball"){
            volleyball[students[i].character.sex-1]++;
        }else if(students[i].sports[2]=="Baseball"){
            baseball++;
        }else if(students[i].sports[2]=="Softball"){
            softball++;
        }
        for(let j = 0; j < students[i].clubs.length; j++){
            for(let k = 0; k < clubNames.length; k++){
                if(clubNames[k]==students[i].clubs[j]){
                    clubTallies[k]++;
                }
            }
        }
        if(students[i].race=="White"){
            white++;
        }else if(students[i].race=="Black"){
            black++;
        }else if(students[i].race=="Asian"){
            asian++;
        }else if(students[i].race=="American Indian"){
            indigenous++;
        }else{
            hispanic++;
        }
    }
    wealth = wealth/n;
    status = status/n;
    sports = sports/n;
    clubs = clubs/n;
    gpa = gpa/n;
    white = white/n;
    black = black/n;
    asian = asian/n;
    indigenous = indigenous/n;
    hispanic = hispanic/n;

    let divElement = document.createElement('div');

    addBlockOfText(divElement, "Average wealth: "+wealth);//Around 0.1116
    addBlockOfText(divElement, "Maximum wealth: "+maxWealth);//Around 95
    addBlockOfText(divElement, "Minimum wealth: "+minWealth);//Around -95
    addBlockOfText(divElement, "Average status: "+status);//Around 12
    addBlockOfText(divElement, "Maximum status: "+maxStatus);//Around 230
    addBlockOfText(divElement, "Minimum status: "+minStatus);//Around -170
    addBlockOfText(divElement, "Average number of sports a student is in: "+sports);//Around 1.4
    addBlockOfText(divElement, "Average number of clubs a student is in: "+clubs);//Around 1.8
    addBlockOfText(divElement, "Average GPA: "+gpa);//Around 2.66
    addBlockOfText(divElement, "Demographics (%) - White: "+white+", Black: "+ black+", Asian: "+asian+", American Indian: "+indigenous+", Hispanic: "+hispanic);
    addBlockOfText(divElement, "Fall Sports", "center");//Sport averages for school with 1,000 students
    addBlockOfText(divElement, "Number of guys on crossCountry team: "+crossCountry[1]+", Number of ladies on crossCountry team: "+crossCountry[0]);//Guys: 45, Gals: 34
    addBlockOfText(divElement, "Number of guys on football team: "+football);//111
    addBlockOfText(divElement, "Number of ladies on fieldHockey team: "+fieldHockey);//35
    addBlockOfText(divElement, "Number of guys on soccer team: "+soccer[1]+", Number of ladies on soccer team: "+soccer[0]);//Guys: 42, Gals: 84		
    addBlockOfText(divElement, "Number of guys on golf team: "+golf[1]+", Number of ladies on golf team: "+golf[0]); 		//Guys: 10, Gals: 7
    addBlockOfText(divElement, "Number of guys on cheerleading team: "+cheerleading[1]+", Number of ladies on cheerleading team: "+cheerleading[0]);//Guys: 27, Gals: 62
    addBlockOfText(divElement, "Winter Sports", "center"); 	
    addBlockOfText(divElement, "Number of guys on alpineSkiing team: "+alpineSkiing[1]+", Number of ladies on alpineSkiing team: "+alpineSkiing[0]);//Guys: 7, Gals: 8
    addBlockOfText(divElement, "Number of guys on basketball team: "+basketball[1]+", Number of ladies on basketball team: "+basketball[0]); 	//Guys: 45, Gals: 43
    addBlockOfText(divElement, "Number of guys on gymnastics team: "+gymnastics[1]+", Number of ladies on gymnastics team: "+gymnastics[0]); 	//Guys: 9, Gals: 10
    addBlockOfText(divElement, "Number of guys on iceHockey team: "+iceHockey[1]+", Number of ladies on iceHockey team: "+iceHockey[0]); 	//Guys: 47, Gals: 37
    addBlockOfText(divElement, "Number of guys on indoorTrack team: "+indoorTrack[1]+", Number of ladies on indoorTrack team: "+indoorTrack[0]); //Guys: 32, Gals: 31
    addBlockOfText(divElement, "Number of guys on nordicSkiing team: "+nordicSkiing[1]+", Number of ladies on nordicSkiing team: "+nordicSkiing[0]);//Guys: 15, Gals: 10
    addBlockOfText(divElement, "Number of guys on swimming team: "+swimming[1]+", Number of ladies on swimming team: "+swimming[0]); 	//Guys: 33, Gals: 32
    addBlockOfText(divElement, "Number of guys on wrestling team: "+wrestling[1]+", Number of ladies on wrestling team: "+wrestling[0]); 	//Guys: 20, Gals: 20
    addBlockOfText(divElement, "Spring Sports", "center");
    addBlockOfText(divElement, "Number of guys on baseball team: "+baseball); 	//55
    addBlockOfText(divElement, "Number of ladies on softball team: "+softball); 	//39
    addBlockOfText(divElement, "Number of guys on lacrosse team: "+lacrosse[1]+", Number of ladies on lacrosse team: "+lacrosse[0]); 	//Guys: 42, Gals: 30
    addBlockOfText(divElement, "Number of guys on tennis team: "+tennis[1]+", Number of ladies on tennis team: "+tennis[0]); 		//Guys: 15, Gals: 13
    addBlockOfText(divElement, "Number of guys on track team: "+track[1]+", Number of ladies on track team: "+track[0]);		//Guys: 44, Gals: 54
    addBlockOfText(divElement, "Number of guys on volleyball team: "+volleyball[1]+", Number of ladies on volleyball team: "+volleyball[0]); //Guys: 47, Gals: 55
    let clubInfo = clubNames[0]+": "+clubTallies[0];
    for(let i = 1; i < clubTallies.length; i++){
        clubInfo = clubInfo + ", " + clubNames[i]+": "+clubTallies[i];
    }
    addBlockOfText(divElement, "Club Info - "+clubInfo);
    
    divArray[num] = divElement;
    document.body.appendChild(divElement);
}

function generateStudentBody(n=1000){
    var students = [];
    let wealth = 0;
    let maxWealth = 0;
    let minWealth = 0;
    let status = 0;
    let maxStatus = 0;
    let minStatus = 0;
    let sports = 0;
    let clubs = 0;
    let gpa = 0.0;
    let crossCountry 						= [0, 0];
    let football 						= 0;
    let fieldHockey 						= 0;
    let soccer 						= [0, 0];
    let golf 						= [0, 0];
    let cheerleading 						= [0, 0];
    let baseball 						= 0;
    let softball 						= 0;
    let lacrosse 						= [0, 0];
    let tennis 						= [0, 0];
    let track 						= [0, 0];
    let volleyball 						= [0, 0];
    let alpineSkiing 						= [0, 0];
    let basketball 						= [0, 0];
    let gymnastics 						= [0, 0];
    let iceHockey 						= [0, 0];
    let indoorTrack  						= [0, 0];
    let nordicSkiing 						= [0, 0];
    let swimming 						= [0, 0];
    let wrestling 						= [0, 0];
    let clubTallies = new Array(clubNames.length).fill(0);
    let white = 0;
    let black = 0;
    let asian = 0;
    let indigenous = 0;
    let hispanic = 0;
    for(let i = 0; i < n; i++){
        if(i%100==0){
            console.log("Generating student "+i);
        }
        students.push(new Student());
        wealth+=(students[i].wealth);
        if(students[i].wealth>maxWealth){
            maxWealth = students[i].wealth;
        }else if(students[i].wealth<minWealth){
            minWealth = students[i].wealth;
        }
        status+=(students[i].socialStatus);
        if(students[i].socialStatus>maxStatus){
            maxStatus = students[i].socialStatus;
        }else if(students[i].socialStatus<minStatus){
            minStatus = students[i].socialStatus;
        }
        sports+=(students[i].countSports());
        clubs+=(students[i].clubs.length);
        gpa+=(students[i].GPA);
        if(students[i].sports[0]=="Cross Country"){
            crossCountry[students[i].character.sex-1]++;
        }else if(students[i].sports[0]=="Soccer"){
            soccer[students[i].character.sex-1]++;
        }else if(students[i].sports[0]=="Golf"){
            golf[students[i].character.sex-1]++;
        }else if(students[i].sports[0]=="Cheerleading"){
            cheerleading[students[i].character.sex-1]++;
        }else if(students[i].sports[0]=="Football"){
            football++;
        }else if(students[i].sports[0]=="Field Hockey"){
            fieldHockey++;
        }
        if(students[i].sports[1]=="Basketball"){
            basketball[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Ice Hockey"){
            iceHockey[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Indoor Track"){
            indoorTrack[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Swimming"){
            swimming[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Wrestling"){
            wrestling[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Nordic Skiing"){
            nordicSkiing[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Alpine Skiing"){
            alpineSkiing[students[i].character.sex-1]++;
        }else if(students[i].sports[1]=="Gymnastics"){
            gymnastics[students[i].character.sex-1]++;
        }
        if(students[i].sports[2]=="Lacrosse"){
            lacrosse[students[i].character.sex-1]++;
        }else if(students[i].sports[2]=="Track and Field"){
            track[students[i].character.sex-1]++;
        }else if(students[i].sports[2]=="Tennis"){
            tennis[students[i].character.sex-1]++;
        }else if(students[i].sports[2]=="Volleyball"){
            volleyball[students[i].character.sex-1]++;
        }else if(students[i].sports[2]=="Baseball"){
            baseball++;
        }else if(students[i].sports[2]=="Softball"){
            softball++;
        }
        for(let j = 0; j < students[i].clubs.length; j++){
            for(let k = 0; k < clubNames.length; k++){
                if(clubNames[k]==students[i].clubs[j]){
                    clubTallies[k]++;
                }
            }
        }
        if(students[i].race=="White"){
            white++;
        }else if(students[i].race=="Black"){
            black++;
        }else if(students[i].race=="Asian"){
            asian++;
        }else if(students[i].race=="American Indian"){
            indigenous++;
        }else{
            hispanic++;
        }
    }
    wealth = wealth/n;
    status = status/n;
    sports = sports/n;
    clubs = clubs/n;
    gpa = gpa/n;
    white = white/n;
    black = black/n;
    asian = asian/n;
    indigenous = indigenous/n;
    hispanic = hispanic/n;

    let divElement = document.createElement('div');

    addBlockOfText(divElement, "Average wealth: "+wealth);//Around 0.1116
    addBlockOfText(divElement, "Maximum wealth: "+maxWealth);//Around 95
    addBlockOfText(divElement, "Minimum wealth: "+minWealth);//Around -95
    addBlockOfText(divElement, "Average status: "+status);//Around 12
    addBlockOfText(divElement, "Maximum status: "+maxStatus);//Around 230
    addBlockOfText(divElement, "Minimum status: "+minStatus);//Around -170
    addBlockOfText(divElement, "Average number of sports a student is in: "+sports);//Around 1.4
    addBlockOfText(divElement, "Average number of clubs a student is in: "+clubs);//Around 1.8
    addBlockOfText(divElement, "Average GPA: "+gpa);//Around 2.66
    addBlockOfText(divElement, "Demographics (%) - White: "+white+", Black: "+ black+", Asian: "+asian+", American Indian: "+indigenous+", Hispanic: "+hispanic);
    addBlockOfText(divElement, "Fall Sports", "center");//Sport averages for school with 1,000 students
    addBlockOfText(divElement, "Number of guys on crossCountry team: "+crossCountry[1]+", Number of ladies on crossCountry team: "+crossCountry[0]);//Guys: 45, Gals: 34
    addBlockOfText(divElement, "Number of guys on football team: "+football);//111
    addBlockOfText(divElement, "Number of ladies on fieldHockey team: "+fieldHockey);//35
    addBlockOfText(divElement, "Number of guys on soccer team: "+soccer[1]+", Number of ladies on soccer team: "+soccer[0]);//Guys: 42, Gals: 84		
    addBlockOfText(divElement, "Number of guys on golf team: "+golf[1]+", Number of ladies on golf team: "+golf[0]); 		//Guys: 10, Gals: 7
    addBlockOfText(divElement, "Number of guys on cheerleading team: "+cheerleading[1]+", Number of ladies on cheerleading team: "+cheerleading[0]);//Guys: 27, Gals: 62
    addBlockOfText(divElement, "Winter Sports", "center"); 	
    addBlockOfText(divElement, "Number of guys on alpineSkiing team: "+alpineSkiing[1]+", Number of ladies on alpineSkiing team: "+alpineSkiing[0]);//Guys: 7, Gals: 8
    addBlockOfText(divElement, "Number of guys on basketball team: "+basketball[1]+", Number of ladies on basketball team: "+basketball[0]); 	//Guys: 45, Gals: 43
    addBlockOfText(divElement, "Number of guys on gymnastics team: "+gymnastics[1]+", Number of ladies on gymnastics team: "+gymnastics[0]); 	//Guys: 9, Gals: 10
    addBlockOfText(divElement, "Number of guys on iceHockey team: "+iceHockey[1]+", Number of ladies on iceHockey team: "+iceHockey[0]); 	//Guys: 47, Gals: 37
    addBlockOfText(divElement, "Number of guys on indoorTrack team: "+indoorTrack[1]+", Number of ladies on indoorTrack team: "+indoorTrack[0]); //Guys: 32, Gals: 31
    addBlockOfText(divElement, "Number of guys on nordicSkiing team: "+nordicSkiing[1]+", Number of ladies on nordicSkiing team: "+nordicSkiing[0]);//Guys: 15, Gals: 10
    addBlockOfText(divElement, "Number of guys on swimming team: "+swimming[1]+", Number of ladies on swimming team: "+swimming[0]); 	//Guys: 33, Gals: 32
    addBlockOfText(divElement, "Number of guys on wrestling team: "+wrestling[1]+", Number of ladies on wrestling team: "+wrestling[0]); 	//Guys: 20, Gals: 20
    addBlockOfText(divElement, "Spring Sports", "center");
    addBlockOfText(divElement, "Number of guys on baseball team: "+baseball); 	//55
    addBlockOfText(divElement, "Number of ladies on softball team: "+softball); 	//39
    addBlockOfText(divElement, "Number of guys on lacrosse team: "+lacrosse[1]+", Number of ladies on lacrosse team: "+lacrosse[0]); 	//Guys: 42, Gals: 30
    addBlockOfText(divElement, "Number of guys on tennis team: "+tennis[1]+", Number of ladies on tennis team: "+tennis[0]); 		//Guys: 15, Gals: 13
    addBlockOfText(divElement, "Number of guys on track team: "+track[1]+", Number of ladies on track team: "+track[0]);		//Guys: 44, Gals: 54
    addBlockOfText(divElement, "Number of guys on volleyball team: "+volleyball[1]+", Number of ladies on volleyball team: "+volleyball[0]); //Guys: 47, Gals: 55
    let clubInfo = clubNames[0]+": "+clubTallies[0];
    for(let i = 1; i < clubTallies.length; i++){
        clubInfo = clubInfo + ", " + clubNames[i]+": "+clubTallies[i];
    }
    addBlockOfText(divElement, "Club Info - "+clubInfo);
    
    divArray[0] = divElement;
    document.body.appendChild(divElement);
}

function checkSpecificStudent(student){
    let check = false;
    check = !student.character.trans;
    check = check && (student.character.sex>1);
    //check = check && (student.character.alignment()=="Neutral Evil");
    //check = check && (student.wealth<-33);
    //check = check && (sexualityToString(student.character.getSexuality())=="Gay");
    //check = check && (student.socialStatus>50);
    //check = check && (student.race=="White");
    //check = check && (student.class==3);
    check = check && (student.hair=="Black");
    check = check && (student.eyes=="Blue");
    check = check && (student.sports.includes("Swimming"));
    //check = check && (student.sports.includes("Indoor Track"));
    //check = check && (student.sports.includes("Ice Hockey"));
    //check = check && (student.sports.includes("Lacrosse"));
    //check = check && (student.clubs.includes("Dance"));
    //check = check && (student.clubs.includes("Alford Key Club"));
    //check = check && (student.clubs.includes("Alford Pride Foundation"));
    //check = check && (student.clubs.includes("National Honor Society"));
    //check = check && (student.clubs.includes(""));
    return check;
}

function generateSpecificStudent(){
    let count = 0;
    let student = new Student();
    while(!checkSpecificStudent(student)){
        student = new Student();
        count++;
        if(count%10000==0){
            console.log("Generating...")
        }
        if(count > 10000000){
            student.firstName = "FAILURE";
            break;
        }
    }
    return student;
}

generateStudentButton.addEventListener('click', function () {
    for (let i = 0; i < divArray.length; i++) {
        divArray[i].remove();
    }
    let students = [];
    students[0] = new Student();
    charArray[0] = students[0].character;
    //generateStudentBody(500);
    //displayStudent(students[0]);
    //displayHeaderOneLine(students[0]);
    //displayStudentOneLine(1, students[0]);
    //for(let i = 2; i < 500; i++){
    //    students.push(new Student);
    //    displayStudentOneLine(i, students[i-1]);
    //}
    //displayStudentBodyStats(students, 501);
    students[0] = generateSpecificStudent();
    displayStudentOneLine(1, students[0]);
    
    let rect = headerElement.getBoundingClientRect();
    window.scrollTo(rect.top,document.body.scrollHeight);

});