import { CoordinatesType } from '../../../types/offer.js';
import {IsArray, IsObject, IsString, ArrayMinSize, ArrayMaxSize, IsEnum, IsBoolean, IsDateString, IsInt, Max, MaxLength, Min, MinLength} from 'class-validator';
import { Benefits, CitiesNames, RoomType } from '../../../const.js';


export default class UpdateOfferDto {
  @MinLength(10, {message: 'Minimum title length must be 10'})
  @MaxLength(100, {message: 'Maximum title length must be 100'})
  public title!: string;

  @MinLength(20, {message: 'Minimum description length must be 20'})
  @MaxLength(1024, {message: 'Maximum description length must be 1000'})
  public description!: string;

  @IsEnum(CitiesNames, {message: 'city must be one of six cities'})
  public city!: CitiesNames;

  @IsEnum(RoomType, {message: 'type must be one of list'})
  public type!: RoomType;

  @IsString({message: 'preview photo is required'})
  public preview!: string;

  @IsArray({ message: 'photos must be an array' })
  @ArrayMinSize(6, { message: 'photos must be 6' })
  @ArrayMaxSize(6, { message: 'photos must be 6' })
  public photos!: string[];

  @IsArray({message: 'benefits must be an array'})
  @IsEnum(Benefits, { each: true, message: 'benefits must be one of list' })
  @ArrayMinSize(1, { message: 'must be checked minimum 1 benefit element' })
  public benefits!: Benefits[];

  @IsBoolean({message: 'isPremium must be an boolean'})
  public isPremium!: boolean;

  @IsInt({ message: 'Room count must be an integer' })
  @Min(1, {message: 'Minimum roomCount is 1'})
  @Max(8, {message: 'Maximum roomCount is 8'})
  public roomCount!: number;

  @IsInt({ message: 'Guest count must be an integer' })
  @Min(1, {message: 'Minimum guestCount is 1'})
  @Max(10, {message: 'Maximum guestCount is 10'})
  public guestCount!: number;

  @IsDateString({}, {message: 'postDate must be valid ISO date'})
  public date!: Date;

  @IsInt({message: 'Price must be an integer'})
  @Min(100, {message: 'Minimum price is 100'})
  @Max(200000, {message: 'Maximum price is 100000'})
  public price!: number;

  @IsObject({message: 'coordinates must be valid an object'})
  public coordinates!: CoordinatesType;
}
