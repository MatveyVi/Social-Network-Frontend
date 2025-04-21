import { Button, Card, Image, useDisclosure } from '@heroui/react'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { resetUser, selectCurrent } from '../../features/user/userSlice'
import { useGetUserByIdQuery, useLazyCurrentQuery, useLazyGetUserByIdQuery } from '../../app/services/userApi'
import { useFollowUserMutation, useUnfollowUserMutation } from '../../app/services/followApi'
import { GoBack } from '../../components/go-back'
import { BASE_URL } from '../../constants'
import { MdOutlinePersonAddAlt1, MdOutlinePersonAddDisabled } from 'react-icons/md'
import { CiEdit } from 'react-icons/ci'
import { ProfileInfo } from '../../components/profile-info'
import { formatToClientDate } from '../../utils/format-to-client-date'
import { CountInfo } from '../../components/count-info'

export const UserProfile = () => {
  const { id } = useParams<{ id: string }>()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const currentUser = useSelector(selectCurrent)
  const { data } = useGetUserByIdQuery(id ?? '')
  const [followUser] = useFollowUserMutation()
  const [unfollowUser] = useUnfollowUserMutation()
  const [triggerGetUserByIdQuery] = useLazyGetUserByIdQuery()
  const [triggerCurrentQuery] = useLazyCurrentQuery()

  const dispatch = useDispatch()

  useEffect(() => () => {
    dispatch(resetUser())
  }, [])

  if (!data) {
    return null
  }
  return (
    <>
      <GoBack />
      <div className="flex items-stretch gap-4">
        <Card className='flex flex-col items-center text-center space-y-4 p-5 flex-2'>
          <Image
            src={`${BASE_URL}${data?.avatarUrl}`}
            alt={data?.name}
            width={200}
            height={200}
            className='border-4 border-white'
          />
          <div className="flex flex-col text-2xl font-bold gap-4 items-center">
            {data.name}
            {
              currentUser?.id !== id ? (
                <Button
                  color={data.isFollowing ? 'default' : 'primary'}
                  variant='flat'
                  className='gap-2'
                  endContent={
                    data.isFollowing ? (
                      <MdOutlinePersonAddDisabled />
                    ) : (
                      <MdOutlinePersonAddAlt1 />
                    )
                  }
                >
                  {data.isFollowing ? 'Отписаться' : 'Подписаться'}
                </Button>
              ) : (
                <Button endContent={<CiEdit />}>
                  Редактировать
                </Button>
              )
            }
          </div>
        </Card>
        <Card className='flex flex-col space-y-4 p-5 flex-1'>
            <ProfileInfo title='Почта' info={data.email}/>
            <ProfileInfo title='Местоположение' info={data.location}/>
            <ProfileInfo title='Дата рождения' info={formatToClientDate(data.dateOfBirth)}/>
            <ProfileInfo title='Обо мне' info={data.bio}/>

            <div className="flex gap-2">
              <CountInfo count={data.followers.length} title='Подписчики' />
              <CountInfo count={data.following.length} title='Подпсики' />
            </div>
        </Card>
      </div>
    </>
  )
}
