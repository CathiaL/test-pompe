let humidité = 0
input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Heart)
    cakLandPump.startDuration(cakLand.BoardSide.LEFT, 53, 5)
    basic.clearScreen()
})
basic.forever(function () {
    humidité = pins.analogReadPin(AnalogPin.P3)
    basic.showString("" + (pins.analogReadPin(AnalogPin.P3)))
    basic.pause(1000)
    if (humidité <= 700) {
        basic.showIcon(IconNames.Happy)
        cakLandPump.startDuration(cakLand.BoardSide.LEFT, 60, 4)
    }
})
