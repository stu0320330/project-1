basic.forever(function () {
    basic.showLeds(`
        # # # # #
        # . . . .
        # # # # #
        . . . . #
        # # # # #
        `)
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . # . # .
        # # # # #
        # . . . #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        . # . # .
        . . # . .
        `)
    basic.pause(100)
    basic.showLeds(`
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # # . . #
        # . # . #
        # . . # #
        # . . . #
        `)
    basic.pause(100)
    basic.showLeds(`
        # . . . #
        # . . . #
        # . . . #
        # . . . #
        # # # # #
        `)
    basic.pause(100)
    music.play(music.createSoundExpression(WaveShape.Square, 1600, 1, 255, 0, 5000, SoundExpressionEffect.None, InterpolationCurve.Curve), music.PlaybackMode.InBackground)
})
