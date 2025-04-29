import { createSignal } from "solid-js"

export const Counter = () => {
    const [count, setCount] = createSignal(0)
    return (
        <div>
            <button 
                class="btn text-white border rounded px-3 py-1 cursor-pointer"
                on:click={() => setCount(count() - 1)}
                >-1</button>
            <span class="text-3xl text-white mx-5">{count()}</span>
            <button 
                class="btn text-white border rounded px-3 py-1 cursor-pointer"
                on:click={() => setCount(count() + 1)}
                >+1</button>
        </div>
    )
}