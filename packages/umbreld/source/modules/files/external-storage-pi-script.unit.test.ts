import {readFile} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'

import {describe, expect, test} from 'vitest'

const externalStorageScriptPath = fileURLToPath(
	new URL('../../../../os/overlay-pi/opt/umbrel-external-storage/umbrel-external-storage', import.meta.url),
)

describe('Pi external storage boot script', () => {
	test('keeps Umbrel on the SD card when an external drive is present', async () => {
		const script = await readFile(externalStorageScriptPath, 'utf8')

		expect(script).toContain('Umbrel data stays on the SD card')
		expect(script).toContain('External USB drives are not formatted at boot')
		expect(script).toContain('mounted by umbreld under Files → External')
		expect(script).not.toMatch(/\b(wipefs|parted|mkfs(?:\.ext4)?)\b/)
		expect(script).not.toContain('setup_new_device')
		expect(script).not.toContain('format_block_device')
	})

	test('does not auto-format external drives at boot', async () => {
		const script = await readFile(externalStorageScriptPath, 'utf8')

		expect(script).not.toContain('umbrel-allow-external-format')
		expect(script).not.toContain('assert_safe_to_format')
		expect(script).not.toMatch(/\b(wipefs|parted|mkfs(?:\.ext4)?)\b/)
	})
})
