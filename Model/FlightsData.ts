"use strict";

/* global console */


class FlightsData {
    private typeAirplane: string;
    private direction: string;
    private customerName: string;
    private price: number;
    private pinCode: string;
    private departureTime: string;

    constructor(typeAirplane: string, direction: string, customerName: string, departureTime: string) {
        this.typeAirplane = typeAirplane;
        this.direction = direction;
        this.customerName = customerName;
        this.departureTime = departureTime;
        this.price = this.generatePrice(typeAirplane);
        this.pinCode = this.generatePinCode(typeAirplane);
    }

    public generatePrice(typeAirplane : string): number {
        if (typeAirplane === 'business') {
            return 100000;
        } else if (typeAirplane === 'comfort') {
            return 70000;
        } else {
            return 40000;
        }
    }

    public generatePinCode(typeAirplane : string): string {
        let prefix = "";

        switch (typeAirplane) {
            case "business":
                prefix = "b";
                break;
            case "comfort":
                prefix = "c";
                break;
            case "economy":
                prefix = "e";
                break;
        }

        return prefix + Math.random().toString(36).substring(2, 8);
    }
}


export {FlightsData};