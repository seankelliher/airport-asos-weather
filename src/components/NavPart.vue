<script setup>
// import { states } from "../data/states-list.js";
const asosCode1 = defineModel("asosCode1");
const asosCode2 = defineModel("asosCode2");
const asosCode3 = defineModel("asosCode3");
const asosCode4 = defineModel("asosCode4");

defineEmits(["runCode", "clearCode"]);

</script>

<template>
    <nav>
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
                    type="submit"
                    @click="$emit('runCode')"
                    class="btn-go"
                >
                    Go
                </button>
            </div>
        </form>
    </nav>
</template>

<style scoped>
</style>