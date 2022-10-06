'use strict'

const generateButton = document.getElementById("btnGenerate");
const numberField = document.getElementById("number");
const divArray = [];

let debug = false;

let color = true;
let color1 = "#000000";
let color2 = "#0f0f0f";
let lightGrey = "#d6d6d6";
let red = "#ff0000";
let lightBlue = "#00ddff";
let green = "#00ff2f";
let yellow = "#ffff00";
let white = "#ffffff";

const straight = 0;
const gay = 1;
const bisexual = 2;
const ace = 3;
const queer = 4;

const listNameAdjectives = [["Wind", "Hurricane", "Gale", "Aerial", "Air", "Monsoon", "Breezy", "Brisk"],
["Armored", "Steel", "Iron", "Titanium"],
["Animal", "Beast", "Bite", "Fauna"],
["Cold", "Bleak", "Frosted", "Snowy", "Frozen", "Freeze", "Winter", "Glacial", "Boreal", "Hibernal", "Polar", "Arctic"],
["Cosmic", "Celestial", "Comet", "Space", "Planet", "Nebula", "Universe"],
["Dark", "Shadow", "Black", "Ebony", "Jet", "Obsidian", "Gloom"],
["Deadly", "Death", "Kill", "Murder", "Decay", "Rot", "Necrotic", "Taint"],
["Dimension", "Ultra", "Anti", "Outside", "Alien", "Other", "Dimensional"],
["Dream", "Nightmare", "Horror", "Macabre", "Ghastly", "Terror"],
["Earth", "Dirt", "Rock", "Stone", "Terra"],
["Electrical", "Electric", "Lightning", "Thunder", "Watt", "Voltaic", "Jolting"],
["Elemental", "Alchemical", "Fire", "Water", "Earth", "Wind"],
["Fire", "Flame", "Burning", "Blazing", "Flaming", "Scorching", "Scorch", "Incandescent", "Broil", "Burn", "Cinder", "Ember", "Heat"],
["Gravitational", "Black Hole", "Graviton", "Gravity"],
["Illusionary", "Trick", "Deceit", "Delusion", "Fake", "Forgery", "Fraud", "Sham"],
["Kinetic", "Telepathic", "X", "Psychic", "Psionic", "Friction", "Inertia", "Force", "Telekinetic"],
["Life", "Bio", "Heart", "Blood", "Bone", "Living"],
["Light", "Glare", "Glow", "Luminous", "Photo", "Shimmer", "Shining"],
["Blessed", "Chance", "Fortune", "Luck", "Lucky"],
["Charm", "Conjure", "Enchantment", "Mage", "Magic", "Magician", "Occult", "Sorceror"],
["Magnetic", "Mag", "Magnet", "Lode", "Faraday", "Pole"],
["Martial", "Assault", "Attack", "Combat", "Fight", "Warrior"],
["Mental", "Brain", "Emotion", "Mind", "Nerve", "Psion", "Thought", "Telepathic"],
["Meta", "Mimick", "Power", "Nega", "Adapting"],
["Morphing", "Change", "Form", "Shape", "Trans"],
["Plant", "Chloro", "Floro", "Green", "Leaf", "Root", "Rose", "Thorn", "Tree", "Vine", "Wood"],
["Poison", "Bane", "Tain", "Toxic", "Poisonous" , "Venom"],
["Radiation", "Radioactive", "Gamma", "Atom", "Fission", "Fusion", "Nuke", "Nuclear"],
["Sensory", "Tracking", "Aura", "Radar", "Bat", "Cat", "X-Ray", "Eagle", "Hawk", "Owl"],
["Size", "Ant", "Giant", "Grow", "Huge", "Macro", "Mega", "Mini", "Micro", "Shrinking", "Size", "Tiny"],
["Sonic", "Cry", "Howl", "Scream", "Sound", "Vibe", "Vibro"],
["Speed", "Comet", "Dart", "Fast", "Nitro", "Pace", "Rapid", "Swift", "Velocity"],
["Strong", "Power", "Brawny", "Burly", "Muscle", "Robus", "Hardy", "Mighty", "Muscular", "Punishing", "Indomitable", "Invincible", "Invulnerable"],
["Summoning", "Commander", "General", "Ruler", "Master", "Legion", "Necromancing", "Swarm", "Animating"],
["Talent", "Super", "Knack", "Captain", "General", "Lieutenant", "Corporal", "Sensei", "Sifu"],
["Tech", "Computer", "Cybernetic", "Cyborg", "Mecha", "Mechanism", "Techno"],
["Teleport", "Blink", "Portal", "Warp", "Peep"],
["Time", "Aeon", "Chrono", "Clock", "Second", "Temporal", "Time"],
["Water", "Aquatic", "Aqua", "Hyrdo", "Oceanic", "Rain", "River", "Tide", "Typhoon", "Wave"],
["Blizzard", "Electric", "Hurricane", "Monsoon", "Snow", "Typhoon", "Weather", "Wind"],
["Super", "Mega", "Master", "Doctor", "Indomitable", "Invincible", "Invulnerable", "Amazing", "Spectacular", "Maniacal", "Commander", "General", "Captain", "Lieutenant", "Corporal", "Killer", "Marvelous", "Wretched", "Desolate", "Human", "Blue", "Black", "Red", "Yellow", "Green", "Gray", "White", "Purple"]];

