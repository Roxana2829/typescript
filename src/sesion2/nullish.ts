function checkNullish(a: number | undefined | null) {
    const text: number | string = a ?? 'su valor es null o undefined'
    console.log(text, a)
}

checkNullish(undefined)