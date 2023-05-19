import Cookies from 'js-cookie'
import React from 'react'
import { useGetSingleContactQuery } from '../../services/contact'
import { useParams } from 'react-router-dom'

const DetailUser = () => {
    const {id} = useParams();
    const token = Cookies.get('token')
    const {data} = useGetSingleContactQuery({id,token})
    console.log(data);
  return (
    <div>
      I'm Detail.
    </div>
  )
}

export default DetailUser
