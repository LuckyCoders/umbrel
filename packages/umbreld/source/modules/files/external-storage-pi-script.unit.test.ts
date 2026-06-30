import {readFile} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'

import {describe, expect, test} from 'vitest'

const externalStorageScriptPath = fileURLToPath(
	new URL('../../../../os/overlay-pi/opt/umbrel-external-storage/umbrel-external-storage', import.meta.url),
)

describe('Pi external storage boot script', () => {
	test('skips data-disk migration without explicit opt-in', async () => {
		const script = await readFile(externalStorageScriptPath, 'utf8')

		expect(script).toContain('umbrel-allow-external-format')
		expect(script).toContain('is_external_format_explicitly_allowed')
		expect(script).toContain('USB drives are mounted by umbreld under Files → External')
	})

	test('refuses to format drives that already contain data', async () => {
		const script = await readFile(externalStorageScriptPath, 'utf8')

		expect(script).toContain('assert_safe_to_format')
		expect(script).toContain('refuse_automatic_format')
		expect(script).toContain('device_has_filesystem_signatures')
		expect(script).toContain('explicit opt-in is required before formatting external storage')
	})
})
