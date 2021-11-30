let modInfo = {
	name: "Project Orion",
	id: "PrOr",
	author: "RTXT25",
	pointsName: "Cash",
	modFiles: ["layers/Phase1.js", "layers/p1ship.js", "layers/Phase2.js", "layers/Phase3.js", "layers/Achivements.js", "layers/lore.js", "tree.js"],

	discordName: "",
	discordLink: "",
	initialStartPoints: new Decimal (10), // Used for hard resets and new players
	offlineLimit: 1,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.1.1",
	name: "Wow more stuff",
}

let changelog = `<h1>Changelog:</h1><br>
        <h4>v0.1.1 Wow more stuff</h4>
	        - small sequence fix
        <h3>v0.1 Wow more stuff</h3><br>
	        - Added Resource Upgrades<br>
			- Added 2 Resource Buyables<br>
			- Added 1 Achivement<br>
			- Added 1 Lore thing<br>
			note: I need to make the names better<br>
		<h3>v0.0 1 second of gameplay</h3><br>
			- Added Resources, Achivements and Lore layers<br>
			- Set up the layers`

let winText = `Congratulations! You have reached the end and beaten this game.`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new Decimal(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	if (hasUpgrade('r',11)) return true
}

// Calculate points/sec!
function getPointGen() {

	if(!canGenPoints())
		return new Decimal(0)
	let gain = new Decimal(1)

	gain = gain.times(getBuyableAmount('r', 11)).add(1)

	if (hasUpgrade('r',13)) gain = gain.times(2)
	if (hasUpgrade('r', 14)) gain = gain.times(upgradeEffect('r', 14))

	if (hasUpgrade('r',31)) gain = gain.times(1.1)

	gain = gain.times(player.c.points).add(1)

	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	"wow game very bad tho <br>also you are playing the fresh and probably buggy and broken build that may or may not work build"
]

// Determines when the game "ends"
function isEndgame() {
	return player.points.gte(new Decimal("e280000000"))
}



// Less important things beyond this point!

// Style for the background, can be a function
var backgroundStyle = {

}

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}
