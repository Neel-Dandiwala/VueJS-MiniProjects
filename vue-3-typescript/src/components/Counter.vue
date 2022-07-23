<script setup lang="ts">
import { ref, onMounted } from 'vue';
import fetchCount from '../fetchCount';
import ControlBar from './ControlBar.vue'

interface Props {
    limit: number;
    alertMessageOnLimit: string;
}

const props = withDefaults(defineProps<Props>(), {
    alertMessageOnLimit: 'cannot go higher sorry'
})

const count = ref<number | null>(null);


onMounted(() => {
    fetchCount((initialCount) => {
        count.value = initialCount;
        //initialCount gets type inference from the fetchCount module
    })
})

function addCount(num: number) {
    if (count.value !== null) {
        if(count.value >= props.limit) {
            alert(props.alertMessageOnLimit)
        } else {
            count.value += num;
        }
    }
}

</script>

<template>
    <div>
        <p>{{ count }}</p>
        <ControlBar 
            @add-count="addCount"
            @reset-count="count = 0"
        />
    </div>
</template>
