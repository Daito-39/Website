function Player_Object (name, role, align, hand, maxHealth) {
    this.name = name;
    this.role = role;
    this.align = align;
    this.hand = hand;
    this.board = [];
    this.health = maxHealth;
    this.Max_Health = maxHealth;
    this.range = 1;

    this.onHit = function() {
        this.health--;
        if (this.health <= 0) {
            //Check to use beer card here
            playerDead(this.name);
        }
    }
}

