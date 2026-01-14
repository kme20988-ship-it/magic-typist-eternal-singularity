// Hacker-themed word list for typing game
export const wordList = [
    // Easy words (4-6 characters)
    'code',
    'hack',
    'data',
    'byte',
    'loop',
    'file',
    'node',
    'port',
    'root',
    'user',
    'auth',
    'key',
    'api',
    'bug',
    'git',
    'ssh',
    'cpu',
    'ram',
    'disk',
    'net',

    // Medium words (7-9 characters)
    'function',
    'variable',
    'array',
    'object',
    'string',
    'boolean',
    'integer',
    'firewall',
    'encrypt',
    'decrypt',
    'compile',
    'execute',
    'process',
    'server',
    'client',
    'socket',
    'packet',
    'router',
    'kernel',
    'memory',
    'cache',
    'buffer',
    'thread',
    'module',
    'import',
    'export',
    'return',
    'switch',

    // Hard words (10+ characters)
    'algorithm',
    'backdoor',
    'bandwidth',
    'blockchain',
    'breakpoint',
    'cybersecurity',
    'database',
    'debugger',
    'deployment',
    'encryption',
    'framework',
    'interface',
    'javascript',
    'localhost',
    'malware',
    'network',
    'overflow',
    'parameter',
    'protocol',
    'recursive',
    'repository',
    'terminal',
    'vulnerability',
    'authentication',
    'authorization',
    'configuration',
    'cryptocurrency',
];

// Get a random word from the list
export const getRandomWord = () => {
    return wordList[Math.floor(Math.random() * wordList.length)];
};

// Get word difficulty (for future use)
export const getWordDifficulty = (word) => {
    if (word.length <= 6) return 'easy';
    if (word.length <= 9) return 'medium';
    return 'hard';
};