const listNameMaleAdjectives = ["King", "Lord", "Sir", "Mr.", "God of", "Prince"];

const listNameFemaleAdjectives = ["Queen", "Lady", "Mistress", "Mrs.", "Miss", "Goddess of", "Princess"];

const listNameNouns = [["Maelstrom","Tempest","Hurricane","Wind","Gale","Tornado","Zephyr"],
["Armor","Titan"],
["Animal", "Zoologist", "Snake", "Wolf"],
["Cold", "Absolute Zero", "Shiver", "Shivers", "Glacier", "Blizzard"],
["Cosmic", "Omega", "Comet", "Planet", "Nebula", "Universe"],
["Darkness", "Void", "Blackout", "Nocturne"],
["Death", "Hush", "Shivers", "Plauge"],
["Dimension", "Aberation", "Aberant"],
["Dream", "Sandman", "Dreamweaver"],
["Earth", "Terra", "Dust", "Mountain"],
["Electrical", "Buzz", "Static", "Surge"],
["Element", "Alchemist", "Fire", "Water", "Air", "Earth", "Transmuter"],
["Fire", "Inferno", "Blaze", "Cinder", "Ember", "Flame"],
["Gravity", "Singularity", "Graviton"],
["Illusion", "God", "Trickster", "Projector", "Mystery"],
["Kinetic", "Drift", "Psion", "Jedi", "Sith"],
["Life", "Creator", "Biologist"],
["Light", "Blaze", "Beacon", "Bulb", "Star", ""],
["Luck", "Snake Eyes", "Blackjack", "Roulette", "Pocket Aces", "Critical"],
["Magic", "Hex", "Magician", "Sorceror", "Wizard", "Witch", "Magi"],
["Magnetic", "Magnet", "Lodestone"],
["Martial", "Fighter", "Warrior", "Slicer", "Monk", ],
["Mental", "Brain", "Mind", "Telepath"],
["Meta", "Mimic", "Nemesis"],
["Morphing", "Skinwalker", "Shifter", "Shapeshifter", "Morpho"],
["Plant", "Ivy", "Tree", "Forest", "Leaf", "Trunk", "Vine"],
["Poison", "Venom", "Snake", "Toxin", "Scorpion"],
["Radiation", "Static", "Atom"],
["Sensory", "Ear", "Eye", "Nose"],
["Size",  "Giant", "Atom", "Ant"],
["Sonic", "Whistler", "Cry", "Howl", "Scream"],
["Speed", "Cheetah", "Comet", "Dart", "Flash"],
["Strength", "Rampage", "Juggernaut", "Avalance"],
["Summoning", "Commander", "General", "Ruler", "Master", "Legion", "Necromancer", "Swarm Master", "Animator"],
["Talent", "Monk"],
["Tech", "Cyborg", "Genius"],
["Teleport", "Flux"],
["Time", "Chronomancer", "Clocksmith"],
["Water", "Flood", "Wave", "Typhoon"],
["Weather", "Storm", "Blizzard", "Hurricane", "Monsoon", "Typhoon"],
["Other", "Frenzy", "Criminal", "Mutilator", "Miracle", "Bandit", "Monster", "Snake", "Wolf", "Scorpion", "Rhino", "Bear", "Cougar"]];

const listNameMaleNouns = ["King", "Lord", "Boy", "Man", "God", "Prince"];

const listNameFemaleNouns = ["Queen", "Lady", "Mistress", "Woman", "Girl", "Goddess", "Princess", "Gal"];

