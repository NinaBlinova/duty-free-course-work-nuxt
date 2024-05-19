import {myGoods} from "~/state/myCart.ts";
import {reactive, watch} from "vue";
import {data} from "~/state/myData.ts";
import {Parking} from "@/Model/Parking.ts";

export default {
    data() {
        return {
            parkingData: reactive({
                startData: 0,
                cost: 0,
                pin: data.items[0].pinCode,
            })
        };
    },
    mounted() {
        this.updateParkingDetails();
        watch(() => this.parkingData.startData, () => {
            this.updateParkingDetails();
        });
    },
    methods: {
        updateParkingDetails() {
            const parking = new Parking(data.items[0].typeAirplane, this.parkingData.startData);
            if (this.parkingData.pin === data.items[0].pinCode) {
                this.parkingData.cost = parking.calculatePrice();
            } else {
                this.parkingData.cost = -1;
            }

        },
        addMyParkingData() {
            myGoods.add('parking2.jpg', 'Parking', 'cars', 1, this.parkingData.cost);
            console.log(myGoods);
        }
    }
};