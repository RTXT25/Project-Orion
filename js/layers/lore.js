addLayer("lore", {
    name: "lore", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "L", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#ffffff",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "", // Name of prestige currency
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
    tabFormat: {
        "Phase 1": {
            content: [
                ["infobox","P11"],
                ["infobox","P12"],
                ["infobox","P13"],
            ],
        },
        "Phase 2": {
            content: [
                
            ],
        },
        "Phase 3": {
            content: [
                
            ],
        },
        "Milestones for debug and stuff": {
            content: [
		    ["infobox","debug"],
                "milestones",
            ],
        },

    },
    infoboxes:{
	    debug:{
		title: "Debug Stuff",
	    },
            P11: {
                title: "The Begining",
                body() { return "One day some one living on a ball of rock and water looked up at the sky in to the vastness of space and said to them selves<br>'There thats where I'll go'" },
                unlocked() { return hasUpgrade('r',11)},
            },
            P12: {
                title: "",
                body() { return "lore" },
            },
            P13: {
                title: "",
                body() { return "morelore" },
            },
    },
    milestones:{
        0:{
            requirementDescription: "New Lore Has Been Unlocked",
            effectDescription: "The Begining",
            done() { return (hasUpgrade('r',11)) }
        },
    },
})
