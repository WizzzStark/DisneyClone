import {FaPlay, FaPlus} from 'react-icons/fa'
import {MdPeopleAlt} from 'react-icons/md'

import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import db from "../firebase"
import { doc, getDoc } from 'firebase/firestore'


const Details = () => {

    const { id } = useParams()
    const [detailData, setDetailData] = useState({})

    useEffect(() => {
        const fetchData = async() => {
            const docRef = doc(db, 'movies', id)
            const docSnap = await getDoc(docRef)
            if (docSnap.exists) {
                setDetailData(docSnap.data())
                console.log('Document data:', docSnap.data())
            } else {
                console.log('No such document!')
            }
        }
        fetchData()
    }, [id])


    return (
        <div className="relative min-h-[calc(100vh-250px)] overflow-hidden block top-[72px] p-5">
            <div className="left-0 opacity-80 fixed r-0 top-0 z-[-1]">
                <img 
                    src={detailData.backgroundImg} 
                    alt={detailData.title} 
                    className="w-[100vw] h-[100vh] object-cover"
                />
                <div className="blur m-[-10px]"></div>
            </div>
            <div className="flex items-end my-auto h-[30vh] min-h-[170px] ml-10 w-full">
                <img 
                    src={detailData.titleImg} 
                    alt="" 
                    className="max-w-[600px] min-w-[200px] w-[25vw]"/>
            </div>
            <div className=" flex items-center flex-nowrap mx-[24px] min-h-[56px]">
                <button className="text-[15px] mx-5 my-[15px] px-[30px] h-[56px] rounded-md items-center flex justify-center text-center bg-white text-black font-semibold gap-3 tracking-wide hover:bg-gray-400 transition-all duration-300">
                    <FaPlay className='text-[20px]'/>
                    VER
                </button>
                <div className='flex justify-center items-center bg-black rounded-full p-3 transition-all duration-200 border-[2px] hover:bg-white hover:text-black'>
                    <FaPlus className='text-[20px]  cursor-pointer' />
                </div>
                <div className='flex justify-center items-center bg-black rounded-full p-3 ml-4 transition-all duration-200 border-[2px] hover:bg-white hover:text-black'>
                    <MdPeopleAlt className='text-[20px]  cursor-pointer' />
                </div>
            </div>
                <div className="flex flex-col mt-5 ml-10">
                    <h2 className="text-[20px] font-bold">{detailData.subTitle}</h2>
                    <p className="text-[20px] mt-2 font-normal max-w-[700px]">{detailData.description}</p>
                </div>
        </div>
    )
}

export default Details