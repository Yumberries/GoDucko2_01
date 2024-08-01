namespace SpriteKind {
    export const Mythic_Weapon = SpriteKind.create()
    export const StatusBar = SpriteKind.create()
}
/**
 * Add 4 status bars at bottom right of screen all red with the selected weapons corrosponding one green
 */
/**
 * Add 4 Black outlines of the weapons. When one is gotten, color it. Serves as knowing what item is in use.
 */
/**
 * COUNTDOWN END:
 * 
 * Destroy bricks
 */
info.onCountdownEnd(function () {
    for (let value of tiles.getTilesByType(assets.tile`myTile16`)) {
        tiles.setTileAt(value, assets.tile`transparency16`)
        tiles.setWallAt(value, false)
    }
})
/**
 * TOUCH BOMB:
 * 
 * Kills player
 * 
 * Player placement
 */
sprites.onOverlap(SpriteKind.Player, SpriteKind.Mythic_Weapon, function (sprite, otherSprite) {
    if (Is_Invincible == false) {
        sprites.destroy(otherSprite)
        tiles.placeOnRandomTile(sprite, assets.tile`myTile5`)
    }
})
/**
 * A PRESSED:
 * 
 * throw weapons
 * 
 * uses function "Throw Weapon"
 */
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Held_Weapon == 0) {
        Throw_Weapon(0, mySprite)
    } else if (Held_Weapon == 1) {
        Throw_Weapon(1, mySprite)
    } else if (Held_Weapon == 2) {
        Throw_Weapon(2, mySprite)
    } else if (Held_Weapon == 3) {
        Throw_Weapon(3, mySprite)
    }
})
/**
 * THROW WEAPON FUNCTION:
 * 
 * Throw knife
 * 
 * Throw Ninja Star
 * 
 * Throw magic
 * 
 * Place Bomb
 * 
 * (Timer Blocks Used)
 */
