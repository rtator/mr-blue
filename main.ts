namespace SpriteKind {
    export const house = SpriteKind.create()
    export const bomb = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.vy == 0) {
        if (isfacingright) {
            mySprite.setImage(img`
                . . f f f f f f . . 
                . f f f f f f f f . 
                f f f f f f f f f f 
                f f f f f f d d d d 
                f f f f f d d 1 1 d 
                f f f f d d d 1 8 d 
                f f f d d d d 1 1 d 
                f f d d d d d d d d 
                . f d d d d d d d . 
                . . d d d d d d . . 
                . . . 8 8 8 8 8 . . 
                . . . 8 8 8 8 . . . 
                . . . 8 8 8 8 . . . 
                . . . 8 8 8 8 . . . 
                . . . 8 8 8 8 . . . 
                . . . 8 8 8 8 . . . 
                . . . 8 8 8 8 . . . 
                . . . 8 8 8 8 . . . 
                . . . . 8 8 . . . . 
                . . . . 8 8 . . . . 
                . . . . 8 8 . . . . 
                . . . . 8 8 . . . . 
                . . . . f f . . . . 
                . . . . f f f . . . 
                . . . . f f f . . . 
                `)
        } else if (!(isfacingright)) {
            mySprite.setImage(img`
                . . f f f f f f . . 
                . f f f f f f f f . 
                f f f f f f f f f f 
                d d d d f f f f f f 
                d 1 1 d d f f f f f 
                d 8 1 d d d f f f f 
                d 1 1 d d d d f f f 
                d d d d d d d d f f 
                . d d d d d d d f . 
                . . d d d d d d . . 
                . . . 8 8 8 8 8 . . 
                . . . . 8 8 8 8 . . 
                . . . . 8 8 8 8 . . 
                . . . . 8 8 8 8 . . 
                . . . . 8 8 8 8 . . 
                . . . . 8 8 8 8 . . 
                . . . . 8 8 8 8 . . 
                . . . . 8 8 8 8 . . 
                . . . . . 8 8 . . . 
                . . . . . 8 8 . . . 
                . . . . . 8 8 . . . 
                . . . . . 8 8 . . . 
                . . . . . f f . . . 
                . . . . f f f . . . 
                . . . . f f f . . . 
                `)
        }
        mySprite.vy = -110
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite3 = sprites.create(img`
        . . . . d d d . . 
        . . . . d . 2 . . 
        . . . . d . . . . 
        . f f f f f f f . 
        f f f f f f f f f 
        f f f f f f f f f 
        f f f f f f f f f 
        f f f f f f f f f 
        f f f f f f f f f 
        f f f f f f f f f 
        f f f f f f f f f 
        . f f f f f f f . 
        `, SpriteKind.bomb)
    mySprite3.setPosition(mySprite.x, mySprite.y)
    mySprite3.ay = 200
    pause(2000)
    projectile = sprites.createProjectileFromSprite(img`
        2 2 2 2 
        `, mySprite3, 100, 0)
    projectile = sprites.createProjectileFromSprite(img`
        2 2 2 2 
        `, mySprite3, -100, 0)
    projectile = sprites.createProjectileFromSprite(img`
        2 
        2 
        2 
        2 
        `, mySprite3, 0, -100)
    mySprite3.destroy()
    scene.cameraShake(4, 100)
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . f f f f f f . . 
        . f f f f f f f f . 
        f f f f f f f f f f 
        f f f f f f d d d d 
        f f f f f d d 1 1 d 
        f f f f d d d 1 8 d 
        f f f d d d d 1 1 d 
        f f d d d d d d d d 
        . f d d d d d d d . 
        . . d d d d d d . . 
        . . . 8 8 8 8 8 . . 
        . . . 8 8 8 8 . . . 
        . . . 8 8 8 8 . . . 
        . . . 8 8 8 8 . . . 
        . . . 8 8 8 8 . . . 
        . . . 8 8 8 8 . . . 
        . . . 8 8 8 8 . . . 
        . . . 8 8 8 8 . . . 
        . . . . 8 8 . . . . 
        . . . . 8 8 . . . . 
        . . . . 8 8 . . . . 
        . . . . 8 8 . . . . 
        . . . . f f . . . . 
        . . . . f f f . . . 
        . . . . f f f . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    mySprite.setImage(img`
        . . f f f f f f . . 
        . f f f f f f f f . 
        f f f f f f f f f f 
        d d d d f f f f f f 
        d 1 1 d d f f f f f 
        d 8 1 d d d f f f f 
        d 1 1 d d d d f f f 
        d d d d d d d d f f 
        . d d d d d d d f . 
        . . d d d d d d . . 
        . . . 8 8 8 8 8 . . 
        . . . . 8 8 8 8 . . 
        . . . . 8 8 8 8 . . 
        . . . . 8 8 8 8 . . 
        . . . . 8 8 8 8 . . 
        . . . . 8 8 8 8 . . 
        . . . . 8 8 8 8 . . 
        . . . . 8 8 8 8 . . 
        . . . . . 8 8 . . . 
        . . . . . 8 8 . . . 
        . . . . . 8 8 . . . 
        . . . . . 8 8 . . . 
        . . . . . f f . . . 
        . . . . f f f . . . 
        . . . . f f f . . . 
        `)
})
sprites.onOverlap(SpriteKind.house, SpriteKind.house, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(otherSprite, myTiles.tile1)
})
let projectile: Sprite = null
let mySprite3: Sprite = null
let mySprite: Sprite = null
let isfacingright = false
let mySprite2: Sprite = null
tiles.setTilemap(tiles.createTilemap(hex`190008000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000200000000000200000000000200000000000000000000000000000000000000000000000000000000000001010101010101010101010101010101010101010101010101`, img`
    . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . . . . . . . . . . 
    2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
    `, [myTiles.transparency16,sprites.castle.tilePath5,myTiles.tile1], TileScale.Sixteen))
