const core = require('@actions/core')
const fetch = require('node-fetch')

const main = async () => {
    try {
        const params = {
            headers: {
                Authorization: `Basic ${Buffer.from(
                    `${core.getInput('username')}:${core.getInput('password')}`
                ).toString('base64')}`,
            },
        }

        const url = [
            core.getInput('instance-url'),
            'api/system/info?fields=version',
        ]
            .map((part) => part.replace(/(^\/)|(\/$)/g, ''))
            .join('/')

        const response = await fetch(url, params)
        const version = (await response.json()).version
        core.info(`output-version: ${version}`)
        core.setOutput('version', version)
    } catch (error) {
        core.setFailed(error.message)
    }
}

main()
