<script setup>
import { airports } from "../data/asos-list.js";
import NavPart from "./NavPart.vue";
import AboutAsos from "./AboutAsos.vue";
import { ref } from "vue";

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
const addedAirports = ref([]);
function addAirport() {
    addedAirports.value.push(returnedAirport.value);
}
</script>

<template>
    <NavPart
        v-model:asos-code1="ac1"
        v-model:asos-code2="ac2"
        v-model:asos-code3="ac3"
        v-model:asos-code4="ac4"
        @run-code="runCode"
        @clear-code="clearCode"
    />
    <main>
        <div class="returned-airports">
            <div class="airport">
                <div class="airport-details">
                    <dl>
                        <dt>{{ airports[`${returnedAirport}`].name }} - {{ airports[`${returnedAirport}`].id }}</dt>
                        <dd>{{ airports[`${returnedAirport}`].city }}, {{ airports[`${returnedAirport}`].stateAbr.toUpperCase() }}</dd>
                    </dl>
                </div>
                <div class="airport-btns">
                    <button class="btn-flight-type departing">Departing</button>
                    <button class="btn-flight-type stopover">Stopover</button>
                    <button class="btn-flight-type destination">Destination</button>
                </div>
                <div class="airport-icon">
                    <figure class="icon">
                        <img
                            @click="addAirport()"
                            src="/add-icon-24.svg"
                            alt="plus icont to add item"
                        >
                    </figure>
                </div>
            </div>
            <AboutAsos />
        </div>

        <div class="added-airports">
            <div class="added-airport">
                {{ addedAirports }}
            </div>
            <div
                v-for="addedAirport in addedAirports"
                :key="addedAirport"
                class="added-airport"
            >
                <dl>
                    <dt>{{ airports[addedAirport].id }}</dt>
                    <dd>{{ airports[addedAirport].name }}</dd>
                    <dd>{{ airports[addedAirport].city }}, {{ airports[addedAirport].stateAbr.toUpperCase() }}</dd>
                </dl>
            </div>
        </div>
    </main> 
</template>

<style scoped>
</style>