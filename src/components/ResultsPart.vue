<script setup>
import { airports } from "../data/asos-list.js";
import AirportForm from "./AirportForm.vue";
import AboutAsos from "./AboutAsos.vue";
import { ref, reactive } from "vue";

// Input boxes for "Airport Code" - single, combined.
const ac1 = ref("");
const ac2 = ref("");
const ac3 = ref("");
const ac4 = ref("");
const acAll = ref("");

// User clicks "Go" button, invoke runCode function, save "returned" airport.
const returnedAirport = ref(117); // 117 is the index for KLAX.
function runCode() {
    acAll.value = `${ac1.value}${ac2.value}${ac3.value}${ac4.value}`;
    airports.forEach(function(airport) {
        if (acAll.value.toUpperCase() === airport.id) {
            returnedAirport.value = airports.indexOf(airport);
        }
    });
}

// When user clicks "Clear" button.
function clearCode() {
    returnedAirport.value = 117;
    ac1.value = "";
    ac2.value = "";
    ac3.value = "";
    ac4.value = "";
}

// User clicks "+" symbol, invoke addAirport function, save "added" airport.
const addedAirports = reactive({
    depart: {
        id: "kjfk",
        name: "John F. Kennedy International Airport",
        city: "New York",
        state: "NY",
        type: "Departing"
    },
    stop1: {
        id: "kord",
        name: "Chicago O'Hare International Airport",
        city: "Chicago",
        state: "IL",
        type: "Stopover"
    },
    stop2: {
        id: "",
        name: "",
        city: "",
        state: "",
        type: "Stopover"
    },
    stop3: {
        id: "",
        name: "",
        city: "",
        state: "",
        type: "Stopover"
    },
    dest: {
        id: "ksfo",
        name: "San Francisco International Airport",
        city: "San Francisco",
        state: "CA",
        type: "Destination"
    }
});

function addAirport() {
    addedAirports.value.push(returnedAirport.value);
}


</script>

<template>
    <nav>
        <AirportForm
            v-model:asos-code1="ac1"
            v-model:asos-code2="ac2"
            v-model:asos-code3="ac3"
            v-model:asos-code4="ac4"
            @run-code="runCode"
            @clear-code="clearCode"
        />
        <div class="returned-airports">
            <div class="returned-airport">
                <div class="returned-airport-details">
                    <dl>
                        <dt>{{ airports[`${returnedAirport}`].name }} - {{ airports[`${returnedAirport}`].id }}</dt>
                        <dd>{{ airports[`${returnedAirport}`].city }}, {{ airports[`${returnedAirport}`].stateAbr.toUpperCase() }}</dd>
                    </dl>
                </div>
                <div class="returned-airport-btns">
                    <button class="returned-btn-flight-type departing">Departing</button>
                    <button class="returned-btn-flight-type stopover">Stopover</button>
                    <button class="returned-btn-flight-type destination">Destination</button>
                </div>
                <div class="returned-airport-icon">
                    <figure class="icon">
                        <img
                            @click="addAirport()"
                            src="/add-icon-24.svg"
                            alt="plus icont to add item"
                        >
                    </figure>
                </div>
            </div>
            <!--<AboutAsos />-->
        </div>
    </nav>
    <main>


        <div class="added-airports">
            <div class="added-airport">
                <div class="added-airport-type departing">
                    <dl>
                        <dt>{{ addedAirports.depart.type }}</dt>
                    </dl>
                </div>
                <div class="added-airport-details">
                    <dl>
                        <dt>{{ addedAirports.depart.id }}</dt>
                        <dd>{{ addedAirports.depart.name }}</dd>
                        <dd>{{ addedAirports.depart.city}}, {{ addedAirports.depart.state }}</dd>
                    </dl>
                </div>
            </div>


            <div class="added-airport">
                <div class="added-airport-type stopover">
                    <dl>
                        <dt>{{ addedAirports.stop1.type }}</dt>
                    </dl>
                </div>
                <div class="added-airport-details">
                    <dl>
                        <dt>{{ addedAirports.stop1.id }}</dt>
                        <dd>{{ addedAirports.stop1.name }}</dd>
                        <dd>{{ addedAirports.stop1.city}}, {{ addedAirports.stop1.state }}</dd>
                    </dl>
                </div>
            </div>

            <div class="added-airport">
                <div class="added-airport-type destination">
                    <dl>
                        <dt>{{ addedAirports.dest.type }}</dt>
                    </dl>
                </div>
                <div class="added-airport-details">
                    <dl>
                        <dt>{{ addedAirports.dest.id }}</dt>
                        <dd>{{ addedAirports.dest.name }}</dd>
                        <dd>{{ addedAirports.dest.city}}, {{ addedAirports.dest.state }}</dd>
                    </dl>
                </div>
            </div>
        </div>
    </main> 
</template>

<style scoped>
</style>