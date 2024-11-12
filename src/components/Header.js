import React from 'react'

const Header = () => {
  return (
    <header className='h-16 shadow-md'>
        <div className='h-full container mx-auto flex items-center px-4'>
            <div className=''>
                Logo
            </div>
            <div>
                search box
            </div>
            <div>
                user icons and card
            </div>
        </div>
    </header>
  )
}

export default Header