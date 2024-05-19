import {reactive, watch} from "vue";
import ClassesCategory from "../components/classesCategory.vue";
import {Comfort} from "../Model/Comfort";
import {Business} from "../Model/Business";
import {Econom} from "../Model/Econom";
import {data} from "~/state/myData";
import {myBalance} from "~/state/myData";


const classesCategories = reactive([
    {imageName: "biznes_klass_v_samolete.jpg", discount: '30% discount on goods', bonus: '50% of the ticket price'},
    {imageName: "comfort_klass_v_samolete.jpg", discount: '20% discount on goods', bonus: '30% of the ticket price'},
    {imageName: "econom_klass_v_samolete.jpg", discount: '4% discount on goods', bonus: '10% of the ticket price'}
]);

const cashData = reactive({
    wallet: 100000,
    card: 100000,
    pin: data.items[0].pinCode,
    bonus: 1,
    discount: 1
});


const calculateBonus = () => {
    if (data.items[0].typeAirplane === 'business' && cashData.pin === data.items[0].pinCode) {
        const businessClass = new Business(cashData.wallet, cashData.card, data.items[0].price);
        cashData.bonus = businessClass.getBonus(data.items[0].typeAirplane);
        cashData.discount = businessClass.getDiscount(data.items[0].typeAirplane);
    } else if (data.items[0].typeAirplane === 'comfort' && cashData.pin === data.items[0].pinCode) {
        const comfortClass = new Comfort(cashData.wallet, cashData.card, data.items[0].price);
        cashData.bonus = comfortClass.getBonus(data.items[0].typeAirplane);
        cashData.discount = comfortClass.getDiscount(data.items[0].typeAirplane);
    } else if (data.items[0].typeAirplane === 'econom' && cashData.pin === data.items[0].pinCode) {
        const economClass = new Econom(cashData.wallet, cashData.card, data.items[0].price);
        cashData.bonus = economClass.getBonus(data.items[0].typeAirplane);
        cashData.discount = economClass.getDiscount(data.items[0].typeAirplane);
    } else {
        cashData.bonus = -1;
        cashData.discount = -1;
    }
};


const updateBalance = () => {
    calculateBonus();
    watch([() => cashData.wallet, () => cashData.card, () => cashData.pin], () => {
        calculateBonus();
    });
}

const addMyBalaceData = () => {
    myBalance.add(cashData.wallet, cashData.card, cashData.bonus, cashData.discount);
    console.log(myBalance);
};