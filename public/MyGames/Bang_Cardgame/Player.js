function Player_Object (name, role, align, maxHealth) {
    this.name = name,
    this.role = role,
    this.align = align,
    this.maxHealth = maxHealth,
    
    this.health = maxHealth,
    this.hand = [],

    this.weapon = {
        weaponName: "Colt .45",
        shotsPerTurn: 1,
        range: 1
    },
    this.horse = {
        name: "",
        bonus: ""
    },
    this.barrel = false,
    this.jail = false,
    this.dynamite = false,
    this.scope = false,

    this.onHit = function(damage) {
        this.health -= damage;
        if (this.health <= 0) {
            this.hand.forEach(hasBeer);
            playerDead(this.name);
        }
    },

    function hasBeer(value, index) {
        if (value == "beer") {
            this.health++;
            this.hand.splice(index, 1);
            this.hand.forEach(hasBeer);
        }
    }
}