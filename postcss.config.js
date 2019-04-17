const readConfig = require('read-config');
const constants = readConfig(`./src/constants.yml`);
const SUB = constants.SUB_DIR ? `${constants.SUB_DIR}/` : '';

module.exports = {
    plugins: [
        require('postcss-assets')({
            basePath: `public/`,
            loadPaths: [ `${SUB}img/` ],
        }),
        require('autoprefixer')({
            browsers: ['last 2 versions']
        }),
        require('cssnano')({
            autoprefixer: false
        })
    ]
};