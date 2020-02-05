<script>
    export let yearStart = 2012
    export let yearEnd = 2020
    export let data = undefined

    let years = []
    $: {
        years = []
        for (let i = yearStart; i <= yearEnd; i++) years.push(i)
    }

    export let selectedYears = {
        year_1_1: undefined,
        year_1_2: undefined,
        year_2_1: undefined,
        year_2_2: undefined,
        year_3_1: undefined,
        year_3_2: undefined,
        year_4_1: undefined,
        year_4_2: undefined,
    }
    import { writable, get } from 'svelte/store'

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

    // 선택된 날짜로 인해 얻어지는 과목유형들
    let dataYearsStore = writable(JSON.parse(dataYearsStoreDefault))

    // 최종 DB로 저장될 선택된 값들
    export let resultSelectedStore = writable(JSON.parse(dataYearsStoreDefault))

    $: {
        dataYearsStore.update((dataYears)=>{
            if(data){
                dataYears = JSON.parse(dataYearsStoreDefault)
                resultSelectedStore.set(JSON.parse(dataYearsStoreDefault))
                if(data[selectedYears.year_1_1]) dataYears.year_1_1 = data[selectedYears.year_1_1]
                if(data[selectedYears.year_1_2]) dataYears.year_1_2 = data[selectedYears.year_1_2]
                if(data[selectedYears.year_2_1]) dataYears.year_2_1 = data[selectedYears.year_2_1]
                if(data[selectedYears.year_2_2]) dataYears.year_2_2 = data[selectedYears.year_2_2]
                if(data[selectedYears.year_3_1]) dataYears.year_3_1 = data[selectedYears.year_3_1]
                if(data[selectedYears.year_3_2]) dataYears.year_3_2 = data[selectedYears.year_3_2]
                if(data[selectedYears.year_4_1]) dataYears.year_4_1 = data[selectedYears.year_4_1]
                if(data[selectedYears.year_4_2]) dataYears.year_4_2 = data[selectedYears.year_4_2]
            }
            return dataYears
        })
    }

    // @ts-ignore
    import Button from './Button.svelte'
</script>

