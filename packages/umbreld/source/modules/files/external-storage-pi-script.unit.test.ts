import {readFile} from 'node:fs/promises'
import {fileURLToPath} from 'node:url'

import {describe, expect, test} from 'vitest'

const externalStorageScriptPath = fileURLToPath(
	new URL('../../../../os/overlay-pi/opt/umbrel-external-storage/umbrel-external-storage', import.meta.url),
)

describe('Pi external storage boot script', () => {
	test('does not format unrecognised disks automatically', async () => {
		const script = await readFile(externalStorageScriptPath, 'utf8')

		expect(script).not.toMatch(/\b(wipefs|parted|mkfs(?:\.ext4)?)\b/)
		expect(script).toContain('Refusing to format an unrecognised device')
	})
})
