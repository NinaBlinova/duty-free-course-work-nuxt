import {reactive, watch} from "vue";
import {FlightsData} from "@/Model/FlightsData.ts";
import {data} from "~/state/myData.ts";

export default {
    data() {
        return {
            flightData: reactive({
                typeAirplane: "business",
                direction: "Moskow",
                customerName: "Nina",
                price: 0,
                pinCode: "bt8192a",
                departureTime: "2024-05-18",
            })
        };
    },
    mounted() {
        this.updateFlightDetails();
        watch(() => this.flightData.typeAirplane, () => {
            this.updateFlightDetails();
        });
    },
    methods: {
        updateFlightDetails() {
            const flights = new FlightsData(this.flightData.typeAirplane, this.flightData.direction, this.flightData.customerName, this.flightData.departureTime);
            this.flightData.pinCode = flights.generatePinCode(this.flightData.typeAirplane);
            this.flightData.price = flights.generatePrice(this.flightData.typeAirplane);
        },
        addMyFlightData() {
            data.add(this.flightData.typeAirplane, this.flightData.direction, this.flightData.customerName, this.flightData.price,
                this.flightData.pinCode, this.flightData.departureTime);
            console.log(data);
        }
    }
};