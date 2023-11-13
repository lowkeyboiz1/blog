import { ArrowDown2 } from 'iconsax-react'

function Header() {
  const listMenu = [
    { title: 'Home' },
    { title: 'Writing Task 1', children: [{ title: '' }] },
    { title: 'Writing Task 2' },
    { title: 'Easy Essays' },
    { title: 'About Me' },
    { title: 'Hall Of Fame' },
    { title: 'Courses' },
  ]

  return (
    <header className=' fixed top-0 right-0 left-0'>
      <div className='ct-containter flex justify-between items-center h-[64px] 2xl:h-[80px]'>
        <div className=''>Tris Ielts</div>
        <div className=''>
          <ul className='flex items-center gap-10'>
            {listMenu.map((i) => (
              <li className='flex gap-2 items-center' key={i.title}>
                <span className=''>{i.title}</span>
                {i.children && (
                  <span className=''>
                    <ArrowDown2 size={16} />
                  </span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
