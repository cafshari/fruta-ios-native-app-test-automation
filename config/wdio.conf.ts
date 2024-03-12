import { join } from 'node:path';

export const config: WebdriverIO.Config = {
    logLevel: 'debug',
    bail: 0,
    waitforTimeout: 30000,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000,
    },
    services: [
        [
            'appium',
            {
                args: {
                    log: './logs/appium.log',
                },
            },
        ]
    ],

    specs: ['../tests/specs/**.spec.ts'],

    capabilities: [
        {
            platformName: 'iOS',
            maxInstances: 1,

            'appium:deviceName': 'iPhone 15',
            'appium:platformVersion': '17.2',
            'appium:orientation': 'PORTRAIT',
            'appium:automationName': 'XCUITest',
            'appium:app': join(
                process.cwd(),
                'apps',
                'Fruta_iOS.app'
            ),
            'appium:newCommandTimeout': 240
        }
    ]
};
