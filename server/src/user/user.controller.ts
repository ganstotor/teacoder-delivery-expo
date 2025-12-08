import { Controller, HttpCode, Patch, Get, Param } from '@nestjs/common'
import { UserService } from './user.service'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/user.decorator'

@Controller('users')
export class UserController {
	constructor(private readonly userService: UserService) {}

	@Get('profile')
	@Auth()
	async getProfile(@CurrentUser('id') userId: string) {
		return this.userService.getById(userId)
	}

	@HttpCode(200)
	@Auth()
	@Patch('profile/favorites/:productId')
	async toggleFavorite(
		@CurrentUser('id') userId: string,
		@Param('productId') productId: string
	) {
		return this.userService.toggleFavorite(userId, productId)
	}
}