const listNameSingles = ["Whitewash", "Vex", "Red Saint", "Discord", "Recluse", "Serine Psycho", "Shivers", "Voodoo", "Schism", "Checkmate"];

const listPowerProfiles = ["Air", "Armor", "Animal", "Cold", "Cosmic", "Darkness", "Death", "Dimension", "Dream", "Earth", "Electrical", "Element", "Fire", "Gravity", "Illusion", "Kinetic", "Life", "Light", "Luck", "Magic", "Magnetic", "Martial", "Mental", "Meta", "Morphing", "Plant", "Poison", "Radiation", "Sensory", "Size", "Sonic", "Speed", "Strength", "Summoning", "Talent", "Tech", "Teleport", "Time", "Water", "Weather", "Other"];

//#region All the constant numbers for the power profiles
const numberAirProfile          = 0   ;
const numberArmorProfile        = 1   ;
const numberAnimalProfile       = 2   ;
const numberColdProfile         = 3   ;
const numberCosmicProfile       = 4   ;
const numberDarknessProfile     = 5   ;
const numberDeathProfile        = 6   ;
const numberDimensionProfile    = 7   ;
const numberDreamProfile        = 8   ;
const numberEarthProfile        = 9   ;
const numberElectricalProfile   = 10  ;
const numberElementProfile      = 11  ;
const numberFireProfile         = 12  ;
const numberGravityProfile      = 13  ;
const numberIllusionProfile     = 14  ;
const numberKineticProfile      = 15  ;
const numberLifeProfile         = 16  ;
const numberLightProfile        = 17  ;
const numberLuckProfile         = 18  ;
const numberMagicProfile        = 19  ;
const numberMagneticProfile     = 20  ;
const numberMartialProfile      = 21  ;
const numberMentalProfile       = 22  ;
const numberMetaProfile         = 23  ;
const numberMorphingProfile     = 24  ;
const numberPlantProfile        = 25  ;
const numberPoisonProfile       = 26  ;
const numberRadiationProfile    = 27  ;
const numberSensoryProfile      = 28  ;
const numberSizeProfile         = 29  ;
const numberSonicProfile        = 30  ;
const numberSpeedProfile        = 31  ;
const numberStrengthProfile     = 32  ;
const numberSummoningProfile    = 33  ;
const numberTalentProfile       = 34  ;
const numberTechProfile         = 35  ;
const numberTeleportProfile     = 36  ;
const numberTimeProfile         = 37  ;
const numberWaterProfile        = 38  ;
const numberWeatherProfile      = 39  ;
const numberOtherProfile        = 40  ;
//#endregion

const listOrigins = ["Accident", "Alien", "Endowment", "Experiment", "Magic", "Mutant", "Training", "Other"];
//#region All the constant numbers for the origins
const numberAccidentOrigin    = 0;
const numberAlienOrigin       = 1;
const numberEndowmentOrigin   = 2;
const numberExperimentOrigin  = 3;
const numberMagicOrigin       = 4
const numberMutantOrigin      = 5;
const numberTrainingOrigin    = 6;
const numberOtherOrigin       = 7;
//#endregion

const listGoals = ["Annihilation", "Chaos", "Control", "Fame", "Fortune", "Misguided Heroism", "Power", "Revenge", "Safety", "Thrills", "Other"];
//#region All the constant number for the villain's goals
const numberAnnihilationGoal    = 0;
const numberChaosGoal           = 1;
const numberControlGoal         = 2;
const numberFameGoal            = 3;
const numberFortuneGoal         = 4;
const numberMisguidedGoal       = 5;
const numberPowerGoal           = 6;
const numberRevengeGoal         = 7;
const numberSafetyGoal          = 8;
const numberThrillsGoal         = 9;
const numberOtherGoal           = 10;
//#endregion

const listJustifications = ["Entitlement", "Nobility", "Pride", "Rebellion", "Survival", "Madness", "Other"];
//#region All the constant numbers for the villain's justifications
const numberEntitlementJustification     = 0;
const numberNobilityJustification        = 1;
const numberPrideJustification           = 2;
const numberRebellionJustification       = 3;
const numberSurvivalJustification        = 4;
const numberMadnessJustification         = 5;
const numberOtherJustification           = 6;
//#endregion

