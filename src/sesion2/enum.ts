const enum DoorState {
    Open = 100,
    Closed =200,
}

function checkDoorState(state:DoorState) {
    console.log(state)

    switch (state) {
        case DoorState.Open:
            console.log('la puerta esta habierta')
            break
            case DoorState.Closed:
                console.log('la puerta esta cerrada')
                break
                default:
                    break
    }
}