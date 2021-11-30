addLayer("sb", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    symbol: "B",
    color: "#89a39b",                       // The color for this layer, which affects many elements.
    resource: "Parts",            // The name of this layer's main prestige resource.
    row: 5,                                 // The row this layer is on (0 is the first row).
    position: 1,
    tooltip: "Body",
    resetDescription:"Install ",
    baseResource: "Parts",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.c.parts },  // A function to return the current amount of baseResource.
    canBuyMax() { return true},
    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.
    doReset(resettingLayer) {
        let keep = [];
        keep.push("points");
        layerDataReset(this.layer, keep);
    },
    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.41,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return (hasUpgrade('r',41) || player.c.unlocked) },          // Returns a bool for if this layer's node should be visible in the tree.

    milestones: {
        0: {
            requirementDescription: "100 Installed Parts",
            effectDescription: "Complete The Body",
            done() { return player.sb.points.gte(100) }
        },
    }, 
    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.sb.points) + ' Completed Parts' },
            ],
        "blank",
        "milestones",
    ],
    branches: [['sb', '#89a39b', 100]],
})
addLayer("st1", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    symbol: "T1",
    color: "#89a39b",                       // The color for this layer, which affects many elements.
    resource: "",            // The name of this layer's main prestige resource.
    row: 4,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.c.parts },  // A function to return the current amount of baseResource.
    canBuyMax() { return true},
    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.
    doReset(resettingLayer) {
        let keep = [];
        keep.push("points");
        layerDataReset(this.layer, keep);
    },
    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.41,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasUpgrade('r',41) || player.c.unlocked },          // Returns a bool for if this layer's node should be visible in the tree.

    milestones: {
        0: {
            requirementDescription: "100 Installed Parts",
            effectDescription: "Complete Thruster 1",
            done() { return player.st1.points.gte(100) }
        },
    }, 

    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.sb.points) + ' Completed Parts' },
            ],
        "blank",
        "milestones",
    ],
    branches: [['sb', '#89a39b', 100]],
})
addLayer("st2", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    symbol: "T2",
    color: "#89a39b",                       // The color for this layer, which affects many elements.
    resource: "",            // The name of this layer's main prestige resource.
    row: 4,                                 // The row this layer is on (0 is the first row).
    canBuyMax() { return true},
    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.c.parts },  // A function to return the current amount of baseResource.

    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.41,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    doReset(resettingLayer) {
        let keep = [];
        keep.push("points");
        layerDataReset(this.layer, keep);
    },
    layerShown() { return hasUpgrade('r',41) || player.c.unlocked },          // Returns a bool for if this layer's node should be visible in the tree.
    
    milestones: {
        0: {
            requirementDescription: "100 Installed Parts",
            effectDescription: "Complete Thruster 2",
            done() { return player.st2.points.gte(100) }
        },
    }, 

    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.sb.points) + ' Completed Parts' },
            ],
        "blank",
        "milestones",
    ],

    branches: [['sb', '#89a39b', 100]],
})
addLayer("sw1", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    position: 0,
    symbol: "W1",
    color: "#89a39b",                       // The color for this layer, which affects many elements.
    resource: "",            // The name of this layer's main prestige resource.
    row: 5,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.c.parts },  // A function to return the current amount of baseResource.
    canBuyMax() { return true},
    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.41,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    doReset(resettingLayer) {
        let keep = [];
        keep.push("points");
        layerDataReset(this.layer, keep);
    },
    layerShown() { return hasUpgrade('r',41) || player.c.unlocked },          // Returns a bool for if this layer's node should be visible in the tree.

    milestones: {
        0: {
            requirementDescription: "100 Installed Parts",
            effectDescription: "Complete Wing 1",
            done() { return player.sw1.points.gte(100) }
        },
    }, 

    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.sb.points) + ' Completed Parts' },
            ],
        "blank",
        "milestones",
    ],

    branches: [['sb', '#89a39b', 100]],
})
addLayer("sw2", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    position: 2,
    symbol: "W2",
    color: "#89a39b",                       // The color for this layer, which affects many elements.
    resource: "",            // The name of this layer's main prestige resource.
    row: 5,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.c.parts },  // A function to return the current amount of baseResource.
    canBuyMax() { return true},
    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.41,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },

    layerShown() { return hasUpgrade('r',41) || player.c.unlocked},          // Returns a bool for if this layer's node should be visible in the tree.
    doReset(resettingLayer) {
        let keep = [];
        keep.push("points");
        layerDataReset(this.layer, keep);
    },
    milestones: {
        0: {
            requirementDescription: "100 Installed Parts",
            effectDescription: "Complete Wing 2",
            done() { return player.sw2.points.gte(100) }
        },
    }, 

    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.sb.points) + ' Completed Parts' },
            ],
        "blank",
        "milestones",
    ],

    branches: [['sb', '#89a39b', 100]],
})
addLayer("sc", {
    startData() { return {                  // startData is a function that returns default data for a layer. 
        unlocked: true,                     // You can add more variables here to add them to your layer.
        points: new Decimal(0),             // "points" is the internal name for the main resource of the layer.
    }},
    symbol: "C",
    color: "#89a39b",                       // The color for this layer, which affects many elements.
    resource: "",            // The name of this layer's main prestige resource.
    row: 7,                                 // The row this layer is on (0 is the first row).

    baseResource: "points",                 // The name of the resource your prestige gain is based on.
    baseAmount() { return player.c.parts },  // A function to return the current amount of baseResource.
    canBuyMax() { return true},
    requires: new Decimal(10),              // The amount of the base needed to  gain 1 of the prestige currency.
                                            // Also the amount required to unlock the layer.

    type: "static",                         // Determines the formula used for calculating prestige currency.
    exponent: 0.41,                          // "normal" prestige gain is (currency^exponent).

    gainMult() {                            // Returns your multiplier to your gain of the prestige resource.
        return new Decimal(1)               // Factor in any bonuses multiplying gain here.
    },
    gainExp() {                             // Returns the exponent to your gain of the prestige resource.
        return new Decimal(1)
    },
    doReset(resettingLayer) {
        let keep = [];
        keep.push("points");
        layerDataReset(this.layer, keep);
    },
    layerShown() { return hasUpgrade('r',41) || player.c.unlocked },          // Returns a bool for if this layer's node should be visible in the tree.

    milestones: {
        0: {
            requirementDescription: "100 Installed Parts",
            effectDescription: "Complete The Cockpit",
            done() { return player.sc.points.gte(100) }
        },
    }, 

    tabFormat: [
        "main-display",
        "prestige-button",
        "blank",
        ["display-text",
            function() { return 'You have ' + format(player.sb.points) + ' Completed Parts' },
            ],
        "blank",
        "milestones",
    ],

    branches: [['sb', '#89a39b', 100]],
})
