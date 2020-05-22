var OnFMReady = (function () {
    class OnFMReady {
        /**
         * Execute a JavaScript function after the FileMaker object has loaded.
         * @param {Function} callback The function to execute.
         * @param  {...any} args The arguments to pass to the function.
         */
        static runFunction(callback, ...args) {
            let interval = setInterval(() => {
                console.log('wait');
                if (typeof FileMaker === 'object') {
                    clearInterval(interval);
                    callback.call(this, ...args);
                }
            });
        }

        /**
         * Execute a FileMaker script after the FileMaker object has loaded.
         * @param {String} name The name of the script to run.
         * @param {String} parameter The script parameter to pass.
         */
        static runScript(name, parameter) {
            this.runFunction(() => {
                FileMaker.PerformScript(name, parameter);
            });
        }
    }

    return OnFMReady;

})(this);