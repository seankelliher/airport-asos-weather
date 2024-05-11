<script setup>
// import { states } from "../data/states-list.js";
const searchTerm = defineModel("searchTerm");

defineEmits(["runSearchTerm", "clearSearchTerm"]);
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
                    v-model="searchTerm1"
                    placeholder="K"
                >

                <label for="asos2" hidden>airport code, second letter</label>
                <input
                    id="asos2"
                    name="asos2"
                    type="text"
                    v-model="searchTerm2"
                    placeholder="L"
                >

                <label for="asos3" hidden>airport code, third letter</label>
                <input
                    id="asos3"
                    name="asos3"
                    type="text"
                    v-model="searchTerm3"
                    placeholder="A"
                >

                <label for="asos4" hidden>airport code, fourth letter</label>
                <input
                    id="asos4"
                    name="asos4"
                    type="text"
                    v-model="searchTerm4"
                    placeholder="X"
                >
            </fieldset>

            <div class="form-btns">
                <button
                    @click="$emit('clearSearchTerm')"
                    class="btn-clear"
                >
                    Clear
                </button>
                <button
                    type="submit"
                    @click="$emit('runSearchTerm', searchTerm)"
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