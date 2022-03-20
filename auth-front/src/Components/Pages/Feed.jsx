import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from "react-redux"
import { get_gigs_forclient } from '../../redux/actions/freelancerActions';
import SearchBar from '../Navigation bar/SearchBar';
import GigCardforClient from './GigCardforClient';




function Feed() {
  // const dispatch = useDispatch()
  // const user = useSelector(state=>state.authReducer.user)
  // useEffect(()=>{dispatch(getme())},[user])
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(get_gigs_forclient())
  }, [])
  const gigs = useSelector((state) => state.GigReducer.gigs)
  return (
    <>
      <div style={{ paddingTop: "70px", paddingLeft: "390px", backgroundColor: "#f0f0f0", paddingBottom: "20px" }}>
        {/* <SearchBar gigs={gigs}></SearchBar> */}
      </div>
      <div style={{ backgroundColor: "#010127", paddingTop: '100px', display: 'flex', justifyContent: "space-around", flexWrap: "wrap" }}>
        {gigs.map((gig) => (<GigCardforClient gig={gig} key={gig._id}></GigCardforClient>))}
      </div>
    </>
  )
}
export default Feed


