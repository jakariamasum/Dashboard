import AllTasks from '@/components/AllTasks/AllTasks'
import Card from '@/components/Card/Card'
import Navbar from '@/components/Navbar/Navbar'
import Options from '@/components/Options/Options'
import SideMenu from '@/components/SideMenu/SideMenu'
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <SideMenu />
      <Navbar />
      <AllTasks />
      <div className='pr-32 py-2  mt-5 grid grid-cols-1 md:grid-col-2 lg:grid-cols-4 gap-[30px] lg:ml-[170px]'>
        <Options text='To-Do-List (24)' />
        <Options text='In Progress (2)' />
        <Options text='Done (4)' />
        <Options text='Revised (0)' />
      </div>
      <div className='pr-32 md:flex bg-[#0D0B21] mt-5 lg:ml-[170px]'>
        <div className='grid grid-cols-1 gap-3 lg:grid-cols-3 md:grid-cols-1'>
          <Card colour='yellow' progress={20} tag='important' text='Create sign up sheet for holiday student/parent conferences.' />
          <Card colour='#5ECFFF' progress={75} tag='vedio' text='Create sparring tutorial video for the weekly class.' />
          <Card colour='#FF4A55' tag='BUGS FIXING' progress={100} text='Action Button needed for Google Maps visits.' />
          <Card colour='#E328AF' progress={35} tag='Instructor Meeting' text='Plan holiday demonstration program. Create outline.' />
          <Card colour='#FF4A55' progress={100} tag='BUG FIXING' text='Payment gateway needs reauthorization.' />
          <Card colour='#38E25D' progress={100} tag='Database' text='Update new instructor photos.' />
          <Card colour='#38E25D' progress={15} tag='Database' text='Determine how many boards need to be ordered for testing and demo.' />
          <Card colour='#E328AF' progress={100} tag='Instructor Meeting' text='Review/correct yellow belt techniques.' />
        </div>
        <div className='ml-5 mt-5'>
          <div className='w-[250px] h-[100px] bg-[#211A75] flex justify-center items-center rounded-xl'>
            <div className='w-[150px] text-[#7879F1] h-[60px] bg-[#15132B] rounded-xl flex justify-center items-center border border-dashed'>
              <p><del>Move-card-here</del></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
