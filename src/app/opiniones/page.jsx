import TopsPages from '../components/TopsPages'
import ReseñasPages from '../components/ReseñasPages'
export default function Page() {
  return (
    <main>
      <h1 className="text-3xl font-bold text-center m-1" >Opiniones</h1>
      <div className='lg:grid grid-cols-2 gap-2 max-w-full'>
          <TopsPages/>
          <ReseñasPages/>
      </div>
    </main>
  )
}
