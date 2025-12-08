import { IsString, IsOptional } from 'class-validator'

export class CategoryDto {
  @IsOptional()
	@IsString()
	name?: string

  @IsOptional()
	@IsString()
	image?: string 
}
