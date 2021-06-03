import React from 'react'
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';
import { auth } from '../firebase'

const Chats = () => {
  const history = useHistory();
  const handleLogout = async () => {
    await auth.signOut()
    history.push('/');
  }
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">
          UniChat
        </div>
        <div onClick={ handleLogout } className="logout-tab">
          Logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px)"
        projectId="1152e946-387f-4e64-add3-ae50964ae74a"
        userName="."
        userSecret="."
      />
    </div>
  )
}

export default Chats

