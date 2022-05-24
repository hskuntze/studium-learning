import { ContentType } from './ContentType';
import { Course } from './Course';

export type OfferType = {
    id: number;
    edition: string;
    startMoment: string;
    endMoment: string;
    course: Course;
    contents: ContentType[];
}