var dayofWeek = function (day) {
    switch (day) {
        case 1:
            "1"
            console.log(`${day} Sunday`);
            break;
        case 1:
            "1"
            console.log(`${day} Munday`);
            break;
        case 2:
            "2"
            console.log(`${day} Tuesday`);
            break;
        case 3:
            "3"
            console.log(`${day} Wed`);
            break;
        case 4:
            "4"
            console.log(`${day} Thur`);
            break;
        case 5:
            "5"
            console.log(`${day} Friday`);
            break;
        case 6:
            "6"
            console.log(`${day} Sat`);
            break;
        case 7:
            "7"
            console.log(`${day} Sunday`);
            break;
        default:
            console.log(`${day} invalid input`);
            break;
    }
    console.log("---------------End of Switch Case----------------- ");
}
dayofWeek(2);
dayofWeek(5);
dayofWeek(1);
dayofWeek(3);
dayofWeek(6);
dayofWeek(4);
dayofWeek(7);
dayofWeek(199);
dayofWeek(undefined);

