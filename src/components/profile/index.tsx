import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrent } from '../../features/user/userSlice'
import { Card, CardBody, CardHeader, Image } from '@heroui/react'
import { BASE_URL } from '../../constants'
import { Link } from 'react-router-dom'
import { MdAlternateEmail } from 'react-icons/md'

export const Profile = () => {
    const current = useSelector(selectCurrent)

    if (!current) {
        return null
    }

    const { name, email, avatarUrl, id } = current;

    return (
        <Card className='py-4 w-[302px]'>
            <CardHeader className='pb-0 pt-2 px-1 flex-col items-center'>
                <Image
                    alt='Card profile'
                    className='object-cover rounded-xl'
                    src={`${BASE_URL}${avatarUrl}`}
                    width={250}
                />
            </CardHeader>
            <CardBody className='px-5'>
                <Link to={`/users/${id}`}>
                    <h4 className="font-bold text-large mt-2 mb-1">{name}</h4>
                </Link>
                <p className="text-default-500 flex items-center gap-1.5">
                    <MdAlternateEmail />
                    {email}
                </p>
            </CardBody>
        </Card>
    )
}
