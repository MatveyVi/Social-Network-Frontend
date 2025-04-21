import React from 'react'
import { useSelector } from 'react-redux'
import { selectCurrent } from '../../features/user/userSlice'
import { Link } from 'react-router-dom'
import { Card, CardBody } from '@heroui/react'
import { User } from '../../components/user'

export const Followers = () => {
  const currentUser = useSelector(selectCurrent)

  if (!currentUser) {
    return null
  }



  return currentUser.followers.length > 0 ? (
    <div className="gap-5 flex flex-col">
      {
        currentUser.followers.map(user => (
          <Link to={`/users/${user.follower.id}`} key={user.follower.id}>
            <Card>
              <CardBody className='block'>
                <User
                  name={user.follower.name ?? ''}
                  avatarUrl={user.follower.avatarUrl ?? ''}
                  description={user.follower.email ?? ''}
                />
              </CardBody>
            </Card>
          </Link>
        ))
      }
    </div>
  ) : (
    <h1>У вас нет подписчиков</h1>
  )
}