function Throw_Weapon (Selected: number, From: Sprite) {
    if (Held_Weapon == 0 && Facing_Right == true) {
        timer.throttle("Throw Knife", 200, function () {
            Knifee = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . f . . . . . . . . . . . 
                . . . f f f f f f f f f f f f . 
                f f f f f b b b b b b b b b b f 
                . . . f f f f f f f f f f f f . 
                . . . . f . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, From, 250, 0)
        })
    } else if (Held_Weapon == 0 && Facing_Left == true) {
        timer.throttle("Throw Knife", 200, function () {
            Knifee = sprites.createProjectileFromSprite(img`
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . f . . . . 
                . f f f f f f f f f f f f . . . 
                f b b b b b b b b b b f f f f f 
                . f f f f f f f f f f f f . . . 
                . . . . . . . . . . . f . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . 
                `, From, -250, 0)
        })
    } else if (Held_Weapon == 1 && Facing_Right == true) {
        timer.throttle("Throw Ninja", 100, function () {
            Sharp_Spinny_wepon = sprites.createProjectileFromSprite(img`
                . . . 9 . . . . . . . . . . 
                . . . 9 . . . . . . . . . . 
                . . . 9 . . . 9 9 9 9 . . . 
                . . 9 6 8 . 9 6 6 6 6 9 9 9 
                . . 9 6 8 8 8 8 8 8 8 . . . 
                . . 9 6 8 8 f f 8 8 . . . . 
                . . 9 6 8 f . . f 8 9 . . . 
                . . . 9 8 f . . f 8 6 9 . . 
                . . . . 8 8 f f 8 8 6 9 . . 
                . . . 8 8 8 8 8 8 8 6 9 . . 
                9 9 9 6 6 6 6 9 . 8 6 9 . . 
                . . . 9 9 9 9 . . . 9 . . . 
                . . . . . . . . . . 9 . . . 
                . . . . . . . . . . 9 . . . 
                `, From, 300, 0)
        })
    } else if (Held_Weapon == 1 && Facing_Left == true) {
        timer.throttle("Throw Ninja", 100, function () {
            Sharp_Spinny_wepon = sprites.createProjectileFromSprite(img`
                . . . 9 . . . . . . . . . . 
                . . . 9 . . . . . . . . . . 
                . . . 9 . . . 9 9 9 9 . . . 
                . . 9 6 8 . 9 6 6 6 6 9 9 9 
                . . 9 6 8 8 8 8 8 8 8 . . . 
                . . 9 6 8 8 f f 8 8 . . . . 
                . . 9 6 8 f . . f 8 9 . . . 
                . . . 9 8 f . . f 8 6 9 . . 
                . . . . 8 8 f f 8 8 6 9 . . 
                . . . 8 8 8 8 8 8 8 6 9 . . 
                9 9 9 6 6 6 6 9 . 8 6 9 . . 
                . . . 9 9 9 9 . . . 9 . . . 
                . . . . . . . . . . 9 . . . 
                . . . . . . . . . . 9 . . . 
                `, From, -300, 0)
        })
    } else if (Held_Weapon == 2 && Facing_Right == true) {
        donut_gun = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . 9 9 9 9 . . . 
            . . . . . . . 9 9 f f f f 9 . . 
            . . . . 9 9 6 6 f f f f f f 9 . 
            . . 6 6 6 6 f f f f f f f f 9 . 
            . . f f f f f f f f f f f f 9 . 
            . . 6 6 9 9 6 f f f f f f f 9 . 
            . . . . . . 9 9 6 f f f f 9 . . 
            . . . . . . . . . 9 9 9 9 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, From, 500, 0)
    } else if (Held_Weapon == 2 && Facing_Left == true) {
        donut_gun = sprites.createProjectileFromSprite(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . 9 9 9 9 . . . . . . . . . 
            . . 9 f f f f 9 9 . . . . . . . 
            . 9 f f f f f f 6 6 9 9 . . . . 
            . 9 f f f f f f f f 6 6 6 6 . . 
            . 9 f f f f f f f f f f f f . . 
            . 9 f f f f f f f 6 9 9 6 6 . . 
            . . 9 f f f f 6 9 9 . . . . . . 
            . . . 9 9 9 9 . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, From, -500, 0)
    } else if (Held_Weapon == 3 && Facing_Left == true) {
        timer.throttle("place bomb", 1500, function () {
            mySprite2 = sprites.create(img`
                8 9 9 8 
                9 5 1 9 
                9 5 5 9 
                8 9 9 8 
                `, SpriteKind.Mythic_Weapon)
            mySprite2.setPosition(mySprite.x, mySprite.y + 9)
            Is_Invincible = true
            timer.after(1000, function () {
                Is_Invincible = false
            })
        })
    }
}
/**
 * RIGHT PRESSSED:
 * 
 * Facing Right=true
 * 
 * Facing Left=false
 */
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Facing_Right = true
    Facing_Left = false
})
/**
 * LEFT PRESSED:
 * 
 * Face left=true
 * 
 * Face right=false
 */
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Facing_Left = true
    Facing_Right = false
})
/**
 * UP PRESSED:
 * 
 * Jumping
 * 
 * Jump Animations
 * 
 * Double Jumping
 */
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Is_Jumping == false && Is_DoubleJumping == false) {
        Is_Jumping = true
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 4 b 
            b d d c d 5 5 b 5 4 4 4 4 4 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `],
        80,
        false
        )
        mySprite.vy = 0
        mySprite.vy += -160
    } else if (Is_Jumping == true && Is_DoubleJumping == false) {
        Is_Jumping = true
        Is_DoubleJumping = true
        animation.runImageAnimation(
        mySprite,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . b 5 5 b . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 b . 
            b d d c d 5 5 b 5 4 4 4 4 4 4 b 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . b b b b b 5 5 5 5 5 5 5 b . . 
            . b d 5 b 5 5 5 5 5 5 5 5 b . . 
            . . b 5 5 b 5 d 1 f 5 d 4 f . . 
            . . b d 5 5 b 1 f f 5 4 4 c . . 
            b b d b 5 5 5 d f b 4 4 4 4 4 b 
            b d d c d 5 5 b 5 4 4 4 4 4 b . 
            c d d d c c b 5 5 5 5 5 5 5 b . 
            c b d d d d d 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . . . . b c . . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            b d d d b b d 5 5 5 4 4 4 4 4 b 
            b b d 5 5 5 b 5 5 4 4 4 4 4 b . 
            b d c 5 5 5 5 d 5 5 5 5 5 b . . 
            c d d c d 5 5 b 5 5 5 5 5 5 b . 
            c b d d c c b 5 5 5 5 5 5 5 b . 
            . c d d d d d d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . . b d d 5 5 5 5 5 5 5 5 b . . 
            . b d d d d 5 5 5 5 5 5 5 5 b . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            . b 5 5 b c d d 5 5 5 5 5 d b . 
            b b c c c d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 d 4 c . . 
            . . . . b 5 5 1 f f d d 4 4 4 b 
            . . . . b 5 5 d f b 4 4 4 4 b . 
            . . . b d 5 5 5 5 4 4 4 4 b . . 
            . b b d d d 5 5 5 5 5 5 5 b . . 
            b d d d b b b 5 5 5 5 5 5 5 b . 
            c d d b 5 5 d c 5 5 5 5 5 5 b . 
            c b b d 5 d c d 5 5 5 5 5 5 b . 
            c b 5 5 b c d d 5 5 5 5 5 5 b . 
            b b c c c d d d 5 5 5 5 5 d b . 
            . . . . c c d d d 5 5 5 b b . . 
            . . . . . . c c c c c b b . . . 
            `,img`
            . . . . . . . . . . b 5 b . . . 
            . . . . . . . . . b 5 b . . . . 
            . . . . . . b b b b b b . . . . 
            . . . . . b b 5 5 5 5 5 b . . . 
            . . . . b b 5 d 1 f 5 5 d f . . 
            . . . . b 5 5 1 f f 5 d 4 c . . 
            . . . . b 5 5 d f b d d 4 4 . . 
            . b b b d 5 5 5 5 5 4 4 4 4 4 b 
            b d d d b b d 5 5 4 4 4 4 4 b . 
            b b d 5 5 5 b 5 5 5 5 5 5 b . . 
            c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
            c b d c d 5 5 b 5 5 5 5 5 5 b . 
            . c d d c c b d 5 5 5 5 5 d b . 
            . . c b d d d d d 5 5 5 b b . . 
            . . . c c c c c c c c b b . . . 
            . . . . . . . . . . . . . . . . 
            `],
        80,
        false
        )
        mySprite.vy = 0
        mySprite.vy += -160
    }
})
/**
 * DOWN PRESSED:
 * 
 * changes held weapon
 */
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Held_Weapon == 0) {
        Held_Weapon = 1
    } else if (Held_Weapon == 1) {
        Held_Weapon = 2
    } else if (Held_Weapon == 2) {
        Held_Weapon = 3
    } else if (Held_Weapon == 3) {
        Held_Weapon = 0
    } else {
    	
    }
})
/**
 * START:
 * 
 * Movement
 * 
 * Tilemap
 * 
 * Camera
 * 
 * Start Placement
 * 
 * Backround
 * 
 * Starting Countdown
 * 
 * Held Weapon select
 * 
 * Invincibility
 */
