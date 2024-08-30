
<script lang="ts">
	import Man from "../components/Man.svelte";

    let count = 0;

    $: doubled = count * 2;

    $: if (count > 10) {
        alert('count is greater than 10');
    }

    const manProps = {
        name: 'John',
        age: 30,
        height: 170,
        weight: 70,
    };

    let mouse = { x: 0, y: 0 }
</script>


<div on:pointermove={e => { mouse.x = e.clientX; mouse.y = e.clientY }} 
class="flex flex-col gap-4 bg-amber-100 w-[300px] p-4 rounded-md mt-10">
    x: {mouse.x}
    y: {mouse.y}
</div>

<button on:click={() => count++} class="bg-blue-500 text-white px-4 py-2 rounded-md">
    Clicked {count} times
</button>
<h1>Doubled: {doubled}</h1>

<Man {...manProps} />