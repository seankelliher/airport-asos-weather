<script setup>
// import { states } from "../data/states-list.js";
import { onMounted } from "vue";
const asosCode1 = defineModel("asosCode1");
const asosCode2 = defineModel("asosCode2");
const asosCode3 = defineModel("asosCode3");
const asosCode4 = defineModel("asosCode4");

defineEmits(["runCode", "clearCode"]);

onMounted(()=> {
    const one = document.getElementById("asos1");
    one.focus();
});

function changeFocus(el) {
    const input = document.getElementById(el);
    input.focus();
}

function blurFocus(el) {
    const input = document.getElementById(el);
    input.blur();
}
</script>

<template>
    <form @submit.prevent="onSubmit">
        <fieldset>
            <legend>Airport Code</legend>
            <label for="asos1" hidden>airport code, first letter</label>
            <input
                id="asos1"
                name="asos1"
                type="text"
                v-model="asosCode1"
                minlength="1"
                maxlength="1"
                placeholder="K"
                @keyup="changeFocus('asos2')"
            >

            <label for="asos2" hidden>airport code, second letter</label>
            <input
                id="asos2"
                name="asos2"
                type="text"
                v-model="asosCode2"
                minlength="1"
                maxlength="1"
                placeholder="L"
                @keyup="changeFocus('asos3')"
            >

            <label for="asos3" hidden>airport code, third letter</label>
            <input
                id="asos3"
                name="asos3"
                type="text"
                v-model="asosCode3"
                minlength="1"
                maxlength="1"
                placeholder="A"
                @keyup="changeFocus('asos4')"
            >

            <label for="asos4" hidden>airport code, fourth letter</label>
            <input
                id="asos4"
                name="asos4"
                type="text"
                v-model="asosCode4"
                minlength="1"
                maxlength="1"
                placeholder="X"
                @keyup="changeFocus('btn-submit')"
            >
        </fieldset>

        <div class="form-btns">
            <button
                @click="$emit('clearCode')"
                class="btn-clear"
            >
                Clear
            </button>
            <button
                id="btn-submit"
                type="submit"
                @click="[$emit('runCode'), blurFocus('btn-submit')]"
                class="btn-go"
            >
                Go
            </button>
        </div>
    </form>
</template>

<style scoped>
</style>