for (let index = 0; index < 4; index++) {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . . . . . . . . . . 8 a 8 a a 8 a 8 . . . . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . . a a a 8 8 8 a a 8 a 8 a a a . . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . a a a 8 a a 8 a 8 a a 8 8 8 a a 8 a a a . . . . . . . . . . . . . . 
        . . . . . . . . . . . 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 . . . . . . . . . . . 
        . . . . . . . . 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 . . . . . . . . 
        . . . . . a a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a a . . . . . 
        . . . a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a . . . 
        d c c a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a c c d 
        b c b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b c b 
        d b b a a 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 a a b b d 
        d b b a a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a 8 a a 8 a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a a b b d 
        d c c a a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a a c c d 
        b c b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b c b 
        d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d 
        d b b a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a b b d 
        d c c a a 8 a a 8 a a 8 a a 8 a a 8 8 8 8 a 8 a a 8 a 8 8 8 8 a a 8 a a 8 a a 8 a a 8 a a c c d 
        b c b a a 8 8 8 8 a a 8 a a 8 8 8 8 a a 8 8 8 a a 8 8 8 a a 8 8 8 8 a a 8 a a 8 8 8 8 a a b c b 
        d b b a a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 8 8 8 a a 8 a a 8 a a b b d 
        d b b 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 b b d 
        d c c a a 8 a a 8 8 8 8 a a 8 a a 8 a a 8 a 8 a a 8 a 8 a a 8 a a 8 a a 8 8 8 8 a a 8 a a c c d 
        b c b a a 8 a a 8 a a 8 a a 8 a a 8 a a 8 8 8 a a 8 8 8 a a 8 a a 8 a a 8 a a 8 a a 8 a a b c b 
        d b b a a 8 8 8 8 a a 8 a a 8 a a 8 8 8 c c b b b b c c 8 8 8 a a 8 a a 8 a a 8 8 8 8 a a b b d 
        d b b a a 8 a a 8 a a 8 a a 8 8 8 c c b b b b b b b b b b c c 8 8 8 a a 8 a a 8 a a 8 a a b b d 
        d c c 8 8 8 a a 8 a a 8 8 8 c c b b b b b c c c c c c b b b b b c c 8 8 8 a a 8 a a 8 8 8 c c d 
        b c b a a 8 a a 8 8 8 c c b b b b b c c b d d d d d d b c c b b b b b c c 8 8 8 a a 8 a a b c b 
        d b b a a 8 a a c c b b b b b c c b d d d d d d d d d d d d b c c b b b b b c c a a 8 a a b b d 
        d b b a a c c b b b b c c c b d d d d d d d d d d d d d d d d d d b c c c b b b b c c a a b b d 
        d c c c b b b b c c c b d d d b c c b b b b b b b b b b b b c c b d d d b c c c b b b b c c c d 
        c c c c c c c c b b b b b b b c b d d d d d d d d d d d d d d b c b b b b b b b c c c c c c c c 
        b d d d d d d d d d d d d b c d d d d d d d d d d d d d d d d d d c b d d d d d d d d d d d d b 
        b b c b d d d d d d d d d c b d 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 d b c d d d d d d d d d b c b b 
        b b b c c c c c c c c c c c d 1 b b b b b b b b b b b b b b b b 1 d c c c c c c c c c c c b b b 
        b b b b d d d d d d d d d c 1 1 b e e e e e e e e e e e e e e b 1 1 c d d d d d d d d d b b b b 
        b b b 8 a a a a a a a 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 a a a a a a a 8 b b b 
        b b b 8 8 8 8 8 8 8 8 8 d c 1 b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b 1 c d 8 8 8 8 8 8 8 8 8 b b b 
        b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 b 3 e f f f f f f e 3 3 b e b b c d 8 3 3 3 3 3 3 3 8 b b b 
        b b b 8 3 f f 3 f f 3 8 d c b b f 3 b f f f f f f f f f f 3 b e b b c d 8 3 f f 3 f f 3 8 b b b 
        b b b 8 3 c c 3 c c 3 8 d c b b f 3 e f f f f f f f f f f e b e b b c d 8 3 c c 3 c c 3 8 b b b 
        b b b 8 3 3 3 3 3 3 3 8 d c b b f 3 e e e e e e e e e e e e b e b b c d 8 3 3 3 3 3 3 3 8 b b b 
        c b b 8 3 f f 3 f f 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 f f 3 f f 3 8 b b c 
        c b b 8 3 c c 3 c c 3 8 d c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d 8 3 c c 3 c c 3 8 b b c 
        c c b b b b b b b b b b d c b b e 3 b 3 3 b 3 3 b 3 3 f e e e e b b c d b b b b b b b b b b c c 
        . c b b d d d d d d d d d c b b e 3 b 3 3 b 3 3 b 3 3 f f f f e b b c d d d d d d d d d b b c . 
        . . c b d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 f 3 3 f e b b c d b b b d b b b d b c . . 
        . . . c d b b b d b b b d c b b f 3 b 3 3 b 3 3 b 3 3 b f f e e b b c d b b b d b b b d c . . . 
        . . . . b d d d d d d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d d d d d d b . . . . 
        . . . . . b d b b b d d d c b b f 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c d d d b b b d b . . . . . 
        . . . . . . b c c c b b b c b b e 3 b 3 3 b 3 3 b 3 3 b 3 3 b e b b c b b b c c c b . . . . . . 
        `, SpriteKind.house)
    tiles.placeOnRandomTile(mySprite2, myTiles.tile1)
}
isfacingright = true
mySprite = sprites.create(img`
    . . f f f f f f . . 
    . f f f f f f f f . 
    f f f f f f f f f f 
    f f f f f f d d d d 
    f f f f f d d 1 1 d 
    f f f f d d d 1 8 d 
    f f f d d d d 1 1 d 
    f f d d d d d d d d 
    . f d d d d d d d . 
    . . d d d d d d . . 
    . . . 8 8 8 8 8 . . 
    . . . 8 8 8 8 . . . 
    . . . 8 8 8 8 . . . 
    . . . 8 8 8 8 . . . 
    . . . 8 8 8 8 . . . 
    . . . 8 8 8 8 . . . 
    . . . 8 8 8 8 . . . 
    . . . 8 8 8 8 . . . 
    . . . . 8 8 . . . . 
    . . . . 8 8 . . . . 
    . . . . 8 8 . . . . 
    . . . . 8 8 . . . . 
    . . . . f f . . . . 
    . . . . f f f . . . 
    . . . . f f f . . . 
    `, SpriteKind.Player)
scene.setBackgroundColor(9)
scene.cameraFollowSprite(mySprite)
mySprite.ay = 200
controller.moveSprite(mySprite, 100, 0)
forever(function () {
    if (controller.right.isPressed()) {
        isfacingright = true
        mySprite.setImage(img`
            . . f f f f f f . . 
            . f f f f f f f f . 
            f f f f f f f f f f 
            f f f f f f d d d d 
            f f f f f d d 1 1 d 
            f f f f d d d 1 8 d 
            f f f d d d d 1 1 d 
            f f d d d d d d d d 
            . f d d d d d d d . 
            . . d d d d d d . . 
            . . . 8 8 8 8 8 . . 
            . . . 8 8 8 8 . . . 
            . . . 8 8 8 8 . . . 
            . . . 8 8 8 8 . . . 
            . . . 8 8 8 8 . . . 
            . . . 8 8 8 8 . . . 
            . . . 8 8 8 8 . . . 
            . . . 8 8 8 8 . . . 
            . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 
            . . . . 8 8 . . . . 
            . . . . f f . . . . 
            . . . . f f f . . . 
            . . . . f f f . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . . f f f f f f . . . . 
            . . . . f f f f f f f f . . . 
            . . . f f f f f f f f f f . . 
            . . . f f f f f f d d d d . . 
            . . . f f f f f d d 1 1 d . . 
            . . . f f f f d d d 1 8 d . . 
            . . . f f f d d d d 1 1 d . . 
            . . . f f d d d d d d d d . . 
            . . . . f d d d d d d d . . . 
            . . . . . d d d d d d . . . . 
            . . . . . . 8 8 8 8 8 . . . . 
            . . . . . . 8 8 8 8 . . . . . 
            d d 8 8 8 8 8 8 8 8 8 8 8 d d 
            d d 8 8 8 8 8 8 8 8 8 8 8 d d 
            . . . . . . 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 . . 8 8 8 . . . 
            . . . 8 8 8 . . . . 8 8 8 . . 
            . . 8 8 8 . . . . . . 8 8 8 . 
            . . f f . . . . . . . . f f . 
            . . f f f . . . . . . . f f f 
            . . f f f . . . . . . . f f f 
            `)
        pause(100)
    }
})
forever(function () {
    if (controller.left.isPressed()) {
        isfacingright = false
        mySprite.setImage(img`
            . . f f f f f f . . 
            . f f f f f f f f . 
            f f f f f f f f f f 
            d d d d f f f f f f 
            d 1 1 d d f f f f f 
            d 8 1 d d d f f f f 
            d 1 1 d d d d f f f 
            d d d d d d d d f f 
            . d d d d d d d f . 
            . . d d d d d d . . 
            . . . 8 8 8 8 8 . . 
            . . . . 8 8 8 8 . . 
            . . . . 8 8 8 8 . . 
            . . . . 8 8 8 8 . . 
            . . . . 8 8 8 8 . . 
            . . . . 8 8 8 8 . . 
            . . . . 8 8 8 8 . . 
            . . . . 8 8 8 8 . . 
            . . . . . 8 8 . . . 
            . . . . . 8 8 . . . 
            . . . . . 8 8 . . . 
            . . . . . 8 8 . . . 
            . . . . . f f . . . 
            . . . . f f f . . . 
            . . . . f f f . . . 
            `)
        pause(100)
        mySprite.setImage(img`
            . . . . f f f f f f . . . . . 
            . . . f f f f f f f f . . . . 
            . . f f f f f f f f f f . . . 
            . . d d d d f f f f f f . . . 
            . . d 1 1 d d f f f f f . . . 
            . . d 8 1 d d d f f f f . . . 
            . . d 1 1 d d d d f f f . . . 
            . . d d d d d d d d f f . . . 
            . . . d d d d d d d f . . . . 
            . . . . d d d d d d . . . . . 
            . . . . . 8 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . 
            d d 8 8 8 8 8 8 8 8 8 8 8 d d 
            d d 8 8 8 8 8 8 8 8 8 8 8 d d 
            . . . . . . 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . 
            . . . . . . 8 8 8 8 . . . . . 
            . . . . . 8 8 8 8 8 8 . . . . 
            . . . . 8 8 8 . . 8 8 8 . . . 
            . . . 8 8 8 . . . . 8 8 8 . . 
            . . 8 8 8 . . . . . . 8 8 8 . 
            . . f f . . . . . . . . f f . 
            . f f f . . . . . . . f f f . 
            . f f f . . . . . . . f f f . 
            `)
        pause(100)
    }
})
