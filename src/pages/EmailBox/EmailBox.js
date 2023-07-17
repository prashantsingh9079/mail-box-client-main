import React, { useEffect } from 'react'
import EditorComp from '../../components/Editor/EditorComp'
import MailLeftBody from '../../components/MailLeftBody/MailLeftBody'
import MailRightBody from '../../components/MailRightBody/MailRightBody'
import classes from './EmailBox.module.css'
import { useSelector } from 'react-redux'
import { authActions } from '../../store/authSlice'
import { useDispatch } from 'react-redux'
import { fetchMyEmailData } from '../../store/email-actions'
// import bgImg from '../../assets/bg1.webp'
// import bgImg from '../../assets/bg2.jpg'
// import bgImg from '../../assets/bg3.jpg'



const EmailBox = () => {

  const dispatch = useDispatch()

  useEffect(()=>{
    const localData = localStorage.getItem('details')
      const details = JSON.parse(localData)
      let x, y, logged
      if (details) {
        x = details.token
        y = details.email
  
        // logged = true
        dispatch(authActions.login({ token: x, email: y }))
        setTimeout(() => dispatch(fetchMyEmailData(y)), 1000)
      }
  },[])


  const emailList = useSelector((state) => state.emailData)
  return (
    <div className={classes.emailBox}>
      {/* <img className={classes.bgImg} src={bgImg} alt='background' /> */}
      {emailList.isEditing && <EditorComp />}
      <MailLeftBody />
      <MailRightBody />
    </div>
  )
}

export default EmailBox