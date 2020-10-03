<template>
    <button @click="yesCount++">{{ yesCount }} {{ yes }}</button>
</template>

<script>
import { state } from '../state/appstate'

export default {
    name: 'Yes',
    props: {
        yes: String,
    },
    data() {
        return state
    }
}
</script>