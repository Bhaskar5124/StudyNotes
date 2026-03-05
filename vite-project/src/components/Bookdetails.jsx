import React from 'react'
import { useParams } from 'react-router-dom';
import { Books } from '../utils/data.js';

function Bookdetails() {
    // const navigate = useNavigate();
    const params = useParams();
    console.log("params",params);
    let clickedbook = Books.filter((item)=>item.id==params.id);
    console.log("Clickedbook",clickedbook);
  return (
    <div>
        <h1>BookDetail</h1>
        
        {clickedbook && <div className='bg-white'>
            {clickedbook.map((item)=>(
            <div key={item.id} className='m-10 h-100 w-200 bg-white flex justify-between items-center border border-black text-black'>
                <img className='h-100 w-100' src={item.imageLink}/>
                <div className='h-100 w-100 flex flex-col justify-center items-start'>
                    <h3 className='mx-5 my-2'><b>Title :</b> {item.title}</h3>
                    <h3 className='mx-5 my-2'><b>Author :</b> {item.author}</h3>
                    <h3 className='mx-5 my-2'><b>Country of Origin :</b> {item.country}</h3>
                    <h3 className='mx-5 my-2'><b>Year of Publishing :</b> {item.year}</h3>
                    <h3 className='mx-5 my-2'><b>Language :</b> {item.language}</h3>
                    <h3 className='mx-5 my-2'><b>Pages :</b> {item.pages}</h3>

                </div>

            </div>
            ))}
        </div>}
    </div>
  )
}

export default Bookdetails