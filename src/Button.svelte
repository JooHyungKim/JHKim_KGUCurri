<script>
    export let code = undefined
    export let name = undefined
    export let isSelected = false
    export let resultSelectedStore = undefined
    export let dataYear = undefined
    export let tag = undefined

    resultSelectedStore.subscribe((resultSelected)=>{
        try{
            isSelected = (resultSelected[tag].indexOf(dataYear) != -1)
        }catch(e){
            isSelected = false
        }
    })
</script>

<button
    class="selectButton {isSelected ? 'selectedButton' : ''}"
    on:click={() => {
        resultSelectedStore.update((resultSelected)=>{
            let targetIndex = resultSelected[tag].indexOf(dataYear)
            if(targetIndex == -1){
                resultSelected[tag].push(dataYear)
            }else{
                resultSelected[tag].splice(targetIndex, 1)
            }
            return resultSelected
        })
    }}
>
    {code}
    <br />
    {name}
</button>


<style>

    .selectButton {
        margin: 10px;
        border-style: none;
        border-radius: 6px;
        background-color: #fff;
        border-width: 1px;
        border-style: solid;
        border-color: #38c172;
        width: auto;
        padding: 10px;
        padding-left: 10px;
        padding-right: 10px;
        font-weight: 100;
        font-family: 'BareunDotum', sans-serif;
    }
    .selectedButton {
        color: #fff;
        background-color: #38c172;
    }
</style>