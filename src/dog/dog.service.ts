import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Dog } from './interface/dog.interface';
import { CreateDogDto } from './dto/create-dog.dto';


@Injectable()
export class DogService {

    constructor(@InjectModel('Dog') private dogModel: Model<Dog>){
        
    }

    async createDog(createDogDto: CreateDogDto): Promise<Dog> {
        const createdDog = new this.dogModel(createDogDto);
        return createdDog.save();
    }

    async getDogs(): Promise<Dog[]>{
        return await this.dogModel.find().exec();
    }

    async getDog(id): Promise<Dog>{
        return await this.dogModel.findOne({_id: id});
    }

 }