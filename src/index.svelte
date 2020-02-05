<script lang="typescript">
    // @ts-ignore
    import Table from './Table.svelte'
    // @ts-ignore
    import data from './data'

    export let resultSelectedStore = undefined
    export let selectedYears = undefined

    import { get } from 'svelte/store'
    const result = () => {
        alert(JSON.stringify(get(resultSelectedStore)))
    }

    let dataYearsStoreDefault = JSON.stringify({
        year_1_1: [],
        year_1_2: [],
        year_2_1: [],
        year_2_2: [],
        year_3_1: [],
        year_3_2: [],
        year_4_1: [],
        year_4_2: [],
    })
    const restore = () => {
        // @ts-ignore
        resultSelectedStore.set(JSON.parse(dataYearsStoreDefault))
    }

</script>

<div class="container">
    <button class="tableButton" on:click={result}>저장</button>
    <button class="tableButton" on:click={restore}>되돌리기</button>
    <Table {data} bind:resultSelectedStore bind:selectedYears />
    <button type="button" class="tableButton">소프트웨어과학 트랙</button>
    <button type="button" class="tableButton">지능정보 트랙</button>
    <button type="button" class="tableButton">IoT임베디드 트랙</button>
    <button type="button" class="tableButton">블록체인보안 트랙</button>
</div>

<style>
    .container {
        min-width: 1400px;
        margin: auto;
        padding: 50px;
    }
    .tableButton {
        margin: 10px;
        border-style: none;
        border-radius: 6px;
        color: #fff;
        background-color: #38c172;
        width: auto;
        padding: 10px;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: 100;
        font-family: 'BareunDotum', sans-serif;
    }
</style>