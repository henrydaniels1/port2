// eslint-disable-next-line no-undef
const express = require('express');
const app = express();

app.use(express.static('public', {
    setHeaders: (res, path) => {
        if (path.endsWith('.gltf')) {
            res.setHeader('Content-Type', 'model/gltf+json');
        }
    }
}));

app.listen(3000, () => {
    console.log('Server running on http://localhost:5173');
});