function log(string){
    if(debug){
        console.log(string);
    }
}
function random(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomUnique(max, min, list){
    if(list.length==(max-min)){
        return random(max, min);
    }
    let r = random(max, min);
    if(list.includes(r)){
        return randomUnique(max, min, list);
    }else{
        return r;
    }
}

function randomArrayIndex(length){
    return Math.floor(Math.random() * (length));
}

function randomUniqueArrayIndex(length, list){
    log("randomUniqueArrayIndex: Length="+length);
    if(list.length==length){
        log("randomUniqueArrayIndex: List length equal to length of array");
        return randomArrayIndex(length);
    }
    let r = randomArrayIndex(length);
    log("randomUniqueArrayIndex: r="+r);
    if(list.includes(r)){
        log("randomUniqueArrayIndex: List already has r");
        return randomUniqueArrayIndex(length, list);
    }else{
        return r;
    }
}

function addBlockOfText(div, text) {
    let divElementP = document.createElement("p")
    let divElementText = document.createTextNode(text);
    divElementP.appendChild(divElementText);
    div.appendChild(divElementP);
    return divElementP;
}

function addBlockOfText(div, text, classN) {
    let divElementP = document.createElement("p");
    divElementP.className = classN;
    let divElementText = document.createTextNode(text);
    //divElementText.className = classN;
    divElementP.appendChild(divElementText);
    div.appendChild(divElementP);
    return divElementP;
}

function addColoredBlockOfText(div, text, color) {
    let divElementP = document.createElement("p");
    let divElementText = document.createTextNode(text);
    divElementP.style.color = color;
    divElementP.appendChild(divElementText);
    div.appendChild(divElementP);
    return divElementP;
}

function addColoredBlockOfText(div, text, color, classN) {
    let divElementP = document.createElement("p");
    divElementP.className = classN;
    let divElementText = document.createTextNode(text);
    divElementP.style.color = color;
    divElementP.appendChild(divElementText);
    div.appendChild(divElementP);
    return divElementP;
}

function addThreeColumns(div, text1, text2, text3){
    let divElementR = document.createElement("div");
    divElementR.className = "row";
    let divElementC1 = document.createElement("div");
    let divElementC2 = document.createElement("div");
    let divElementC3 = document.createElement("div");
    divElementC1.className = "threeColumn";
    divElementC2.className = "threeColumn";
    divElementC3.className = "threeColumn";
    addBlockOfText(divElementC1, text1, "centerNoPadding");
    addBlockOfText(divElementC2, text2, "centerNoPadding");
    addBlockOfText(divElementC3, text3, "centerNoPadding");
    divElementR.appendChild(divElementC1);
    divElementR.appendChild(divElementC2);
    divElementR.appendChild(divElementC3);
    div.appendChild(divElementR);
}

function addThreeColumns(div, text1, text2, text3, color){
    let divElementR = document.createElement("div");
    divElementR.className = "row";
    let divElementC1 = document.createElement("div");
    let divElementC2 = document.createElement("div");
    let divElementC3 = document.createElement("div");
    divElementC1.className = "threeColumn";
    divElementC2.className = "threeColumn";
    divElementC3.className = "threeColumn";
    addColoredBlockOfText(divElementC1, text1, color, "centerNoPadding");
    addColoredBlockOfText(divElementC2, text2, color, "centerNoPadding");
    addColoredBlockOfText(divElementC3, text3, color, "centerNoPadding");
    divElementR.appendChild(divElementC1);
    divElementR.appendChild(divElementC2);
    divElementR.appendChild(divElementC3);
    div.appendChild(divElementR);
}

function addFourColumns(div, text1, text2, text3, text4){
    let divElementR = document.createElement("div");
    divElementR.className = "row";
    let divElementC1 = document.createElement("div");
    let divElementC2 = document.createElement("div");
    let divElementC3 = document.createElement("div");
    let divElementC4 = document.createElement("div");
    divElementC1.className = "fourColumn";
    divElementC2.className = "fourColumn";
    divElementC3.className = "fourColumn";
    divElementC4.className = "fourColumn";
    addBlockOfText(divElementC1, text1, "centerNoPadding");
    addBlockOfText(divElementC2, text2, "centerNoPadding");
    addBlockOfText(divElementC3, text3, "centerNoPadding");
    addBlockOfText(divElementC4, text4, "centerNoPadding");
    divElementR.appendChild(divElementC1);
    divElementR.appendChild(divElementC2);
    divElementR.appendChild(divElementC3);
    divElementR.appendChild(divElementC4);
    div.appendChild(divElementR);
}

function addFourColumns(div, text1, text2, text3, text4, color){
    let divElementR = document.createElement("div");
    divElementR.className = "row";
    let divElementC1 = document.createElement("div");
    let divElementC2 = document.createElement("div");
    let divElementC3 = document.createElement("div");
    let divElementC4 = document.createElement("div");
    divElementC1.className = "fourColumn";
    divElementC2.className = "fourColumn";
    divElementC3.className = "fourColumn";
    divElementC4.className = "fourColumn";
    addColoredBlockOfText(divElementC1, text1, color, "centerNoPadding");
    addColoredBlockOfText(divElementC2, text2, color, "centerNoPadding");
    addColoredBlockOfText(divElementC3, text3, color, "centerNoPadding");
    addColoredBlockOfText(divElementC4, text4, color, "centerNoPadding");
    divElementR.appendChild(divElementC1);
    divElementR.appendChild(divElementC2);
    divElementR.appendChild(divElementC3);
    divElementR.appendChild(divElementC4);
    div.appendChild(divElementR);
}

function displayVillain(villain){
    // create div element
    let divElement = document.createElement('div');
    if(color){
        divElement.style.backgroundColor = color1;
        color = false;
    }else{
        divElement.style.backgroundColor = color2;
        color = true;
    }

    addBlockOfText(divElement,"Name: "+villain.getName(), "centerBold").style.color = white;

    addFourColumns(divElement, "Power Level: "+villain.powerLevel, "Sex: "+villain.getSex(), "Sexuality: "+sexualityToString(villain.getSexuality()), "Alignment: "+villain.getAlignment(), lightGrey);
    addFourColumns(divElement, "Power Profile(s): "+villain.getPowerProfiles() ,"Origin: "+villain.getOrigin() ,"Goal: "+villain.getGoal() ,"Justification: "  +villain.getJustification(), lightGrey);

    addBlockOfText(divElement,"M&M Stats"+" (Average Stat Level: "+((villain.powerLevel-5)/2)+")","centerBold").style.color = lightBlue;

    addFourColumns(divElement,"strength: "+villain.strength , "stamina: "+villain.stamina, "agility: "+villain.agility, "dexterity: "+villain.dexterity, lightBlue);
    addFourColumns(divElement,"fighting: "       +villain.fighting, "intellect: "+villain.intellect, "awareness: "+villain.awareness, "presence: "+villain.presence, lightBlue);

    addBlockOfText(divElement, "Attack Statistics", "centerBold").style.color = red;
    addFourColumns(divElement,"attackBonus: "    +villain.attackBonus, "damageBonus: "+villain.damageBonus, "dodgeBonus: "+villain.dodgeBonus, "parryBonus: "+villain.parryBonus, red);
    addThreeColumns(divElement,"toughnessBonus: " +villain.toughnessBonus, "willBonus: "+villain.willBonus, "fortitudeBonus: "+villain.fortitudeBonus, red);

    addBlockOfText(divElement,"End Villain","center")
    //addBlockOfText(divElement,""+villain.);
    divArray[0] = divElement;

    // append div element to document
    document.body.appendChild(divElement);
}

function getGoodness(num){
    switch(num){
        case 1: return "Evil";
        case 2: return "Neutral";
        case 3: return "Good";
    }
}

function getLawfulness(num){
    if(num>7){
        return "Chaotic";
    }else if(num<6){
        return "Neutral";
    }else{
        return "Lawful";
    }
}

function getAlignmentGlobal(lawfulness, goodness){
    let alignment = getLawfulness(lawfulness) + " " + getGoodness(goodness);
    if(alignment=="Neutral Neutral"){
        return "True Neutral";
    }else{
        return alignment;
    }
}

function getLGBTQIAPercent(){
    return 8;
}

function sexualityToString(value){
    switch(value){
        case straight: return "Straight";
        case gay: return "Gay";
        case bisexual: return "Bisexual";
        case ace: return "Asexual";
        case queer: return "Queer";
        default: return "Error";
    }

}

class Villain {
    constructor(powerLevel) {
        this.sex                        = random(2, 1);
        this.trans                      = false;
        this.sexuality                  = random(100, 0);
        this.goodness                   = Math.ceil(random(3,1)*random(3,1)/3);
        this.lawfullness                = random(6,1)+random(6,1);
        this.powerLevel                 = powerLevel;
        this.numPowerProfiles           = Math.ceil(random(3,1)*random(3,1)/3)
        this.powerProfiles              = [];
        for(let i = 0; i < this.numPowerProfiles; i++){
            this.powerProfiles[i]       = randomUniqueArrayIndex(listPowerProfiles.length, this.powerProfiles);
        }
        this.origin                     = randomArrayIndex(listOrigins.length);
        this.goal                       = randomArrayIndex(listGoals.length);
        this.justification              = randomArrayIndex(listJustifications.length);

        this.strength                   = this.statGeneration();
        this.stamina                    = this.statGeneration();
        this.agility                    = this.statGeneration();
        this.dexterity                  = this.statGeneration();
        this.fighting                   = this.statGeneration();
        this.intellect                  = this.statGeneration();
        this.awareness                  = this.statGeneration();
        this.presence                   = this.statGeneration();

        this.attackBonus                = Math.round((random(7, 1)+random(7, 1)+random(7, 1))/12*powerLevel);
        if(this.fighting>this.attackBonus){
            this.attackBonus = this.fighting;
        }
        this.damageBonus                = powerLevel*2-this.attackBonus;
        this.dodgeBonus                 = Math.round((random(7, 1)+random(7, 1)+random(7, 1))/12*powerLevel+this.agility-this.stamina);
        this.parryBonus                 = Math.round((random(7, 1)+random(7, 1)+random(7, 1))/12*powerLevel+this.fighting-this.stamina);
        let highBonus = this.dodgeBonus;
        if(this.parryBonus>this.dodgeBonus){highBonus=this.parryBonus};
        this.toughnessBonus             = powerLevel*2-highBonus;
        this.willBonus                  = Math.round((random(7, 1)+random(7, 1)+random(7, 1))/12*powerLevel+this.awareness-this.stamina);
        this.fortitudeBonus             = powerLevel*2-this.willBonus;

        if(random(100, 0)<2){
            this.trans = true;
        }
        this.gender                     = this.sex;
        if(this.trans){
            this.gender                 = !this.gender;
        }

        this.name                       = this.getVillainName();
        log(this.name);
    }
    statGeneration(){
        if(random(10, 1)>9){
            if(random(20,1)>19){
                return 3*Math.floor((random(6, 1)+random(6, 1)+random(6, 1))+(this.powerLevel-5)/2);
            }
            return Math.floor((random(6, 1)+random(6, 1)+random(6, 1))+(this.powerLevel-5)/2);
        }
        return Math.floor((random(6, 1)+random(6, 1)+random(6, 1)-10)/2+(this.powerLevel-5)/2);
    }
    getNameFormat(power){
        if(random(4, 1)==4){
            if(random(4, 1)==4){
                return 5;
            }else{
                return 4;
            }
        }else{
            if(random(3, 1)==3){
                if(random(4, 1)==4){
                    return 3;
                }else{
                    return 2;
                }
            }else{
                log(power)
                var adjectiveList = listNameAdjectives[power].length;
                var nounList = listNameNouns[power].length;
                if(random(adjectiveList, 1)<random(nounList, 1)){
                    return 1;
                }else{
                    return 0;
                }
            }
        }
    }
    getVillainName(){
        let villainName = "";
        let power = this.powerProfiles[randomArrayIndex(this.powerProfiles.length)];
        log("Power: "+power)
        //For nameFormat we should weight our decision towards the length of the array for the power's nouns vs adjectives
        let nameFormat = this.getNameFormat(power);//0 if the adjective will be based on the powers, 1 if the noun will be based on the powers, 2 if both the noun and the adjective will be based on the powers, 3 if both will be generic, 4 if the name will be a single word based on the powers, and 5 if the name will be a single word unrelated to the powers.
        let gendered = Math.floor(random(2,1)*random(2,1)/4);;//0 if the name will not be gendered, 1 if it will be.
        
        if(nameFormat < 4){
            //The name will take the form "adjective noun"
            let adjective = "";
            let noun = "";
            if(nameFormat==0){
                //Adjective based on power.
                var adjectives = listNameAdjectives[power];
                adjective = adjectives[randomArrayIndex(adjectives.length)];
                if(gendered){
                    if(this.gender){
                        noun = listNameMaleNouns[randomArrayIndex(listNameMaleNouns.length)];
                    }else{
                        noun = listNameFemaleNouns[randomArrayIndex(listNameFemaleNouns.length)]
                    }
                }else{
                    var nouns = listNameNouns[numberOtherProfile];
                    noun = nouns[randomArrayIndex(nouns.length)];
                }
                villainName = adjective + " " + noun;
            }else if(nameFormat==1){
                var nouns = listNameNouns[power];
                noun = nouns[randomArrayIndex(nouns.length)];
                if(gendered){
                    if(this.gender){
                        adjective = listNameMaleAdjectives[randomArrayIndex(listNameMaleAdjectives.length)];
                    }else{
                        adjective = listNameFemaleAdjectives[randomArrayIndex(listNameFemaleAdjectives.length)]
                    }
                }else{
                    var adjectives = listNameAdjectives[numberOtherProfile];
                    adjective = adjectives[randomArrayIndex(adjectives.length)];
                }
                villainName = adjective + " " + noun;
            }else if(nameFormat==2){
                let power2 = this.powerProfiles[randomUniqueArrayIndex(this.powerProfiles.length, [power])];
                //console.log(power2);
                //Adjective based on power.
                var adjectives = listNameAdjectives[power];
                adjective = adjectives[randomArrayIndex(adjectives.length)];

                var nouns = listNameNouns[power2];
                noun = nouns[randomArrayIndex(nouns.length)];
                villainName = adjective + " " + noun;
            }else if(nameFormat==3){
                var nouns = listNameNouns[numberOtherProfile];
                noun = nouns[randomArrayIndex(nouns.length)];

                var adjectives = listNameAdjectives[numberOtherProfile];
                adjective = adjectives[randomArrayIndex(adjectives.length)];
                if(gendered){
                    if(random(1, 0)){
                        if(this.gender){
                            adjective = listNameMaleAdjectives[randomArrayIndex(listNameMaleAdjectives.length)];
                        }else{
                            adjective = listNameFemaleAdjectives[randomArrayIndex(listNameFemaleAdjectives.length)]
                        }
                    }else{
                        if(this.gender){
                            noun = listNameMaleNouns[randomArrayIndex(listNameMaleNouns.length)];
                        }else{
                            noun = listNameFemaleNouns[randomArrayIndex(listNameFemaleNouns.length)]
                        }
                    }
                }
                villainName = adjective + " " + noun;
            }
        }else{
            if(nameFormat==4){
                //Single name based on powers
                let names  = listNameNouns[power];
                villainName = names[randomArrayIndex(names.length)];
            }else{
                //Random single name
                villainName = listNameSingles[randomArrayIndex(listNameSingles.length)];
            }
        }
        return villainName;
    }
    getName(){
        return this.name;
    }
    getJustification(){
        return listJustifications[this.justification];
    }
    getGoal(){
        return listGoals[this.goal];
    }
    getOrigin(){
        return listOrigins[this.origin];
    }
    getPowerProfiles(){
        let text = listPowerProfiles[this.powerProfiles[0]];
        for(let i = 1; i < this.numPowerProfiles; i++){
            text = text + ", " + listPowerProfiles[this.powerProfiles[i]];
        }
        return text;
    }
    getAlignment(){
        return getAlignmentGlobal(this.lawfullness, this.goodness);
    }
    getSex(){
        let s = "";
        if(this.getSexuality()==queer){
            return "Other";
        }
        if(this.trans){
            s = "Trans "
        }else{
            s = "Cis "
        }
        if(this.sex>1){
            s = s + "Man"
        }else{
            s = s + "Woman"
        }
        return s;
    }
    getSexuality(){
        let gayPercent = getLGBTQIAPercent();
        if(this.sexuality>gayPercent){
            return straight;
        }else{
            let weightedSexuality = this.sexuality/gayPercent*100;
            if(weightedSexuality<55){
                return bisexual;
            }else if(weightedSexuality<90){
                return gay;
            }else if(weightedSexuality<95){
                return ace;
            }else{
                return queer;
            }
        }
    }
}

function sortTwoNumberArray(array){
    if(array[0]<array[1]){
        return [array[1],array[0]];
    }
    return array;
}

function parsePowerLevel(){
    var pL = numberField.value;
    var powerLevel = 8;
    if(pL.includes("-")){
        const powerLevelArray = pL.split("-");
        let powerLevel1 = parseInt(powerLevelArray[0]);
        let powerLevel2 = parseInt(powerLevelArray[1]);
        if(powerLevel1>powerLevel2){
            powerLevel = random(powerLevel1, powerLevel2)
        }else{
            powerLevel = random(powerLevel2, powerLevel1)
        }
    }else{
        powerLevel = parseInt(pL);
    }
    return powerLevel;
}

function generateVillain() {
    var powerLevel = parsePowerLevel();
    console.log("Power Level: "+powerLevel);
    for (let i = 0; i < divArray.length; i++) {
        divArray[i].remove();
    }
    let villain = new Villain(powerLevel);
    displayVillain(villain);
}

function getGeneratorStats(){
    var powerLevel = parsePowerLevel();
    console.log("Power Level: "+powerLevel);
    let n = 10000;
    let altruism = [0, 0, 0];//1 evil 2 neutral, 3 good.
    let lawful = [0, 0, 0];//>6 = chaotic, <6 = neutral, 6 = lawful
    let sex = 0;
    let trans = 0;
    let numPP = 0;
    let strength        =0;
    let stamina         =0;
    let agility         =0;
    let dexterity       =0;
    let fighting        =0;
    let intellect       =0;
    let awareness       =0;
    let presence        =0;
    let attackBonus     =0;
    let damageBonus     =0;
    let dodgeBonus      =0;
    let parryBonus      =0;
    let toughnessBonus  =0;
    let willBonus       =0;
    let fortitudeBonus  =0;
    for(let i = 0; i < n; i++){
        powerLevel = parsePowerLevel();
        let villain = new Villain(powerLevel);
        altruism[villain.goodness-1]++;
        //console.log(villain.lawfullness);
        if(getLawfulness(villain.lawfullness)=="Lawful"){
            lawful[2]++;
        }else if(getLawfulness(villain.lawfullness)=="Chaotic"){
            lawful[0]++;
        }else if(getLawfulness(villain.lawfullness)=="Neutral"){
            lawful[1]++;
        }
        sex = sex + villain.sex;
        if(villain.trans){trans++;}
        numPP+=villain.numPowerProfiles;
        strength        +=villain.strength        ;
        stamina         +=villain.stamina         ;
        agility         +=villain.agility         ;
        dexterity       +=villain.dexterity       ;
        fighting        +=villain.fighting        ;
        intellect       +=villain.intellect       ;
        awareness       +=villain.awareness       ;
        presence        +=villain.presence        ;
        attackBonus     +=villain.attackBonus     ;
        damageBonus     +=villain.damageBonus     ;
        dodgeBonus      +=villain.dodgeBonus      ;
        parryBonus      +=villain.parryBonus      ;
        toughnessBonus  +=villain.toughnessBonus  ;
        willBonus       +=villain.willBonus       ;
        fortitudeBonus  +=villain.fortitudeBonus  ;
    }
    console.log("Average sex: "+sex/n);
    console.log("Percent Trangender Villains: "+trans/n);
    console.log("Ratio of Good: "+altruism[2]/n+", Neutral: "+altruism[1]/n+", Evil: "+altruism[0]/n);
    console.log("Ratio of Lawful: "+lawful[2]/n+", Neutral: "+lawful[1]/n+", Chaotic: "+lawful[0]/n);
    console.log("Average Power Profiles: "+numPP/n);
    console.log("Average strength: "+strength/n        );        
    console.log("Average stamina: "+stamina/n         );         
    console.log("Average agility: "+agility/n         );         
    console.log("Average dexterity: "+dexterity/n       );       
    console.log("Average fighting: "+fighting/n        );        
    console.log("Average intellect: "+intellect/n       );       
    console.log("Average awareness: "+awareness/n       );       
    console.log("Average presence: "+presence/n        );        
    console.log("Average attackBonus: "+attackBonus/n     );     
    console.log("Average damageBonus: "+damageBonus/n     );     
    console.log("Average dodgeBonus: "+dodgeBonus/n      );      
    console.log("Average parryBonus: "+parryBonus/n      );      
    console.log("Average toughnessBonus: "+toughnessBonus/n  );  
    console.log("Average willBonus: "+willBonus/n       );       
    console.log("Average fortitudeBonus: "+fortitudeBonus/n  );  
}

generateButton.addEventListener('click', function () {
    try{
        generateVillain();
        getGeneratorStats();
        
        let rect = numberField.getBoundingClientRect();
        window.scrollTo(rect.top,document.body.scrollHeight);

    }catch(error){
        console.error(error);
        let divElement = document.createElement('div');
        addBlockOfText(divElement,"ERROR, Check Console log", "center");
        divArray[0] = divElement;

        // append div element to document
        document.body.appendChild(divElement);
    }
});