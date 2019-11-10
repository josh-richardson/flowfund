<script>
    import {profile, web3, contract} from '../stores/user';
    import {campaigns} from '../stores/application';
    import {onMount} from 'svelte';
    import CampaignCard from "../components/CampaignCard.svelte";

    onMount(async () => {
        if ($profile) {
            console.log($profile);
            console.log($contract);

            var result = await $contract.methods.getCampaigns().call();
            console.log(result);
        }
    });
</script>

<style>
    .campaigns-container {
        flex-direction: row;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        margin: auto;
        padding-top: 20px;
    }
</style>

<h1>Campaigns</h1>
<p>Below is a list of campaigns by Flowfund users. Click on a campaign for more information, and to donate.</p>


<div class="campaigns-container">

    {#each $campaigns as item}
        <CampaignCard campaign={item} />
    {/each}

</div>

