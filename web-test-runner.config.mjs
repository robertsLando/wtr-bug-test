// Docs: https://modern-web.dev/docs/test-runner/cli-and-configuration/

/**
 * @type { import('@web/test-runner').TestRunnerConfig }
 */
export default {
    // https://modern-web.dev/docs/test-runner/browser-launchers/playwright/#testing-multiple-browsers
    // Requires: @web/test-runner-playwright
    // browsers: [
    //     playwrightLauncher({
    //         product: 'chromium', createBrowserContext: ({ browser, config }) => {

    //             // ignore HTTPS errors
    //             const context = browser.newContext({
    //                 ignoreHTTPSErrors: true
    //             })
    //             return context

    //         },
    //        // launchOptions: { headless: false, devtools: true }
    //     }),
    //     playwrightLauncher({
    //         product: 'firefox', createBrowserContext: ({ browser, config }) => {

    //             // ignore HTTPS errors
    //             const context = browser.newContext({
    //                 ignoreHTTPSErrors: true
    //             })
    //             return context

    //         }, 
    //        // launchOptions: { headless: false, devtools: true }
    //     }),
    //     playwrightLauncher({
    //         product: 'webkit', createBrowserContext: ({ browser, config }) => {

    //             // ignore HTTPS errors
    //             const context = browser.newContext({
    //                 ignoreHTTPSErrors: true
    //             })
    //             return context

    //         },
    //        // launchOptions: { headless: false, devtools: true }
    //     }),
    // ],
    // playwright: true,
    // concurrency: 10,
    files: ['./test/test.js'],
    nodeResove: true,
    testFramework: {
        config: {
            timeout: '10000',
        },
    },
    // manual: true,
    // open: true,
    // rootDir: path.resolve(__dirname)
    http2: true,
    sslCert: './certs/server-cert.pem',
    sslKey: './certs/server-key.pem',
    // testRunnerHtml: (testFrameworkImport) =>
    //     `<html>
    //     <body>
    //         <script src="dist/mqtt.js"></script>
    //         <script type="module">
    //             window.wsPort = ${wsPort};
    //             window.wssPort = ${wssPort};
    //         </script>
    //         <script type="module" src="${testFrameworkImport}"></script>
    //     </body>
    // </html>`
};