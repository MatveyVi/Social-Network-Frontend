import { Card, CardBody, Tab, Tabs } from '@heroui/react'
import React, { useState } from 'react'

export const Auth = () => {
  const [selected, setSelected] = useState('login')
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="flex flex-col">
        <Card className='max-w-full w-[340px] h-[450px]'>
          <CardBody className='overflow-hidden'>
            <Tabs
              variant={'bordered'}
              fullWidth
              size='md'
              selectedKey={selected}
              onSelectionChange={(key) => setSelected(key as string)}
            >
              <Tab key='login' title='Вход'>
                Вход
              </Tab>
              <Tab key='sign-up' title='Регистрация'>
                Регистрация
              </Tab>
            </Tabs>
          </CardBody>
        </Card>
      </div>
    </div>
  )
}
