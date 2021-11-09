addLayer("r", {
    name: "resources", // This is optional, only used in a few places, If absent it just uses the layer id.
    symbol: "R", // This appears on the layer's node. Default is the id with the first letter capitalized
    position: 0, // Horizontal position within a row. By default it uses the layer id and sorts in alphabetical order
    startData() { return {
        unlocked: true,
		points: new Decimal(0),
    }},
    color: "#a8a8a8",
    requires: new Decimal(10), // Can be a function that takes requirement increases into account
    resource: "Resources", // Name of prestige currency
    baseResource: "Cash", // Name of resource prestige is based on
    baseAmount() {return player.points}, // Get the current amount of baseResource
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    exponent: 0.5, // Prestige currency exponent
    passiveGeneration() { return (hasUpgrade("r", 33))?1:0 },
    gainMult() { // Calculate the multiplier for main currency from bonuses
        mult = new Decimal(1)

        mult = mult.times(getBuyableAmount('r', 12)).add(1)

        if (hasUpgrade('r',12)) mult = mult.times(2)
        if (hasUpgrade('r', 15)) mult = mult.times(upgradeEffect('r', 15))
        if (hasUpgrade('r',21)) mult = mult.times(2)
        if (hasUpgrade('r',22)) mult = mult.times(10)
        if (hasUpgrade('r',23)) mult = mult.times(10)
        if (hasUpgrade('r',24)) mult = mult.times(10)
        if (hasUpgrade('r',25)) mult = mult.times(10)
        


        return mult
    },
    gainExp() { // Calculate the exponent on main currency from bonuses
        return new Decimal(1)
    },
    row: 0, // Row the layer is in on the tree (0 is the first row)
    hotkeys: [
        {key: "r", description: "r: Reset for Resoucres", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
    ],
    layerShown(){return true},

    upgrades: {
       11:{
        title: "The Begining",
        description: "Start Mining For Resoucres", 
        cost: new Decimal(1),
       },
       12:{
        title: "Faster Mining",
        description: "Mine for Resoucres 2x faster", 
        cost: new Decimal(1),
        unlocked() { return hasUpgrade('r',11)},
       },
       13:{
        title: "Money man",
        description: "Gain Money 2x Faster", 
        cost: new Decimal(2),
        unlocked() { return hasUpgrade('r',12)},
       },
       14:{
        title: "Money Exploits",
        description: "Gain More Money Based On Your Resoucres",  
        cost: new Decimal(5),
        unlocked() { return hasUpgrade('r',13)},
        effect() {
            return player[this.layer].points.add(1).pow(0.5).add(1)
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect    
       },
       15:{
        title: "Resource Exploits",
        description: "Gain More Money Based On Your Resoucres",  
        cost: new Decimal(10),
        unlocked() { return hasUpgrade('r',14)},
        effect() {
                return player.points.add(1).pow(0.15)        
        },
        effectDisplay() { return format(upgradeEffect(this.layer, this.id))+"x" }, // Add formatting to the effect    
       },
       21:{
        title: "Money Machine",
        description: "Unlock A Buyable",  
        cost: new Decimal(10),
        unlocked() { return hasUpgrade('r',15)},
       },
       22:{
        title: "More More",
        description: "Have More Mining",  
        cost: new Decimal(20),
        unlocked() { return hasUpgrade('r',21)},
       },
       23:{
        title: "More More More",
        description: "Have More More Mining",  
        cost: new Decimal(1000),
        unlocked() { return hasUpgrade('r',22)},
       },
       24:{
        title: "More More More More",
        description: "Have More More More Mining",  
        cost: new Decimal(100000),
        unlocked() { return hasUpgrade('r',23)},
       },
       25:{
        title: "More More More More More",
        description: "Have More More More More Mining",  
        cost: new Decimal(10000000),
        unlocked() { return hasUpgrade('r',24)},
       },
       31:{
        title: "Ok Money Now",
        description: "10% more cash on top of EVERY thing",  
        cost: new Decimal(1e9),
        unlocked() { return hasUpgrade('r',25)},
       },
       32:{
        title: "Ok Mining Buyable Now",
        description: "Unlock The Mining Machine",  
        cost: new Decimal(1e9),
        unlocked() { return hasUpgrade('r',31)},
       },
       33:{
        title: "Ok QOL time",
        description: "Gain 100% of Resources Per Second",  
        cost: new Decimal(1e10),
        unlocked() { return hasUpgrade('r',32)},
       },
    },

    buyables: {
        11: {
            title: "Money Machine",
            cost(x) { return new Decimal(10).pow(x.pow(1.2)) },
            display() {
                return "Amount: "+formatWhole(getBuyableAmount('r', 11))+"<br> cost:"+format(tmp.r.buyables[11].cost)+ " Resources"
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return hasUpgrade('r',21)},
        },
        12: {
            title: "Mining Machine",
            cost(x) { return new Decimal(100).pow(x.pow(1.2)) },
            display() {
                return "Amount: "+formatWhole(getBuyableAmount('r', 11))+"<br> cost:"+format(tmp.r.buyables[12].cost)+ " Resources"
            },
            canAfford() { return player[this.layer].points.gte(this.cost()) },
            buy() {
                player[this.layer].points = player[this.layer].points.sub(this.cost())
                setBuyableAmount(this.layer, this.id, getBuyableAmount(this.layer, this.id).add(1))
            },
            unlocked() { return hasUpgrade('r',32)},
        },
    },
})
