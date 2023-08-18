module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended', 'plugin:prettier/recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    plugins: ['svelte'],
    overrides: [
        {
            files: ['*.svelte'],
            processor: 'svelte/svelte',
        },
    ],
    rules: {
        // Define your project-specific ESLint rules here
    },
};
