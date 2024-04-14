<script lang="ts">
  export let text: string;
</script>

<button on:click={() => console.log("Button clicked")}>
  {text}
</button>
