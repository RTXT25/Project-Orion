addLayer("ach", {
    name: "Achivements", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "A", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#f2db05",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Achivements", // Name of prestige currency
    baseResource: "", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "none", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)
        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: "side", // Row the layer is in on the tree (0 is the first row)
    layerShown(){return true},
    achievements: {
        12: {
            name: "The After Begining",
            done() {
                return hasUpgrade('r',11)
            },
            tooltip: "Buy the first upgrade",
            onComplete() {
                player.ach.points = player.ach.points.add(1)
            },
        },
    },
    tabformat:[
        "main-display",
	"achivements"
    ],
})
