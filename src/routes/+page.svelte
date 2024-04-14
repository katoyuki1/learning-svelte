<script>
  import Button from "$lib/components/Button.svelte";
  import Header from "$lib/components/Header.svelte";
</script>

<Header />
<h1 class="text-red-500 text-4xl font-bold underline">Welcome to SvelteKit</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
<Button text="I'm Button" />
<Button text="Buttooooon!!" />

<style lang="postcss">
  :global(html) {
    background-color: theme(colors.gray.100);
  }
</style>
