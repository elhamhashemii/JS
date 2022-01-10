<template>
    <button onclick="fib(8)">Fib</button>
</template>

<script>
function fib(n) {
    if (n == 1 || n == 2) return 1;
    else return fib(n - 1) + fib(n - 2)
}
</script>