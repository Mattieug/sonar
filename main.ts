let item = 0
led.enable(true)
basic.forever(function () {
    item = sonar.ping(
    DigitalPin.P2,
    DigitalPin.P1,
    PingUnit.Centimeters
    )
    basic.showNumber(item)
    basic.pause(50)
    serial.writeValue("Distance", item)
})
