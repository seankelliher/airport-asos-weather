<script setup>
import { airports } from "../data/asos-list.js";
import NavPart from "./NavPart.vue";
import AboutAsos from "./AboutAsos.vue";
import { ref } from "vue";

const ac1 = ref("");
const ac2 = ref("");
const ac3 = ref("");
const ac4 = ref("");
const acAll = ref("");

const chosen = ref(117); // 117 is the index for KLAX.

function runCode() {
    acAll.value = `${ac1.value}${ac2.value}${ac3.value}${ac4.value}`;
    airports.forEach(function(airport) {
        if (acAll.value.toUpperCase() === airport.id) {
            chosen.value = airports.indexOf(airport);
        }
    });
}

function clearCode() {
    chosen.value = 117;
    ac1.value = "";
    ac2.value = "";
    ac3.value = "";
    ac4.value = "";
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
                        <dt>{{ airports[`${chosen}`].name }} - {{ airports[`${chosen}`].id }}</dt>
                        <dd>{{ airports[`${chosen}`].city }}, {{ airports[`${chosen}`].stateAbr.toUpperCase() }}</dd>
                    </dl>
                </div>
                <div class="airport-btns">
                    <button class="btn-flight-type departing">Departing</button>
                    <button class="btn-flight-type stopover">Stopover</button>
                    <button class="btn-flight-type destination">Destination</button>
                </div>
            </div>
            <AboutAsos />
        </div>
    </main> 
</template>

<style scoped>
</style>