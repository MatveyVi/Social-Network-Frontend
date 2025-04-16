import React, { useState } from 'react'

import { CardHeader, Card as HeroUiCard } from '@heroui/react'
import { useLikePostMutation, useUnlikePostMutation } from '../../app/services/likesApi';
import { useDeletePostMutation, useLazyGetAllPostsQuery, useLazyGetPostByIdQuery } from '../../app/services/postsApi';
import { useDeleteCommentMutation } from '../../app/services/commentsApi';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectCurrent } from '../../features/user/userSlice';
import { User } from '../user';
import { formatToClientDate } from '../../utils/format-to-client-date';

type Props = {
    avatarUrl: string;
    name: string;
    authorId: string;
    content: string;
    commentId?: string;
    likedCount?: number;
    commentsCount?: number;
    createdAt?: Date;
    id?: string;
    cardFor: 'comment' | 'post' | 'current-post'
    likedByUser?: boolean;
}

export const Card: React.FC<Props> = ({
    avatarUrl ='',
    name = '',
    authorId = '',
    content = '',
    commentId = '',
    likedCount = 0,
    commentsCount = 0,
    createdAt,
    id = '',
    cardFor = 'post',
    likedByUser = false,
}) => {
  const [likePost] = useLikePostMutation()
  const [unlikePost] = useUnlikePostMutation()
  const [triggerGetAllPosts] = useLazyGetAllPostsQuery()
  const [triggerGetPostById] = useLazyGetPostByIdQuery()
  const [deletePost, deletePostStatus] = useDeletePostMutation()
  const [deleteComment, deleteCommentStatus] = useDeleteCommentMutation()
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const currentUser = useSelector(selectCurrent)
  return (
    <HeroUiCard className='mb-5'>
      <CardHeader className='justify-between items-center bg-transparent'>
        <Link to={`/users/${authorId}`}>
          <User 
            name={ name}
            className='text-small font-semibold leading-non text-default-600'
            avatarUrl={avatarUrl}
            description={ createdAt && formatToClientDate(createdAt)}
          />
        </Link>
      </CardHeader>
    </HeroUiCard>
  )
}