let Is_DoubleJumping = false
let Is_Jumping = false
let mySprite2: Sprite = null
let donut_gun: Sprite = null
let Sharp_Spinny_wepon: Sprite = null
let Knifee: Sprite = null
let Facing_Left = false
let Facing_Right = false
let Is_Invincible = false
let Held_Weapon = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . b 5 b . . . 
    . . . . . . . . . b 5 b . . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . . . . b b 5 d 1 f 5 5 d f . . 
    . . . . b 5 5 1 f f 5 d 4 c . . 
    . . . . b 5 5 d f b d d 4 4 . . 
    . b b b d 5 5 5 5 5 4 4 4 4 4 b 
    b d d d b b d 5 5 4 4 4 4 4 b . 
    b b d 5 5 5 b 5 5 5 5 5 5 b . . 
    c d c 5 5 5 5 d 5 5 5 5 5 5 b . 
    c b d c d 5 5 b 5 5 5 5 5 5 b . 
    . c d d c c b d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 100, 0)
mySprite.ay = 300
tiles.setCurrentTilemap(tilemap`level1`)
scene.cameraFollowSprite(mySprite)
tiles.placeOnRandomTile(mySprite, assets.tile`myTile5`)
scene.setBackgroundImage(img`
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    `)
timer.after(10, function () {
    info.startCountdown(10)
})
Held_Weapon = 0
Is_Invincible = false
/**
 * GAME UPDATE:
 * 
 * Detect not jumping
 * 
 * stopped(changes facing left/right to false)
 */
