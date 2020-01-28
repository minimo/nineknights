phina.namespace(function() {

  phina.define('Player', {
    superClass: 'Actor',

    mapData: null,
    collisionData: null,
    floorData: null,

    coverData: null,

    init: function() {
      this.superInit({ width: 32, height: 32 });

      this.setShadow();

      this.sprite = Sprite("actor4", 32, 32)
        .setFrameIndex(0)
        .addChildTo(this.base);
    },

    update: function() {
      this.vx = 0;
      this.vy = 0;
      this.isAnimation = false;

      const app = phina_app;
      const ctrl = app.controller;
      let animationName = "";
      if (ctrl.up) {
        this.vy = -2;
      } else if (ctrl.down) {
        this.vy = 2;
      }
      if (ctrl.left) {
        this.vx = -2;
      } else if (ctrl.right) {
        this.vx = 2;
      }

      if (ctrl.attack) {
        if (!this.isAttack) {
          this.isAttack = true;
        }
      }
    },
  });

});
