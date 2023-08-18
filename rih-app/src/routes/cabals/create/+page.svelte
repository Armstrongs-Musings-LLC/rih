<script>
    import {
        Form,
        FormGroup,
        Checkbox,
        RadioButtonGroup,
        RadioButton,
        Select,
        SelectItem,
        Button,
    } from 'carbon-components-svelte';

    export let data;
</script>

<h1>Create New Cabal</h1>

<Form>
    <FormGroup>
        <Select id="select-1" labelText="Select menu">
            <SelectItem disabled hidden value="placeholder-item" text="Choose an option" />
            {#each data.serializedPhilosophy as philosophy}
                <SelectItem value="option-{philosophy.id}" text={philosophy.name} />
            {/each}
        </Select>
    </FormGroup>
</Form>
