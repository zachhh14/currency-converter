<script>
    import { onMount } from 'svelte'

    let valueToConvert = $state(0)
    let converted = $state(0)
    let currencies = $state([])
    let fromCurrency = $state('')
    let toCurrency = $state('')
    let exchangeRates = $state({})

    const getCurrencies = async () => {
        try {
            const response = await fetch(
                'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_ZPfjuNUFaxoZzBMAcJ2ax4y5wcwenXZQT58fXD2g'
            )
            const result = await response.json()

            if (result.data) {
                exchangeRates = result.data
                currencies = Object.keys(exchangeRates)
            }
        } catch (error) {
            console.error('Error fetching currencies:', error)
        }
    }

    const convertValue = () => {
        if (exchangeRates[toCurrency] && exchangeRates[fromCurrency]) {
            const rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency]
            converted = (valueToConvert * rate).toFixed(2);
        }
    }

    onMount(() => {
        getCurrencies()
    })
</script>

<div class="flex flex-col m-5">
    <div class="flex items-center mb-2 space-x-2">
        <span>Base Currency: </span>
        <select class="p-2 border rounded" bind:value={fromCurrency}>
            <option value="" disabled>-- Select Currency --</option>
            {#each currencies as currency}
                <option value={currency}>{currency}</option>
            {/each}
        </select>
        <span>Value: </span>
        <input bind:value={valueToConvert} class="p-2 border rounded" />
    </div>
    <div class="flex items-center space-x-2">
        <span>Target Currency: </span>
        <select class="p-2 border rounded" bind:value={toCurrency}>
            <option value="" disabled>-- Select Currency --</option>
            {#each currencies as currency}
                <option>{currency}</option>
            {/each}
        </select>
        <span>Converted Value: </span>
        <input bind:value={converted} class="p-2 border rounded" disabled />
    </div>
</div>
<button class="p-2 m-5 text-white bg-black rounded" onclick={convertValue}>
    Convert
</button>
