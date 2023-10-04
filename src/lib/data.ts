import Carrywood from './public/carrywood.jpeg'
import JobsImage from './public/jobsimage.jpg'
import ContactImage from './public/contact.jpg'

export const data = [
    {
        image: Carrywood,
        href: '/about',
        name: 'About us',
    },
    {
        image: JobsImage,
        href: '/jobs',
        name: 'Jobs',
    },
    {
        image: ContactImage,
        href: '/contact',
        name: 'Contact us',
    }
 ] as const 

 export const JobData = [
    {
        name: '',
        description: '',
        image: '',
        href: '',
        date: '',
        location: ''
    },
    {
        name: '',
        description: '',
        image: '',
        href: '',
        date: '',
        location: ''
    },
    {
        name: '',
        description: '',
        image: '',
        href: '',
        date: '',
        location: ''
    },
    {
        name: '',
        description: '',
        image: '',
        href: '',
        date: '',
        location: ''
    },
    {
        name: '',
        description: '',
        image: '',
        href: '',
        date: '',
        location: ''
    }
 ] as const 