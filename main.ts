input.onButtonPressed(Button.A, function () {
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 75)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 60)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 130)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 90)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 60)
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 90)
    RingbitCar.running_distance(RingbitCar.Direction_run.forward, 90)
    music.playMelody("E F E C5 F D F F ", 120)
})
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index < 10; index++) {
        RingbitCar.running_distance(RingbitCar.Direction_run.forward, 50)
        RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 30)
    }
})
RingbitCar.init_wheel(AnalogPin.P1, AnalogPin.P2)
basic.forever(function () {
    while (true) {
        basic.showIcon(IconNames.Heart)
        basic.pause(200)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
})