game.onUpdateInterval(100, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        Is_Jumping = false
        Is_DoubleJumping = false
    }
    if ((controller.left.isPressed() || controller.right.isPressed() || controller.up.isPressed()) == false) {
        Facing_Left = false
        Facing_Right = false
    }
})
/**
 * GAME UPDATE:
 * 
 * Flapping animations
 * 
 * Left/right jump animatiosn
 */
game.onUpdateInterval(50, function () {
    if (Facing_Right == true && mySprite.isHittingTile(CollisionDirection.Bottom) == true) {
        timer.throttle("jump", 250, function () {
            animation.runImageAnimation(
            mySprite,
            [img`
                ..................
                ..................
                ..................
                ...........b5b....
                ..........b5b.....
                .......bbbbbb.....
                ......bb55555b....
                .....bb5d1f55df...
                .....b551ff5d4c...
                bb...b55dfbdd44...
                bbbbbd5555544444b.
                .bdddbbd5544444b..
                .bbd555b555555b...
                .cdc5555d555555b..
                .cbdcd55b555555b..
                ..cddccbd55555db..
                ...cbddddd555bb...
                ....ccccccccbb....
                `,img`
                ..................
                ...........b5b....
                ..........b5b.....
                .......bbbbbb.....
                ......bb55555b....
                .....bb5d1f55df...
                .....b551ff5d4c...
                bb...b55dfbdd44...
                bbbbbd55555444444.
                .bdddbbd5544444bb.
                .bbd555b555555b...
                .cdc5555d555555b..
                .cbdcd55b555555b..
                ..cddccbd55555db..
                ...cbddddd555bb...
                ....ccccccccbb....
                ..................
                a.................
                `,img`
                ............b5b...
                ...........b5b....
                ........bbbbbb....
                .......bb55555b...
                ......bb5d1f55df..
                ......b551ff5d4c..
                .bb...b55dfbdd44..
                .bbbbbd55555444444
                ..bdddbbd5544444bb
                ..bbd555b555555b..
                ..cdc5555d555555b.
                ..cbdcd55b555555b.
                ...cddccbd55555db.
                ....cbddddd555bb..
                .....ccccccccbb...
                ..................
                ..................
                a.................
                `,img`
                ..................
                ............b5b...
                ...........b5b....
                ........bbbbbb....
                .......bb55555b...
                ......bb5d1f55df..
                ......b551ff5d4c..
                .bb...b55dfbdd44..
                .bbbbbd5555544444b
                ..bdddbbd5544444b.
                ..bbd555b555555b..
                ..cdc5555d555555b.
                ..cbdcd55b555555b.
                ...cddccbd55555db.
                ....cbddddd555bb..
                .....ccccccccbb...
                ..................
                a.................
                `,img`
                ..................
                ..................
                ..................
                ...........b5b....
                ..........b5b.....
                .......bbbbbb.....
                ......bb55555b....
                .....bb5d1f55df...
                .....b551ff5d4c...
                bb...b55dfbdd44...
                bbbbbd5555544444b.
                .bdddbbd5544444b..
                .bbd555b555555b...
                .cdc5555d555555b..
                .cbdcd55b555555b..
                ..cddccbd55555db..
                ...cbddddd555bb...
                ....ccccccccbb....
                `],
            80,
            false
            )
        })
    } else if (Facing_Left == true && mySprite.isHittingTile(CollisionDirection.Bottom) == true) {
        timer.throttle("jump", 250, function () {
            animation.runImageAnimation(
            mySprite,
            [img`
                ..................
                ..................
                ..................
                ....b5b...........
                .....b5b..........
                .....bbbbbb.......
                ....b55555bb......
                ...fd55f1d5bb.....
                ...c4d5ff155b.....
                ...44ddbfd55b...bb
                .b4444455555dbbbbb
                ..b4444455dbbdddb.
                ...b555555b555dbb.
                ..b555555d5555cdc.
                ..b555555b555cdbc.
                ..b555555dbccddc..
                ...bb555dddddbc...
                ....bbcccccccc....
                `,img`
                ..................
                ....b5b...........
                .....b5b..........
                .....bbbbbb.......
                ....b55555bb......
                ...fd55f1d5bb.....
                ...c4d5ff155b.....
                ...44ddbfd55b...bb
                .b4444455555dbbbbb
                ..b4444455dbbdddb.
                ...b555555b555dbb.
                ..b555555d5555cdc.
                ..b555555b555cdbc.
                ..b555555dbccddc..
                ...bb555dddddbc...
                ....bbcccccccc....
                ..................
                .................a
                `,img`
                ...b5b............
                ....b5b...........
                ....bbbbbb........
                ...b55555bb.......
                ..fd55f1d5bb......
                ..c4d5ff155b......
                ..44ddbfd55b...bb.
                44444455555dbbbbb.
                bb4444455dbbdddb..
                ..b555555b555dbb..
                .b555555d5555cdc..
                .b555555b555cdbc..
                .b555555dbccddc...
                ..bb555dddddbc....
                ...bbcccccccc.....
                ..................
                ..................
                .................a
                `,img`
                ..................
                ...b5b............
                ....b5b...........
                ....bbbbbb........
                ...b55555bb.......
                ..fd55f1d5bb......
                ..c4d5ff155b......
                ..44ddbfd55b...bb.
                b4444455555dbbbbb.
                .b4444455dbbdddb..
                ..b555555b555dbb..
                .b555555d5555cdc..
                .b555555b555cdbc..
                .b555555dbccddc...
                ..bb555dddddbc....
                ...bbcccccccc.....
                ..................
                .................a
                `,img`
                ..................
                ..................
                ..................
                ...b5b............
                ....b5b...........
                ....bbbbbb........
                ...b55555bb.......
                ..fd55f1d5bb......
                ..c4d5ff155b......
                ..44ddbfd55b...bb.
                b4444455555dbbbbb.
                .b4444455dbbdddb..
                ..b555555b555dbb..
                .b555555d5555cdc..
                .b555555b555cdbc..
                .b555555dbccddc...
                ..bb555dddddbc....
                ...bbcccccccc.....
                `],
            80,
            false
            )
        })
    } else if (Facing_Right == true && mySprite.isHittingTile(CollisionDirection.Bottom) == false) {
        timer.throttle("Flap", 250, function () {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . b 5 5 b . . . . . 
                . . . . . . b b b b b b . . . . . . 
                . . . . . b b 5 5 5 5 5 b . . . . . 
                . b b b b b 5 5 5 5 5 5 5 b . . . . 
                . b d 5 b 5 5 5 5 5 5 5 5 b . . . . 
                . . b 5 5 b 5 d 1 f 5 d 4 f . . . . 
                . . b d 5 5 b 1 f f 5 4 4 c . . . . 
                b b d b 5 5 5 d f b 4 4 4 4 b . . . 
                b d d c d 5 5 b 5 4 4 4 4 4 4 b . . 
                c d d d c c b 5 5 5 5 5 5 5 b . . . 
                c b d d d d d 5 5 5 5 5 5 5 b . . . 
                . c d d d d d d 5 5 5 5 5 d b . . . 
                . . c b d d d d d 5 5 5 b b . . . . 
                . . . c c c c c c c c b b . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . b 5 b . . . . . 
                . . . . . . . . . b 5 b . . . . . . 
                . . . . . . b b b b b b . . . . . . 
                . . . . . b b 5 5 5 5 5 b . . . . . 
                . b b b b b 5 5 5 5 5 5 5 b . . . . 
                . b d 5 b 5 5 5 5 5 5 5 5 b . . . . 
                . . b 5 5 b 5 d 1 f 5 d 4 f . . . . 
                . . b d 5 5 b 1 f f 5 4 4 c . . . . 
                b b d b 5 5 5 d f b 4 4 4 4 4 b . . 
                b d d c d 5 5 b 5 4 4 4 4 4 b . . . 
                c d d d c c b 5 5 5 5 5 5 5 b . . . 
                c b d d d d d 5 5 5 5 5 5 5 b . . . 
                . c d d d d d d 5 5 5 5 5 d b . . . 
                . . c b d d d d d 5 5 5 b b . . . . 
                . . . c c c c c c c c b b . . . . . 
                `,img`
                . . . . . . . . . . b 5 b . . . . . 
                . . . . . . . . . b 5 b . . . . . . 
                . . . . . . . . . b c . . . . . . . 
                . . . . . . b b b b b b . . . . . . 
                . . . . . b b 5 5 5 5 5 b . . . . . 
                . . . . b b 5 d 1 f 5 5 d f . . . . 
                . . . . b 5 5 1 f f 5 d 4 c . . . . 
                . . . . b 5 5 d f b d d 4 4 . . . . 
                b d d d b b d 5 5 5 4 4 4 4 4 b . . 
                b b d 5 5 5 b 5 5 4 4 4 4 4 b . . . 
                b d c 5 5 5 5 d 5 5 5 5 5 b . . . . 
                c d d c d 5 5 b 5 5 5 5 5 5 b . . . 
                c b d d c c b 5 5 5 5 5 5 5 b . . . 
                . c d d d d d d 5 5 5 5 5 d b . . . 
                . . c b d d d d d 5 5 5 b b . . . . 
                . . . c c c c c c c c b b . . . . . 
                `,img`
                . . . . . . . . . . b 5 b . . . . . 
                . . . . . . . . . b 5 b . . . . . . 
                . . . . . . b b b b b b . . . . . . 
                . . . . . b b 5 5 5 5 5 b . . . . . 
                . . . . b b 5 d 1 f 5 d 4 c . . . . 
                . . . . b 5 5 1 f f d d 4 4 4 b . . 
                . . . . b 5 5 d f b 4 4 4 4 b . . . 
                . . . b d 5 5 5 5 4 4 4 4 b . . . . 
                . . b d d 5 5 5 5 5 5 5 5 b . . . . 
                . b d d d d 5 5 5 5 5 5 5 5 b . . . 
                b d d d b b b 5 5 5 5 5 5 5 b . . . 
                c d d b 5 5 d c 5 5 5 5 5 5 b . . . 
                c b b d 5 d c d 5 5 5 5 5 5 b . . . 
                . b 5 5 b c d d 5 5 5 5 5 d b . . . 
                b b c c c d d d d 5 5 5 b b . . . . 
                . . . c c c c c c c c b b . . . . . 
                `,img`
                . . . . . . . . . . b 5 b . . . . . 
                . . . . . . . . . b 5 b . . . . . . 
                . . . . . . b b b b b b . . . . . . 
                . . . . . b b 5 5 5 5 5 b . . . . . 
                . . . . b b 5 d 1 f 5 d 4 c . . . . 
                . . . . b 5 5 1 f f d d 4 4 4 b . . 
                . . . . b 5 5 d f b 4 4 4 4 b . . . 
                . . . b d 5 5 5 5 4 4 4 4 b . . . . 
                . b b d d d 5 5 5 5 5 5 5 b . . . . 
                b d d d b b b 5 5 5 5 5 5 5 b . . . 
                c d d b 5 5 d c 5 5 5 5 5 5 b . . . 
                c b b d 5 d c d 5 5 5 5 5 5 b . . . 
                c b 5 5 b c d d 5 5 5 5 5 5 b . . . 
                b b c c c d d d 5 5 5 5 5 d b . . . 
                . . . . c c d d d 5 5 5 b b . . . . 
                . . . . . . c c c c c b b . . . . . 
                `,img`
                . . . . . . . . . . b 5 b . . . . . 
                . . . . . . . . . b 5 b . . . . . . 
                . . . . . . b b b b b b . . . . . . 
                . . . . . b b 5 5 5 5 5 b . . . . . 
                . . . . b b 5 d 1 f 5 5 d f . . . . 
                . . . . b 5 5 1 f f 5 d 4 c . . . . 
                . . . . b 5 5 d f b d d 4 4 . . . . 
                . b b b d 5 5 5 5 5 4 4 4 4 4 b . . 
                b d d d b b d 5 5 4 4 4 4 4 b . . . 
                b b d 5 5 5 b 5 5 5 5 5 5 b . . . . 
                c d c 5 5 5 5 d 5 5 5 5 5 5 b . . . 
                c b d c d 5 5 b 5 5 5 5 5 5 b . . . 
                . c d d c c b d 5 5 5 5 5 d b . . . 
                . . c b d d d d d 5 5 5 b b . . . . 
                . . . c c c c c c c c b b . . . . . 
                . . . . . . . . . . . . . . . . . . 
                `,img`
                . . . . . . . . . . . b 5 b . . . . 
                . . . . . . . . . . b 5 b . . . . . 
                . . . . . . . . . . b c . . . . . . 
                . . . . . . . b b b b b b . . . . . 
                . . . . . . b b 5 5 5 5 5 b . . . . 
                . . . . . b b 5 d 1 f 5 5 d f . . . 
                . . . . . b 5 5 1 f f 5 d 4 c . . . 
                b b . . . b 5 5 d f b d d 4 4 . . . 
                b b d d d b b d 5 5 5 4 4 4 4 4 b . 
                . b b d 5 5 5 b 5 5 4 4 4 4 4 b . . 
                . b d c 5 5 5 5 d 5 5 5 5 5 b . . . 
                . c d d c d 5 5 b 5 5 5 5 5 5 b . . 
                . c b d d c c b 5 5 5 5 5 5 5 b . . 
                . . c d d d d d d 5 5 5 5 5 d b . . 
                . . . c b d d d d d 5 5 5 b b . . . 
                . . . . c c c c c c c c b b . . . . 
                `],
            80,
            false
            )
        })
    } else if (Facing_Left == true && mySprite.isHittingTile(CollisionDirection.Bottom) == false) {
        timer.throttle("Flap", 250, function () {
            animation.runImageAnimation(
            mySprite,
            [img`
                . . . . . . . . . . . . . . . . . . 
                . . . . . . . . . . . . . . . . . . 
                . . . b 5 5 b . . . . . . . . . . . 
                . . . . b b b b b b . . . . . . . . 
                . . . b 5 5 5 5 5 b b . . . . . . . 
                . . b 5 5 5 5 5 5 5 b b b b b . . . 
                . . b 5 5 5 5 5 5 5 5 b 5 d b . . . 
                . . f 4 d 5 f 1 d 5 b 5 5 b . . . . 
                . . c 4 4 5 f f 1 b 5 5 d b . . . . 
                . b 4 4 4 4 b f d 5 5 5 b d b b . . 
                b 4 4 4 4 4 4 5 b 5 5 d c d d b . . 
                . b 5 5 5 5 5 5 5 b c c d d d c . . 
                . b 5 5 5 5 5 5 5 d d d d d b c . . 
                . b d 5 5 5 5 5 d d d d d d c . . . 
                . . b b 5 5 5 d d d d d b c . . . . 
                . . . b b c c c c c c c c . . . . . 
                `,img`
                . . . . . . . . . . . . . . . . . . 
                . . . b 5 b . . . . . . . . . . . . 
                . . . . b 5 b . . . . . . . . . . . 
                . . . . b b b b b b . . . . . . . . 
                . . . b 5 5 5 5 5 b b . . . . . . . 
                . . b 5 5 5 5 5 5 5 b b b b b . . . 
                . . b 5 5 5 5 5 5 5 5 b 5 d b . . . 
                . . f 4 d 5 f 1 d 5 b 5 5 b . . . . 
                . . c 4 4 5 f f 1 b 5 5 d b . . . . 
                b 4 4 4 4 4 b f d 5 5 5 b d b b . . 
                . b 4 4 4 4 4 5 b 5 5 d c d d b . . 
                . b 5 5 5 5 5 5 5 b c c d d d c . . 
                . b 5 5 5 5 5 5 5 d d d d d b c . . 
                . b d 5 5 5 5 5 d d d d d d c . . . 
                . . b b 5 5 5 d d d d d b c . . . . 
                . . . b b c c c c c c c c . . . . . 
                `,img`
                . . . b 5 b . . . . . . . . . . . . 
                . . . . b 5 b . . . . . . . . . . . 
                . . . . . c b . . . . . . . . . . . 
                . . . . b b b b b b . . . . . . . . 
                . . . b 5 5 5 5 5 b b . . . . . . . 
                . . f d 5 5 f 1 d 5 b b . . . . . . 
                . . c 4 d 5 f f 1 5 5 b . . . . . . 
                . . 4 4 d d b f d 5 5 b . . . . . . 
                b 4 4 4 4 4 5 5 5 d b b d d d b . . 
                . b 4 4 4 4 4 5 5 b 5 5 5 d b b . . 
                . . b 5 5 5 5 5 d 5 5 5 5 c d b . . 
                . b 5 5 5 5 5 5 b 5 5 d c d d c . . 
                . b 5 5 5 5 5 5 5 b c c d d b c . . 
                . b d 5 5 5 5 5 d d d d d d c . . . 
                . . b b 5 5 5 d d d d d b c . . . . 
                . . . b b c c c c c c c c . . . . . 
                `,img`
                . . . b 5 b . . . . . . . . . . . . 
                . . . . b 5 b . . . . . . . . . . . 
                . . . . b b b b b b . . . . . . . . 
                . . . b 5 5 5 5 5 b b . . . . . . . 
                . . c 4 d 5 f 1 d 5 b b . . . . . . 
                b 4 4 4 d d f f 1 5 5 b . . . . . . 
                . b 4 4 4 4 b f d 5 5 b . . . . . . 
                . . b 4 4 4 4 5 5 5 5 d b . . . . . 
                . . b 5 5 5 5 5 5 5 5 d d b . . . . 
                . b 5 5 5 5 5 5 5 5 d d d d b . . . 
                . b 5 5 5 5 5 5 5 b b b d d d b . . 
                . b 5 5 5 5 5 5 c d 5 5 b d d c . . 
                . b 5 5 5 5 5 5 d c d 5 d b b c . . 
                . b d 5 5 5 5 5 d d c b 5 5 b . . . 
                . . b b 5 5 5 d d d d c c c b b . . 
                . . . b b c c c c c c c c . . . . . 
                `,img`
                . . . b 5 b . . . . . . . . . . . . 
                . . . . b 5 b . . . . . . . . . . . 
                . . . . b b b b b b . . . . . . . . 
                . . . b 5 5 5 5 5 b b . . . . . . . 
                . . c 4 d 5 f 1 d 5 b b . . . . . . 
                b 4 4 4 d d f f 1 5 5 b . . . . . . 
                . b 4 4 4 4 b f d 5 5 b . . . . . . 
                . . b 4 4 4 4 5 5 5 5 d b . . . . . 
                . . b 5 5 5 5 5 5 5 d d d b b . . . 
                . b 5 5 5 5 5 5 5 b b b d d d b . . 
                . b 5 5 5 5 5 5 c d 5 5 b d d c . . 
                . b 5 5 5 5 5 5 d c d 5 d b b c . . 
                . b 5 5 5 5 5 5 d d c b 5 5 b c . . 
                . b d 5 5 5 5 5 d d d c c c b b . . 
                . . b b 5 5 5 d d d c c . . . . . . 
                . . . b b c c c c c . . . . . . . . 
                `,img`
                . . . b 5 b . . . . . . . . . . . . 
                . . . . b 5 b . . . . . . . . . . . 
                . . . . b b b b b b . . . . . . . . 
                . . . b 5 5 5 5 5 b b . . . . . . . 
                . . f d 5 5 f 1 d 5 b b . . . . . . 
                . . c 4 d 5 f f 1 5 5 b . . . . . . 
                . . 4 4 d d b f d 5 5 b . . . . . . 
                b 4 4 4 4 4 5 5 5 5 5 d b b b . . . 
                . b 4 4 4 4 4 5 5 d b b d d d b . . 
                . . b 5 5 5 5 5 5 b 5 5 5 d b b . . 
                . b 5 5 5 5 5 5 d 5 5 5 5 c d c . . 
                . b 5 5 5 5 5 5 b 5 5 d c d b c . . 
                . b d 5 5 5 5 5 d b c c d d c . . . 
                . . b b 5 5 5 d d d d d b c . . . . 
                . . . b b c c c c c c c c . . . . . 
                . . . . . . . . . . . . . . . . . . 
                `,img`
                . . . . b 5 b . . . . . . . . . . . 
                . . . . . b 5 b . . . . . . . . . . 
                . . . . . . c b . . . . . . . . . . 
                . . . . . b b b b b b . . . . . . . 
                . . . . b 5 5 5 5 5 b b . . . . . . 
                . . . f d 5 5 f 1 d 5 b b . . . . . 
                . . . c 4 d 5 f f 1 5 5 b . . . . . 
                . . . 4 4 d d b f d 5 5 b . . . b b 
                . b 4 4 4 4 4 5 5 5 d b b d d d b b 
                . . b 4 4 4 4 4 5 5 b 5 5 5 d b b . 
                . . . b 5 5 5 5 5 d 5 5 5 5 c d b . 
                . . b 5 5 5 5 5 5 b 5 5 d c d d c . 
                . . b 5 5 5 5 5 5 5 b c c d d b c . 
                . . b d 5 5 5 5 5 d d d d d d c . . 
                . . . b b 5 5 5 d d d d d b c . . . 
                . . . . b b c c c c c c c c . . . . 
                `],
            80,
            false
            )
        })
    }
})
