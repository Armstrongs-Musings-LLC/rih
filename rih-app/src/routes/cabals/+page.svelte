<script>
    import { Button, ComboBox } from "carbon-components-svelte";
</script>

<Button href="cabals/create">Create New Cabal</Button>
<ComboBox

items = {
    [
        {
            text: "Option 1",
            id: "option-1"
        }
    ]
} />