<table class="schoolPickTable">
    <tr>
        <th>수강학기선택</th>
        <th>
            <select bind:value={selectedYears.year_1_1}>
                <option>1학년 1학기</option>
                {#each years as year}
                    <option value="{year}-1-1">{year}-1-1</option>
                {/each}
            </select>
        </th>
        <th>
            <select bind:value={selectedYears.year_1_2}>
                <option>1학년 2학기</option>
                {#each years as year}
                    <option value="{year}-1-2">{year}-1-2</option>
                {/each}
            </select>
        </th>
        <th>
            <select bind:value={selectedYears.year_2_1}>
                <option>2학년 1학기</option>
                {#each years as year}
                    <option value="{year}-2-1">{year}-2-1</option>
                {/each}
            </select>
        </th>
        <th>
            <select bind:value={selectedYears.year_2_2}>
                <option>2학년 2학기</option>
                {#each years as year}
                    <option value="{year}-2-2">{year}-2-2</option>
                {/each}
            </select>
        </th>
        <th>
            <select bind:value={selectedYears.year_3_1}>
                <option>3학년 1학기</option>
                {#each years as year}
                    <option value="{year}-3-1">{year}-3-1</option>
                {/each}
            </select>
        </th>
        <th>
            <select bind:value={selectedYears.year_3_2}>
                <option>3학년 2학기</option>
                {#each years as year}
                    <option value="{year}-3-2">{year}-3-2</option>
                {/each}
            </select>
        </th>
        <th>
            <select bind:value={selectedYears.year_4_1}>
                <option>4학년 1학기</option>
                {#each years as year}
                    <option value="{year}-4-1">{year}-4-1</option>
                {/each}
            </select>
        </th>
        <th>
            <select bind:value={selectedYears.year_4_2}>
                <option>4학년 2학기</option>
                {#each years as year}
                    <option value="{year}-4-2">{year}-4-2</option>
                {/each}
            </select>
        </th>
    </tr>

    <tr>
        <td>전공</td>
        <td>
            {#if $dataYearsStore['year_1_1'] && $resultSelectedStore['year_1_1']}
                {#each $dataYearsStore['year_1_1'] as dataYear, index}
                    <Button
                        code={dataYear.code}
                        name={dataYear.name}
                        {resultSelectedStore}
                        dataYear={dataYear}
                        tag='year_1_1'
                    />
                {/each}
            {/if}
        </td>
        <td>
            {#if $dataYearsStore['year_1_2'] && $resultSelectedStore['year_1_2']}
                {#each $dataYearsStore['year_1_2'] as dataYear, index}
                    <Button
                        code={dataYear.code}
                        name={dataYear.name}
                        {resultSelectedStore}
                        dataYear={dataYear}
                        tag='year_1_2'
                    />
                {/each}
            {/if}
        </td>
        <td>
            {#if $dataYearsStore['year_2_1'] && $resultSelectedStore['year_2_1']}
                {#each $dataYearsStore['year_2_1'] as dataYear, index}
                    <Button
                        code={dataYear.code}
                        name={dataYear.name}
                        {resultSelectedStore}
                        dataYear={dataYear}
                        tag='year_2_1'
                    />
                {/each}
            {/if}
        </td>
        <td>
            {#if $dataYearsStore['year_2_2'] && $resultSelectedStore['year_2_2']}
                {#each $dataYearsStore['year_2_2'] as dataYear, index}
                    <Button
                        code={dataYear.code}
                        name={dataYear.name}
                        {resultSelectedStore}
                        dataYear={dataYear}
                        tag='year_2_2'
                    />
                {/each}
            {/if}
        </td>
        <td>
            {#if $dataYearsStore['year_3_1'] && $resultSelectedStore['year_3_1']}
                {#each $dataYearsStore['year_3_1'] as dataYear, index}
                    <Button
                        code={dataYear.code}
                        name={dataYear.name}
                        {resultSelectedStore}
                        dataYear={dataYear}
                        tag='year_3_1'
                    />
                {/each}
            {/if}
        </td>
        <td>
            {#if $dataYearsStore['year_3_2'] && $resultSelectedStore['year_3_2']}
                {#each $dataYearsStore['year_3_2'] as dataYear, index}
                    <Button
                        code={dataYear.code}
                        name={dataYear.name}
                        {resultSelectedStore}
                        dataYear={dataYear}
                        tag='year_3_2'
                    />
                {/each}
            {/if}
        </td>
        <td>
            {#if $dataYearsStore['year_4_1'] && $resultSelectedStore['year_4_1']}
                {#each $dataYearsStore['year_4_1'] as dataYear, index}
                    <Button
                        code={dataYear.code}
                        name={dataYear.name}
                        {resultSelectedStore}
                        dataYear={dataYear}
                        tag='year_4_1'
                    />
                {/each}
            {/if}
        </td>
        <td>
            {#if $dataYearsStore['year_4_2'] && $resultSelectedStore['year_4_2']}
                {#each $dataYearsStore['year_4_2'] as dataYear, index}
                    <Button
                        code={dataYear.code}
                        name={dataYear.name}
                        {resultSelectedStore}
                        dataYear={dataYear}
                        tag='year_4_2'
                    />
                {/each}
            {/if}
        </td>
    </tr>
</table>

<style>
    .schoolPickTable {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.12),
            0 2px 4px 0 rgba(0, 0, 0, 0.08);
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        margin: auto;
        width: 100%;
        text-align: center;
    }

    .schoolPickTable > tr:nth-child(1) {
        color: #70818a;
        font-size: 0.875rem;
        border-color: #dae4e9;
        background-color: #fafcfc;
    }

    .schoolPickTable > tr > td {
        border-width: 1px;
        border-left-width: 0;
        border-right-width: 0;
        border-style: solid;
        border-color: #4caf50;
        font-weight: 100;
    }

    .schoolPickTable > tr > th,
    .schoolPickTable > tr > td {
        padding: 20px;
    }

    select {
        background: #fafcfc;
        border: unset;
        font-size: 1rem;
        color: #70818a;
        font-weight: 900;
        font-family: 'BareunDotum', sans-serif;
    }
</style>
