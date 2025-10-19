const http = require('http');

const PORT = 5013;

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end("Welcome to our home page");
    } else if (req.url === '/about') {
        res.end('Here is my small history');
    } else {
        res.end('<h1>Oops</h1><p>Page not found.</p>');
    }
});

server.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
});

// if port already in use, find another one
server.on('error', (err) => {
    if (err.code === 'EADDRINUSE') {
        console.log(`⚠️ Port ${PORT} is busy. Trying another port...`);
        server.listen(0); // 0 = auto-assign a free port
    } else {
        console.error(err);
    }
});

server.on('listening', () => {
    console.log(`🚀 Server active on port ${(server.address()).port}`);
});
