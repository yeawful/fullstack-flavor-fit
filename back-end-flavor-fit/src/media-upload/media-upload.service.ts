import { Injectable } from '@nestjs/common'
import { path } from 'app-root-path'
import { ensureDir, writeFile } from 'fs-extra'
import * as iconv from 'iconv-lite'
import { v4 as uuidV4 } from 'uuid'
import { IUploadResponse } from './upload-response.types'

@Injectable()
export class MediaUploadService {
	async saveAvatar(file: Express.Multer.File): Promise<IUploadResponse> {
		const folder = 'avatars'
		const uploadFolder = `${path}/uploads/${folder}`
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call
		await ensureDir(uploadFolder)

		const original = iconv.decode(
			// eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
			Buffer.from(file.originalname, 'binary'),
			'utf-8'
		)
		const safeName = original.replace(/[^\w.-]+/g, '-').toLowerCase()
		const name = `${uuidV4().slice(0, 5)}-${safeName}`

		// eslint-disable-next-line @typescript-eslint/no-unsafe-call, @typescript-eslint/no-unsafe-member-access
		await writeFile(`${uploadFolder}/${name}`, file.buffer)

		const url = `/uploads/${folder}/${name}`

		return { url, name }
	}
}
