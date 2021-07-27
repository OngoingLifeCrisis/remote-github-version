input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    radio.sendNumber(1)
})
radio.setGroup(39)
